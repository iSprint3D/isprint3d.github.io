import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, FileIcon, Loader2, Sparkles, Upload, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const SUCCESS_STATE_DURATION_MS = 4200;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword",
  "image/png",
  "image/jpeg",
  "application/zip",
  "application/x-rar-compressed",
  "model/step",
  "application/stp",
  "application/octet-stream",
];

const SERVICE_TYPE_LABELS = {
  scan3d: "Scan 3D",
  parametric: "Modelagem paramétrica",
  prototyping: "Prototipagem técnica",
  other: "Outro",
} as const;

const BUDGET_LABELS = {
  "5k-10k": "R$ 5.000 - R$ 10.000",
  "10k-25k": "R$ 10.000 - R$ 25.000",
  "25k-50k": "R$ 25.000 - R$ 50.000",
  "50k+": "R$ 50.000+",
} as const;

const TIMELINE_LABELS = {
  urgent: "Urgente (até 2 semanas)",
  "1-3months": "1-3 meses",
  "3-6months": "3-6 meses",
  flexible: "Flexível",
} as const;

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  company: z.string().min(2, "Nome da empresa é obrigatório"),
  serviceType: z.enum(["scan3d", "parametric", "prototyping", "other"], {
    message: "Selecione um tipo de serviço",
  }),
  projectDescription: z
    .string()
    .min(20, "Descrição deve ter pelo menos 20 caracteres")
    .max(1000, "Descrição não pode exceder 1000 caracteres"),
  budget: z.enum(["5k-10k", "10k-25k", "25k-50k", "50k+"], {
    message: "Selecione uma faixa de orçamento",
  }),
  timeline: z.enum(["urgent", "1-3months", "3-6months", "flexible"], {
    message: "Selecione um prazo",
  }),
  projectFile: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, "Arquivo deve ter no máximo 10MB")
    .refine(
      (file) => !file || ALLOWED_FILE_TYPES.includes(file.type),
      "Tipo de arquivo não permitido. Use PDF, DOC, DOCX, PNG, JPG, ZIP ou STEP",
    ),
  agreeTerms: z.boolean().refine((value) => value === true, {
    message: "Você deve concordar com os termos",
  }),
});

type FormValues = z.infer<typeof formSchema>;

function getEmailJsErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  if (typeof error === "object" && error !== null) {
    const maybeText = "text" in error ? error.text : undefined;
    const maybeStatus = "status" in error ? error.status : undefined;

    if (typeof maybeText === "string" && maybeText.trim().length > 0) {
      return typeof maybeStatus === "number"
        ? `EmailJS (${maybeStatus}): ${maybeText}`
        : `EmailJS: ${maybeText}`;
    }
  }

  return "Falha ao enviar formulário.";
}

function getEmailJsConfig() {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (!publicKey || !serviceId || !templateId) {
    throw new Error(
      "EmailJS não está configurado. Defina VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID e VITE_EMAILJS_TEMPLATE_ID.",
    );
  }

  return { publicKey, serviceId, templateId };
}

