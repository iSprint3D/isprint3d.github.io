import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";

/**
 * DESIGN PHILOSOPHY: Futurism Organic
 * - Smooth transitions and organic movement
 * - Star ratings for social proof
 * - Responsive carousel with touch support
 */

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
    name: "Marina Silva",
    role: "Diretora de Engenharia",
    company: "TechManufacturing",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/avatar-1-female-engineer-KoEyKu4scKS7mNTjV86T8Y.webp",
    text: "O serviço de Scan 3D do Studio iSprint foi essencial para nosso projeto de engenharia reversa. A precisão micrométrica e o processamento rápido superaram nossas expectativas. Recomendamos fortemente!",
    rating: 5,
    service: "Scan 3D",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CEO",
    company: "InnovateLabs",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/avatar-2-male-director-3VH55fYuocbVL8bA7r9KDY.webp",
    text: "A modelagem paramétrica transformou nosso processo de design. Conseguimos explorar 50+ variações de produto em tempo recorde. Excelente qualidade técnica e suporte profissional.",
    rating: 5,
    service: "Modelagem Paramétrica",
  },
  {
    id: 3,
    name: "Beatriz Costa",
    role: "CTO",
    company: "MedTech Innovations",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/avatar-3-female-cto-72KMCAC65Kqp5zQhaDsGy9.webp",
    text: "Para nosso dispositivo médico, a prototipagem técnica foi crucial. O Studio iSprint entregou 3 iterações funcionais em 8 semanas. Profissionalismo impecável do início ao fim.",
    rating: 5,
    service: "Prototipagem Técnica",
  },
  {
    id: 4,
    name: "Roberto Ferreira",
    role: "Diretor de Produto",
    company: "AutomationTech",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/avatar-4-male-entrepreneur-4c9vtYWcPXNag2da7UpLGC.webp",
    text: "Utilizamos todos os três serviços do Studio iSprint em nosso projeto. A integração perfeita entre scan, modelagem e prototipagem acelerou nosso time-to-market significativamente.",
    rating: 5,
    service: "Serviços Completos",
  },
  {
    id: 5,
    name: "Juliana Oliveira",
    role: "Gerente de Projetos",
    company: "DesignStudio Pro",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663312667618/HLPz4AQ2jqaUDP7GsJvDWw/avatar-5-female-manager-Zxxrrhtgtuqqp5jAavvPy3.webp",
    text: "Impressionada com a qualidade dos modelos paramétricos. O Studio iSprint entendeu perfeitamente nossa visão e entregou soluções inovadoras que diferenciaram nossos produtos no mercado.",
    rating: 5,
    service: "Modelagem Paramétrica",
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
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-semibold text-accent">
              DEPOIMENTOS DE CLIENTES
            </span>
          </div>
          <h2 className="text-foreground mb-4">
            Confiança de Clientes Satisfeitos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços de criação
            técnica digital
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white border border-border rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Testimonial Content */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-xl" />
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: currentTestimonial.rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    )
                  )}
                </div>

                {/* Quote */}
                <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                  "{currentTestimonial.text}"
                </p>

                {/* Author Info */}
                <div>
                  <h3 className="font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </p>
                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-xs font-semibold text-accent">
                      {currentTestimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full w-12 h-12 border-border hover:bg-muted"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-2 bg-accent"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full w-12 h-12 border-border hover:bg-muted"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
