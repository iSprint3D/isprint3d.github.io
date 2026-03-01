import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Futurism Organic
 * - Clean accordion design with smooth animations
 * - Organized by service category
 * - Clear visual hierarchy and spacing
 */

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "scan-1",
    category: "Scan 3D",
    question: "Qual é a precisão do seu serviço de Scan 3D?",
    answer:
      "Nosso serviço de Scan 3D oferece precisão de até 0.1mm, dependendo do tamanho e complexidade do objeto. Utilizamos tecnologia de ponta com scanners de última geração para garantir modelos digitais de alta fidelidade que podem ser usados para engenharia reversa, prototipagem e análise técnica.",
  },
  {
    id: "scan-2",
    category: "Scan 3D",
    question: "Qual é o tamanho máximo de objeto que vocês conseguem escanear?",
    answer:
      "Podemos escanear objetos desde alguns milímetros até estruturas de vários metros. Para peças muito grandes, utilizamos técnicas de escaneamento modular, dividindo o objeto em seções e unindo-as digitalmente. Consulte-nos para casos específicos.",
  },
  {
    id: "scan-3",
    category: "Scan 3D",
    question: "Em quanto tempo recebo o modelo 3D após o escaneamento?",
    answer:
      "O tempo de processamento varia conforme a complexidade: objetos simples (2-3 dias), objetos médios (5-7 dias), objetos complexos (10-15 dias). Oferecemos opções de processamento acelerado com custo adicional se você precisar de entrega mais rápida.",
  },
  {
    id: "scan-4",
    category: "Scan 3D",
    question: "Quais formatos de arquivo vocês entregam?",
    answer:
      "Entregamos em múltiplos formatos: STL, OBJ, STEP, IGES, PLY e FBX. Você pode escolher o formato mais adequado para seu software de design ou engenharia. Também fornecemos nuvem de pontos em formato LAZ ou XYZ se necessário.",
  },
  {
    id: "param-1",
    category: "Modelagem Paramétrica",
    question: "O que exatamente é modelagem paramétrica?",
    answer:
      "Modelagem paramétrica é uma abordagem de design onde o modelo é controlado por parâmetros (dimensões, ângulos, etc.). Isso permite criar variações infinitas do design mantendo as relações geométricas. Se você mudar um parâmetro, todo o modelo se adapta automaticamente.",
  },
  {
    id: "param-2",
    category: "Modelagem Paramétrica",
    question: "Quantas variações de design posso criar com modelagem paramétrica?",
    answer:
      "Teoricamente, variações infinitas! Você pode explorar diferentes tamanhos, proporções, materiais e configurações sem precisar recriar o modelo do zero. Isso é especialmente útil para otimizar designs, testar diferentes cenários ou criar famílias de produtos.",
  },
  {
    id: "param-3",
    category: "Modelagem Paramétrica",
    question: "Qual software vocês usam para modelagem paramétrica?",
    answer:
      "Utilizamos Fusion 360, Rhino com Grasshopper, SolidWorks e Autodesk Inventor, dependendo das necessidades do projeto. Podemos trabalhar com seus arquivos existentes ou criar modelos paramétricos do zero. Consulte-nos sobre qual ferramenta é melhor para seu caso.",
  },
  {
    id: "param-4",
    category: "Modelagem Paramétrica",
    question: "Posso usar modelos paramétricos para manufatura?",
    answer:
      "Sim! Modelos paramétricos podem ser otimizados para manufatura e exportados para máquinas CNC, impressoras 3D ou outros processos de produção. Garantimos que os modelos sejam tecnicamente viáveis e prontos para fabricação.",
  },
  {
    id: "proto-1",
    category: "Prototipagem Técnica",
    question: "Qual é a diferença entre prototipagem técnica e impressão 3D comum?",
    answer:
      "Prototipagem técnica vai além da impressão 3D. Inclui design otimizado, seleção de materiais, testes de resistência, simulações, montagem e validação funcional. Criamos protótipos que realmente funcionam e podem ser testados em condições reais.",
  },
  {
    id: "proto-2",
    category: "Prototipagem Técnica",
    question: "Quanto tempo leva para ter um protótipo funcional?",
    answer:
      "Depende da complexidade: protótipos simples (2-3 semanas), protótipos médios (4-8 semanas), protótipos complexos com testes (8-16 semanas). Oferecemos opções de desenvolvimento iterativo onde você recebe versões melhoradas progressivamente.",
  },
  {
    id: "proto-3",
    category: "Prototipagem Técnica",
    question: "Vocês fazem testes de resistência e simulação?",
    answer:
      "Sim! Realizamos análises de elementos finitos (FEA), testes de resistência, simulações de stress, análises térmicas e dinâmicas. Isso garante que seu protótipo não apenas pareça bom, mas também funcione perfeitamente sob condições reais de uso.",
  },
  {
    id: "proto-4",
    category: "Prototipagem Técnica",
    question: "Posso iterar no design durante o processo de prototipagem?",
    answer:
      "Absolutamente! Oferecemos ciclos iterativos onde você recebe versões do protótipo, testa, fornece feedback, e nós fazemos ajustes. Isso acelera a chegada ao design final e reduz riscos ao lançar o produto no mercado.",
  },
  {
    id: "geral-1",
    category: "Geral",
    question: "Qual é o valor mínimo de projeto que vocês aceitam?",
    answer:
      "Não temos valor mínimo fixo. Trabalhamos com projetos de qualquer tamanho, desde pequenas peças até grandes estruturas. Fazemos orçamentos personalizados baseados na complexidade, tempo e recursos necessários. Solicite uma consulta gratuita.",
  },
  {
    id: "geral-2",
    category: "Geral",
    question: "Vocês assinam NDA (Acordo de Confidencialidade)?",
    answer:
      "Sim, assinamos NDAs para proteger a propriedade intelectual de nossos clientes. Entendemos que muitos projetos são confidenciais e garantimos total sigilo sobre suas especificações e designs.",
  },
  {
    id: "geral-3",
    category: "Geral",
    question: "Como funciona o processo de orçamento?",
    answer:
      "Você nos envia as especificações do projeto (desenhos, descrição, requisitos). Analisamos e apresentamos um orçamento detalhado com escopo, prazo e deliverables. Após aprovação, assinamos contrato e iniciamos o trabalho.",
  },
  {
    id: "geral-4",
    category: "Geral",
    question: "Vocês oferecem suporte pós-projeto?",
    answer:
      "Sim! Oferecemos suporte técnico após entrega, ajustes menores sem custo adicional, e consultoria sobre próximas etapas (manufatura, otimizações, etc.). Também disponibilizamos manutenção de modelos paramétricos se você precisar fazer alterações no futuro.",
  },
];

const categories = ["Scan 3D", "Modelagem Paramétrica", "Prototipagem Técnica", "Geral"];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Scan 3D");

  const filteredFAQs = faqItems.filter((item) => item.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-secondary/5 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-semibold text-accent">
              DÚVIDAS FREQUENTES
            </span>
          </div>
          <h2 className="text-foreground mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços de criação técnica digital
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setExpandedId(null);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-white border border-border text-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-left font-semibold text-foreground">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {expandedId === item.id && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Não encontrou sua pergunta?
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
