import type { PortfolioCase } from "@/data/portfolioCases";

export const portfolioVisualizacaoTecnicaOverride: Partial<PortfolioCase> = {
  category: "Documenta\u00e7\u00e3o t\u00e9cnica",
  title:
    "Vistas explodidas e folhas t\u00e9cnicas para comunicar montagem, subconjuntos e fabrica\u00e7\u00e3o",
  summary:
    "Este case organiza explodes, vistas e documentos complementares para mostrar como a leitura t\u00e9cnica do projeto pode reduzir d\u00favidas, orientar montagem e apoiar fabrica\u00e7\u00e3o com mais clareza.",
  heroImage: "",
  heroAlt: "Cole\u00e7\u00e3o de pranchas t\u00e9cnicas do projeto",
  metrics: [
    {
      value: "FOLHA T\u00c9CNICA PARA FABRICA\u00c7\u00c3O",
      label: "vistas, detalhes, estrutura, corte, dobra, chapa e solda",
      icon: "fabrication",
    },
    {
      value: "RENDERIZA\u00c7\u00c3O PARA APRESENTA\u00c7\u00c3O",
      label: "imagem de projeto para mostrar forma, conjunto e valor percebido",
      icon: "render",
    },
    {
      value: "VISTA EXPLODIDA PARA MONTAGEM",
      label: "subconjuntos, rela\u00e7\u00f5es entre pe\u00e7as e ordem de montagem",
      icon: "explode",
    },
  ],
  challenge:
    "O desafio era organizar folhas de explode, vistas e documentos complementares de um jeito que explicasse o produto sem sobrecarregar a leitura. O material precisava mostrar rela\u00e7\u00e3o entre pe\u00e7as, ordem de montagem e crit\u00e9rios de fabrica\u00e7\u00e3o com clareza visual.",
  context:
    "Aqui a conversa n\u00e3o depende de imagem gen\u00e9rica. O valor est\u00e1 nas pranchas do pr\u00f3prio projeto: explode para separar subconjuntos, vistas para orientar leitura espacial, documentos complementares para sustentar montagem e uma visualiza\u00e7\u00e3o 3D para refor\u00e7ar rela\u00e7\u00e3o entre componentes.",
  process: [
    "Sele\u00e7\u00e3o das folhas que melhor explicam o conjunto completo antes de aprofundar nas pe\u00e7as.",
    "Ordena\u00e7\u00e3o dos explodes para que a leitura de subconjuntos acompanhe a l\u00f3gica real de montagem.",
    "Aproxima\u00e7\u00e3o entre vistas t\u00e9cnicas, visualiza\u00e7\u00e3o 3D e apresenta\u00e7\u00e3o visual, para que o material comunique tanto estrutura quanto inten\u00e7\u00e3o de projeto.",
    "Separa\u00e7\u00e3o de documentos de apoio que refor\u00e7am fabrica\u00e7\u00e3o, detalhamento e tomada de decis\u00e3o.",
  ],
  outcome:
    "O resultado \u00e9 uma p\u00e1gina em que a documenta\u00e7\u00e3o vira protagonista. Em vez de parecer uma lista de anexos, o conjunto passa a funcionar como narrativa visual do projeto, apoiando entendimento, apresenta\u00e7\u00e3o e fabrica\u00e7\u00e3o.",
  testimonial: {
    quote:
      "As folhas precisam mostrar o conjunto, separar subconjuntos com clareza e indicar onde a fabrica\u00e7\u00e3o depende de detalhamento complementar.",
    author: "Objetivo do material",
    role: "Explode, vistas e apoio \u00e0 fabrica\u00e7\u00e3o",
  },
  gallery: [],
  documents: [
    {
      title: "Carrinho BBQ",
      description:
        "Documento complementar do projeto com leitura de produto, estrutura e apresenta\u00e7\u00e3o t\u00e9cnica.",
      file: "/assets/portfolio/pdfs/carrinho.pdf",
      previewImage: "/assets/portfolio/pdf-previews/carrinho.jpg",
    },
    {
      title: "Explode 01",
      description: "Prancha com leitura de montagem e separa\u00e7\u00e3o de subconjuntos do projeto.",
      file: "/assets/portfolio/pdfs/explode-1.pdf",
      previewImage: "/assets/portfolio/pdf-previews/explode-1.jpg",
    },
    {
      title: "Explode 02",
      description: "P\u00e1gina t\u00e9cnica para refor\u00e7ar sequ\u00eancia visual, encaixes e rela\u00e7\u00f5es entre pe\u00e7as.",
      file: "/assets/portfolio/pdfs/explode-2.pdf",
      previewImage: "/assets/portfolio/pdf-previews/explode-2.jpg",
    },
    {
      title: "Explode 04",
      description: "Documento complementar para apresenta\u00e7\u00e3o, leitura de explode e apoio \u00e0 fabrica\u00e7\u00e3o.",
      file: "/assets/portfolio/pdfs/explode-4.pdf",
      previewImage: "/assets/portfolio/pdf-previews/explode-4.jpg",
    },
  ],
  introAnimation: {
    title: "Componente interativo de produto",
    description:
      "A abertura tridimensional antecipa o conjunto antes da leitura das folhas t\u00e9cnicas, ajudando a compreender volume, rela\u00e7\u00e3o entre pe\u00e7as e organiza\u00e7\u00e3o do projeto.",
    eyebrow: "Leitura 3D do conjunto",
    headline: "A documenta\u00e7\u00e3o t\u00e9cnica come\u00e7a com impacto visual",
    subcopy:
      "A abertura apresenta o conjunto em 3D para preparar a leitura das folhas seguintes. Assim, explode, vistas e documentos complementares entram no case com mais contexto e menos ru\u00eddo.",
    modelSrc: "/assets/radial-pneumatic-engine.glb",
    scrollLengthVh: 190,
  },
};
