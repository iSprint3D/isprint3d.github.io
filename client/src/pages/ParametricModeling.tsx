import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

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
      "Criamos regras e dependências para que o modelo responda automaticamente a alterações futuras.",
  },
  {
    step: "03",
    title: "Validação técnica",
    description:
      "Testamos cenários de uso, famílias de peças e versões de produto sem refazer o projeto do zero.",
  },
  {
    step: "04",
    title: "Entrega escalável",
    description:
      "Organizamos o arquivo para manutenção, documentação e reaproveitamento em novas demandas.",
  },
] as const;

const deliverables = [
  {
    title: "Modelos CAD inteligentes",
    items: [
      "Peças e conjuntos paramétricos",
      "Configurações reutilizáveis",
      "Bibliotecas com regras claras",
      "Estrutura pronta para revisões futuras",
    ],
  },
  {
    title: "Documentação automatizada",
    items: [
      "Vistas técnicas vinculadas ao modelo",
      "Cotas atualizadas conforme alterações",
      "Tabelas e listas coerentes com o projeto",
      "Base mais segura para produção",
    ],
  },
  {
    title: "Exploração de alternativas",
    items: [
      "Famílias de produto com variações controladas",
      "Simulações de cenários de dimensionamento",
      "Ajustes rápidos para novos clientes",
      "Menos retrabalho em alterações recorrentes",
    ],
  },
] as const;

export default function ParametricModeling() {
  const { trackServiceView } = useAnalytics();

  useEffect(() => {
    trackServiceView("Modelagem Paramétrica");
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
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/parametric-modeling-m4Xf6moeKPmBRrmyfyA8dP.webp')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/55 to-white" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2">
              <span className="text-sm font-semibold text-accent">Modelagem Paramétrica</span>
            </div>

            <h1 className="mb-6 text-foreground leading-tight">
              Projetos mais inteligentes, flexíveis e escaláveis
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Criamos modelos 3D estruturados por regras e parâmetros, permitindo gerar versões,
              adaptar dimensões e evoluir produtos com muito menos retrabalho.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/#contato">
                <a className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:bg-accent/90">
                  Solicitar orçamento <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Link>
              <Link href="/#portfolio">
                <a className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium transition hover:bg-muted">
                  Ver aplicações
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-purple-50/30 to-white py-20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-foreground">O que é modelagem paramétrica?</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                É uma abordagem de projeto em que a geometria é controlada por parâmetros,
                relações e regras. Em vez de remodelar tudo a cada mudança, o sistema responde de
                forma previsível aos ajustes que você precisar.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Isso faz diferença em linhas de produto, peças com muitas revisões, soluções sob
                medida e projetos que precisam equilibrar velocidade com rigor técnico.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Flexibilidade real</h4>
                    <p className="text-sm text-muted-foreground">
                      Ajuste medidas e relações sem perder consistência de projeto.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Revisões mais rápidas</h4>
                    <p className="text-sm text-muted-foreground">
                      Ideal para cenários com versões, variações e atualizações frequentes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Base técnica sólida</h4>
                    <p className="text-sm text-muted-foreground">
                      Mais controle sobre documentação, fabricação e evolução do produto.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/parametric-modeling-m4Xf6moeKPmBRrmyfyA8dP.webp"
                alt="Modelagem paramétrica"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-foreground">Fluxo de construção do modelo</h2>

          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="mb-4 text-4xl font-bold text-secondary/20">{item.step}</div>
                  <h3 className="mb-3 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="absolute right-[-0.75rem] top-1/2 hidden h-0.5 w-6 bg-gradient-to-r from-secondary to-transparent md:block" />
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

              <h2 className="mb-6 text-foreground">Linha modular com múltiplas configurações</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Cliente: fabricante de mobiliário técnico. Desafio: criar uma base de projeto que
                permitisse gerar versões customizadas sem refazer todos os desenhos.
              </p>

              <div className="mb-8 space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Solução</h4>
                  <p className="text-sm text-muted-foreground">
                    Estruturamos o produto com parâmetros principais, regras de montagem e
                    documentação vinculada, viabilizando variações controladas por largura,
                    profundidade, alturas e acessórios.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Resultado</h4>
                  <p className="text-sm text-muted-foreground">
                    Menos retrabalho em revisões, geração mais rápida de alternativas e base mais
                    sólida para expansão da linha.
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/parametric-modeling-m4Xf6moeKPmBRrmyfyA8dP.webp"
                alt="Case de modelagem paramétrica"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-foreground">Entregas e benefícios</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {deliverables.map((group) => (
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
          <h2 className="mb-6 text-white">Quer estruturar um produto com mais inteligência?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Fale com a iSprint para desenhar uma base paramétrica que suporte evolução técnica,
            personalização e ganho real de tempo nas próximas versões.
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
