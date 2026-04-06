import ContactForm from "@/components/ContactForm";
import { FadeInUp, ScaleIn, SlideInLeft } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { motion } from "framer-motion";
import { ArrowRight, Box, CheckCircle2, Layers3, Ruler, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const heroImage =
  "https://damassets.autodesk.net/content/dam/autodesk/draftr/23906/cad-for-machine-design-landing-intro-panel-1172x660-2.jpg";
const heroBlueprintImage = "/assets/mechanical-structural-blueprint.avif";

const heroMetrics = [
  {
    value: "Peças e conjuntos",
    label: "desenvolvimento de componentes, mecanismos, suportes, dispositivos e estruturas",
  },
  {
    value: "CAD + documentação",
    label: "modelagem, detalhamento e organização técnica para seguir para fabricação",
  },
  {
    value: "Projeto orientado ao uso",
    label: "forma, montagem, resistência e processo pensados como um sistema único",
  },
] as const;

const scopeAreas = [
  {
    title: "Desenvolvimento de peças e subconjuntos",
    description:
      "Projetamos componentes funcionais com leitura clara de montagem, encaixe, fabricação e manutenção.",
  },
  {
    title: "Estruturas e suportes técnicos",
    description:
      "Criamos bases, estruturas metálicas, suportes e dispositivos pensados para estabilidade, operação e durabilidade.",
  },
  {
    title: "Ajustes para fabricação real",
    description:
      "Organizamos o projeto para corte, dobra, solda, usinagem, impressão 3D ou processos híbridos de produção.",
  },
  {
    title: "Documentação e comunicação do projeto",
    description:
      "Entregamos vistas, explodidos, folhas técnicas e material visual para alinhar equipe, cliente e fabricação.",
  },
] as const;

const workflowSteps = [
  {
    step: "01",
    title: "Escopo e requisitos",
    description:
      "Entendemos o contexto de uso, esforços, limitações de fabricação, espaço disponível e objetivo do sistema.",
  },
  {
    step: "02",
    title: "Arquitetura e conceito",
    description:
      "Organizamos a solução em peças, subconjuntos, travamentos, apoios e relações geométricas coerentes.",
  },
  {
    step: "03",
    title: "Modelagem e validação",
    description:
      "Desenvolvemos o modelo 3D com foco em montagem, interferências, proporção, operação e manutenção.",
  },
  {
    step: "04",
    title: "Detalhamento e entrega",
    description:
      "Preparamos o material técnico para fabricação, revisão interna, apresentação do projeto ou próximos ciclos.",
  },
] as const;

const deliverables = [
  {
    title: "Modelos CAD e conjuntos estruturados",
    description:
      "Arquivos organizados para revisão e evolução do projeto, com leitura clara das relações entre componentes.",
    icon: "cad",
    items: [
      "Peças e conjuntos modelados em 3D",
      "Organização de subconjuntos e montagem",
      "Base técnica pronta para revisões",
    ],
  },
  {
    title: "Detalhamento técnico para fabricar",
    description:
      "Documentação objetiva para aproximar o projeto da produção sem perder intenção de engenharia.",
    icon: "detail",
    items: [
      "Vistas, cotas e folhas técnicas",
      "Explodidos e lógica de montagem",
      "Apoio para corte, dobra, solda e usinagem",
    ],
  },
  {
    title: "Suporte à decisão e comunicação",
    description:
      "Material que ajuda a explicar o sistema, defender escolhas e alinhar próximos passos com a equipe.",
    icon: "system",
    items: [
      "Renderizações ou vistas de apresentação",
      "Leitura visual do funcionamento",
      "Mais clareza entre projeto e cliente",
    ],
  },
] as const;

const relatedCases = [
  {
    href: "/portfolio/carrinho-bbq-rebocavel",
    title: "Carrinho BBQ rebocável",
    description: "Projeto com estrutura, operação, montagem e presença visual do produto.",
    image: "/assets/portfolio/carrinho-bbq.png",
  },
  {
    href: "/portfolio/estacao-gym-funcional",
    title: "Estação gym funcional",
    description: "Estrutura especial com leitura de porte, estabilidade e fabricação.",
    image: "/assets/portfolio/gym-cinza.png",
  },
  {
    href: "/portfolio/vistas-explodidas-detalhamento",
    title: "Vistas explodidas e detalhamento",
    description: "Documentação visual para comunicar montagem, subconjuntos e processo.",
    image: "/assets/portfolio/banco-tubos.png",
  },
] as const;

type DeliverableIcon = (typeof deliverables)[number]["icon"];

function DeliverableSymbol({ icon }: { icon: DeliverableIcon }) {
  if (icon === "detail") {
    return <Ruler className="h-5 w-5" />;
  }

  if (icon === "system") {
    return <Layers3 className="h-5 w-5" />;
  }

  return <Wrench className="h-5 w-5" />;
}

export default function MechanicalStructural() {
  const { trackCTAClick, trackServiceView } = useAnalytics();
  const contactHighlightTimeoutRef = useRef<number | null>(null);
  const [contactSectionHighlighted, setContactSectionHighlighted] = useState(false);

  useEffect(() => {
    trackServiceView("Desenvolvimento Mecânico e Estrutural");

    return () => {
      if (contactHighlightTimeoutRef.current) {
        window.clearTimeout(contactHighlightTimeoutRef.current);
      }
    };
  }, [trackServiceView]);

  const handleSectionScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    ctaName: string,
    location: string,
  ) => {
    event.preventDefault();
    trackCTAClick(ctaName, location);

    const target = document.getElementById(sectionId);
    if (!target) {
      window.location.hash = sectionId;
      return;
    }

    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });

    if (sectionId === "contato") {
      setContactSectionHighlighted(true);

      if (contactHighlightTimeoutRef.current) {
        window.clearTimeout(contactHighlightTimeoutRef.current);
      }

      contactHighlightTimeoutRef.current = window.setTimeout(() => {
        setContactSectionHighlighted(false);
      }, 1800);
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b102d]/82 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <Link href="/">
            <a className="text-2xl font-semibold tracking-tight text-white transition hover:opacity-90">
              iSprint
            </a>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#escopo"
              onClick={(event) =>
                handleSectionScroll(event, "escopo", "mechanical_scope", "mechanical_header")
              }
              className="text-sm font-medium text-white/76 transition hover:text-white"
            >
              Escopo
            </a>
            <a
              href="#processo"
              onClick={(event) =>
                handleSectionScroll(event, "processo", "mechanical_process", "mechanical_header")
              }
              className="text-sm font-medium text-white/76 transition hover:text-white"
            >
              Processo
            </a>
            <a
              href="#contato"
              onClick={(event) =>
                handleSectionScroll(event, "contato", "mechanical_contact", "mechanical_header")
              }
              className="text-sm font-medium text-white/76 transition hover:text-white"
            >
              Contato
            </a>
          </nav>

          <Button
            asChild
            className="rounded-full bg-white px-6 text-[#2722f8] hover:bg-white/92 hover:text-[#2722f8]"
          >
            <a
              href="#contato"
              onClick={(event) =>
                handleSectionScroll(
                  event,
                  "contato",
                  "mechanical_quote",
                  "mechanical_header_cta",
                )
              }
            >
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </header>

      <main className="overflow-hidden">
        <section className="relative bg-[#2722f8] pb-20 pt-10 text-white md:pb-24 md:pt-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-white/12 blur-3xl" />
            <div className="absolute bottom-[-2rem] right-[-6%] h-72 w-72 rounded-full bg-[#6d69ff]/52 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#060917]" />
          </div>

          <div className="container relative z-10">
            <div className="grid gap-8 lg:min-h-[calc(100svh-8.5rem)] lg:grid-cols-[0.72fr_0.78fr] xl:grid-cols-[0.7fr_0.82fr] lg:items-stretch">
              <FadeInUp delay={0.12}>
                <div className="max-w-xl">
                  <div className="mb-5 inline-flex items-center rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white/88 backdrop-blur-sm">
                    Engenharia aplicada ao produto e à estrutura
                  </div>

                  <h1 className="mb-6 text-[3rem] font-semibold leading-[0.94] tracking-tight text-white sm:text-[4rem] lg:text-[4.35rem] xl:text-[4.9rem]">
                    Desenvolvimento mecânico e estrutural para tirar sistemas do papel.
                  </h1>

                  <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/82 sm:text-xl">
                    Projetamos peças, conjuntos e estruturas com foco em fabricação, montagem,
                    operação e coerência técnica do começo ao fim.
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="group relative min-w-[220px] overflow-hidden rounded-full bg-black px-7 text-white shadow-[0_20px_45px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/92 hover:shadow-[0_28px_55px_rgba(0,0,0,0.35)]"
                    >
                      <a
                        href="#contato"
                        onClick={(event) =>
                          handleSectionScroll(
                            event,
                            "contato",
                            "mechanical_hero_quote",
                            "mechanical_hero",
                          )
                        }
                      >
                        <span className="absolute inset-y-0 left-[-18%] w-14 -skew-x-12 bg-white/15 opacity-0 transition-all duration-700 group-hover:left-[112%] group-hover:opacity-100" />
                        <span className="relative">Quero desenvolver um projeto</span>
                        <ArrowRight className="relative ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full border border-white/28 bg-white/10 px-7 text-white hover:bg-white/16 hover:text-white"
                    >
                      <a
                        href="#escopo"
                        onClick={(event) =>
                          handleSectionScroll(
                            event,
                            "escopo",
                            "mechanical_hero_scope",
                            "mechanical_hero",
                          )
                        }
                      >
                        Entender escopo
                      </a>
                    </Button>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.18} className="lg:flex lg:h-full">
                <div className="relative flex h-full w-full flex-col">
                  <div className="absolute -left-6 top-6 h-32 w-32 rounded-full bg-[#d8bc67]/24 blur-3xl" />
                  <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-full bg-white/12 blur-3xl" />
                  <div className="relative mb-4 flex items-start justify-between gap-4 pl-1 pr-1 text-white">
                    <div className="max-w-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/64">
                        Blueprint técnico
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/78">
                        Leitura estrutural com linguagem de desenho, montagem e fabricação.
                      </p>
                    </div>
                    <div className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/68">
                      Wireframe
                    </div>
                  </div>

                  <div className="relative flex min-h-[340px] flex-1 overflow-hidden rounded-[2.35rem] border border-white/14 bg-white shadow-[0_45px_110px_-48px_rgba(0,0,0,0.62)] lg:min-h-[35rem] xl:min-h-[40rem]">
                    <img
                      src={heroBlueprintImage}
                      alt="Estrutura em wireframe com leitura técnica e arquitetônica"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </FadeInUp>

              <ScaleIn delay={0.2} className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -left-8 top-10 h-44 w-44 rounded-full bg-[#d8bc67]/24 blur-3xl" />
                  <div className="absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-white/12 blur-3xl" />
                  <div className="relative overflow-hidden rounded-[2.35rem] border border-white/14 bg-[#111536] shadow-[0_50px_110px_-42px_rgba(0,0,0,0.68)]">
                    <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] xl:h-[700px]">
                      <img
                        src={heroImage}
                        alt="Projeto mecânico em ambiente CAD"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,24,0.08),rgba(8,10,24,0.18),rgba(7,10,24,0.9))]" />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,24,0.54),rgba(7,10,24,0.06),rgba(7,10,24,0.28))]" />

                      <div className="absolute left-5 top-5 rounded-full border border-white/16 bg-[#0d112e]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/78 backdrop-blur-sm sm:left-8 sm:top-8">
                        Projeto orientado à fabricação
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                        <div className="max-w-2xl">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/66">
                            Do conceito ao detalhamento
                          </p>
                          <h2 className="text-2xl font-semibold leading-[1.04] text-white sm:text-3xl lg:text-[3rem]">
                            Estrutura, montagem e geometria pensadas para funcionar e fabricar bem.
                          </h2>
                          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/76 sm:text-base">
                            Uma leitura mais clara do sistema, com contexto visual suficiente para
                            comunicar produto, estrutura e intenção de projeto.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>

            <FadeInUp delay={0.18}>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:mt-8">
                {heroMetrics.map((item) => (
                  <div
                    key={item.value}
                    className="rounded-[1.35rem] border border-white/14 bg-white/8 p-4 backdrop-blur-sm"
                  >
                    <div className="mb-2 text-base font-semibold text-white">{item.value}</div>
                    <p className="text-sm leading-relaxed text-white/72">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>

        <section id="escopo" className="bg-white py-20 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SlideInLeft delay={0.08}>
                <div className="max-w-xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                    O que fazemos
                  </p>
                  <h2 className="mb-6 text-foreground">
                    Projetamos sistemas mecânicos com leitura de produto e de fabricação.
                  </h2>
                  <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                    Nosso trabalho não fica só na modelagem bonita. A ideia é desenvolver uma solução
                    que faça sentido em estrutura, montagem, operação, manutenção e comunicação
                    técnica.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2722f8]" />
                      <p className="text-muted-foreground">
                        Soluções pensadas para sair do conceito e chegar à produção com mais clareza.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2722f8]" />
                      <p className="text-muted-foreground">
                        Estruturas, peças e conjuntos alinhados ao processo real de fabricação.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2722f8]" />
                      <p className="text-muted-foreground">
                        Material técnico para reduzir ruído entre projeto, cliente e equipe interna.
                      </p>
                    </div>
                  </div>
                </div>
              </SlideInLeft>

              <div className="grid gap-4 sm:grid-cols-2">
                {scopeAreas.map((item, index) => (
                  <FadeInUp key={item.title} delay={0.08 + index * 0.08}>
                    <div className="h-full rounded-[1.75rem] border border-border bg-[#f7f8ff] p-7 shadow-[0_22px_48px_-42px_rgba(39,34,248,0.42)] transition-transform duration-300 hover:-translate-y-1">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#11131a] text-white">
                        <Box className="h-5 w-5" />
                      </div>
                      <h3 className="mb-4 text-2xl font-semibold text-foreground">{item.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="processo" className="bg-[#0f1020] py-20 text-white md:py-24">
          <div className="container">
            <FadeInUp delay={0.08}>
              <div className="mb-14 max-w-3xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
                  Como trabalhamos
                </p>
                <h2 className="mb-5 text-white">Um fluxo que conecta concepção, viabilidade e detalhamento.</h2>
                <p className="text-lg leading-relaxed text-white/70">
                  Cada etapa organiza a solução para que o projeto seja tecnicamente coerente e mais
                  fácil de comunicar para quem decide, fabrica e monta.
                </p>
              </div>
            </FadeInUp>

            <div className="grid gap-5 lg:grid-cols-2">
              {workflowSteps.map((item, index) => (
                <FadeInUp key={item.step} delay={0.1 + index * 0.08}>
                  <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="text-4xl font-semibold tracking-tight text-white/22">
                        {item.step}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
                        Etapa {index + 1}
                      </span>
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="max-w-2xl leading-relaxed text-white/70">{item.description}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#ffffff,#f7f8ff)] py-20 md:py-24">
          <div className="container">
            <FadeInUp delay={0.08}>
              <div className="mb-14 max-w-3xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                  Entregáveis
                </p>
                <h2 className="mb-5 text-foreground">O que costuma sair desse tipo de projeto.</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A entrega final varia conforme o escopo, mas sempre buscamos deixar o projeto mais
                  utilizável para decisão, fabricação e evolução futura.
                </p>
              </div>
            </FadeInUp>

            <div className="grid gap-6 lg:grid-cols-3">
              {deliverables.map((item, index) => (
                <FadeInUp key={item.title} delay={0.1 + index * 0.08}>
                  <div className="h-full rounded-[1.9rem] border border-border bg-white p-8 shadow-[0_26px_60px_-44px_rgba(15,23,42,0.2)]">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#11131a] text-white">
                      <DeliverableSymbol icon={item.icon} />
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mb-6 leading-relaxed text-muted-foreground">{item.description}</p>
                    <ul className="space-y-3">
                      {item.items.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#2722f8]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-muted/30 py-20">
          <div className="container">
            <FadeInUp delay={0.08}>
              <div className="mb-10 max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                  Casos relacionados
                </p>
                <h2 className="text-foreground">Projetos em que essa lógica de desenvolvimento aparece com clareza.</h2>
              </div>
            </FadeInUp>

            <div className="grid gap-6 lg:grid-cols-3">
              {relatedCases.map((item, index) => (
                <FadeInUp key={item.href} delay={0.1 + index * 0.08}>
                  <Link
                    href={item.href}
                    className="group overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                    <div className="space-y-4 p-6">
                      <h3 className="text-2xl font-semibold leading-snug text-foreground">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                        Ver case <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2722f8] py-20 text-white">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
                  Próximo passo
                </p>
                <h2 className="mb-4 text-white">Quer estruturar melhor um produto, dispositivo ou conjunto técnico?</h2>
                <p className="text-lg leading-relaxed text-white/80">
                  Podemos ajudar a organizar o projeto com mais consistência mecânica, estrutural e
                  documental para seguir com segurança.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="group relative min-w-[230px] overflow-hidden rounded-full bg-white px-7 text-[#2722f8] shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/92 hover:text-[#2722f8] hover:shadow-[0_24px_50px_rgba(0,0,0,0.24)]"
              >
                <a
                  href="#contato"
                  onClick={(event) =>
                    handleSectionScroll(
                      event,
                      "contato",
                      "mechanical_bottom_cta",
                      "mechanical_bottom_cta",
                    )
                  }
                >
                  <span className="absolute inset-y-0 left-[-18%] w-14 -skew-x-12 bg-[#2722f8]/14 opacity-0 transition-all duration-700 group-hover:left-[112%] group-hover:opacity-100" />
                  <span className="relative">Solicitar análise</span>
                  <ArrowRight className="relative ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="contato" className="bg-white py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <div className="mb-12 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                  Fale com a iSprint
                </p>
                <h2 className="mb-4 text-foreground">Solicitar orçamento para desenvolvimento mecânico</h2>
                <p className="text-lg text-muted-foreground">
                  Envie o contexto do sistema, referências, restrições e objetivo do projeto. Assim
                  conseguimos orientar melhor o escopo e a melhor linha de desenvolvimento.
                </p>
              </div>

              <motion.div
                animate={
                  contactSectionHighlighted
                    ? {
                        scale: [1, 1.012, 1],
                        boxShadow: [
                          "0 0 0 rgba(39,34,248,0)",
                          "0 28px 80px rgba(39,34,248,0.18)",
                          "0 0 0 rgba(39,34,248,0)",
                        ],
                      }
                    : { scale: 1, boxShadow: "0 0 0 rgba(39,34,248,0)" }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="rounded-[2rem] border border-border bg-gradient-to-br from-[#2722f8]/6 via-white to-[#2722f8]/3 p-8"
              >
                <ContactForm defaultServiceType="mechanical" />
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="bg-foreground py-12 text-white">
          <div className="container">
            <div className="mb-8 grid gap-8 md:grid-cols-4">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <img src="/assets/logo-icon.png" alt="iSprint" className="h-10 w-10" />
                  <span className="text-xl font-semibold">iSprint</span>
                </div>
                <p className="text-sm text-white/60">Criação técnica digital para produtos e indústria.</p>
              </div>

              <div>
                <h4 className="mb-4 font-semibold">Serviços</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>
                    <Link href="/scan3d">
                      <a className="transition hover:text-white">Scan 3D</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/mechanical-structural">
                      <a className="transition hover:text-white">Desenvolvimento mecânico</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/parametric">
                      <a className="transition hover:text-white">Modelagem paramétrica</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold">Navegação</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>
                    <Link href="/">
                      <a className="transition hover:text-white">Home</a>
                    </Link>
                  </li>
                  <li>
                    <a href="/#portfolio" className="transition hover:text-white">
                      Portfólio
                    </a>
                  </li>
                  <li>
                    <a href="/#contato" className="transition hover:text-white">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold">Contato</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>
                    <a href="mailto:isprintstudio@gmail.com" className="transition hover:text-white">
                      isprintstudio@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+5583991854711" className="transition hover:text-white">
                      +55 (83) 99185-4711
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
              <p>&copy; 2026 Studio iSprint. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
