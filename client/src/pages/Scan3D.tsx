import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

const processSteps = [
  {
    step: "01",
    title: "Preparação",
    description:
      "Análise da peça, leitura de superfícies e definição da melhor estratégia de captura.",
  },
  {
    step: "02",
    title: "Captura",
    description:
      "Escaneamento em múltiplos ângulos para cobrir a geometria com precisão e consistência.",
  },
  {
    step: "03",
    title: "Processamento",
    description:
      "Alinhamento das nuvens de pontos e geração de malha otimizada para engenharia reversa.",
  },
  {
    step: "04",
    title: "Entrega",
    description:
      "Limpeza final, refinamento e exportação em formatos compatíveis com CAD e fabricação.",
  },
] as const;

const specifications = [
  {
    title: "Equipamento",
    items: [
      "Scanner EinScan Pro 2X V2",
      "Luz estruturada para leitura precisa",
      "Acurácia dimensional de até 0,045 mm",
      "Área de captura variável conforme o modo de operação",
    ],
  },
  {
    title: "Processamento",
    items: [
      "Alinhamento automático de nuvens",
      "Geração de malha otimizada",
      "Limpeza e suavização de dados",
      "Preparação para modelagem CAD",
    ],
  },
  {
    title: "Formatos de entrega",
    items: [
      "STL para prototipagem",
      "STEP para modelagem CAD",
      "OBJ, PLY e IGES",
      "Nuvem de pontos conforme necessidade do projeto",
    ],
  },
] as const;

export default function Scan3D() {
  const { trackServiceView } = useAnalytics();

  useEffect(() => {
    trackServiceView("Scan 3D");
  }, [trackServiceView]);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 transition hover:opacity-80">
              <img src="/assets/logo-icon.png" alt="iSprint" className="h-10 w-10" />
              <img src="/assets/logo-full.png" alt="iSprint" className="hidden h-8 sm:block" />
            </a>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/#servicos">
              <a className="text-sm font-medium transition hover:text-accent">Serviços</a>
            </Link>
            <Link href="/#portfolio">
              <a className="text-sm font-medium transition hover:text-accent">Portfólio</a>
            </Link>
            <Link href="/#contato">
              <a className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition hover:bg-accent/90">
                Contato
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/scan-3d-showcase-VBUAtiVyeVnagmeyZFLjJY.webp')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/55 to-white" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2">
              <span className="text-sm font-semibold text-accent">Scan 3D</span>
            </div>

            <h1 className="mb-6 text-foreground leading-tight">
              Digitalização precisa de objetos físicos
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Transformamos peças e objetos reais em modelos digitais de alta fidelidade, com foco
              em engenharia reversa, documentação técnica, inspeção e desenvolvimento de produto.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/#contato">
                <a className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:bg-accent/90">
                  Solicitar orçamento <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Link>
              <Link href="/#portfolio">
                <a className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium transition hover:bg-muted">
                  Ver projetos
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-foreground">O que é Scan 3D?</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                O Scan 3D é a captura digital de um objeto físico com precisão geométrica. A partir
                dele, conseguimos gerar superfícies, nuvens de pontos e modelos prontos para
                análise, fabricação e reconstrução de peças.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                É um serviço ideal para peças sem documentação original, componentes complexos,
                validações dimensionais e projetos que exigem leitura fiel da geometria.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Precisão micrométrica</h4>
                    <p className="text-sm text-muted-foreground">
                      Acurácia dimensional adequada para aplicações técnicas e industriais.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Processamento rápido</h4>
                    <p className="text-sm text-muted-foreground">
                      Fluxo otimizado para transformar captura bruta em material útil de projeto.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Entrega versátil</h4>
                    <p className="text-sm text-muted-foreground">
                      Arquivos compatíveis com CAD, prototipagem, impressão 3D e engenharia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/scan-3d-showcase-VBUAtiVyeVnagmeyZFLjJY.webp"
                alt="Processo de Scan 3D"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-foreground">Processo técnico</h2>

          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="mb-4 text-4xl font-bold text-accent/20">{item.step}</div>
                  <h3 className="mb-3 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="absolute right-[-0.75rem] top-1/2 hidden h-0.5 w-6 bg-gradient-to-r from-accent to-transparent md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 py-20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
                <span className="text-xs font-semibold text-accent">CASE STUDY</span>
              </div>

              <h2 className="mb-6 text-foreground">Engenharia reversa de componente automotivo</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Cliente: fabricante de autopeças. Desafio: reproduzir uma peça descontinuada sem
                documentação original.
              </p>

              <div className="mb-8 space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Solução</h4>
                  <p className="text-sm text-muted-foreground">
                    Realizamos o scan 3D da peça original, estruturamos a geometria digital e
                    preparamos o material para reconstrução CAD e continuidade de fabricação.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Resultado</h4>
                  <p className="text-sm text-muted-foreground">
                    Redução no tempo de desenvolvimento, maior fidelidade dimensional e base técnica
                    confiável para a nova produção.
                  </p>
                </div>
              </div>

              <Link href="/#portfolio">
                <a className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:bg-accent/90">
                  Ver mais casos <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/scan-3d-showcase-VBUAtiVyeVnagmeyZFLjJY.webp"
                alt="Case de Scan 3D"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-foreground">Especificações técnicas</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {specifications.map((group) => (
              <div key={group.title} className="rounded-2xl border border-border bg-white p-8">
                <h3 className="mb-6 font-semibold text-foreground">{group.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="font-bold text-accent">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2722f8] py-20 text-white">
        <div className="container relative z-10 text-center">
          <h2 className="mb-6 text-white">Pronto para digitalizar seu projeto?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Entre em contato conosco para uma consulta técnica gratuita e vamos avaliar a melhor
            estratégia de captura para o seu caso.
          </p>
          <Link href="/#contato">
            <a className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-[#2722f8] transition hover:bg-white/90">
              Solicitar orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
