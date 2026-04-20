import ContactForm from "@/components/ContactForm";
import { FadeInUp, ScaleIn, SlideInLeft } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Layers3,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/parametric-modeling-m4Xf6moeKPmBRrmyfyA8dP.webp";

const heroMetrics = [
  {
    value: "Famílias de produto",
    label:
      "variações organizadas por regras, sem recomeçar o projeto a cada ajuste",
  },
  {
    value: "CAD inteligente",
    label:
      "geometria controlada por parâmetros, relações e lógica de construção",
  },
  {
    value: "Revisões mais rápidas",
    label:
      "alterações dimensionais e documentais com mais previsibilidade técnica",
  },
] as const;

const scopeAreas = [
  {
    title: "Linhas de produto com variações controladas",
    description:
      "Ideal para famílias de peças, mobiliário técnico, dispositivos e soluções com versões recorrentes.",
  },
  {
    title: "Projetos sob medida com regras claras",
    description:
      "O modelo responde melhor quando largura, altura, profundidade, folgas e acessórios seguem uma lógica definida.",
  },
  {
    title: "Peças e conjuntos com muitas revisões",
    description:
      "Reduz o retrabalho em ajustes comerciais, técnicos ou produtivos que acontecem ao longo do projeto.",
  },
  {
    title: "Documentação conectada ao modelo",
    description:
      "Ajuda a manter vistas, cotas e tabelas coerentes quando o produto evolui para novas versões.",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Definição de parâmetros",
    description:
      "Mapeamos as variáveis críticas do produto, como dimensões, folgas, espessuras e relações geométricas.",
  },
  {
    step: "02",
    title: "Construção da lógica",
    description:
      "Criamos regras e dependências para que o modelo responda com consistência às alterações futuras.",
  },
  {
    step: "03",
    title: "Validação técnica",
    description:
      "Testamos cenários de uso, famílias de peças e versões de produto sem reconstruir o projeto do zero.",
  },
  {
    step: "04",
    title: "Entrega escalável",
    description:
      "Organizamos o arquivo para manutenção, documentação e reaproveitamento nas próximas demandas.",
  },
] as const;

const deliverables = [
  {
    title: "Modelos CAD inteligentes",
    description:
      "Peças e conjuntos preparados para adaptar dimensões, relações e configurações com mais consistência.",
    icon: "cad",
    items: [
      "Peças e conjuntos paramétricos organizados",
      "Regras de construção mais claras",
      "Menos retrabalho em revisões recorrentes",
    ],
  },
  {
    title: "Documentação conectada ao modelo",
    description:
      "A lógica do projeto se reflete melhor em vistas, cotas e tabelas, reduzindo divergências entre versões e entregas.",
    icon: "docs",
    items: [
      "Vistas técnicas vinculadas ao modelo",
      "Cotas e tabelas atualizadas com mais consistência",
      "Base mais segura para revisão e fabricação",
    ],
  },
  {
    title: "Base preparada para expansão",
    description:
      "O projeto fica mais apto a absorver novas configurações, clientes, acessórios e ajustes dimensionais sem perder coerência.",
    icon: "scale",
    items: [
      "Famílias de produto reutilizáveis",
      "Ajustes mais rápidos para novos contextos",
      "Evolução mais clara para próximas versões",
    ],
  },
] as const;

type DeliverableIcon = (typeof deliverables)[number]["icon"];

function DeliverableSymbol({ icon }: { icon: DeliverableIcon }) {
  if (icon === "docs") {
    return <FileText className="h-5 w-5" />;
  }

  if (icon === "scale") {
    return <Layers3 className="h-5 w-5" />;
  }

  return <Wrench className="h-5 w-5" />;
}

