import SplineEmbed from "@/components/SplineEmbed";

export type PortfolioAnimation = {
  title: string;
  description: string;
  sceneUrl?: string;
  iframeSrc?: string;
  loading?: "lazy" | "eager";
};

type PortfolioCaseAnimationsProps = {
  items: PortfolioAnimation[];
};

export default function PortfolioCaseAnimations({ items }: PortfolioCaseAnimationsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="bg-[linear-gradient(180deg,rgba(39,34,248,0.04),rgba(39,34,248,0))] py-10 md:py-16">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2722f8]">
            Animações 3D
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Visualizações interativas para leitura técnica
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_28px_70px_-45px_rgba(0,0,0,0.35)]"
            >
              <SplineEmbed
                title={item.title}
                sceneUrl={item.sceneUrl}
                iframeSrc={item.iframeSrc}
                loading={item.loading}
                className="h-[420px] w-full border-0 bg-[#f5f6fb] md:h-[520px]"
              />
              <div className="space-y-3 border-t border-border/70 p-6">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
