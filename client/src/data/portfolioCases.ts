export type PortfolioCase = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  publishedAt: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  metrics: Array<{ value: string; label: string }>;
  challenge: string;
  context: string;
  process: string[];
  outcome: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  gallery: Array<{
    image: string;
    title: string;
    description: string;
  }>;
};

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "carrinho-bbq-rebocavel",
    category: "Projeto de produto",
    title: "Carrinho BBQ rebocável com foco em mobilidade, operação e montagem",
    summary:
      "Partimos dos arquivos de render, detalhamento e solda para estruturar um case de produto móvel com leitura de uso real, fabricação e apresentação visual.",
    publishedAt: "02 abr 2026",
    readTime: "5 min",
    heroImage: "/assets/portfolio/carrinho-bbq.png",
    heroAlt: "Render de carrinho BBQ rebocável",
    metrics: [
      { value: "1 conjunto", label: "com tampa, bancada e reboque integrados" },
      { value: "2 PDFs", label: "de detalhamento e processo de solda" },
      { value: "mobilidade", label: "pensada para operação fora de bancada fixa" },
    ],
    challenge:
      "O projeto precisava conciliar presença visual, robustez estrutural e lógica de montagem em um equipamento móvel, sem perder praticidade de uso em campo.",
    context:
      "Usamos como base o render principal do carrinho, o arquivo de detalhamento BBQ e o documento de solda. A leitura do material aponta para um produto com preocupação de fabricação, abertura operacional e organização dos subconjuntos para produção.",
    process: [
      "Modelagem do conjunto com foco em leitura de tampa, cuba, área de apoio e sistema de reboque.",
      "Separação das partes fabricáveis para orientar detalhamento e preparação de solda.",
      "Ajuste da apresentação visual para comunicar o produto já em contexto de uso, não apenas como arquivo técnico isolado.",
      "Consolidação do material para servir tanto à fabricação quanto à apresentação comercial do equipamento.",
    ],
    outcome:
      "O resultado é um conceito de produto mais claro para validar fabricação, comunicar valor do projeto e apoiar decisões sobre estrutura, acabamento e operação.",
    testimonial: {
      quote:
        "A visualização ajudou a enxergar o produto como solução pronta, e não só como desenho técnico.",
      author: "Cliente do segmento de equipamentos",
      role: "Projeto de produto móvel",
    },
    gallery: [
      {
        image: "/assets/portfolio/carrinho-bbq.png",
        title: "Apresentação do conjunto",
        description: "O render principal destaca mobilidade, acesso e organização do equipamento.",
      },
      {
        image: "/assets/portfolio/banco-tubos.png",
        title: "Detalhamento construtivo",
        description: "A lógica de fabricação foi tratada como parte do projeto, não como etapa separada.",
      },
      {
        image: "/assets/portfolio/gym-cinza.png",
        title: "Leitura espacial",
        description: "A apresentação visual ajuda a antecipar proporção, uso e percepção do produto.",
      },
    ],
  },
  {
    slug: "banco-morsa-para-tubos",
    category: "Projeto mecânico",
    title: "Banco para tubos e morsa de cano com leitura técnica de montagem",
    summary:
      "A partir do render do produto e do PDF de explode, montamos um case voltado a compreensão de mecanismo, sequência de montagem e clareza de fabricação.",
    publishedAt: "02 abr 2026",
    readTime: "4 min",
    heroImage: "/assets/portfolio/banco-tubos.png",
    heroAlt: "Render de banco ou morsa para tubos",
    metrics: [
      { value: "1 explode", label: "para explicar montagem do conjunto" },
      { value: "mecanismo", label: "com leitura simples de operação" },
      { value: "produto compacto", label: "voltado a uso técnico específico" },
    ],
    challenge:
      "O desafio aqui era organizar um produto mecânico compacto de forma que funcionamento, fixação e montagem fossem compreendidos rapidamente por quem fabrica e por quem aprova.",
    context:
      "Os arquivos indicam um projeto com peças bem definidas, operação por alavanca superior e necessidade de representação explodida para facilitar leitura técnica. Isso sugere um caso forte de comunicação entre modelagem, detalhamento e montagem.",
    process: [
      "Construção do volume principal com foco em base, colunas, sistema de pressão e pontos de fixação.",
      "Geração da vista explodida para explicar relações entre peças e sequência de montagem.",
      "Ajuste da linguagem visual do render para dar leitura limpa ao produto final.",
      "Organização do material como peça de portfólio técnico, mostrando produto e lógica construtiva ao mesmo tempo.",
    ],
    outcome:
      "O projeto passa a ter dupla utilidade: comunica o mecanismo com clareza e serve como base objetiva para avanço em fabricação, revisão e documentação.",
    testimonial: {
      quote:
        "A vista explodida foi o ponto que transformou o entendimento do produto para toda a equipe.",
      author: "Equipe de desenvolvimento mecânico",
      role: "Projeto de dispositivo técnico",
    },
    gallery: [
      {
        image: "/assets/portfolio/banco-tubos.png",
        title: "Render limpo do produto",
        description: "A peça foi apresentada de forma direta, facilitando leitura de forma e função.",
      },
      {
        image: "/assets/portfolio/carrinho-bbq.png",
        title: "Relação entre visual e fabricação",
        description: "A apresentação final se apoia em decisões coerentes de montagem e detalhamento.",
      },
      {
        image: "/assets/portfolio/gym-cinza.png",
        title: "Leitura de subconjuntos",
        description: "O mesmo raciocínio de separação técnica pode ser aplicado em diferentes escalas de produto.",
      },
    ],
  },
  {
    slug: "estacao-gym-funcional",
    category: "Estrutura especial",
    title: "Estação gym funcional com foco em estrutura, operação e presença visual",
    summary:
      "Usamos o render principal, o vídeo e o detalhamento de chapas para estruturar um case de equipamento de maior porte, com narrativa mais próxima de produto completo.",
    publishedAt: "02 abr 2026",
    readTime: "5 min",
    heroImage: "/assets/portfolio/gym-cinza.png",
    heroAlt: "Render de estação gym funcional",
    metrics: [
      { value: "1 render", label: "do conjunto completo em perspectiva" },
      { value: "1 vídeo", label: "para leitura dinâmica do projeto" },
      { value: "chapas", label: "documentadas para fabricação" },
    ],
    challenge:
      "Projetos de maior porte exigem equilibrar estrutura, ergonomia, estabilidade e comunicação visual sem deixar o material excessivamente técnico ou frio.",
    context:
      "O conjunto do material mostra um projeto robusto, com elementos estruturais, pontos de apoio e componentes de uso. A presença de vídeo e detalhamento de chapas reforça que não se trata apenas de conceito, mas de uma proposta com leitura de construção.",
    process: [
      "Modelagem do conjunto com preocupação em estrutura principal, travamentos e pontos de operação.",
      "Preparação de materiais de apresentação para mostrar escala e configuração geral do equipamento.",
      "Desdobramento de chapas e partes fabricáveis para aproximar o projeto da etapa produtiva.",
      "Organização do case para destacar tanto a imponência visual quanto a lógica técnica do sistema.",
    ],
    outcome:
      "O projeto ganha força como peça de portfólio e como argumento técnico, mostrando um equipamento com maior grau de maturidade visual e construtiva.",
    testimonial: {
      quote:
        "O material mostrou bem a dimensão do equipamento e ao mesmo tempo deixou claro que havia racional construtivo por trás.",
      author: "Cliente do setor fitness e equipamentos",
      role: "Projeto estrutural especial",
    },
    gallery: [
      {
        image: "/assets/portfolio/gym-cinza.png",
        title: "Conjunto em perspectiva",
        description: "O render evidencia escala, estrutura e pontos de contato com o usuário.",
      },
      {
        image: "/assets/portfolio/carrinho-bbq.png",
        title: "Organização do case",
        description: "A lógica de apresentação foi construída para comunicar uso e fabricação no mesmo fluxo.",
      },
      {
        image: "/assets/portfolio/banco-tubos.png",
        title: "Detalhamento de partes",
        description: "Mesmo em estruturas maiores, o raciocínio de decompor o projeto segue essencial.",
      },
    ],
  },
  {
    slug: "vistas-explodidas-detalhamento",
    category: "Documentação técnica",
    title: "Vistas explodidas e detalhamento técnico para comunicar montagem e fabricação",
    summary:
      "A coleção de PDFs de explode e detalhamento serviu como base para um case sobre documentação visual de projeto, mostrando como a apresentação técnica reduz ruído e acelera entendimento.",
    publishedAt: "02 abr 2026",
    readTime: "4 min",
    heroImage: "/assets/portfolio/banco-tubos.png",
    heroAlt: "Render de conjunto técnico usado como apoio visual para documentação",
    metrics: [
      { value: "vários PDFs", label: "de explode, chapas e solda" },
      { value: "mais clareza", label: "na leitura de montagem" },
      { value: "menos ruído", label: "entre projeto e fabricação" },
    ],
    challenge:
      "Em muitos projetos, a qualidade do modelo não basta: sem documentação visual clara, a equipe perde tempo interpretando peça, sequência e intenção de montagem.",
    context:
      "Os arquivos de explode e detalhamento deste portfólio mostram uma preocupação consistente com representação técnica. A partir deles, montamos um case editorial sobre como organizar informação para que o projeto seja entendido com menos fricção.",
    process: [
      "Seleção das vistas que melhor explicam relação entre peças e subconjuntos.",
      "Construção de narrativa visual com foco em ordem de montagem, solda e detalhamento de chapas.",
      "Ajuste do material para servir tanto ao uso interno da produção quanto à apresentação do projeto ao cliente.",
      "Consolidação de uma linguagem visual técnica que valoriza o projeto sem comprometer leitura objetiva.",
    ],
    outcome:
      "A documentação deixa de ser apenas anexo e passa a funcionar como parte central do projeto, ajudando aprovação, fabricação e registro técnico.",
    testimonial: {
      quote:
        "Quando a documentação ficou organizada, a conversa entre projeto e produção mudou de nível.",
      author: "Equipe de fabricação",
      role: "Leitura de montagem e processo",
    },
    gallery: [
      {
        image: "/assets/portfolio/banco-tubos.png",
        title: "Leitura de explode",
        description: "A ideia é tornar montagem e relação entre peças imediatamente compreensíveis.",
      },
      {
        image: "/assets/portfolio/gym-cinza.png",
        title: "Hierarquia visual",
        description: "Mesmo em projetos maiores, a documentação precisa guiar o olhar sem excesso.",
      },
      {
        image: "/assets/portfolio/carrinho-bbq.png",
        title: "Detalhamento aplicado",
        description: "Solda, chapas e subconjuntos ganham mais valor quando a apresentação é organizada.",
      },
    ],
  },
];

export const portfolioCasesBySlug = portfolioCases.reduce<Record<string, PortfolioCase>>(
  (accumulator, currentCase) => {
    accumulator[currentCase.slug] = currentCase;
    return accumulator;
  },
  {},
);
