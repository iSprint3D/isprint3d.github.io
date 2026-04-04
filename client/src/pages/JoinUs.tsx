import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const interestTypes = [
  { value: "freelancer", label: "Freelancer por projeto" },
  { value: "partner", label: "Parceria técnica" },
  { value: "associate", label: "Associado recorrente" },
  { value: "intern", label: "Estágio / aprendizado" },
] as const;

const opportunityTracks = [
  {
    icon: BriefcaseBusiness,
    title: "Projetos sob demanda",
    description:
      "Para profissionais que querem colaborar em demandas pontuais de modelagem, detalhamento, prototipagem e visualização técnica.",
  },
  {
    icon: Handshake,
    title: "Parcerias e associação",
    description:
      "Para quem já atua na área e quer construir uma relação mais próxima, com colaboração contínua e troca de experiência.",
  },
  {
    icon: GraduationCap,
    title: "Desenvolvimento de talentos",
    description:
      "Para gente com vontade de aprender, crescer e ganhar repertório em projetos reais com base técnica e estética forte.",
  },
] as const;

const profileTags = [
  "CAD / Modelagem 3D",
  "Designer de produto",
  "Impressão 3D",
  "Detalhamento técnico",
  "Projetos mecânicos",
  "Render / apresentação",
  "Atendimento técnico",
  "Marketing",
  "Mídias sociais",
] as const;

