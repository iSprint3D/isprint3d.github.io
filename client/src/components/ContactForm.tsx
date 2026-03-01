import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Loader2, CheckCircle2, Upload, X, FileIcon } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Futurism Organic
 * - Form follows the design system with teal accents
 * - Smooth transitions and validation feedback
 * - Clear visual hierarchy and spacing
 * - File upload with drag-and-drop support
 */

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
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
];

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  company: z.string().min(2, "Nome da empresa obrigatório"),
  serviceType: z.enum(["scan3d", "parametric", "prototyping", "other"]).refine(
    (val) => val !== undefined,
    "Selecione um tipo de serviço"
  ),
  projectDescription: z
    .string()
    .min(20, "Descrição deve ter pelo menos 20 caracteres")
    .max(1000, "Descrição não pode exceder 1000 caracteres"),
  budget: z.enum(["5k-10k", "10k-25k", "25k-50k", "50k+"]).refine(
    (val) => val !== undefined,
    "Selecione uma faixa de orçamento"
  ),
  timeline: z.enum(["urgent", "1-3months", "3-6months", "flexible"]).refine(
    (val) => val !== undefined,
    "Selecione um prazo"
  ),
  projectFile: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      "Arquivo deve ter no máximo 10MB"
    )
    .refine(
      (file) => !file || ALLOWED_FILE_TYPES.includes(file.type),
      "Tipo de arquivo não permitido. Use PDF, DOC, DOCX, PNG, JPG, ZIP ou STEP"
    ),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "Você deve concordar com os termos",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      form.setValue("projectFile", file);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setUploadedFile(file);
      form.setValue("projectFile", file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    form.setValue("projectFile", undefined);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      // Simular envio para backend
      // Em produção, isso seria uma chamada API real com FormData
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Log dos dados (em produção, seria enviado para um servidor)
      console.log("Formulário enviado:", {
        ...values,
        fileName: uploadedFile?.name,
        fileSize: uploadedFile?.size,
      });

      // Mostrar sucesso
      setSubmitSuccess(true);
      toast.success("Orçamento solicitado com sucesso!", {
        description: "Entraremos em contato em breve.",
      });

      // Resetar formulário após 2 segundos
      setTimeout(() => {
        form.reset();
        setSubmitSuccess(false);
        setUploadedFile(null);
      }, 2000);
    } catch (error) {
      toast.error("Erro ao enviar formulário", {
        description: "Tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 animate-pulse">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Obrigado pelo seu interesse!
        </h3>
        <p className="text-muted-foreground max-w-md">
          Recebemos sua solicitação de orçamento e arquivo de projeto. Nossa equipe analisará seu
          projeto e entrará em contato em breve com uma proposta personalizada.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Linha 1: Nome e Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">
                  Nome Completo
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="João Silva"
                    className="bg-white border-border focus:ring-accent"
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
                <FormLabel className="text-foreground font-semibold">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-white border-border focus:ring-accent"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Linha 2: Telefone e Empresa */}
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">
                  Telefone
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="bg-white border-border focus:ring-accent"
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
                <FormLabel className="text-foreground font-semibold">
                  Empresa
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Sua Empresa Ltda."
                    className="bg-white border-border focus:ring-accent"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Linha 3: Tipo de Serviço */}
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-semibold">
                Tipo de Serviço
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white border-border focus:ring-accent">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="scan3d">Scan 3D</SelectItem>
                  <SelectItem value="parametric">Modelagem Paramétrica</SelectItem>
                  <SelectItem value="prototyping">Prototipagem Técnica</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Linha 4: Descrição do Projeto */}
        <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-semibold">
                Descrição do Projeto
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva seu projeto, objetivos e requisitos técnicos..."
                  className="bg-white border-border focus:ring-accent min-h-32 resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs text-muted-foreground">
                Mínimo 20 caracteres, máximo 1000
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Linha 5: Upload de Arquivo */}
        <FormField
          control={form.control}
          name="projectFile"
          render={() => (
            <FormItem>
              <FormLabel className="text-foreground font-semibold">
                Arquivo de Especificações (Opcional)
              </FormLabel>
              <FormControl>
                <div
                  className={`relative border-2 border-dashed rounded-xl p-8 transition-all ${
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
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.rar,.step,.stp"
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center cursor-pointer"
                  >
                    <Upload className="w-8 h-8 text-accent mb-3" />
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Arraste seu arquivo ou clique para selecionar
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PDF, DOC, DOCX, PNG, JPG, ZIP, STEP (máx. 10MB)
                    </p>
                  </label>
                </div>
              </FormControl>
              {uploadedFile && (
                <div className="mt-4 p-4 bg-accent/5 border border-accent/20 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileIcon className="w-5 h-5 text-accent" />
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
                    className="p-1 hover:bg-accent/10 rounded transition"
                  >
                    <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Linha 6: Orçamento e Prazo */}
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">
                  Faixa de Orçamento
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white border-border focus:ring-accent">
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">
                  Prazo
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white border-border focus:ring-accent">
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
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Linha 7: Termos */}
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
                  className="w-4 h-4 rounded border-border cursor-pointer"
                />
              </FormControl>
              <FormLabel className="text-sm text-muted-foreground cursor-pointer">
                Concordo em receber comunicações sobre meu projeto e aceito a política de privacidade
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar Orçamento"
          )}
        </Button>
      </form>
    </Form>
  );
}
