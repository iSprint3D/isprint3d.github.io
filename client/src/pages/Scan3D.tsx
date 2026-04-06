import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import { FadeInUp, ScaleIn, SlideInLeft } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, FileText, Layers3, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const scanShowcaseImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/scan-3d-showcase-VBUAtiVyeVnagmeyZFLjJY.webp";

const heroHighlights = [
  {
    value: "0,045 mm",
    label: "acurácia nominal do equipamento para leituras de alta fidelidade",
  },
  {
    value: "CAD-ready",
    label: "malha organizada para engenharia reversa, inspeção e reconstrução",
  },
  {
    value: "STL • STEP • OBJ",
    label: "entregas alinhadas ao seu fluxo de design, engenharia ou fabricação",
  },
] as const;

const useCases = [
  {
    title: "Peças sem documentação original",
    description:
      "Recuperamos a geometria de componentes legados para que o time possa reconstruir, revisar ou voltar a fabricar com mais segurança.",
  },
  {
    title: "Engenharia reversa e reconstrução CAD",
    description:
      "O scan entra como base fiel para modelagem paramétrica, criação de superfícies e detalhamento técnico do produto.",
  },
  {
    title: "Inspeção, comparação e validação",
    description:
      "A captura ajuda a verificar desgaste, deformações, compatibilidade entre peças e coerência com a intenção de projeto.",
  },
  {
    title: "Acervo digital e replicação futura",
    description:
      "Digitalize uma peça física hoje para reduzir dependência de amostras únicas e ganhar uma base reaproveitável no futuro.",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Leitura inicial da peça",
    description:
      "Analisamos material, acabamento superficial, pontos críticos e a melhor forma de orientar a captura.",
  },
  {
    step: "02",
    title: "Captura multiângulo",
    description:
      "Escaneamos a peça em diferentes posições para cobrir detalhes, cavidades e superfícies com consistência.",
  },
  {
    step: "03",
    title: "Alinhamento e limpeza",
    description:
      "Unimos as leituras, removemos ruídos e refinamos a malha para gerar uma base digital confiável.",
  },
  {
    step: "04",
    title: "Preparação da entrega",
    description:
      "Exportamos o material no formato certo para o seu objetivo: CAD, inspeção, prototipagem ou fabricação.",
  },
] as const;

const deliverables = [
  {
    title: "Base digital da peça",
    description:
      "Malha tratada, alinhada e pronta para servir de referência técnica no restante do projeto.",
    items: [
      "Nuvem de pontos ou malha conforme a necessidade",
      "Organização de geometrias principais",
      "Limpeza de ruído e fechamento de leitura",
    ],
    icon: "mesh",
  },
  {
    title: "Preparação para engenharia",
    description:
      "Estruturamos o material para facilitar reconstrução CAD, estudo dimensional e evolução técnica.",
    items: [
      "Base para engenharia reversa",
      "Compatibilidade com modelagem paramétrica",
      "Apoio para documentação e detalhamento",
    ],
    icon: "cad",
  },
  {
    title: "Arquivos prontos para usar",
    description:
      "Você recebe o pacote de saída pensado para o software, o time e a etapa do projeto.",
    items: [
      "STL, OBJ, PLY e malhas técnicas",
      "STEP e IGES quando o escopo inclui reconstrução",
      "Entrega organizada para fabricação ou validação",
    ],
    icon: "files",
  },
] as const;

const specifications = [
  {
    title: "Equipamento",
    items: [
      "Scanner EinScan Pro 2X V2",
      "Leitura por luz estruturada",
      "Captura adaptável a diferentes escalas de peça",
    ],
  },
  {
    title: "Fluxo técnico",
    items: [
      "Alinhamento de múltiplas tomadas",
      "Tratamento e otimização da malha",
      "Preparação para CAD, inspeção e prototipagem",
    ],
  },
  {
    title: "Saídas de projeto",
    items: [
      "Arquivos para prototipagem e impressão 3D",
      "Base digital para reconstrução paramétrica",
      "Modelos para acervo, comparação e análise",
    ],
  },
] as const;

