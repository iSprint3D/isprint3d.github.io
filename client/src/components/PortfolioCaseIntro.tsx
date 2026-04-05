import ExplodedGlbHeroScene from "@/components/ExplodedGlbHeroScene";
import type { PortfolioAnimation } from "@/components/PortfolioCaseAnimations";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Layers3, Wrench } from "lucide-react";
import { startTransition, useEffect, useRef, useState } from "react";

export type PortfolioCaseIntroConfig = PortfolioAnimation & {
  eyebrow?: string;
  headline?: string;
  modelSrc?: string;
  subcopy?: string;
  scrollLengthVh?: number;
};

type PortfolioCaseIntroProps = {
  intro: PortfolioCaseIntroConfig;
  contentTargetId: string;
};

const DEFAULT_SCROLL_LENGTH_VH = 180;

export default function PortfolioCaseIntro({ intro, contentTargetId }: PortfolioCaseIntroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const sectionHeight = `${intro.scrollLengthVh ?? DEFAULT_SCROLL_LENGTH_VH}vh`;
  const eyebrow = sanitizeIntroText(intro.eyebrow ?? "Leitura t\u00e9cnica do projeto");
  const headline = sanitizeIntroText(
    intro.headline ?? "A documenta\u00e7\u00e3o t\u00e9cnica come\u00e7a com impacto visual",
    "A documenta\u00e7\u00e3o t\u00e9cnica come\u00e7a com impacto visual",
  );
  const subcopy = sanitizeIntroText(
    intro.subcopy ??
      "A abertura apresenta o conjunto em 3D para preparar a leitura das folhas seguintes. Assim, explode, vistas e documentos complementares entram no case com mais contexto e menos ru\u00eddo.",
    "A abertura apresenta o conjunto em 3D para preparar a leitura das folhas seguintes. Assim, explode, vistas e documentos complementares entram no case com mais contexto e menos ru\u00eddo.",
  );

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      if (!sectionRef.current) {
        return;
      }

      const sectionTop = sectionRef.current.offsetTop;
      const totalScrollable = Math.max(sectionRef.current.offsetHeight - window.innerHeight, 1);
      const nextProgress = clamp01((window.scrollY - sectionTop) / totalScrollable);

      startTransition(() => {
        setProgress(nextProgress);
      });
    };

    const requestUpdate = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(updateProgress);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const textOpacity = Math.max(0.14, 1 - progress * 0.95);
  const textTranslate = progress * -42;

  return (
    <section ref={sectionRef} className="relative bg-[#f6f1e8]" style={{ minHeight: sectionHeight }}>
      <div className="sticky top-0 h-screen overflow-hidden text-[#12131a]">
        <div className="absolute inset-0">
          {intro.modelSrc ? <ExplodedGlbHeroScene modelSrc={intro.modelSrc} progress={progress} /> : null}
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,241,232,0.12),rgba(246,241,232,0.88))]" />

        <div className="relative z-10 flex h-full items-end">
          <div
            className="container flex w-full flex-col gap-6 py-10 md:py-12"
            style={{ opacity: textOpacity, transform: `translateY(${textTranslate}px)` }}
          >
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#12131a]/10 bg-white/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#12131a] shadow-[0_18px_45px_-28px_rgba(49,57,135,0.22)]">
                <Layers3 className="h-4 w-4" />
                {eyebrow}
              </div>

              <div className="space-y-2">
                {headline === "A documenta\u00e7\u00e3o t\u00e9cnica come\u00e7a com impacto visual" ? (
                  <h1 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-tight text-[#12131a] md:text-6xl">
                    <span className="block">{"A documenta\u00e7\u00e3o"}</span>
                    <span className="block">{"t\u00e9cnica come\u00e7a com"}</span>
                    <span className="block text-[#3946ff]">{"impacto visual"}</span>
                  </h1>
                ) : (
                  <h1 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-tight text-[#12131a] md:text-6xl">
                    {headline}
                  </h1>
                )}
                <p className="max-w-xl text-base leading-relaxed text-[#3a3d4b] md:text-lg">{subcopy}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <IntroChip
                  icon={Layers3}
                  label={"Explode do conjunto"}
                  detail={"Subconjuntos e rela\u00e7\u00f5es entre pe\u00e7as"}
                />
                <IntroChip
                  icon={FileText}
                  label={"Folhas t\u00e9cnicas"}
                  detail={"Vistas e sequ\u00eancia de montagem"}
                />
                <IntroChip
                  icon={Wrench}
                  label={"Apoio \u00e0 fabrica\u00e7\u00e3o"}
                  detail={"Detalhes para processo e leitura estrutural"}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                onClick={() => {
                  const target = document.getElementById(contentTargetId);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-[#12131a] text-white hover:bg-[#12131a]/92"
              >
                {"Ir para as pranchas"}
              </Button>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#12131a]/10 bg-white/85 px-4 py-2 text-sm text-[#39404f] shadow-[0_18px_40px_-28px_rgba(24,28,35,0.28)] backdrop-blur">
                <ArrowDown className="h-4 w-4 animate-bounce" />
                {progress < 0.92 ? "Role para percorrer a abertura 3D" : "Continue para ver as folhas t\u00e9cnicas"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function sanitizeIntroText(value: string, fallback?: string) {
  if (value.includes("Ãƒ") || value.includes("Ã‚")) {
    return fallback ?? value.replaceAll("Ãƒ", "").replaceAll("Ã‚", "");
  }

  return value;
}

type IntroChipProps = {
  icon: typeof FileText;
  label: string;
  detail: string;
};

function IntroChip({ icon: Icon, label, detail }: IntroChipProps) {
  return (
    <div className="inline-flex items-start gap-3 rounded-2xl border border-[#12131a]/8 bg-white/88 px-4 py-3 shadow-[0_18px_45px_-28px_rgba(26,31,45,0.25)] backdrop-blur">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#12131a] text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-[#12131a]">{label}</p>
        <p className="text-sm text-[#5c6270]">{detail}</p>
      </div>
    </div>
  );
}
