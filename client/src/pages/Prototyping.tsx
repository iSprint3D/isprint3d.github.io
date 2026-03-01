import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import { useAnalytics } from "@/hooks/useAnalytics";

/**
 * DESIGN PHILOSOPHY: Futurism Organic
 * - Consistent with main design system
 * - Detailed technical information with visual hierarchy
 * - Case studies with before/after imagery
 */

export default function Prototyping() {
  const { trackServiceView } = useAnalytics();

  useEffect(() => {
    trackServiceView("Prototipagem Técnica");
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
              backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/prototyping-lab-VioNudS7Eajax9RG3KTAZp.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-semibold text-accent">Prototipagem Técnica</span>
            </div>

            <h1 className="mb-6 text-foreground leading-tight">
              Do Conceito ao Protótipo Funcional
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Transforme suas ideias em protótipos funcionais de alta qualidade. Desde modelos
              conceituais até protótipos de teste, oferecemos soluções técnicas completas para
              validação de produtos antes da produção em série.
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
              <h2 className="text-foreground mb-6">O que é Prototipagem Técnica?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Prototipagem técnica é o processo de criar modelos funcionais de um produto para
                testar conceitos, validar funcionalidades e identificar problemas antes da
                produção em massa. Nossos protótipos são desenvolvidos com precisão técnica e
                atenção aos detalhes.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Utilizamos técnicas avançadas como impressão 3D, usinagem CNC, moldagem e
                montagem manual para criar protótipos que refletem fielmente o produto final.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Validação Funcional</h4>
                    <p className="text-sm text-muted-foreground">
                      Teste funcionalidades antes da produção em série
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Múltiplas Técnicas</h4>
                    <p className="text-sm text-muted-foreground">
                      3D printing, CNC, moldagem e montagem
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Iteração Rápida</h4>
                    <p className="text-sm text-muted-foreground">
                      Ciclos de prototipagem em 1-2 semanas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/prototyping-lab-VioNudS7Eajax9RG3KTAZp.webp"
                alt="Prototyping"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">Processo de Prototipagem</h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Análise",
                description: "Avaliação de requisitos e definição de estratégia de prototipagem",
              },
              {
                step: "02",
                title: "Design",
                description: "Refinamento do design para fabricação e montagem",
              },
              {
                step: "03",
                title: "Fabricação",
                description: "Produção das peças utilizando técnicas apropriadas",
              },
              {
                step: "04",
                title: "Montagem",
                description: "Assembléia das peças e integração de componentes",
              },
              {
                step: "05",
                title: "Testes",
                description: "Validação funcional e relatório de resultados",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-accent/20 mb-4">{item.step}</div>
                  <h3 className="text-foreground font-semibold mb-3 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent" />
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
                Prototipagem de Dispositivo Médico Inovador
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Cliente: Startup de Saúde | Desafio: Validar conceito de novo dispositivo antes
                de investimento em ferramental
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solução</h4>
                  <p className="text-muted-foreground text-sm">
                    Desenvolvemos 3 iterações de protótipos funcionais utilizando impressão 3D
                    de alta precisão e componentes eletrônicos integrados. Cada iteração
                    incorporava feedback dos testes anteriores.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Resultado</h4>
                  <p className="text-muted-foreground text-sm">
                    Validação de conceito em 8 semanas | Redução de 40% em custos de
                    desenvolvimento | Prototipo pronto para testes clínicos
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/prototyping-lab-VioNudS7Eajax9RG3KTAZp.webp"
                alt="Case Study"
                className="relative rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">Técnicas de Prototipagem</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded-2xl p-8">
              <h3 className="text-foreground font-semibold mb-6">Impressão 3D</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>FDM (Filamento)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Resina (SLA/DLP)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Nylon (SLS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Metais (DMLS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Impressão colorida (Polyjet)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <h3 className="text-foreground font-semibold mb-6">Usinagem</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Usinagem CNC 3 eixos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Usinagem CNC 5 eixos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Torneamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Fresagem de precisão</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Corte a laser</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <h3 className="text-foreground font-semibold mb-6">Acabamento</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Moldagem por injeção</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Pintura e revestimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Polimento e lixamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Anodização</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Montagem e integração</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">Materiais Disponíveis</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Plásticos",
                items: ["ABS", "PLA", "PETG", "Nylon", "Resina", "Policarbonato"],
              },
              {
                category: "Metais",
                items: ["Alumínio", "Aço Inox", "Cobre", "Latão", "Titânio"],
              },
              {
                category: "Elastômeros",
                items: ["Borracha", "Silicone", "TPU", "Neoprene"],
              },
              {
                category: "Compostos",
                items: ["Fibra de Carbono", "Fibra de Vidro", "Kevlar"],
              },
            ].map((group, idx) => (
              <div key={idx} className="bg-white border border-border rounded-2xl p-8">
                <h3 className="text-foreground font-semibold mb-6">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
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
          <h2 className="text-white mb-6">Valide seu produto com prototipagem técnica</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Transforme seu conceito em um protótipo funcional pronto para testes
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
