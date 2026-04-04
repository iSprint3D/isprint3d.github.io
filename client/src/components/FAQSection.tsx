import { useState } from "react";
import { ChevronDown, Mail, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      "Nosso serviço de Scan 3D oferece precisão de até 0,1 mm, dependendo do tamanho e da complexidade do objeto. Utilizamos tecnologia de ponta para garantir modelos digitais de alta fidelidade, prontos para engenharia reversa, prototipagem e análise técnica.",
  },
  {
    id: "scan-2",
    category: "Scan 3D",
    question: "Qual é o tamanho máximo de objeto que vocês conseguem escanear?",
    answer:
      "Podemos escanear desde objetos pequenos até estruturas de grande porte. Para peças muito grandes, utilizamos escaneamento modular, dividindo o objeto em seções e unindo tudo digitalmente depois.",
  },
  {
    id: "scan-3",
    category: "Scan 3D",
    question: "Em quanto tempo recebo o modelo 3D após o escaneamento?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Em geral, peças simples levam de 2 a 3 dias, peças médias de 5 a 7 dias e projetos mais complexos podem levar de 10 a 15 dias.",
  },
  {
    id: "scan-4",
    category: "Scan 3D",
    question: "Quais formatos de arquivo vocês entregam?",
    answer:
      "Trabalhamos com formatos como STL, OBJ, STEP, IGES, PLY e FBX. Assim, você recebe o material no formato mais adequado para seu fluxo de design, engenharia ou fabricação.",
  },
  {
    id: "param-1",
    category: "Modelagem Paramétrica",
    question: "O que exatamente é modelagem paramétrica?",
    answer:
      "É uma abordagem de design em que o modelo é controlado por parâmetros, como dimensões, espessuras e ângulos. Isso permite ajustar e gerar variações do projeto com muito mais rapidez e consistência.",
  },
  {
    id: "param-2",
    category: "Modelagem Paramétrica",
    question: "Quantas variações de design posso criar com modelagem paramétrica?",
    answer:
      "Na prática, inúmeras. A grande vantagem é conseguir testar diferentes proporções, tamanhos e configurações sem reconstruir o modelo do zero sempre que houver uma mudança.",
  },
  {
    id: "param-3",
    category: "Modelagem Paramétrica",
    question: "Qual software vocês usam para modelagem paramétrica?",
    answer:
      "Utilizamos ferramentas como Fusion 360, Rhino com Grasshopper, SolidWorks e Autodesk Inventor, de acordo com o tipo de projeto e a necessidade técnica envolvida.",
  },
  {
    id: "param-4",
    category: "Modelagem Paramétrica",
    question: "Posso usar modelos paramétricos para manufatura?",
    answer:
      "Sim. Os modelos podem ser preparados para fabricação e exportados para CNC, impressão 3D e outros processos industriais, sempre considerando viabilidade técnica e acabamento adequado.",
  },
  {
    id: "proto-1",
    category: "Prototipagem Técnica",
    question: "Qual é a diferença entre prototipagem técnica e impressão 3D comum?",
    answer:
      "A prototipagem técnica vai além da impressão. Ela envolve ajuste de projeto, escolha de material, validação funcional e, quando necessário, iterações para garantir que o protótipo faça sentido em uso real.",
  },
  {
    id: "proto-2",
    category: "Prototipagem Técnica",
    question: "Quanto tempo leva para ter um protótipo funcional?",
    answer:
      "Depende da complexidade do produto. Protótipos simples costumam levar de 2 a 3 semanas, enquanto protótipos mais elaborados podem exigir de 4 a 8 semanas ou mais.",
  },
  {
    id: "proto-3",
    category: "Prototipagem Técnica",
    question: "Vocês fazem testes de resistência e simulação?",
    answer:
      "Sim. Quando o projeto exige, realizamos análises e validações técnicas para ajudar a verificar comportamento estrutural, encaixes, interferências e viabilidade do protótipo.",
  },
  {
    id: "proto-4",
    category: "Prototipagem Técnica",
    question: "Posso iterar no design durante o processo de prototipagem?",
    answer:
      "Sim. Trabalhamos de forma iterativa justamente para evoluir o projeto com segurança, reduzindo riscos e melhorando o resultado final antes da fase de produção.",
  },
  {
    id: "geral-1",
    category: "Geral",
    question: "Qual é o valor mínimo de projeto que vocês aceitam?",
    answer:
      "Não trabalhamos com um valor mínimo fixo. Avaliamos cada demanda com base no escopo, no nível de detalhe e no tempo necessário para entregar com qualidade.",
  },
  {
    id: "geral-2",
    category: "Geral",
    question: "Vocês assinam NDA (Acordo de Confidencialidade)?",
    answer:
      "Sim. Entendemos que muitos projetos exigem sigilo e podemos assinar NDA para proteger sua propriedade intelectual e suas informações técnicas.",
  },
  {
    id: "geral-3",
    category: "Geral",
    question: "Como funciona o processo de orçamento?",
    answer:
      "Você nos envia as informações do projeto, analisamos escopo e complexidade, e retornamos com uma proposta clara de prazo, entregáveis e investimento estimado.",
  },
  {
    id: "geral-4",
    category: "Geral",
    question: "Vocês oferecem suporte pós-projeto?",
    answer:
      "Sim. Dependendo do projeto, oferecemos suporte técnico, ajustes pontuais e orientação para próximos passos, como fabricação, revisão de modelo ou novas iterações.",
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
    <section className="bg-gradient-to-b from-white via-secondary/5 to-white py-20">
      <div className="container">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#2722f8] px-4 py-2">
            <span className="text-sm font-semibold text-white">DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="mb-4 text-foreground">Perguntas Frequentes</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços de criação
            técnica digital.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setExpandedId(null);
              }}
              className={`rounded-full px-6 py-2 font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "border border-border bg-white text-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl border border-border bg-white transition-all hover:shadow-lg"
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-muted/50"
              >
                <h3 className="font-semibold text-foreground">{item.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-accent transition-transform duration-300 ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="border-t border-border bg-muted/30 px-6 py-4">
                  <p className="leading-relaxed text-muted-foreground">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-muted-foreground">Não encontrou sua pergunta?</p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex rounded-full bg-accent px-8 py-3 font-semibold text-accent-foreground transition-all hover:bg-accent/90">
                Entre em Contato
              </button>
            </DialogTrigger>
            <DialogContent className="overflow-hidden rounded-3xl border-0 p-0 shadow-[0_18px_55px_rgba(15,23,42,0.14)] [&_[data-slot='dialog-close']]:text-white [&_[data-slot='dialog-close']]:opacity-90 [&_[data-slot='dialog-close']]:hover:opacity-100">
              <div className="bg-[#2722f8] px-6 py-6 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Fale com a iSprint</DialogTitle>
                  <DialogDescription className="text-white/80">
                    Se preferir um contato direto, fale com a gente por WhatsApp ou email.
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="space-y-4 p-6">
                <a
                  href="https://wa.me/5583991854711"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 transition-all hover:border-accent hover:bg-accent/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/12 text-green-600">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+55 (83) 99185-4711</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-accent">Abrir</span>
                </a>

                <a
                  href="mailto:isprintstudio@gmail.com"
                  className="flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 transition-all hover:border-accent hover:bg-accent/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">isprintstudio@gmail.com</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-accent">Enviar</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
