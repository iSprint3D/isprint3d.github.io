import PortfolioCaseLayout from "@/components/PortfolioCaseLayout";
import { portfolioCasesBySlug } from "@/data/portfolioCases";

export default function PortfolioModelagemParametrica() {
  return <PortfolioCaseLayout currentCase={portfolioCasesBySlug["banco-morsa-para-tubos"]} />;
}
