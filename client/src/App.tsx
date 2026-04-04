import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Scan3D from "./pages/Scan3D";
import ParametricModeling from "./pages/ParametricModeling";
import Prototyping from "./pages/Prototyping";
import Analytics from "./pages/Analytics";
import PortfolioModelagemParametrica from "./pages/PortfolioModelagemParametrica";
import PortfolioPrototipagemLab from "./pages/PortfolioPrototipagemLab";
import PortfolioScan3DIndustrial from "./pages/PortfolioScan3DIndustrial";
import PortfolioVisualizacaoTecnica from "./pages/PortfolioVisualizacaoTecnica";
import JoinUs from "./pages/JoinUs";

function ScrollToTop() {
  const [location] = useLocation();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    const [currentPath] = location.split("#");

    if (previousPathRef.current === null) {
      previousPathRef.current = currentPath;
      return;
    }

    if (previousPathRef.current !== currentPath) {
      window.scrollTo({ top: 0, behavior: "auto" });
      previousPathRef.current = currentPath;
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/scan3d" component={Scan3D} />
        <Route path="/parametric" component={ParametricModeling} />
        <Route path="/prototyping" component={Prototyping} />
        <Route path="/portfolio/carrinho-bbq-rebocavel" component={PortfolioScan3DIndustrial} />
        <Route path="/portfolio/banco-morsa-para-tubos" component={PortfolioModelagemParametrica} />
        <Route path="/portfolio/estacao-gym-funcional" component={PortfolioPrototipagemLab} />
        <Route path="/portfolio/vistas-explodidas-detalhamento" component={PortfolioVisualizacaoTecnica} />
        <Route path="/faca-parte" component={JoinUs} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
