import PortfolioCaseAnimations from "@/components/PortfolioCaseAnimations";
import PortfolioCaseDocumentGallery from "@/components/PortfolioCaseDocumentGallery";
import PortfolioCaseIntro from "@/components/PortfolioCaseIntro";
import SplineEmbed from "@/components/SplineEmbed";
import { Button } from "@/components/ui/button";
import { portfolioCases, type PortfolioCase } from "@/data/portfolioCases";
import { useAnalytics } from "@/hooks/useAnalytics";
import { ArrowLeft, ArrowRight, Box, Clock3, FileText, Layers3, Wrench } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

type PortfolioCaseLayoutProps = {
  currentCase: PortfolioCase;
};

export default function PortfolioCaseLayout({ currentCase }: PortfolioCaseLayoutProps) {
  const { trackPageView, trackCTAClick } = useAnalytics();
  const contentStartId = "portfolio-case-content-start";
  const isTechnicalVisualizationCase = currentCase.slug === "vistas-explodidas-detalhamento";
  const introHeaderBackground = isTechnicalVisualizationCase
    ? "bg-[linear-gradient(180deg,#faf7f1,#f4efe6)]"
    : "bg-[linear-gradient(180deg,rgba(39,34,248,0.08),rgba(39,34,248,0))]";
  const visibleAnimations =
    currentCase.animations?.filter((item) => {
      if (!currentCase.introAnimation) {
        return true;
      }

      return !(
        item.title === currentCase.introAnimation.title &&
        (
          item.sceneUrl === currentCase.introAnimation.sceneUrl ||
          item.iframeSrc === currentCase.introAnimation.iframeSrc ||
          !currentCase.introAnimation.sceneUrl ||
          !currentCase.introAnimation.iframeSrc
        )
      );
    }) ?? [];
  const inlineAnimation = isTechnicalVisualizationCase ? visibleAnimations[0] : undefined;
  const remainingAnimations = inlineAnimation ? visibleAnimations.slice(1) : visibleAnimations;

  useEffect(() => {
    trackPageView(`portfolio_${currentCase.slug}`);
  }, [currentCase.slug, trackPageView]);

  const relatedCases = portfolioCases.filter((item) => item.slug !== currentCase.slug).slice(0, 3);

  const renderGalleryIcon = (icon?: "pdf" | "render" | "explode") => {
    if (icon === "pdf") {
      return <FileText className="h-8 w-8" />;
    }

    if (icon === "explode") {
      return <Layers3 className="h-8 w-8" />;
    }

    return <Box className="h-8 w-8" />;
  };

  const renderMetricIcon = (icon?: PortfolioCase["metrics"][number]["icon"]) => {
    if (icon === "document") {
      return <FileText className="h-5 w-5" />;
    }

    if (icon === "explode") {
      return <Layers3 className="h-5 w-5" />;
    }

    if (icon === "fabrication") {
      return <Wrench className="h-5 w-5" />;
    }

    return <Box className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {currentCase.introAnimation ? (
        <PortfolioCaseIntro intro={currentCase.introAnimation} contentTargetId={contentStartId} />
      ) : null}

      <header className="sticky top-0 z-50 border-b border-border/70 bg-white/85 backdrop-blur-md">
        <div className="container flex items-center justify-between gap-6 py-4">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-foreground">
            iSprint
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="/#servicos" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              {"Servi\u00e7os"}
            </a>
            <a href="/#portfolio" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              {"Portf\u00f3lio"}
            </a>
            <a href="/#contato" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Contato
            </a>
          </nav>

          <Button asChild className="bg-[#2722f8] text-white hover:bg-[#2722f8]/90">
            <a href="/#contato" onClick={() => trackCTAClick("portfolio_orcamento", currentCase.slug)}>
              {"Solicitar or\u00e7amento"}
            </a>
          </Button>
        </div>
      </header>

      <main id={contentStartId}>
        <section className={`border-b border-border/70 py-16 md:py-20 ${introHeaderBackground}`}>
          <div className="container">
            <Link
              href="/#portfolio"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {"Voltar para portf\u00f3lio"}
            </Link>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#2722f8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_-28px_rgba(39,34,248,0.85)]">
                    {currentCase.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{currentCase.publishedAt}</span>
                  <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4" />
                    {currentCase.readTime}
                  </span>
                </div>

                <h1 className="mb-6 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-6xl">
                  {currentCase.title}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-[1.15rem]">
                  {currentCase.summary}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {currentCase.metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`rounded-[1.75rem] p-6 ${
                      index === 0
                        ? "bg-[#2722f8] text-white shadow-[0_28px_60px_-36px_rgba(39,34,248,0.62)] sm:col-span-2"
                        : isTechnicalVisualizationCase
                          ? "border border-[#12131a]/8 bg-white shadow-[0_24px_50px_-38px_rgba(0,0,0,0.18)]"
                          : "border border-border bg-white shadow-sm"
                    }`}
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                        index === 0 ? "bg-white/16 text-white" : "bg-[#11131a] text-white"
                      }`}>
                        {renderMetricIcon(metric.icon)}
                      </div>
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                          index === 0 ? "text-white/72" : "text-[#2722f8]"
                        }`}
                      >
                        {"Servi\u00e7o"}
                      </span>
                    </div>
                    <div
                      className={`mb-2 text-xl font-semibold leading-tight md:text-2xl ${
                        index === 0 ? "text-white" : "text-foreground"
                      }`}
                    >
                      {metric.value}
                    </div>
                    <p className={`text-sm leading-relaxed ${index === 0 ? "text-white/78" : "text-muted-foreground"}`}>
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {!isTechnicalVisualizationCase ? (
          <section className="py-10 md:py-14">
            <div className="container">
              <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_32px_80px_-50px_rgba(0,0,0,0.35)]">
                {currentCase.heroImage ? (
                  <img
                    src={currentCase.heroImage}
                    alt={currentCase.heroAlt}
                    className="h-[300px] w-full object-cover md:h-[520px]"
                  />
                ) : (
                  <div className="grid min-h-[300px] gap-6 bg-[linear-gradient(180deg,#f7f3eb,#efe7db)] px-8 py-10 md:min-h-[520px] md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-14">
                    <div className="flex flex-col justify-between gap-8">
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#2722f8]/12 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                          {"Product design e visualiza\u00e7\u00e3o"}
                        </div>
                        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                          {"Espa\u00e7o para o render principal do projeto"}
                        </h2>
                        <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                          {"Aqui vale usar um hero render pr\u00f3prio do produto, com ilumina\u00e7\u00e3o, materiais e enquadramento pensados para apresenta\u00e7\u00e3o comercial e leitura t\u00e9cnica."}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <div className="rounded-2xl border border-[#12131a]/8 bg-white/88 px-4 py-3 text-sm text-[#39404f] shadow-sm">
                          {"Hero shot do produto"}
                        </div>
                        <div className="rounded-2xl border border-[#12131a]/8 bg-white/88 px-4 py-3 text-sm text-[#39404f] shadow-sm">
                          {"Close de componentes"}
                        </div>
                        <div className="rounded-2xl border border-[#12131a]/8 bg-white/88 px-4 py-3 text-sm text-[#39404f] shadow-sm">
                          {"Render para portf\u00f3lio"}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-rows-3">
                      <div className="rounded-[1.5rem] border border-[#12131a]/8 bg-white/80 p-5 shadow-sm">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2722f8]">Frame 01</p>
                        <p className="text-lg font-semibold text-foreground">Render hero</p>
                      </div>
                      <div className="rounded-[1.5rem] border border-[#12131a]/8 bg-white/72 p-5 shadow-sm">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2722f8]">Frame 02</p>
                        <p className="text-lg font-semibold text-foreground">Vista explodida</p>
                      </div>
                      <div className="rounded-[1.5rem] border border-dashed border-[#12131a]/14 bg-white/58 p-5 shadow-sm">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2722f8]">Frame 03</p>
                        <p className="text-lg font-semibold text-foreground">Detalhamento e PDF</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-8 md:py-14">
          <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-muted/30 p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">Desafio</p>
                <p className="leading-relaxed text-muted-foreground">{currentCase.challenge}</p>
              </div>

              {inlineAnimation ? (
                <article className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_28px_70px_-45px_rgba(0,0,0,0.28)]">
                  <SplineEmbed
                    title={inlineAnimation.title}
                    sceneUrl={inlineAnimation.sceneUrl}
                    iframeSrc={inlineAnimation.iframeSrc}
                    loading={inlineAnimation.loading}
                    className="h-[320px] w-full border-0 bg-[#f4efe6]"
                  />
                  <div className="space-y-4 border-t border-border/70 p-6">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                        {"Visualiza\u00e7\u00e3o 3D"}
                      </p>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {"Exploded view interativa para leitura espacial"}
                      </h3>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      {"Enquanto as folhas t\u00e9cnicas organizam explode, vistas e detalhamento, o modelo interativo ajuda a perceber profundidade, rela\u00e7\u00e3o entre componentes e leitura do conjunto de um jeito mais imediato."}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[#12131a]/8 bg-[#f7f3eb] px-4 py-3 text-sm text-[#39404f]">
                        {"Complementa as pranchas planas com leitura volum\u00e9trica"}
                      </div>
                      <div className="rounded-2xl border border-[#12131a]/8 bg-[#f7f3eb] px-4 py-3 text-sm text-[#39404f]">
                        {"Ajuda cliente e fabrica\u00e7\u00e3o a enxergar rela\u00e7\u00f5es entre pe\u00e7as"}
                      </div>
                    </div>
                  </div>
                </article>
              ) : (
                <div className="rounded-2xl border border-border bg-foreground p-6 text-white">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    {isTechnicalVisualizationCase ? "Leitura-chave" : "Relato"}
                  </p>
                  <blockquote className="text-lg leading-relaxed text-white">"{currentCase.testimonial.quote}"</blockquote>
                  <div className="mt-5 text-sm text-white/70">
                    <p className="font-semibold text-white">{currentCase.testimonial.author}</p>
                    <p>{currentCase.testimonial.role}</p>
                  </div>
                </div>
              )}
            </aside>

            <article className="space-y-10">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">Contexto</p>
                <p className="text-lg leading-relaxed text-muted-foreground">{currentCase.context}</p>
              </div>

              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">Processo</p>
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
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">Resultado</p>
                <p className="text-lg leading-relaxed text-muted-foreground">{currentCase.outcome}</p>
              </div>
            </article>
          </div>
        </section>

        {currentCase.gallery.length ? (
          <section className="py-10 md:py-16">
            <div className="container">
              <div className="mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                  {isTechnicalVisualizationCase ? "Leituras complementares" : "Bastidores do projeto"}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                  {isTechnicalVisualizationCase ? "Como a documenta\u00e7\u00e3o se organiza ao longo do projeto" : "Galeria e pontos de processo"}
                </h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {currentCase.gallery.map((item) => (
                  <div key={item.title} className="overflow-hidden rounded-2xl border border-border bg-white">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                    ) : (
                      <div className="flex h-56 items-end bg-[linear-gradient(180deg,#f8f4ec,#efe7db)] p-6">
                        <div className="w-full rounded-[1.5rem] border border-[#12131a]/8 bg-white/88 p-5 shadow-sm">
                          <div className="mb-4 flex items-center justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#11131a] text-white">
                              {renderGalleryIcon(item.icon)}
                            </div>
                            {item.badge ? (
                              <span className="rounded-full border border-[#2722f8]/12 bg-[#2722f8]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#2722f8]">
                                {item.badge}
                              </span>
                            ) : null}
                          </div>
                          <p className="text-sm leading-relaxed text-[#4e5463]">
                            {isTechnicalVisualizationCase
                              ? "Escolha aqui a folha em que essa leitura aparece com mais nitidez: conjunto, explode ou detalhe de fabrica\u00e7\u00e3o."
                              : "Substitua esta \u00e1rea por um render real ou por uma p\u00e1gina exportada do projeto."}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="space-y-3 p-6">
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {currentCase.documents?.length ? <PortfolioCaseDocumentGallery documents={currentCase.documents} /> : null}

        {remainingAnimations.length ? <PortfolioCaseAnimations items={remainingAnimations} /> : null}

        <section className="border-y border-border/70 bg-muted/30 py-16">
          <div className="container">
            <div className="mb-8 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
                {isTechnicalVisualizationCase ? "Outros recortes do portf\u00f3lio" : "Mais artigos"}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                {isTechnicalVisualizationCase ? "Projetos com outras l\u00f3gicas construtivas" : "Outros projetos para explorar"}
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
                      {"Ler case"} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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
                    {isTechnicalVisualizationCase ? "Pr\u00f3xima conversa" : "Pr\u00f3ximo passo"}
                  </p>
                  <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
                    {isTechnicalVisualizationCase
                      ? "Quer transformar arquivos t\u00e9cnicos em uma apresenta\u00e7\u00e3o clara de projeto?"
                      : "Quer transformar um projeto em case real e bem documentado?"}
                  </h2>
                  <p className="text-lg leading-relaxed text-white/75">
                    {isTechnicalVisualizationCase
                      ? "Podemos organizar explode, vistas, sequ\u00eancia de montagem e material visual para que o projeto comunique decis\u00f5es de design e tamb\u00e9m apoie a fabrica\u00e7\u00e3o."
                      : "Podemos estruturar escopo, documenta\u00e7\u00e3o, material visual e entreg\u00e1veis t\u00e9cnicos para o seu produto ou processo."}
                  </p>
                </div>

                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                  <a href="/#contato" onClick={() => trackCTAClick("portfolio_cta_final", currentCase.slug)}>
                    {"Falar com o studio"} <ArrowRight className="ml-2 h-4 w-4" />
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
