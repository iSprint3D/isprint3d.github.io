# 🎨 Studio iSprint - Criação Técnica Digital

Website moderno e responsivo para Studio iSprint, especializado em Scan 3D, Modelagem Paramétrica e Prototipagem Técnica.

## ✨ Características

- **🎬 Animações Fluidas** - Implementadas com Framer Motion
- **📱 Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **⚡ Performance** - Otimizado com Vite e React
- **🎨 Design Moderno** - Tailwind CSS + Shadcn UI
- **📊 Seções Completas**:
  - Hero Section com CTA
  - Serviços em Grid 2x2
  - Portfolio de Projetos
  - Depoimentos de Clientes
  - FAQ Interativo
  - Formulário de Contato
  - Footer com Links

---

## 🚀 Começar Rápido

### Pré-requisitos

- Node.js 22+
- pnpm 10+

### Instalação

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/studio-isprint.git
cd studio-isprint

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

---

## 📦 Build para Produção

```bash
# Build otimizado
pnpm run build

# Preview do build
pnpm run preview
```

---

## 🎬 Animações com Framer Motion

O projeto inclui componentes reutilizáveis de animação:

- **FadeInUp** - Fade in com movimento para cima
- **SlideInLeft** - Slide in da esquerda
- **SlideInRight** - Slide in da direita
- **ScaleIn** - Crescimento
- **RotateIn** - Rotação com fade
- **StaggerContainer** - Múltiplos elementos com delay

Veja `ANIMACOES_FRAMER_MOTION.md` para documentação completa.

---

## 🌐 Deploy no GitHub Pages

Para hospedar o site permanentemente:

1. Crie um repositório público no GitHub
2. Configure GitHub Pages nas settings
3. Faça push para a branch `main`
4. O workflow automático fará o deploy

Veja `GITHUB_PAGES_DEPLOY.md` para instruções detalhadas.

---

## 📁 Estrutura do Projeto

```
studio-isprint/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Scan3D.tsx
│   │   │   ├── ParametricModeling.tsx
│   │   │   └── Prototyping.tsx
│   │   ├── components/
│   │   │   ├── animations/      ← Componentes de animação
│   │   │   ├── ui/              ← Componentes Shadcn
│   │   │   └── ...
│   │   ├── hooks/               ← Hooks customizados
│   │   └── index.css            ← Estilos globais
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml           ← Workflow GitHub Actions
├── vite.config.ts              ← Configuração Vite
├── tailwind.config.ts          ← Configuração Tailwind
└── package.json
```

---

## 🎨 Identidade Visual

- **Logo:** iSprint (versão icon e full)
- **Cor Primária:** `#0052FF` (Azul vibrante)
- **Cor Secundária:** `#B8860B` (Laranja/Marrom)
- **Fonte Body:** Outfit
- **Fonte Headings:** Montserrat

---

## 📚 Documentação

- `ANIMACOES_FRAMER_MOTION.md` - Guia completo de animações
- `GUIA_RAPIDO_ANIMACOES.md` - Guia rápido com exemplos
- `GITHUB_PAGES_DEPLOY.md` - Instruções de deploy
- `MELHORIAS_APLICADAS.md` - Resumo de mudanças

---

## 🔧 Tecnologias Utilizadas

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component Library
- **Framer Motion** - Animations
- **Wouter** - Routing
- **Lucide Icons** - Icons

---

## 📝 Customização

### Alterar Logo

Substitua os arquivos em `public/assets/`:
- `logo-icon.png` - Versão pequena
- `logo-full.png` - Versão completa

### Alterar Cores

Edite `client/src/index.css`:
```css
:root {
  --accent: #0052FF;      /* Cor primária */
  --secondary: #B8860B;   /* Cor secundária */
}
```

### Alterar Conteúdo

Edite os arquivos `.tsx` nas seções desejadas:
- `client/src/pages/Home.tsx` - Página inicial
- `client/src/pages/Scan3D.tsx` - Página Scan 3D
- etc.

---

## 🐛 Troubleshooting

### Erro de build
```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Porta 3000 em uso
```bash
# Usar porta diferente
pnpm dev -- --port 3001
```

### Imagens não carregam
- Verifique se as URLs estão corretas
- Use caminhos relativos para assets locais
- Para imagens externas, use URLs completas (https://...)

---

## 📞 Contato

- **Email:** isprintstudio@gmail.com
- **Telefone:** +55 (83) 991854711
- **Website:** [https://seu-usuario.github.io/studio-isprint/](https://github.com/Isxqwe)

---

## 📄 Licença

Este projeto é de propriedade do Studio iSprint.

---

## 🙏 Agradecimentos

Desenvolvido com ❤️ usando React, Vite e Framer Motion.

---

**Última Atualização:** Abril 2026  
**Versão:** 1.0  
**Status:** ✅ Pronto para Produção