export default function JoinUs() {
  const { trackPageView, trackCTAClick } = useAnalytics();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "",
    interestType: "",
    portfolio: "",
    message: "",
  });

  useEffect(() => {
    trackPageView("join_us");
  }, [trackPageView]);

  const selectedInterestLabel = useMemo(
    () =>
      interestTypes.find((item) => item.value === formData.interestType)?.label ??
      "Interesse em fazer parte da iSprint",
    [formData.interestType],
  );

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEmailInterest = () => {
    if (!formData.name || !formData.email || !formData.interestType) {
      toast.error("Preencha nome, email e tipo de interesse para continuar.");
      return;
    }

    const subject = `Interesse em fazer parte da iSprint - ${selectedInterestLabel} - ${formData.name}`;
    const body = [
      "Olá, equipe iSprint.",
      "",
      "Quero demonstrar meu interesse em fazer parte da iSprint.",
      "",
      `Nome: ${formData.name}`,
      `Email: ${formData.email}`,
      `WhatsApp: ${formData.phone || "-"}`,
      `Cidade/Estado: ${formData.city || "-"}`,
      `Área de atuação: ${formData.role || "-"}`,
      `Tipo de interesse: ${selectedInterestLabel}`,
      `Portfólio / LinkedIn: ${formData.portfolio || "-"}`,
      "",
      "Mensagem:",
      formData.message || "-",
    ].join("\n");

    trackCTAClick("join_us_email_interest", "join_us_page");
    window.location.href = `mailto:isprintstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <section className="relative overflow-hidden bg-[#2722f8] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[-18%] h-72 w-72 rounded-full bg-white/12 blur-3xl" />
          <div className="absolute bottom-[-18%] right-[-8%] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="container relative z-10 py-8">
          <nav className="mb-16 flex items-center justify-between">
            <Link href="/">
              <a className="text-3xl font-semibold tracking-tight text-white">iSprint</a>
            </Link>

            <Link href="/">
              <a className="inline-flex h-10 items-center justify-center rounded-md border border-white/35 bg-white/10 px-4 text-sm font-medium text-white transition hover:bg-white/18">
                Voltar ao site
              </a>
            </Link>
          </nav>

          <div className="grid gap-10 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-sm font-semibold text-white">
                <Sparkles className="h-4 w-4" />
                Faça parte da iSprint
              </div>
              <h1 className="mb-6 text-[2.9rem] font-semibold leading-[0.95] tracking-tight sm:text-[4.2rem]">
                Quer construir projetos com a iSprint?
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/84">
                Estamos abertos a talentos, parceiros e profissionais que queiram colaborar em
                projetos de modelagem, digitalização, prototipagem e desenvolvimento técnico.
              </p>
            </div>

            <div className="rounded-3xl border border-white/18 bg-white/10 p-6 backdrop-blur-md">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
                Perfis que fazem sentido aqui
              </p>
              <div className="flex flex-wrap gap-3">
                {profileTags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/22 bg-white/10 px-4 py-2 text-sm text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <h2 className="mb-4">Como você pode entrar</h2>
            <p className="text-lg text-muted-foreground">
              A ideia aqui não é limitar a uma vaga tradicional. Queremos abrir portas para
              colaboração real, com espaço para diferentes formatos de atuação.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {opportunityTracks.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2722f8]/10 text-[#2722f8]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-foreground">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-secondary/5 to-white py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <div className="mb-4 inline-block rounded-full bg-[#2722f8] px-4 py-2">
                <span className="text-sm font-semibold text-white">TALENTOS E PARCERIAS</span>
              </div>
              <h2 className="mb-5">Conta pra gente como você quer se conectar</h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Você pode mandar seu interesse por email ou chamar no WhatsApp para conversar de
                forma mais direta. Se fizer sentido, a gente avança para um papo mais objetivo
                sobre colaboração.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/5583991854711?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20fazer%20parte%20da%20iSprint."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackCTAClick("join_us_whatsapp", "join_us_page")}
                  className="flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/12 text-green-600">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Conversar no WhatsApp</p>
                      <p className="text-sm text-muted-foreground">
                        Mais direto para primeiras conversas.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </a>

                <a
                  href="mailto:isprintstudio@gmail.com?subject=Quero%20fazer%20parte%20da%20iSprint"
                  onClick={() => trackCTAClick("join_us_direct_email", "join_us_page")}
                  className="flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Enviar por email</p>
                      <p className="text-sm text-muted-foreground">
                        Bom para portfólio, links e apresentação inicial.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </a>

                <div className="rounded-2xl border border-border bg-white p-5">
                  <div className="mb-2 flex items-center gap-2 text-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="font-semibold">Base em João Pessoa, atuação flexível</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    O formato pode variar entre colaboração remota, apoio em projetos específicos e
                    relações mais próximas, dependendo do perfil e do momento da empresa.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-8">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-semibold text-foreground">Enviar interesse</h3>
                <p className="text-muted-foreground">
                  Este formulário monta um email com suas informações para acelerar o primeiro
                  contato.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                />
                <Input
                  placeholder="WhatsApp"
                  value={formData.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                />
                <Input
                  placeholder="Cidade / Estado"
                  value={formData.city}
                  onChange={(event) => handleChange("city", event.target.value)}
                />
                <Input
                  className="md:col-span-2"
                  placeholder="Área de atuação"
                  value={formData.role}
                  onChange={(event) => handleChange("role", event.target.value)}
                />

                <div className="md:col-span-2">
                  <Select
                    value={formData.interestType}
                    onValueChange={(value) => handleChange("interestType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de interesse" />
                    </SelectTrigger>
                    <SelectContent>
                      {interestTypes.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Input
                  className="md:col-span-2"
                  placeholder="Portfólio, LinkedIn ou site"
                  value={formData.portfolio}
                  onChange={(event) => handleChange("portfolio", event.target.value)}
                />

                <div className="md:col-span-2">
                  <Textarea
                    placeholder="Conta um pouco sobre seu perfil, experiência e como você imagina colaborar com a iSprint."
                    rows={6}
                    value={formData.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="bg-[#2722f8] text-white hover:bg-[#2722f8]/92"
                  onClick={handleEmailInterest}
                >
                  Enviar por email <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <a
                  href="https://wa.me/5583991854711?text=Ol%C3%A1%2C%20quero%20fazer%20parte%20da%20iSprint."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackCTAClick("join_us_form_whatsapp", "join_us_page")}
                  className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
