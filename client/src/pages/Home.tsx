import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Zap, Boxes, Wrench, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import ContactForm from "@/components/ContactForm";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQSection from "@/components/FAQSection";
import { useAnalytics } from "@/hooks/useAnalytics";
import { FadeInUp, SlideInLeft, SlideInRight, ScaleIn, StaggerContainer } from "@/components/animations";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { trackServiceCardClick, trackCTAClick, trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView("home");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="/assets/logo-icon.png" alt="iSprint" className="w-10 h-10" />
            <img src="/assets/logo-full.png" alt="iSprint" className="h-8 hidden sm:block" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium hover:text-accent transition">
              Serviços
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-accent transition">
              Portfolio
            </a>
            <a href="#sobre" className="text-sm font-medium hover:text-accent transition">
              Sobre
            </a>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Contato
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient and organic shapes */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/hero-3d-abstract-9GdjcUrw74KnNJif6AArCj.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp delay={0.1}>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-semibold text-accent">
                  Criação Técnica Digital
                </span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <h1 className="mb-6 text-foreground leading-tight">
                <span className="block text-5xl md:text-6xl font-bold mb-3">
                  Soluções Técnicas
                </span>
                <span className="block text-4xl md:text-5xl font-semibold text-accent">
                  Digitais Completas
                </span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.25}>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/5 border border-accent/20">
                  <span className="text-sm font-semibold text-accent">Scan 3D</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/5 border border-secondary/20">
                  <span className="text-sm font-semibold text-secondary">Modelagem Paramétrica</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/5 border border-accent/20">
                  <span className="text-sm font-semibold text-accent">Prototipagem</span>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transformamos ideias em modelos digitais de precisão. Utilizamos tecnologia de ponta
                para criar, visualizar e prototipar seus projetos com exatidão técnica e criatividade.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Começar Projeto <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted"
                >
                  Conhecer Serviços
                </Button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

     {/* Services Section */}
<section id="servicos" className="py-20 bg-background">
  <div className="container">
    <FadeInUp delay={0.1}>
      <div className="text-center mb-16">
        <h2 className="text-foreground mb-4">Nossos Serviços</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Soluções técnicas completas para seus projetos de design e engenharia
        </p>
      </div>
    </FadeInUp>

    {/* GRID 2x2 com Imagens de Fundo */}
    <StaggerContainer staggerDelay={0.15} delayOffset={0.2}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Scan 3D */}
      <Link href="/scan3d" onClick={() => trackServiceCardClick("Scan 3D")} className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-8 text-white">
          <span className="text-sm font-semibold text-secondary mb-2">Digitalização Industrial</span>
          <h3 className="text-2xl font-bold mb-3">Scan 3D e Engenharia Reversa</h3>
          <div className="inline-flex items-center text-white font-semibold group-hover:gap-2 transition-all">
            Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>

      {/* Desenvolvimento Mecânico */}
      <Link href="/engenharia" onClick={() => trackServiceCardClick("Desenvolvimento Mecânico")} className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-8 text-white">
          <span className="text-sm font-semibold text-secondary mb-2">Projetos Técnicos</span>
          <h3 className="text-2xl font-bold mb-3">Desenvolvimento Mecânico e Estrutural</h3>
          <div className="inline-flex items-center text-white font-semibold group-hover:gap-2 transition-all">
            Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>

      {/* Modelagem CAD */}
      <Link href="/parametric" onClick={() => trackServiceCardClick("Modelagem CAD")} className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-8 text-white">
          <span className="text-sm font-semibold text-secondary mb-2">Para você imprimir</span>
          <h3 className="text-2xl font-bold mb-3">Modelagem 3D</h3>
          <div className="inline-flex items-center text-white font-semibold group-hover:gap-2 transition-all">
            Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>

      {/* Impressão 3D */}
      <Link href="/prototyping" onClick={() => trackServiceCardClick("Impressão 3D")} className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-8 text-white">
          <span className="text-sm font-semibold text-secondary mb-2">Nós fabricamos para você</span>
          <h3 className="text-2xl font-bold mb-3">Materialização e Impressão 3D</h3>
          <div className="inline-flex items-center text-white font-semibold group-hover:gap-2 transition-all">
            Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>

    </div>
    </StaggerContainer>
  </div>
</section>

          

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container">
          <FadeInUp delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-foreground mb-4">Projetos em Destaque</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Exemplos de trabalhos realizados com precisão técnica e criatividade
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.15} delayOffset={0.2}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/scan-3d-showcase-VBUAtiVyeVnagmeyZFLjJY.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="relative h-80 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Scan 3D Industrial</h3>
                <p className="text-white/80">Digitalização de componentes mecânicos complexos</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/parametric-modeling-m4Xf6moeKPmBRrmyfyA8dP.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="relative h-80 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Modelagem Paramétrica</h3>
                <p className="text-white/80">Sistema de design adaptativo e modular</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/prototyping-lab-VioNudS7Eajax9RG3KTAZp.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="relative h-80 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Prototipagem Lab</h3>
                <p className="text-white/80">Desenvolvimento de protótipos funcionais</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/tech-pattern-abstract-kJGUjKGQxtaXLNSzDducNA.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="relative h-80 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Visualização Técnica</h3>
                <p className="text-white/80">Renderização e apresentação de projetos</p>
              </div>
            </div>
          </div>
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-r from-accent/5 via-secondary/5 to-accent/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideInLeft delay={0.2}>
              <div>
                <h2 className="text-foreground mb-6">Sobre o Studio</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Somos um studio especializado em criação técnica digital, combinando precisão
                de engenharia com criatividade visual. Nosso foco é transformar conceitos em
                modelos digitais de alta qualidade.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Com experiência em scan 3D, modelagem paramétrica e prototipagem, ajudamos
                empresas e profissionais a visualizar, validar e comunicar seus projetos de
                forma inovadora.
              </p>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Agendar Consulta
              </Button>
              </div>
            </SlideInLeft>
            <ScaleIn delay={0.3}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-2xl" />
              <div className="relative bg-white rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">100+</div>
                    <p className="text-muted-foreground">Projetos Realizados</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">100+</div>
                    <p className="text-muted-foreground">Clientes Satisfeitos</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">5+</div>
                    <p className="text-muted-foreground">Anos de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent via-secondary/20 to-accent text-white relative overflow-hidden">
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
          <h2 className="text-white mb-6">Pronto para começar?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos transformar sua ideia em um modelo digital de precisão
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Iniciar Projeto <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">Solicitar Orçamento</h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe entrará em contato com uma proposta personalizada
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/assets/logo-icon.png" alt="iSprint" className="w-10 h-10" />
              </div>
              <p className="text-white/60 text-sm">Criação Técnica Digital</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition">Scan 3D</a></li>
                <li><a href="#" className="hover:text-white transition">Modelagem Paramétrica</a></li>
                <li><a href="#" className="hover:text-white transition">Prototipagem</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="mailto:contato@studioct.com" className="hover:text-white transition">contato@studioct.com</a></li>
                <li><a href="tel:+5511999999999" className="hover:text-white transition">+55 (11) 99999-9999</a></li>
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