type DeliverableIcon = (typeof deliverables)[number]["icon"];

function DeliverableSymbol({ icon }: { icon: DeliverableIcon }) {
  if (icon === "cad") {
    return <Wrench className="h-5 w-5" />;
  }

  if (icon === "files") {
    return <FileText className="h-5 w-5" />;
  }

  return <Layers3 className="h-5 w-5" />;
}

export default function Scan3D() {
  const { trackCTAClick, trackServiceView } = useAnalytics();
  const contactHighlightTimeoutRef = useRef<number | null>(null);
  const [contactSectionHighlighted, setContactSectionHighlighted] = useState(false);

  useEffect(() => {
    trackServiceView("Scan 3D");

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
              href="#aplicacoes"
              onClick={(event) =>
                handleSectionScroll(event, "aplicacoes", "scan_aplicacoes", "scan_header")
              }
              className="text-sm font-medium text-white/76 transition hover:text-white"
            >
              Aplicações
            </a>
            <a
              href="#processo"
              onClick={(event) =>
                handleSectionScroll(event, "processo", "scan_processo", "scan_header")
              }
              className="text-sm font-medium text-white/76 transition hover:text-white"
            >
              Processo
            </a>
            <a
              href="#contato"
              onClick={(event) =>
                handleSectionScroll(event, "contato", "scan_contato", "scan_header")
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
                handleSectionScroll(event, "contato", "scan_orcamento", "scan_header_cta")
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
            <div className="absolute left-[-5%] top-10 h-64 w-64 rounded-full bg-white/12 blur-3xl" />
            <div className="absolute bottom-[-2rem] right-[-4%] h-72 w-72 rounded-full bg-[#6d69ff]/55 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050816]" />
          </div>

          <div className="container relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
              <FadeInUp delay={0.12}>
                <div className="max-w-xl">
                  <div className="mb-5 inline-flex items-center rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white/88 backdrop-blur-sm">
                    Scan 3D industrial
                  </div>

                  <h1 className="mb-6 text-[3rem] font-semibold leading-[0.94] tracking-tight text-white sm:text-[4rem] lg:text-[5rem]">
                    Do objeto físico ao modelo digital pronto para engenharia.
                  </h1>

                  <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/82 sm:text-xl">
                    Capturamos peças reais com fidelidade técnica para acelerar engenharia reversa,
                    inspeção, documentação e desenvolvimento de produto.
                  </p>

                  <div className="mb-10 flex flex-col gap-4 sm:flex-row">
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
                            "scan_hero_orcamento",
                            "scan_hero",
                          )
                        }
                      >
                        <span className="absolute inset-y-0 left-[-18%] w-14 -skew-x-12 bg-white/15 opacity-0 transition-all duration-700 group-hover:left-[112%] group-hover:opacity-100" />
                        <span className="relative">Quero escanear uma peça</span>
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
                        href="#processo"
                        onClick={(event) =>
                          handleSectionScroll(
                            event,
                            "processo",
                            "scan_hero_processo",
                            "scan_hero",
                          )
                        }
                      >
                        Ver processo
                      </a>
                    </Button>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {heroHighlights.map((item) => (
                      <div
                        key={item.value}
                        className="rounded-[1.35rem] border border-white/14 bg-white/8 p-4 backdrop-blur-sm"
                      >
                        <div className="mb-2 text-lg font-semibold text-white">{item.value}</div>
                        <p className="text-sm leading-relaxed text-white/72">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              <ScaleIn delay={0.24}>
                <div className="relative">
                  <div className="absolute -left-6 top-12 h-40 w-40 rounded-full bg-[#d8bc67]/24 blur-3xl" />
                  <div className="absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-white/14 blur-3xl" />

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-[#111536] shadow-[0_40px_90px_-44px_rgba(0,0,0,0.62)]">
                    <div className="relative min-h-[360px] sm:min-h-[440px]">
                      <img
                        src={scanShowcaseImage}
                        alt="Peça técnica capturada com scan 3D"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,16,40,0.06),rgba(12,16,40,0.52),rgba(5,8,22,0.95))]" />

                      <div className="absolute left-5 top-5 rounded-full border border-white/16 bg-[#0d112e]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/78 backdrop-blur-sm">
                        Captura estruturada
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 space-y-6 p-6 sm:p-8">
                        <div className="max-w-lg">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/68">
                            Base técnica para evoluir a peça
                          </p>
                          <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                            Leitura completa da geometria para reconstruir, comparar e fabricar com
                            mais contexto.
                          </h2>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          <div className="rounded-[1.25rem] border border-white/12 bg-white/10 px-4 py-4 backdrop-blur-sm">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                              Uso comum
                            </p>
                            <p className="text-sm leading-relaxed text-white/84">
                              Engenharia reversa de peças e subconjuntos.
                            </p>
                          </div>
                          <div className="rounded-[1.25rem] border border-white/12 bg-white/10 px-4 py-4 backdrop-blur-sm">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                              Saída
                            </p>
                            <p className="text-sm leading-relaxed text-white/84">
                              Malha tratada para CAD, inspeção e prototipagem.
                            </p>
                          </div>
                          <div className="rounded-[1.25rem] border border-white/12 bg-white/10 px-4 py-4 backdrop-blur-sm">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                              Escopo
                            </p>
                            <p className="text-sm leading-relaxed text-white/84">
                              Peças únicas, produtos legados e acervos técnicos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>

        <section id="aplicacoes" className="bg-white py-20 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <SlideInLeft delay={0.08}>
                <div className="max-w-xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                    Onde o scan 3D faz diferença
                  </p>
                  <h2 className="mb-6 text-foreground">
                    Quando a peça real precisa virar base confiável de projeto.
                  </h2>
                  <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                    O serviço é especialmente valioso quando o componente existe fisicamente, mas a
                    equipe precisa entender a geometria com mais clareza para tomar decisões de
                    engenharia, fabricação ou validação.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2722f8]" />
                      <p className="text-muted-foreground">
                        Reduz a dependência de medições manuais em peças complexas.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2722f8]" />
                      <p className="text-muted-foreground">
                        Acelera a transição entre objeto físico e reconstrução digital.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2722f8]" />
                      <p className="text-muted-foreground">
                        Gera uma base reutilizável para próximos ciclos do produto.
                      </p>
                    </div>
                  </div>
                </div>
              </SlideInLeft>

              <div className="grid gap-4 sm:grid-cols-2">
                {useCases.map((item, index) => (
                  <FadeInUp key={item.title} delay={0.08 + index * 0.08}>
                    <div className="h-full rounded-[1.75rem] border border-border bg-[#f7f8ff] p-7 shadow-[0_22px_48px_-42px_rgba(39,34,248,0.42)] transition-transform duration-300 hover:-translate-y-1">
                      <div className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#2722f8]">
                        0{index + 1}
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
                  Processo técnico
                </p>
                <h2 className="mb-5 text-white">Um fluxo pensado para capturar sem perder contexto.</h2>
                <p className="text-lg leading-relaxed text-white/70">
                  O GIF abaixo mostra a lógica real de captura. A partir dessa leitura, tratamos os
                  dados para que a peça faça sentido no próximo passo do projeto.
                </p>
              </div>
            </FadeInUp>

            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <ScaleIn delay={0.12} className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.65)] backdrop-blur-sm">
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                      Processo real de captura
                    </p>
                    <p className="max-w-lg text-sm leading-relaxed text-white/72">
                      Scanner em operação, leitura da superfície e visualização imediata da malha em
                      ambiente digital.
                    </p>
                  </div>

                  <div className="bg-[#050816] p-3">
                    <img
                      src="/assets/scan3d-process.gif"
                      alt="Processo de escaneamento 3D em operação"
                      className="w-full rounded-[1.35rem] border border-white/8 object-cover"
                    />
                  </div>

                  <div className="grid gap-4 border-t border-white/10 px-6 py-6 sm:grid-cols-2">
                    <div>
                      <div className="mb-2 text-sm font-semibold text-white">Captura guiada</div>
                      <p className="text-sm leading-relaxed text-white/62">
                        Planejamos posições, apoios e sequência de leitura conforme a complexidade da
                        peça.
                      </p>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-semibold text-white">Tratamento posterior</div>
                      <p className="text-sm leading-relaxed text-white/62">
                        Refinamos os dados para entregar uma base mais útil do que uma captura bruta.
                      </p>
                    </div>
                  </div>
                </div>
              </ScaleIn>

              <div className="space-y-5">
                {processSteps.map((item, index) => (
                  <FadeInUp key={item.step} delay={0.14 + index * 0.08}>
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
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#ffffff,#f7f8ff)] py-20 md:py-24">
          <div className="container">
            <FadeInUp delay={0.08}>
              <div className="mb-14 max-w-3xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                  Entregas e estrutura
                </p>
                <h2 className="mb-5 text-foreground">O que você recebe ao final do processo.</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Não entregamos apenas um arquivo bruto. O objetivo é transformar a captura em uma
                  base útil para o time de projeto, fabricação ou validação.
                </p>
              </div>
            </FadeInUp>

            <div className="mb-16 grid gap-6 lg:grid-cols-3">
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

            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <FadeInUp delay={0.12}>
                <div className="rounded-[2rem] bg-[#11131a] px-8 py-9 text-white shadow-[0_32px_70px_-45px_rgba(0,0,0,0.55)]">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Leitura de projeto
                  </p>
                  <h3 className="mb-4 text-3xl font-semibold leading-tight">
                    Ideal para peças críticas, produtos legados e situações em que medir não basta.
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-white/72">
                    Quando a geometria é complexa, possui desgaste, superfícies orgânicas ou baixa
                    documentação, o scan 3D ajuda a reduzir incerteza e acelerar decisões.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                        <Clock3 className="h-4 w-4" />
                        Menos retrabalho
                      </div>
                      <p className="text-sm leading-relaxed text-white/62">
                        A equipe ganha uma base concreta para iterar sem recomeçar do zero.
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                        <Wrench className="h-4 w-4" />
                        Mais contexto técnico
                      </div>
                      <p className="text-sm leading-relaxed text-white/62">
                        O material entra melhor em CAD, inspeção e preparação de fabricação.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              <div className="grid gap-5 sm:grid-cols-3">
                {specifications.map((group, index) => (
                  <FadeInUp key={group.title} delay={0.14 + index * 0.08}>
                    <div className="rounded-[1.75rem] border border-border bg-white p-7 shadow-[0_20px_45px_-40px_rgba(39,34,248,0.22)]">
                      <h3 className="mb-5 text-xl font-semibold text-foreground">{group.title}</h3>
                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-1 h-2 w-2 rounded-full bg-[#2722f8]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeInUp>
                ))}
              </div>
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
                <h2 className="mb-4 text-white">Quer transformar uma peça física em base digital de projeto?</h2>
                <p className="text-lg leading-relaxed text-white/80">
                  Conte o contexto da peça, o objetivo da captura e o formato de entrega esperado.
                  A partir disso, definimos a melhor estratégia para o seu caso.
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
                    handleSectionScroll(event, "contato", "scan_bottom_cta", "scan_bottom_cta")
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
                <h2 className="mb-4 text-foreground">Solicitar orçamento para Scan 3D</h2>
                <p className="text-lg text-muted-foreground">
                  Envie a descrição da peça, fotos ou arquivos de referência. Quanto mais contexto,
                  melhor conseguimos orientar a captura e a entrega ideal.
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
                <ContactForm defaultServiceType="scan3d" />
              </motion.div>
            </div>
          </div>
        </section>

        <FAQSection />

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
                    <Link href="/parametric">
                      <a className="transition hover:text-white">Modelagem paramétrica</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/prototyping">
                      <a className="transition hover:text-white">Prototipagem técnica</a>
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
