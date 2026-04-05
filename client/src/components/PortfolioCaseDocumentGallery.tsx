import type { PortfolioCase } from "@/data/portfolioCases";
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { useState } from "react";

type PortfolioDocument = NonNullable<PortfolioCase["documents"]>[number];

type PortfolioCaseDocumentGalleryProps = {
  documents: PortfolioDocument[];
};

export default function PortfolioCaseDocumentGallery({ documents }: PortfolioCaseDocumentGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedDocument = documents[selectedIndex] ?? documents[0];
  const previousIndex = (selectedIndex - 1 + documents.length) % documents.length;
  const nextIndex = (selectedIndex + 1) % documents.length;

  if (!selectedDocument) {
    return null;
  }

  return (
    <section className="border-t border-border/60 bg-[linear-gradient(180deg,#fcfbf8,#f3eee5)] py-10 md:py-16">
      <div className="container">
        <div className="mb-8 grid gap-5 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#2722f8]">
              {"S\u00e9rie t\u00e9cnica"}
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              {"Explodes e folhas de montagem apresentados como acervo visual do projeto"}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg xl:justify-self-end">
            {"Cada prancha entra aqui como parte de uma s\u00e9rie: documento principal em destaque, navega\u00e7\u00e3o lateral para comparar folhas e leitura pensada para montagem, explode e apoio de fabrica\u00e7\u00e3o."}
          </p>
        </div>

        <article className="overflow-hidden rounded-[2.2rem] border border-black/8 bg-[#0d1016] text-white shadow-[0_40px_100px_-48px_rgba(0,0,0,0.5)]">
          <div className="grid xl:grid-cols-[minmax(0,1.45fr)_360px]">
            <div className="relative border-b border-white/10 xl:border-b-0 xl:border-r xl:border-r-white/10">
              <a href={selectedDocument.file} target="_blank" rel="noreferrer" className="block">
                <div className="relative flex h-[68vh] min-h-[500px] items-center justify-center overflow-hidden bg-white md:min-h-[720px]">
                  {selectedDocument.previewImage ? (
                    <img
                      src={selectedDocument.previewImage}
                      alt={selectedDocument.title}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <FileText className="h-10 w-10 text-[#2722f8]" />
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/32 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/24 to-transparent" />
                </div>
              </a>

              <div className="absolute left-5 top-5 flex items-center gap-3 md:left-7 md:top-7">
                <div className="rounded-full border border-white/12 bg-black/38 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {"Folha destacada"}
                </div>
                <div className="hidden rounded-full border border-white/12 bg-black/30 px-4 py-2 text-xs font-medium text-white/78 backdrop-blur-md md:block">
                  {String(selectedIndex + 1).padStart(2, "0")} / {String(documents.length).padStart(2, "0")}
                </div>
              </div>

              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 md:px-5">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(previousIndex)}
                  aria-label={"Ver PDF anterior"}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/36 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white hover:text-black"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(nextIndex)}
                  aria-label={"Ver pr\u00f3ximo PDF"}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/36 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white hover:text-black"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <aside className="flex flex-col justify-between gap-8 p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/64">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    <FileText className="h-3.5 w-3.5" />
                    {"Galeria t\u00e9cnica"}
                  </span>
                  <span>{String(selectedIndex + 1).padStart(2, "0")} / {String(documents.length).padStart(2, "0")}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl font-semibold tracking-tight">{selectedDocument.title}</h3>
                  <p className="text-base leading-relaxed text-white/74">{selectedDocument.description}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(previousIndex)}
                    className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-left transition hover:border-white/18 hover:bg-white/[0.08]"
                  >
                    <div>
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">Anterior</p>
                      <p className="text-sm font-medium text-white/86">{documents[previousIndex]?.title}</p>
                    </div>
                    <ChevronLeft className="h-4 w-4 shrink-0 text-white/72" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedIndex(nextIndex)}
                    className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-left transition hover:border-white/18 hover:bg-white/[0.08]"
                  >
                    <div>
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                        {"Pr\u00f3ximo"}
                      </p>
                      <p className="text-sm font-medium text-white/86">{documents[nextIndex]?.title}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-white/72" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={selectedDocument.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#2722f8] hover:text-white"
                >
                  Abrir PDF completo <ArrowUpRight className="h-4 w-4" />
                </a>

                <p className="max-w-xs text-sm leading-relaxed text-white/52">
                  {"Use as setas para percorrer a s\u00e9rie e comparar como o projeto se explica entre explode, montagem e detalhamento."}
                </p>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
}
