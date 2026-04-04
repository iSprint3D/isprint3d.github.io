import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Felipe Santos",
    role: "Softcom Employee",
    company: "Softcom",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_lSxJ3JeWX2G4-yT5swCdMfVaB74-IYw4zOVLGvcjp5rPY=s900-c-k-c0x00ffffff-no-rj",
    text: "Buscávamos uma forma de elevar o padrão visual e a organização dos nossos pontos de atendimento. O Studio iSprint desenvolveu uma solução personalizada que integra a máquina de cartão e o scanner em uma única estrutura, eliminando improvisos e trazendo mais profissionalismo ao ambiente. O resultado foi uma apresentação mais premium, com impacto direto na percepção dos nossos clientes e na eficiência do uso no dia a dia. A comunicação clara e o atendimento atencioso durante todo o processo foram diferenciais que tornaram a experiência ainda mais positiva. Recomendo fortemente para quem busca qualidade e inovação em soluções técnicas.",
    rating: 5,
    service: "Modelagem 3D Personalizada",
  },
  {
    id: 2,
    name: "Jorge Matheus",
    role: "CEO",
    company: "AeroRobots",
    image:
      "https://yt3.googleusercontent.com/8VKF1bvhLEGz2XxKkLZegCljrJEwF3aBqfzZIsqB6cBdENRXCiMtx7vOEzx-3vKfGJ01KITkFw=s900-c-k-c0x00ffffff-no-rj",
    text: "Tínhamos problemas recorrentes com falhas e quebras no sistema de acoplamento do aeromodelo. O Studio iSprint desenvolveu uma solução com encaixe rápido e sistema de trava seguro, garantindo maior estabilidade durante os voos. Isso aumentou a confiabilidade do equipamento e reduziu significativamente os custos com manutenção e substituição de peças.",
    rating: 5,
    service: "Modelagem Paramétrica",
  },
  {
    id: 3,
    name: "Vitória Monalisa",
    role: "CEO",
    company: "Studio Vitória Design",
    image: "/assets/studio-vitoria-designer.jpg",
    text: "Queria trazer mais identidade para o meu espaço e fortalecer minha marca no ambiente físico. O Studio iSprint transformou minha logo em uma peça 3D com excelente acabamento, que hoje uso como elemento de destaque e marketing. Além disso, desenvolveu um suporte de medalhas personalizado, com montagem simples e bem planejada. A comunicação foi clara durante todo o processo, e o resultado final ficou exatamente como eu imaginava. Recomendo muito para quem busca qualidade e um atendimento atencioso.",
    rating: 5,
    service: "Modelagem 3D Personalizada",
  },
  {
    id: 4,
    name: "José Henrique",
    role: "CEO",
    company: "Mater Dei Design",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViLdYleva1tUcf0msIrLHdb48kN3J0uhF3Q&s",
    text: "Precisávamos de uma solução escalável para adaptar o produto a diferentes dimensões sem retrabalho. O Studio iSprint desenvolveu um modelo paramétrico que permite ajustes rápidos de altura e largura com consistência técnica. O resultado foi uma redução significativa no tempo de desenvolvimento e fabricação, além de maior agilidade para atender diferentes demandas sem comprometer a qualidade.",
    rating: 5,
    service: "Modelagem Paramétrica",
  },
  {
    id: 5,
    name: "Rawan Costa",
    role: "Estudante",
    company: "Equipe de Robótica Criadores do Amanhã",
    image: "/assets/first-logo-local.jpg",
    text: "Precisávamos de uma solução resistente para proteger as rodas do robô em competições com alto impacto. O Studio iSprint cuidou da manufatura das peças em PETG, com recomendações técnicas que garantiram alta resistência e confiabilidade. As armaduras suportaram duas competições intensas sem falhas, eliminando um ponto crítico do nosso robô.",
    rating: 5,
    service: "Impressão 3D Técnica",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { trackCarouselInteraction } = useAnalytics();

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsAutoPlay(false);
    trackCarouselInteraction("previous", newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
    setIsAutoPlay(false);
    trackCarouselInteraction("next", newIndex);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    trackCarouselInteraction("dot_click", index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gradient-to-b from-white via-blue-50/20 to-white py-20">
      <div className="container">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#2722f8] px-4 py-2">
            <span className="text-sm font-semibold text-white">DEPOIMENTOS DE CLIENTES</span>
          </div>
          <h2 className="mb-4 text-foreground">Confiança de Clientes Satisfeitos</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Veja o que nossos clientes dizem sobre nossos serviços de criação técnica digital
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-lg md:p-12">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex-shrink-0">
                <div className="relative h-32 w-32 md:h-40 md:w-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 blur-xl" />
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-lg"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="mb-6 text-lg italic leading-relaxed text-foreground">
                  "{currentTestimonial.text}"
                </p>

                <div>
                  <h3 className="font-semibold text-foreground">{currentTestimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </p>
                  <div className="mt-3 inline-block rounded-full bg-[#2722f8] px-3 py-1">
                    <span className="text-xs font-semibold text-white">
                      {currentTestimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="h-12 w-12 rounded-full border-border hover:bg-muted"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "h-2 w-8 bg-accent"
                      : "h-2 w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-12 w-12 rounded-full border-border hover:bg-muted"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
