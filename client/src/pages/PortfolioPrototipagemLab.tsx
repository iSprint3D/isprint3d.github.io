import PortfolioCaseLayout from "@/components/PortfolioCaseLayout";
import { portfolioCasesBySlug } from "@/data/portfolioCases";

export default function PortfolioPrototipagemLab() {
  return <PortfolioCaseLayout currentCase={portfolioCasesBySlug["estacao-gym-funcional"]} />;
}
