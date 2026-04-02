import PortfolioCaseLayout from "@/components/PortfolioCaseLayout";
import { portfolioCasesBySlug } from "@/data/portfolioCases";

export default function PortfolioScan3DIndustrial() {
  return <PortfolioCaseLayout currentCase={portfolioCasesBySlug["carrinho-bbq-rebocavel"]} />;
}
