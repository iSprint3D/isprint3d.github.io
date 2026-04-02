import { portfolioCases, type PortfolioCase } from "@/data/portfolioCases";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

type PortfolioCaseLayoutProps = {
  currentCase: PortfolioCase;
};

export default function PortfolioCaseLayout({ currentCase }: PortfolioCaseLayoutProps) {
  const { trackPageView, trackCTAClick } = useAnalytics();

  useEffect(() => {
    trackPageView(`portfolio_${currentCase.slug}`);
  }, [currentCase.slug, trackPageView]);

  const relatedCases = portfolioCases.filter((item) => item.slug !== currentCase.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-white/85 backdrop-blur-md">
        <div className="container flex items-center justify-between gap-6 py-4">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-foreground">
            iSprint
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="/#servicos" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Serviços
            </a>
            <a href="/#portfolio" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Portfólio
            </a>
            <a href="/#contato" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Contato
            </a>
          </nav>
          <Button asChild className="bg-[#2722f8] text-white hover:bg-[#2722f8]/90">
            <a
              href="/#contato"
              onClick={() => trackCTAClick("portfolio_orcamento", currentCase.slug)}
            >
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </header>

      <main>
        <section className="border-b border-border/70 bg-[linear-gradient(180deg,rgba(39,34,248,0.08),rgba(39,34,248,0))] py-16 md:py-20">
          <div className="container">
            <Link
              href="/#portfolio"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para portfólio
            </Link>

            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div className="max-w-2xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#2722f8]/15 bg-[#2722f8]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                    {currentCase.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{currentCase.publishedAt}</span>
                  <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4" />
                    {currentCase.readTime}
                  </span>
                </div>

                <h1 className="mb-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                  {currentCase.title}
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {currentCase.summary}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {currentCase.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                    <div className="mb-2 text-2xl font-semibold text-foreground">{metric.value}</div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_32px_80px_-50px_rgba(0,0,0,0.35)]">
              <img
                src={currentCase.heroImage}
                alt={currentCase.heroAlt}
                className="h-[300px] w-full object-cover md:h-[520px]"
              />
            </div>
          </div>
        </section>

        <section className="py-8 md:py-14">
          <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-muted/30 p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                  Desafio
                </p>
                <p className="leading-relaxed text-muted-foreground">{currentCase.challenge}</p>
              </div>

              <div className="rounded-2xl border border-border bg-foreground p-6 text-white">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Relato
                </p>
                <blockquote className="text-lg leading-relaxed text-white">
                  “{currentCase.testimonial.quote}”
                </blockquote>
                <div className="mt-5 text-sm text-white/70">
                  <p className="font-semibold text-white">{currentCase.testimonial.author}</p>
                  <p>{currentCase.testimonial.role}</p>
                </div>
              </div>
            </aside>

            <article className="space-y-10">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                  Contexto
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">{currentCase.context}</p>
              </div>

              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                  Processo
                </p>
                <div className="space-y-4">
                  {currentCase.process.map((step, index) => (
                    <div key={step} className="flex gap-4 rounded-2xl border border-border p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2722f8] text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="pt-1 leading-relaxed text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                  Resultado
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">{currentCase.outcome}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                Bastidores do projeto
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Galeria e pontos de processo
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {currentCase.gallery.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-2xl border border-border bg-white">
                  <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                  <div className="space-y-3 p-6">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-muted/30 py-16">
          <div className="container">
            <div className="mb-8 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                Mais artigos
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Outros projetos para explorar
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {relatedCases.map((item) => (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img src={item.heroImage} alt={item.heroAlt} className="h-52 w-full object-cover" />
                  <div className="space-y-4 p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2722f8]">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-semibold leading-snug text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      Ler case <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <div className="rounded-[2rem] bg-[#0f1020] px-8 py-10 text-white md:px-12 md:py-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-2xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    Próximo passo
                  </p>
                  <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
                    Quer transformar um projeto em case real e bem documentado?
                  </h2>
                  <p className="text-lg leading-relaxed text-white/75">
                    Podemos estruturar escopo, documentação, material visual e entregáveis técnicos
                    para o seu produto ou processo.
                  </p>
                </div>

                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                  <a
                    href="/#contato"
                    onClick={() => trackCTAClick("portfolio_cta_final", currentCase.slug)}
                  >
                    Falar com o studio <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