export default function ParametricModeling() {
  const { trackCTAClick, trackServiceView } = useAnalytics();
  const contactHighlightTimeoutRef = useRef<number | null>(null);
  const [contactSectionHighlighted, setContactSectionHighlighted] =
    useState(false);

  useEffect(() => {
    trackServiceView("Modelagem Paramétrica");

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
    location: string
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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#2722f8]/92 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <Link href="/">
            <a className="text-2xl font-semibold tracking-tight text-white transition hover:opacity-90">
              iSprint
            </a>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#escopo"
              onClick={event =>
                handleSectionScroll(
                  event,
                  "escopo",
                  "parametric_scope",
                  "parametric_header"
                )
              }
              className="text-sm font-medium text-white/76 transition hover:text-white"
            >
              Escopo
            </a>
            <a
              href="#processo"
              onClick={event =>
                handleSectionScroll(
                  event,
                  "processo",
                  "parametric_process",
                  "parametric_header"
                )
              }
              className="text-sm font-medium text-white/76 transition hover:text-white"
            >
              Processo
            </a>
            <a
              href="#contato"
              onClick={event =>
                handleSectionScroll(
                  event,
                  "contato",
                  "parametric_contact",
                  "parametric_header"
                )
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
              onClick={event =>
                handleSectionScroll(
                  event,
                  "contato",
                  "parametric_header_quote",
                  "parametric_header"
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
            <div className="absolute left-[-8%] top-12 h-72 w-72 rounded-full bg-white/12 blur-3xl" />
            <div className="absolute bottom-[-2rem] right-[-5%] h-72 w-72 rounded-full bg-[#6d69ff]/52 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#1f1ad8]" />
          </div>

          <div className="container relative z-10">
            <div className="grid gap-12 lg:min-h-[calc(100svh-8.5rem)] lg:grid-cols-[0.8fr_1.05fr] lg:items-center">
              <FadeInUp delay={0.12}>
                <div className="max-w-xl">
                  <div className="mb-5 inline-flex items-center rounded-full border border-white bg-white px-4 py-2 text-sm font-semibold text-[#2722f8] shadow-[0_16px_34px_rgba(0,0,0,0.18)]">
                    Modelagem 3D e CAD
                  </div>

                  <h1 className="mb-6 text-[3rem] font-semibold leading-[0.94] tracking-tight text-white sm:text-[4rem] lg:text-[4.7rem]">
                    Projetos mais fáceis de revisar, adaptar e expandir.
                  </h1>

                  <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/82 sm:text-xl">
                    Aplicamos lógica de modelagem paramétrica para transformar
                    produtos, peças e conjuntos em uma base CAD mais inteligente
                    para evolução técnica.
                  </p>

                  <div className="mb-10 flex flex-col gap-4 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="group relative min-w-[220px] overflow-hidden rounded-full bg-black px-7 text-white shadow-[0_20px_45px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/92 hover:shadow-[0_28px_55px_rgba(0,0,0,0.35)]"
                    >
                      <a
                        href="#contato"
                        onClick={event =>
                          handleSectionScroll(
                            event,
                            "contato",
                            "parametric_hero_quote",
                            "parametric_hero"
                          )
                        }
                      >
                        <span className="absolute inset-y-0 left-[-18%] w-14 -skew-x-12 bg-white/15 opacity-0 transition-all duration-700 group-hover:left-[112%] group-hover:opacity-100" />
                        <span className="relative">
                          Quero estruturar meu modelo
                        </span>
                        <ArrowRight className="relative ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full border border-white bg-white px-7 text-[#2722f8] shadow-[0_16px_34px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/96 hover:text-[#201be0]"
                    >
                      <a
                        href="#processo"
                        onClick={event =>
                          handleSectionScroll(
                            event,
                            "processo",
                            "parametric_hero_process",
                            "parametric_hero"
                          )
                        }
                      >
                        Ver processo
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm leading-relaxed text-white/68">
                    Nome técnico do serviço: modelagem paramétrica, aplicada
                    quando o projeto precisa responder bem a revisões, famílias
                    de produto e novas configurações.
                  </p>
                </div>
              </FadeInUp>

              <ScaleIn delay={0.22}>
                <div className="relative">
                  <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-[#d8bc67]/24 blur-3xl" />
                  <div className="absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-white/14 blur-3xl" />

                  <div className="relative overflow-hidden rounded-[2.1rem] border border-white/14 bg-[#312cf8] shadow-[0_42px_92px_-46px_rgba(0,0,0,0.62)]">
                    <div className="relative min-h-[360px] sm:min-h-[460px]">
                      <img
                        src={heroImage}
                        alt="Ambiente CAD com lógica de modelagem e organização paramétrica"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,38,0.06),rgba(10,14,38,0.5),rgba(6,9,23,0.95))]" />

                      <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/84 backdrop-blur-sm">
                        Lógica paramétrica aplicada
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 space-y-6 p-6 sm:p-8">
                        <div className="max-w-lg">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/68">
                            Base técnica para múltiplas versões
                          </p>
                          <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                            Um modelo que ajuda a mudar dimensões, relações e
                            documentação com mais consistência.
                          </h2>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          <div className="rounded-[1.25rem] border border-white/16 bg-black px-4 py-4 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.55)]">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                              Uso comum
                            </p>
                            <p className="text-sm leading-relaxed text-white">
                              Produtos com variações, famílias e revisões
                              comerciais frequentes.
                            </p>
                          </div>
                          <div className="rounded-[1.25rem] border border-white/16 bg-black px-4 py-4 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.55)]">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                              Ganho
                            </p>
                            <p className="text-sm leading-relaxed text-white">
                              Menos retrabalho para ajustar medidas, combinações
                              e acessórios.
                            </p>
                          </div>
                          <div className="rounded-[1.25rem] border border-white/16 bg-black px-4 py-4 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.55)]">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                              Entrega
                            </p>
                            <p className="text-sm leading-relaxed text-white">
                              Arquivos CAD organizados para evoluir sem perder
                              coerência técnica.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>

            <FadeInUp delay={0.18}>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {heroMetrics.map(item => (
                  <div
                    key={item.value}
                    className="rounded-[1.35rem] border border-white/16 bg-black p-4 shadow-[0_20px_42px_-34px_rgba(0,0,0,0.55)]"
                  >
                    <div className="mb-2 text-base font-semibold text-white">
                      {item.value}
                    </div>
                    <p className="text-sm leading-relaxed text-white">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>

        <section id="escopo" className="bg-white py-20 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <SlideInLeft delay={0.08}>
                <div className="max-w-xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                    Onde faz sentido
                  </p>
                  <h2 className="mb-6 text-foreground">
                    Quando a modelagem 3D precisa continuar clara nas próximas
                    versões.
                  </h2>
                  <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                    A modelagem paramétrica faz mais diferença quando o projeto
                    não termina em uma única geometria. O objetivo é criar uma
                    base que sustente ajustes futuros com menos atrito e mais
                    coerência.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2722f8]" />
                      <p className="text-muted-foreground">
                        Evita reconstrução desnecessária em revisões
                        dimensionais e comerciais.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2722f8]" />
                      <p className="text-muted-foreground">
                        Organiza melhor a relação entre geometria, documentação
                        e fabricação.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2722f8]" />
                      <p className="text-muted-foreground">
                        Cria um ponto de partida mais robusto para futuras
                        expansões da linha.
                      </p>
                    </div>
                  </div>
                </div>
              </SlideInLeft>

              <div className="grid gap-4 sm:grid-cols-2">
                {scopeAreas.map((item, index) => (
                  <FadeInUp key={item.title} delay={0.08 + index * 0.08}>
                    <div className="h-full rounded-[1.75rem] border border-border bg-[#f7f8ff] p-7 shadow-[0_22px_48px_-42px_rgba(39,34,248,0.42)] transition-transform duration-300 hover:-translate-y-1">
                      <div className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#2722f8]">
                        0{index + 1}
                      </div>
                      <h3 className="mb-4 text-2xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="processo" className="bg-black py-20 text-white md:py-24">
          <div className="container">
            <FadeInUp delay={0.08}>
              <div className="mb-14 max-w-3xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
                  Processo técnico
                </p>
                <h2 className="mb-5 text-white">
                  Um fluxo para construir regras sem perder leitura de projeto.
                </h2>
                <p className="text-lg leading-relaxed text-white/70">
                  Organizamos a lógica do modelo desde a definição das variáveis
                  até a entrega da base CAD, para que as próximas alterações
                  aconteçam com mais previsibilidade.
                </p>
              </div>
            </FadeInUp>

            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <ScaleIn delay={0.12} className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-[2rem] border border-white/16 bg-[#050505] shadow-[0_40px_90px_-50px_rgba(0,0,0,0.78)]">
                  <div className="border-b border-white/12 px-6 py-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                      Lógica do modelo
                    </p>
                    <p className="max-w-lg text-sm leading-relaxed text-white">
                      O trabalho começa pela estrutura: o que pode variar, o que
                      precisa permanecer estável e como o modelo deve responder
                      a cada mudança.
                    </p>
                  </div>

                  <div className="bg-[#050505] p-3">
                    <img
                      src={heroImage}
                      alt="Visual de modelagem 3D aplicada à construção paramétrica"
                      className="w-full rounded-[1.35rem] border border-white/8 object-cover"
                    />
                  </div>

                  <div className="grid gap-4 border-t border-white/12 px-6 py-6 sm:grid-cols-2">
                    <div>
                      <div className="mb-2 text-sm font-semibold text-white">
                        Parâmetros principais
                      </div>
                      <p className="text-sm leading-relaxed text-white">
                        Dimensões, espessuras, folgas, repetições e relações
                        críticas entram como base de decisão do modelo.
                      </p>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-semibold text-white">
                        Entrega sustentável
                      </div>
                      <p className="text-sm leading-relaxed text-white">
                        A organização final precisa ajudar não só hoje, mas
                        também as próximas versões, revisões e documentações.
                      </p>
                    </div>
                  </div>
                </div>
              </ScaleIn>

              <div className="space-y-5">
                {processSteps.map((item, index) => (
                  <FadeInUp key={item.step} delay={0.14 + index * 0.08}>
                    <div className="rounded-[1.9rem] border border-white/16 bg-[#050505] p-6 shadow-[0_26px_58px_-40px_rgba(0,0,0,0.8)]">
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="text-4xl font-semibold tracking-tight text-white">
                          {item.step}
                        </span>
                        <span className="rounded-full border border-white/18 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black">
                          Etapa {index + 1}
                        </span>
                      </div>
                      <h3 className="mb-3 text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="max-w-2xl leading-relaxed text-white">
                        {item.description}
                      </p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#ffffff,#f7f8ff)] py-20 md:py-24">
          <div className="container">
            <FadeInUp delay={0.08}>
              <div className="mb-14 max-w-3xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                  Entregáveis e benefícios
                </p>
                <h2 className="mb-5 text-foreground">
                  O que você recebe para seguir projetando com mais clareza.
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A entrega final precisa ser útil para quem vai revisar,
                  documentar, fabricar e atualizar o projeto no futuro. Por
                  isso, organizamos o modelo pensando no próximo ciclo, não só
                  na entrega imediata.
                </p>
              </div>
            </FadeInUp>

            <div className="grid gap-6 lg:grid-cols-3">
              {deliverables.map((item, index) => (
                <FadeInUp key={item.title} delay={0.1 + index * 0.08}>
                  <div className="h-full rounded-[1.9rem] border border-border bg-white p-8 shadow-[0_26px_60px_-44px_rgba(15,23,42,0.2)]">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2722f8] text-white">
                      <DeliverableSymbol icon={item.icon} />
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <ul className="space-y-3">
                      {item.items.map(point => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
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

        <section className="bg-[#2722f8] py-20 text-white">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
                  Próximo passo
                </p>
                <h2 className="mb-4 text-white">
                  Quer estruturar um produto com mais inteligência de revisão?
                </h2>
                <p className="text-lg leading-relaxed text-white/80">
                  Conte o contexto do produto, as variações previstas e o nível
                  de documentação desejado. A partir disso, definimos a melhor
                  lógica de modelagem para o seu caso.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="group relative min-w-[230px] overflow-hidden rounded-full bg-white px-7 text-[#2722f8] shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/92 hover:text-[#2722f8] hover:shadow-[0_24px_50px_rgba(0,0,0,0.24)]"
              >
                <a
                  href="#contato"
                  onClick={event =>
                    handleSectionScroll(
                      event,
                      "contato",
                      "parametric_bottom_cta",
                      "parametric_bottom_cta"
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
                <h2 className="mb-4 text-foreground">
                  Solicitar orçamento para modelagem 3D e CAD
                </h2>
                <p className="text-lg text-muted-foreground">
                  Envie o contexto do produto, exemplos de variações,
                  referências e o objetivo da modelagem. Assim conseguimos
                  orientar o escopo e a lógica paramétrica mais útil para o
                  projeto.
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
                <ContactForm defaultServiceType="parametric" />
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="bg-foreground py-12 text-white">
          <div className="container">
            <div className="mb-8 grid gap-8 md:grid-cols-4">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <img
                    src="/assets/logo-icon.png"
                    alt="iSprint"
                    className="h-10 w-10"
                  />
                  <span className="text-xl font-semibold">iSprint</span>
                </div>
                <p className="text-sm text-white/60">
                  Criação técnica digital para produtos, protótipos e indústria.
                </p>
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
                      <a className="transition hover:text-white">
                        Desenvolvimento mecânico
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/prototyping">
                      <a className="transition hover:text-white">
                        Materialização e impressão 3D
                      </a>
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
                    <a
                      href="/#portfolio"
                      className="transition hover:text-white"
                    >
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
                    <a
                      href="mailto:isprintstudio@gmail.com"
                      className="transition hover:text-white"
                    >
                      isprintstudio@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+5583991854711"
                      className="transition hover:text-white"
                    >
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
