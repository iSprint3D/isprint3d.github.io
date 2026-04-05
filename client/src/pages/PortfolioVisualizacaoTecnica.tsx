import PortfolioCaseLayout from "@/components/PortfolioCaseLayout";
import { portfolioCasesBySlug } from "@/data/portfolioCases";
import { portfolioVisualizacaoTecnicaOverride } from "@/data/portfolioVisualizacaoTecnicaOverride";

export default function PortfolioVisualizacaoTecnica() {
  return (
    <PortfolioCaseLayout
      currentCase={{
        ...portfolioCasesBySlug["vistas-explodidas-detalhamento"],
        ...portfolioVisualizacaoTecnicaOverride,
      }}
    />
  );
}
