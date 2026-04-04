import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import {
  FadeInUp,
  ScaleIn,
  SlideInLeft,
  StaggerContainer,
} from "@/components/animations";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import useEmblaCarousel from "embla-carousel-react";
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

function CountUp({
  to,
  suffix = "",
  start,
}: {
  to: number;
  suffix?: string;
  start: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const controls = animate(0, to, {
      duration: 3.6,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [start, to]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

const portfolioProjects = [
  {
    href: "/portfolio/carrinho-bbq-rebocavel",
    trackingKey: "portfolio_carrinho_bbq",
    title: "Scan 3D industrial",
    description: "Digitalização de componentes mecânicos complexos",
    image:
      "https://metrology.news/wp-content/uploads/2022/04/Multifunctional-Handheld-3D-Laser-Scanner-Launched-With-Integrated-Photogrammetry.png",
  },
  {
    href: "/portfolio/banco-morsa-para-tubos",
    trackingKey: "portfolio_banco_tubos",
    title: "Modelagem paramétrica",
    description: "Sistema de design adaptativo e modular",
    image: "https://tecnetinc.com/parametric%20defined%20ironcad%20image.png",
  },
  {
    href: "/portfolio/estacao-gym-funcional",
    trackingKey: "portfolio_gym_funcional",
    title: "Prototipagem lab",
    description: "Desenvolvimento de protótipos funcionais",
    image: "https://me.sabanciuniv.edu/sites/me.sabanciuniv.edu/files/pictures/t58_asif_l.jpg",
  },
  {
    href: "/portfolio/vistas-explodidas-detalhamento",
    trackingKey: "portfolio_vistas_explodidas",
    title: "Visualização técnica",
    description: "Renderização e apresentação de projetos",
    image:
      "https://www.researchgate.net/profile/Manfred-Hild/publication/221105153/figure/fig2/AS:669097696165906@1536536730981/Exploded-view-exposing-the-main-components-mechanical-grounding-1-drive-shaft-2.png",
  },
] as const;

export default function Home() {
  const { trackServiceCardClick, trackCTAClick, trackPageView } = useAnalytics();
  const statsRef = useRef<HTMLDivElement | null>(null);
  const contactHighlightTimeoutRef = useRef<number | null>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 160, damping: 22, mass: 0.45 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 160, damping: 22, mass: 0.45 });
  const glowX = useTransform(smoothTiltY, [-10, 10], [35, 65]);
  const glowY = useTransform(smoothTiltX, [-10, 10], [58, 42]);
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.42), rgba(255,255,255,0) 46%)`;
  const [contactSectionHighlighted, setContactSectionHighlighted] = useState(false);
  const [portfolioEmblaRef, portfolioEmblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [portfolioPaused, setPortfolioPaused] = useState(false);

  useEffect(() => {
    trackPageView("home");

    return () => {
      if (contactHighlightTimeoutRef.current) {
        window.clearTimeout(contactHighlightTimeoutRef.current);
      }
    };
  }, [trackPageView]);

  useEffect(() => {
    if (!portfolioEmblaApi) return;

    const onSelect = () => {
      setPortfolioIndex(portfolioEmblaApi.selectedScrollSnap());
    };

    onSelect();
    portfolioEmblaApi.on("select", onSelect);
    portfolioEmblaApi.on("reInit", onSelect);

    return () => {
      portfolioEmblaApi.off("select", onSelect);
      portfolioEmblaApi.off("reInit", onSelect);
    };
  }, [portfolioEmblaApi]);

  useEffect(() => {
    if (!portfolioEmblaApi || portfolioPaused) return;

    const interval = window.setInterval(() => {
      portfolioEmblaApi.scrollNext();
    }, 6200);

    return () => {
      window.clearInterval(interval);
    };
  }, [portfolioEmblaApi, portfolioPaused]);

  const handleSectionScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    ctaName: string,
    location: string,
  ) => {
    event.preventDefault();
    trackCTAClick(ctaName, location);

    const target = document.getElementById(sectionId);
    if (!target) {
      window.location.hash = sectionId;
      return;
    }

    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 28;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });

    if (sectionId === "contato") {
      setContactSectionHighlighted(true);

      if (contactHighlightTimeoutRef.current) {
        window.clearTimeout(contactHighlightTimeoutRef.current);
      }

      contactHighlightTimeoutRef.current = window.setTimeout(() => {
        setContactSectionHighlighted(false);
      }, 1800);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-foreground">
      <section className="relative overflow-hidden bg-[#2722f8]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#4f4bff]/60 blur-3xl" />
        </div>

        <div className="container relative z-10 pt-7 pb-12 md:pt-8 md:pb-20">
          <nav className="mb-10 flex items-center justify-between md:mb-14">
            <a href="/" className="text-3xl font-semibold tracking-tight text-white">
              iSprint
            </a>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#servicos" className="text-lg font-medium text-white/85 transition hover:text-white">
                Serviços
              </a>
              <a href="#sobre" className="text-lg font-medium text-white/85 transition hover:text-white">
                Quem somos
              </a>
              <a href="#contato" className="text-lg font-medium text-white/85 transition hover:text-white">
                Contato
              </a>
              <a href="#portfolio" className="text-lg font-medium text-white/85 transition hover:text-white">
                Portfólio
              </a>
            </div>
            <Button
              className="border border-white/45 bg-white/15 text-white hover:bg-white/25 md:hidden"
              onClick={() => trackCTAClick("contato", "hero_nav_mobile")}
            >
              Contato
            </Button>
          </nav>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.08fr]">
            <FadeInUp delay={0.15}>
              <div className="max-w-xl pb-4">
                <h1 className="mb-7 text-[3rem] font-semibold leading-[0.94] tracking-tight text-white sm:text-[4rem] lg:text-[5.2rem]">
                  Produtos 3D para negócios e indústrias.
                </h1>
                <p className="mb-8 max-w-lg text-xl leading-relaxed text-white/90">
                  Desenvolvemos soluções 3D para negócios e indústrias, combinando engenharia,
                  modelagem e prototipagem para validar projetos com mais rapidez e segurança.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="group relative min-w-[220px] overflow-hidden rounded-full bg-black px-7 text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/92 hover:shadow-[0_24px_50px_rgba(0,0,0,0.34)] sm:min-w-[240px]"
                  >
                    <a
                      href="#contato"
                      onClick={(event) =>
                        handleSectionScroll(
                          event,
                          "contato",
                          "comecar_projeto",
                          "hero_to_orcamento",
                        )
                      }
                    >
                      <span className="absolute inset-y-0 left-[-18%] w-14 -skew-x-12 bg-white/15 opacity-0 transition-all duration-700 group-hover:left-[112%] group-hover:opacity-100" />
                      <span className="relative">Começar projeto</span>
                      <ArrowRight className="relative ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border border-white bg-white text-black hover:bg-white/90"
                  >
                    <a
                      href="#servicos"
                      onClick={() => trackCTAClick("explorar_servicos", "hero_to_servicos")}
                    >
                      Explorar serviços
                    </a>
                  </Button>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.25}>
              <motion.div
                className="relative h-[380px] overflow-hidden rounded-sm border border-black/10 bg-[#ebebeb] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)] sm:h-[500px] lg:h-[650px]"
                style={{ perspective: 1200, rotateX: smoothTiltX, rotateY: smoothTiltY }}
                onMouseMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect();
                  const ratioX = (event.clientX - bounds.left) / bounds.width;
                  const ratioY = (event.clientY - bounds.top) / bounds.height;
                  tiltY.set((ratioX - 0.5) * 12);
                  tiltX.set((0.5 - ratioY) * 10);
                }}
                onMouseLeave={() => {
                  tiltX.set(0);
                  tiltY.set(0);
                }}
              >
                <iframe
                  title="Modelo 3D interativo"
                  src="https://my.spline.design/interactiverobotarm-KjqpJlIkinWteU8Q84LGEdX1/"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="eager"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
                <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
                <div className="pointer-events-none absolute left-4 top-4 rounded-lg border border-white/40 bg-white/75 px-3 py-2 text-xs font-medium text-black/70 backdrop-blur sm:text-sm">
                  Modelo 3D interativo
                </div>
              </motion.div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-background py-16">
        <div className="container">
          <FadeInUp delay={0.1}>
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-foreground">Nossos Serviços</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Soluções técnicas completas para seus projetos de design e engenharia
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.15} delayOffset={0.2}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Link
                href="/scan3d"
                onClick={() => trackServiceCardClick("Scan 3D")}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://www.einscan.com/wp-content/uploads/2025/06/einscan.com-einscan-rigil-mobile.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/58 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-8 text-white">
                  <span className="mb-2 text-sm font-medium text-white/80">Digitalização industrial</span>
                  <h3 className="mb-3 text-2xl font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]">
                    Scan 3D e engenharia reversa
                  </h3>
                  <div className="inline-flex items-center gap-2 rounded-md border border-white/70 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/12">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>

              <a
                href="#contato"
                onClick={() => trackCTAClick("desenvolvimento_mecanico", "services_contact")}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://damassets.autodesk.net/content/dam/autodesk/draftr/23906/cad-for-machine-design-landing-intro-panel-1172x660-2.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/58 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-8 text-white">
                  <span className="mb-2 text-sm font-medium text-white/80">Projetos técnicos</span>
                  <h3 className="mb-3 text-2xl font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]">
                    Desenvolvimento mecânico e estrutural
                  </h3>
                  <div className="inline-flex items-center gap-2 rounded-md border border-white/70 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/12">
                    Solicitar proposta <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </a>

              <Link
                href="/parametric"
                onClick={() => trackServiceCardClick("Modelagem CAD")}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://www.autodesk.com/products/fusion-360/blog/wp-content/uploads/2022/03/sim1.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/58 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-8 text-white">
                  <span className="mb-2 text-sm font-medium text-white/80">Para fabricar com precisão</span>
                  <h3 className="mb-3 text-2xl font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]">
                    Modelagem 3D e CAD
                  </h3>
                  <div className="inline-flex items-center gap-2 rounded-md border border-white/70 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/12">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>

              <Link
                href="/prototyping"
                onClick={() => trackServiceCardClick("Impressão 3D")}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://blog.prusa3d.com/wp-content/uploads/2018/02/farm01.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/58 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-8 text-white">
                  <span className="mb-2 text-sm font-medium text-white/80">Nós fabricamos para você</span>
                  <h3 className="mb-3 text-2xl font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]">
                    Materialização e impressão 3D
                  </h3>
                  <div className="inline-flex items-center gap-2 rounded-md border border-white/70 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/12">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container">
          <FadeInUp delay={0.1}>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-foreground">Projetos em Destaque</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Exemplos de trabalhos realizados com precisão técnica e criatividade
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.18}>
            <div className="relative">
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Deslize para os lados ou use os controles para navegar pelos projetos.
                </p>
                <div className="hidden items-center gap-3 md:flex">
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    className="h-11 w-11 rounded-full border-border bg-white/90"
                    onClick={() => portfolioEmblaApi?.scrollPrev()}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    className="h-11 w-11 rounded-full border-border bg-white/90"
                    onClick={() => portfolioEmblaApi?.scrollNext()}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div
                className="overflow-hidden"
                ref={portfolioEmblaRef}
                onMouseEnter={() => setPortfolioPaused(true)}
                onMouseLeave={() => setPortfolioPaused(false)}
              >
                <div className="-ml-5 flex">
                  {portfolioProjects.map((project, index) => (
                    <div
                      key={project.href}
                      className="min-w-0 flex-[0_0_88%] pl-5 sm:flex-[0_0_72%] lg:flex-[0_0_43%] xl:flex-[0_0_39%]"
                    >
                      <Link
                        href={project.href}
                        onClick={() => trackCTAClick(project.trackingKey, "home_portfolio")}
                        className="group relative block overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition-all duration-500"
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url('${project.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/58 to-transparent" />
                        <div className="relative flex h-80 flex-col justify-end p-8 text-white">
                          <h3 className="mb-2 text-2xl font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]">
                            {project.title}
                          </h3>
                          <p className="text-sm font-medium text-white/80">{project.description}</p>
                          <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/70 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/12">
                            Saiba mais <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {portfolioProjects.map((project, index) => (
                  <button
                    key={project.href}
                    type="button"
                    onClick={() => portfolioEmblaApi?.scrollTo(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === portfolioIndex
                        ? "h-2.5 w-9 bg-accent"
                        : "h-2.5 w-2.5 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Ir para projeto ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section id="sobre" className="bg-gradient-to-r from-accent/5 via-secondary/5 to-accent/5 py-20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <SlideInLeft delay={0.2}>
              <div>
                <h2 className="mb-6 text-foreground">Sobre o Studio</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Somos um estúdio especializado em criação técnica digital, com sede em João Pessoa,
                  Paraíba. Unimos precisão de engenharia à criatividade visual para transformar ideias
                  em modelos digitais funcionais, prontos para validação, prototipagem e produção.
                </p>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Atuamos com escaneamento 3D, modelagem paramétrica e desenvolvimento de peças
                  técnicas, atendendo desde profissionais autônomos até empresas que precisam de
                  soluções confiáveis e bem executadas.
                </p>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Com experiência em scan 3D, modelagem paramétrica e prototipagem, ajudamos equipes
                  a visualizar, validar e comunicar seus projetos com mais clareza, velocidade e
                  aplicabilidade real.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="group relative min-w-[220px] overflow-hidden rounded-full bg-accent px-6 text-accent-foreground shadow-[0_16px_35px_rgba(39,34,248,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/92 hover:shadow-[0_22px_45px_rgba(39,34,248,0.3)]"
                  >
                    <a
                      href="#contato"
                      onClick={(event) =>
                        handleSectionScroll(event, "contato", "agendar_consulta", "about_section")
                      }
                    >
                      <span className="absolute inset-y-0 left-[-18%] w-14 -skew-x-12 bg-white/18 opacity-0 transition-all duration-700 group-hover:left-[112%] group-hover:opacity-100" />
                      <span className="relative">Agendar consulta</span>
                      <ArrowRight className="relative ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>

                  <Link href="/faca-parte">
                    <a
                      onClick={() => trackCTAClick("faca_parte", "about_section")}
                      className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-accent/20 bg-white px-6 py-3 text-sm font-medium text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent/5"
                    >
                      Fazer parte da iSprint
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Link>
                </div>
              </div>
            </SlideInLeft>

            <ScaleIn delay={0.3}>
              <div className="relative" ref={statsRef}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 blur-2xl" />
                <div className="relative rounded-2xl border border-border bg-white p-8">
                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 text-3xl font-bold text-accent">
                        <CountUp to={100} suffix="+" start={statsInView} />
                      </div>
                      <p className="text-muted-foreground">Projetos realizados</p>
                    </div>
                    <div>
                      <div className="mb-2 text-3xl font-bold text-secondary">
                        <CountUp to={100} suffix="+" start={statsInView} />
                      </div>
                      <p className="text-muted-foreground">Clientes satisfeitos</p>
                    </div>
                    <div>
                      <div className="mb-2 text-3xl font-bold text-foreground">
                        <CountUp to={5} suffix="+" start={statsInView} />
                      </div>
                      <p className="text-muted-foreground">Anos de experiência</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <section className="bg-[#2722f8] py-20 text-white">
        <div className="container relative z-10 text-center">
          <h2 className="mb-6 text-white">Pronto para começar?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Entre em contato conosco e vamos transformar sua ideia em um modelo digital de precisão.
          </p>
          <Button
            asChild
            size="lg"
            className="group relative min-w-[230px] overflow-hidden rounded-full bg-white px-7 text-[#2722f8] shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/92 hover:text-[#2722f8] hover:shadow-[0_24px_50px_rgba(0,0,0,0.22)] sm:min-w-[250px]"
          >
            <a
              href="#contato"
              onClick={(event) =>
                handleSectionScroll(event, "contato", "iniciar_projeto", "bottom_cta")
              }
            >
              <span className="absolute inset-y-0 left-[-18%] w-14 -skew-x-12 bg-[#2722f8]/14 opacity-0 transition-all duration-700 group-hover:left-[112%] group-hover:opacity-100" />
              <span className="relative">Iniciar projeto</span>
              <ArrowRight className="relative ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>

      <FAQSection />

      <section id="contato" className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-foreground">Solicitar orçamento</h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe entrará em contato com uma proposta
                personalizada.
              </p>
            </div>
            <motion.div
              animate={
                contactSectionHighlighted
                  ? {
                      scale: [1, 1.012, 1],
                      boxShadow: [
                        "0 0 0 rgba(39,34,248,0)",
                        "0 28px 80px rgba(39,34,248,0.18)",
                        "0 0 0 rgba(39,34,248,0)",
                      ],
                    }
                  : { scale: 1, boxShadow: "0 0 0 rgba(39,34,248,0)" }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-gradient-to-br from-accent/5 via-secondary/5 to-accent/5 p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground py-12 text-white">
        <div className="container">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <img src="/assets/logo-icon.png" alt="iSprint" className="h-10 w-10" />
              </div>
              <p className="text-sm text-white/60">Criação técnica digital</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Serviços</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#servicos" className="transition hover:text-white">
                    Scan 3D
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="transition hover:text-white">
                    Modelagem paramétrica
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="transition hover:text-white">
                    Prototipagem
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#sobre" className="transition hover:text-white">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="transition hover:text-white">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#contato" className="transition hover:text-white">
                    Contato
                  </a>
                </li>
                <li>
                  <Link href="/faca-parte">
                    <a className="transition hover:text-white">Faça parte</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Contato</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="mailto:isprintstudio@gmail.com" className="transition hover:text-white">
                    isprintstudio@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5583991854711" className="transition hover:text-white">
                    +55 (83) 99185-4711
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 Studio iSprint. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
