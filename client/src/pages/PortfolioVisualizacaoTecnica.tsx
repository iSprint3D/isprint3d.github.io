import PortfolioCaseLayout from "@/components/PortfolioCaseLayout";
import { portfolioCasesBySlug } from "@/data/portfolioCases";

export default function PortfolioVisualizacaoTecnica() {
  return <PortfolioCaseLayout currentCase={portfolioCasesBySlug["vistas-explodidas-detalhamento"]} />;
}
