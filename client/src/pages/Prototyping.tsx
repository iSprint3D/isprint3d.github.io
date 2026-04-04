import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

const processSteps = [
  {
    step: "01",
    title: "Análise do objetivo",
    description:
      "Definimos o que precisa ser validado: forma, ergonomia, encaixe, resistência, montagem ou uso funcional.",
  },
  {
    step: "02",
    title: "Ajuste para fabricação",
    description:
      "Preparamos o modelo conforme a tecnologia escolhida, considerando tolerâncias, material e montagem.",
  },
  {
    step: "03",
    title: "Produção do protótipo",
    description:
      "Fabricamos as peças com o processo mais adequado, como impressão 3D, corte, usinagem ou soluções híbridas.",
  },
  {
    step: "04",
    title: "Montagem e revisão",
    description:
      "Entregamos o conjunto validado para testes e coletamos aprendizados para a próxima iteração.",
  },
] as const;

const techniques = [
  {
    title: "Impressão 3D",
    items: [
      "Protótipos visuais e funcionais",
      "Peças para validação de encaixe",
      "Componentes personalizados",
      "Iteração rápida com baixo custo inicial",
    ],
  },
  {
    title: "Montagem técnica",
    items: [
      "Integração de peças e componentes",
      "Testes de usabilidade e montagem",
      "Validação de conjuntos complexos",
      "Ajustes antes da produção final",
    ],
  },
  {
    title: "Apoio ao desenvolvimento",
    items: [
      "Refino de geometrias",
      "Correção de interferências",
      "Revisões orientadas por teste",
      "Preparação para próxima etapa do produto",
    ],
  },
] as const;

export default function Prototyping() {
  const { trackServiceView } = useAnalytics();

  useEffect(() => {
    trackServiceView("Prototipagem Técnica");
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
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/prototyping-lab-VioNudS7Eajax9RG3KTAZp.webp')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/55 to-white" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2">
              <span className="text-sm font-semibold text-accent">Prototipagem Técnica</span>
            </div>

            <h1 className="mb-6 text-foreground leading-tight">
              Da ideia ao protótipo funcional com mais clareza
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Desenvolvemos protótipos para validar forma, montagem e uso real antes da produção,
              encurtando riscos e ajudando você a evoluir o produto com mais segurança.
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
              <h2 className="mb-6 text-foreground">O que é prototipagem técnica?</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                É a construção de modelos físicos para validar decisões de projeto antes da etapa
                final de fabricação. O protótipo ajuda a enxergar problemas, testar hipóteses e
                melhorar o desempenho do produto com mais agilidade.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                A iSprint trabalha com protótipos visuais e funcionais, combinando modelagem,
                fabricação e montagem para aproximar o conceito da realidade.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Validação antecipada</h4>
                    <p className="text-sm text-muted-foreground">
                      Teste forma, ergonomia e função antes de investir em produção.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Iteração rápida</h4>
                    <p className="text-sm text-muted-foreground">
                      Ajustes mais curtos entre uma versão e outra do produto.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Decisão mais segura</h4>
                    <p className="text-sm text-muted-foreground">
                      Evidências físicas para orientar próximos investimentos e melhorias.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/prototyping-lab-VioNudS7Eajax9RG3KTAZp.webp"
                alt="Prototipagem técnica"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-foreground">Etapas da prototipagem</h2>

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

              <h2 className="mb-6 text-foreground">Validação de dispositivo técnico em múltiplas versões</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Cliente: startup de produto físico. Desafio: testar encaixes, ergonomia e
                componentes antes de avançar para uma fase mais cara do desenvolvimento.
              </p>

              <div className="mb-8 space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Solução</h4>
                  <p className="text-sm text-muted-foreground">
                    Produzimos iterações sucessivas com foco em montagem, uso e revisão de pontos
                    críticos, combinando prototipagem rápida com ajustes orientados por teste.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Resultado</h4>
                  <p className="text-sm text-muted-foreground">
                    O cliente validou o conceito com mais segurança, reduziu retrabalho e chegou a
                    uma versão mais madura para a próxima etapa do produto.
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/prototyping-lab-VioNudS7Eajax9RG3KTAZp.webp"
                alt="Case de prototipagem"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-foreground">Técnicas e possibilidades</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {techniques.map((group) => (
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
          <h2 className="mb-6 text-white">Quer validar um produto antes de produzir?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            A iSprint pode ajudar você a prototipar com mais agilidade, reduzir riscos e chegar em
            uma solução mais madura para testes ou apresentação.
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
