import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Boxes } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import { useAnalytics } from "@/hooks/useAnalytics";

/**
 * DESIGN PHILOSOPHY: Futurism Organic
 * - Consistent with main design system
 * - Detailed technical information with visual hierarchy
 * - Case studies with before/after imagery
 */

export default function ParametricModeling() {
  const { trackServiceView } = useAnalytics();

  useEffect(() => {
    trackServiceView("Modelagem Paramétrica");
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
              backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/parametric-modeling-m4Xf6moeKPmBRrmyfyA8dP.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-semibold text-accent">Modelagem Paramétrica</span>
            </div>

            <h1 className="mb-6 text-foreground leading-tight">
              Design Inteligente e Adaptativo
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Crie modelos 3D que se adaptam automaticamente a mudanças de parâmetros. Designs
              paramétricos permitem gerar infinitas variações mantendo controle total sobre cada
              aspecto do modelo. Ideal para otimização de produtos e exploração de alternativas.
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
      <section className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-foreground mb-6">O que é Modelagem Paramétrica?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Modelagem paramétrica é uma abordagem de design onde o modelo é controlado por
                parâmetros e relações matemáticas. Ao alterar um parâmetro, toda a geometria se
                atualiza automaticamente, mantendo as relações e restrições definidas.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Essa metodologia permite exploração rápida de alternativas de design, otimização
                de geometrias e criação de famílias de produtos com variações controladas.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Flexibilidade Total</h4>
                    <p className="text-sm text-muted-foreground">
                      Altere dimensões e veja atualizações instantâneas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Otimização Rápida</h4>
                    <p className="text-sm text-muted-foreground">
                      Explore múltiplas variações em horas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Documentação Automática</h4>
                    <p className="text-sm text-muted-foreground">
                      Desenhos técnicos atualizados automaticamente
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/parametric-modeling-m4Xf6moeKPmBRrmyfyA8dP.webp"
                alt="Parametric Modeling"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">Processo de Design Paramétrico</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Definição de Parâmetros",
                description:
                  "Identificar variáveis principais que controlam o design (dimensões, proporções, etc)",
              },
              {
                step: "02",
                title: "Construção de Relações",
                description:
                  "Estabelecer relações matemáticas e restrições entre os parâmetros",
              },
              {
                step: "03",
                title: "Modelagem Inteligente",
                description:
                  "Criar geometria que responde automaticamente às mudanças de parâmetros",
              },
              {
                step: "04",
                title: "Exploração e Otimização",
                description:
                  "Testar variações e otimizar design conforme critérios específicos",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-secondary/20 mb-4">{item.step}</div>
                  <h3 className="text-foreground font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-secondary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-xs font-semibold text-accent">CASE STUDY</span>
              </div>
              <h2 className="text-foreground mb-6">
                Sistema Modular de Mobiliário Paramétrico
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Cliente: Fabricante de móveis | Desafio: Criar linha de produtos modulares com
                múltiplas configurações
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solução</h4>
                  <p className="text-muted-foreground text-sm">
                    Desenvolvemos modelo paramétrico que permite gerar 50+ variações de
                    configuração a partir de 8 parâmetros principais (altura, profundidade,
                    largura, número de prateleiras, etc).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Resultado</h4>
                  <p className="text-muted-foreground text-sm">
                    Redução de 80% no tempo de design | Desenhos técnicos automáticos | Facilidade
                    para customização por cliente
                  </p>
                </div>
              </div>

              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Ver Mais Casos <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/parametric-modeling-m4Xf6moeKPmBRrmyfyA8dP.webp"
                alt="Case Study"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">Ferramentas e Tecnologias</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded-2xl p-8">
              <h3 className="text-foreground font-semibold mb-6">Software CAD</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Autodesk Fusion 360</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Rhinoceros + Grasshopper</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Autodesk Inventor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>SolidWorks Premium</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <h3 className="text-foreground font-semibold mb-6">Análise e Simulação</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Análise FEA (Elementos Finitos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Simulação de fluxo (CFD)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Otimização topológica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Análise de movimento</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <h3 className="text-foreground font-semibold mb-6">Renderização</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Keyshot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>V-Ray</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Visualização em tempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Apresentações interativas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">Benefícios da Modelagem Paramétrica</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Iteração Rápida",
                description:
                  "Teste múltiplas variações de design em horas em vez de semanas",
              },
              {
                title: "Consistência de Design",
                description:
                  "Mantenha regras de design consistentes em toda a família de produtos",
              },
              {
                title: "Redução de Erros",
                description:
                  "Relações matemáticas garantem precisão e evitam inconsistências",
              },
              {
                title: "Customização em Massa",
                description:
                  "Gere variações personalizadas para diferentes clientes automaticamente",
              },
              {
                title: "Documentação Automática",
                description:
                  "Desenhos técnicos e listas de materiais atualizadas automaticamente",
              },
              {
                title: "Otimização Facilitada",
                description:
                  "Explore espaço de design e encontre soluções ótimas rapidamente",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
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
          <h2 className="text-white mb-6">Transforme seu design com parametrização</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Descubra como a modelagem paramétrica pode acelerar seu processo de desenvolvimento
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
