import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import { useAnalytics } from "@/hooks/useAnalytics";

/**
 * DESIGN PHILOSOPHY: Futurism Organic
 * - Consistent with main design system
 * - Detailed technical information with visual hierarchy
 * - Case studies with before/after imagery
 */

export default function Scan3D() {
  const { trackServiceView } = useAnalytics();

  useEffect(() => {
    trackServiceView("Scan 3D");
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition">
              <img src="/assets/logo-icon.png" alt="iSprint" className="w-10 h-10" />
              <img src="/assets/logo-full.png" alt="iSprint" className="h-8 hidden sm:block" />
            </a>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-sm font-medium hover:text-accent transition">Home</a>
            </Link>
            <Link href="/#servicos">
              <a className="text-sm font-medium hover:text-accent transition">Serviços</a>
            </Link>
            <Link href="/#portfolio">
              <a className="text-sm font-medium hover:text-accent transition">Portfolio</a>
            </Link>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Contato
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/scan-3d-showcase-VBUAtiVyeVnagmeyZFLjJY.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-semibold text-accent">Scan 3D</span>
            </div>

            <h1 className="mb-6 text-foreground leading-tight">
              Digitalização Precisa de Objetos Físicos
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Transformamos objetos físicos em modelos digitais de alta fidelidade utilizando
              tecnologia de scanning avançada. Captura de geometria com precisão micrométrica
              para engenharia reversa, prototipagem e documentação técnica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Solicitar Orçamento <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                Baixar Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-foreground mb-6">O que é Scan 3D?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Scan 3D é a tecnologia de captura digital de objetos físicos tridimensionais.
                Utilizamos scanners de alta precisão que criam nuvens de pontos detalhadas,
                que são posteriormente processadas em modelos CAD precisos.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ideal para engenharia reversa, documentação de peças existentes, inspeção de
                qualidade e preservação digital de artefatos.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Precisão Micrométrica</h4>
                    <p className="text-sm text-muted-foreground">
                     Acurácia dimensional de até 0,045 mm (modo HD)
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Processamento Rápido</h4>
                    <p className="text-sm text-muted-foreground">
                      Modelos processados em 24-48 horas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Múltiplos Formatos</h4>
                    <p className="text-sm text-muted-foreground">
                      Exportação em STL, STEP, IGES, OBJ e mais
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/scan-3d-showcase-VBUAtiVyeVnagmeyZFLjJY.webp"
                alt="Scan 3D Process"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">Processo Técnico</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Preparação",
                description:
                  "Análise do objeto, preparação de superfícies e posicionamento para scanning",
              },
              {
                step: "02",
                title: "Captura",
                description:
                  "Scanning com múltiplos ângulos para cobertura completa da geometria",
              },
              {
                step: "03",
                title: "Processamento",
                description:
                  "Alinhamento de nuvens de pontos e geração de malha poligonal",
              },
              {
                step: "04",
                title: "Refinamento",
                description:
                  "Limpeza, suavização e exportação em formatos CAD compatíveis",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-accent/20 mb-4">{item.step}</div>
                  <h3 className="text-foreground font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="py-20 bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-xs font-semibold text-accent">CASE STUDY</span>
              </div>
              <h2 className="text-foreground mb-6">
                Engenharia Reversa de Componente Automotivo
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Cliente: Fabricante de autopeças | Desafio: Reproduzir peça descontinuada sem
                documentação original
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solução</h4>
                  <p className="text-muted-foreground text-sm">
                    Realizamos scanning 3D de alta precisão da peça original, gerando modelo CAD
                    completo que permitiu fabricação de ferramentas e produção em série.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Resultado</h4>
                  <p className="text-muted-foreground text-sm">
                    Modelo CAD preciso em 48h | Redução de 60% no tempo de desenvolvimento |
                    Compatibilidade 100% com peça original
                  </p>
                </div>
              </div>

              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Ver Mais Casos <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/scan-3d-showcase-VBUAtiVyeVnagmeyZFLjJY.webp"
                alt="Case Study"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">Especificações Técnicas</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded-2xl p-8">
              <h3 className="text-foreground font-semibold mb-6">Equipamento</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Scanner EinScan Pro 2X V2</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Luz estruturada (LED branca industrial)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Acurácia dimensional certificada de até 40 microns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Área de captura: 150 × 120 mm até 250 × 200 mm (dependendo do modo)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <h3 className="text-foreground font-semibold mb-6">Processamento</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Software: VXelements Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Alinhamento automático de nuvens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Geração de malha otimizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Suavização e limpeza de dados</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <h3 className="text-foreground font-semibold mb-6">Formatos de Saída</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>STL (Stereolithography)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>STEP (CAD paramétrico)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>IGES, OBJ, PLY</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Nuvem de pontos (XYZ, PTS)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-foreground via-secondary/10 to-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/tech-pattern-abstract-kJGUjKGQxtaXLNSzDducNA.webp')`,
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-white mb-6">Pronto para digitalizar seu projeto?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma consulta técnica gratuita
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Solicitar Orçamento <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/">
                <a className="flex items-center gap-2 mb-4 hover:opacity-80 transition">
                  <img src="/assets/logo-icon.png" alt="iSprint" className="w-10 h-10" />
                </a>
              </Link>
              <p className="text-white/60 text-sm">Criação Técnica Digital</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="/scan3d">
                    <a className="hover:text-white transition">Scan 3D</a>
                  </Link>
                </li>
                <li>
                  <Link href="/parametric">
                    <a className="hover:text-white transition">Modelagem Paramétrica</a>
                  </Link>
                </li>
                <li>
                  <Link href="/prototyping">
                    <a className="hover:text-white transition">Prototipagem</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="/">
                    <a className="hover:text-white transition">Home</a>
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="mailto:contato@studioct.com" className="hover:text-white transition">
                    contato@studioct.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5511999999999" className="hover:text-white transition">
                    +55 (11) 99999-9999
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 Studio de Criação Técnica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