export default function ContactForm() {
  const { trackFormSubmission } = useAnalytics();
  const formRef = useRef<HTMLFormElement | null>(null);
  const successTimeoutRef = useRef<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceType: undefined,
      projectDescription: "",
      budget: undefined,
      timeline: undefined,
      projectFile: undefined,
      agreeTerms: false,
    },
  });

  const watchedServiceType = form.watch("serviceType");
  const watchedBudget = form.watch("budget");
  const watchedTimeline = form.watch("timeline");

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        window.clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadedFile(file);
    form.setValue("projectFile", file, { shouldValidate: true });
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);

    const file = event.dataTransfer.files?.[0];
    if (!file) return;

    setUploadedFile(file);
    form.setValue("projectFile", file, { shouldValidate: true });
  };

  const removeFile = () => {
    setUploadedFile(null);
    form.setValue("projectFile", undefined, { shouldValidate: true });

    const fileInput = document.getElementById("file-upload") as HTMLInputElement | null;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const index = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Math.round((bytes / Math.pow(k, index)) * 100) / 100} ${sizes[index]}`;
  };

  const resetFormState = () => {
    form.reset();
    setSubmitSuccess(false);
    setUploadedFile(null);

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  async function onSubmit() {
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      const { publicKey, serviceId, templateId } = getEmailJsConfig();

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      trackFormSubmission("contact_form", true);
      setSubmitSuccess(true);
      toast.success("Orçamento solicitado com sucesso", {
        description: "Recebemos seus dados e enviaremos uma resposta por email.",
      });

      if (successTimeoutRef.current) {
        window.clearTimeout(successTimeoutRef.current);
      }

      successTimeoutRef.current = window.setTimeout(() => {
        resetFormState();
      }, SUCCESS_STATE_DURATION_MS);
    } catch (error) {
      trackFormSubmission("contact_form", false);
      const message = getEmailJsErrorMessage(error);

      console.error("EmailJS form submission failed", error);

      toast.error("Erro ao enviar formulário", {
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <AnimatePresence mode="wait">
        {submitSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-white to-accent/5 px-6 py-12 text-center shadow-[0_24px_80px_rgba(39,34,248,0.12)]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-accent/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.45 }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/80 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Projeto enviado com sucesso
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">Obrigado pelo seu interesse</h3>
              <p className="mx-auto max-w-md text-sm leading-7 text-muted-foreground md:text-base">
                Recebemos sua solicitação de orçamento. Nossa equipe vai analisar o material e
                responder no email informado.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
              className="mx-auto mt-8 max-w-sm"
            >
              <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span>Voltando ao formulário</span>
                <span>{(SUCCESS_STATE_DURATION_MS / 1000).toFixed(1)}s</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-accent/10">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SUCCESS_STATE_DURATION_MS / 1000, ease: "linear" }}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-6"
          >
            <input
              type="hidden"
              name="service_type_label"
              value={SERVICE_TYPE_LABELS[watchedServiceType ?? "other"]}
            />
            <input
              type="hidden"
              name="budget_label"
              value={BUDGET_LABELS[watchedBudget ?? "5k-10k"]}
            />
            <input
              type="hidden"
              name="timeline_label"
              value={TIMELINE_LABELS[watchedTimeline ?? "flexible"]}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">Nome completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="João Silva"
                        className="border-border bg-white focus:ring-accent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        className="border-border bg-white focus:ring-accent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">Telefone</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="(83) 99999-9999"
                        className="border-border bg-white focus:ring-accent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">Empresa</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Sua empresa"
                        className="border-border bg-white focus:ring-accent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-foreground">Tipo de serviço</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-border bg-white focus:ring-accent">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="scan3d">Scan 3D</SelectItem>
                      <SelectItem value="parametric">Modelagem paramétrica</SelectItem>
                      <SelectItem value="prototyping">Prototipagem técnica</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="serviceType" value={field.value ?? ""} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-foreground">Descrição do projeto</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva seu projeto, objetivos e requisitos técnicos..."
                      className="min-h-32 resize-none border-border bg-white focus:ring-accent"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-muted-foreground">
                    Mínimo de 20 e máximo de 1000 caracteres.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectFile"
              render={() => (
                <FormItem>
                  <FormLabel className="font-semibold text-foreground">
                    Arquivo de especificações (opcional)
                  </FormLabel>
                  <FormControl>
                    <div
                      className={`relative rounded-xl border-2 border-dashed p-8 transition-all ${
                        dragActive
                          ? "border-accent bg-accent/5"
                          : "border-border bg-white/50 hover:bg-white/80"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        id="file-upload"
                        name="projectFile"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.rar,.step,.stp"
                        className="hidden"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex cursor-pointer flex-col items-center justify-center"
                      >
                        <Upload className="mb-3 h-8 w-8 text-accent" />
                        <p className="mb-1 text-sm font-semibold text-foreground">
                          Arraste seu arquivo ou clique para selecionar
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF, DOC, DOCX, PNG, JPG, ZIP, STEP ou STP, até 10MB
                        </p>
                      </label>
                    </div>
                  </FormControl>
                  {uploadedFile && (
                    <div className="mt-4 flex items-center justify-between rounded-lg border border-accent/20 bg-accent/5 p-4">
                      <div className="flex items-center gap-3">
                        <FileIcon className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {uploadedFile.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatFileSize(uploadedFile.size)}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="rounded p-1 transition hover:bg-accent/10"
                      >
                        <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                      </button>
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">
                      Faixa de orçamento
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-border bg-white focus:ring-accent">
                          <SelectValue placeholder="Selecione uma faixa" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="5k-10k">R$ 5.000 - R$ 10.000</SelectItem>
                        <SelectItem value="10k-25k">R$ 10.000 - R$ 25.000</SelectItem>
                        <SelectItem value="25k-50k">R$ 25.000 - R$ 50.000</SelectItem>
                        <SelectItem value="50k+">R$ 50.000+</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="budget" value={field.value ?? ""} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">Prazo</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-border bg-white focus:ring-accent">
                          <SelectValue placeholder="Selecione um prazo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="urgent">Urgente (até 2 semanas)</SelectItem>
                        <SelectItem value="1-3months">1-3 meses</SelectItem>
                        <SelectItem value="3-6months">3-6 meses</SelectItem>
                        <SelectItem value="flexible">Flexível</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="timeline" value={field.value ?? ""} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="agreeTerms"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="h-4 w-4 cursor-pointer rounded border-border"
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer text-sm text-muted-foreground">
                    Concordo em receber comunicações sobre meu projeto e aceito a política de
                    privacidade.
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Solicitar orçamento"
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </Form>
  );
}
