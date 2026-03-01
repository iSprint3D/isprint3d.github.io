# Animações com Framer Motion - Documentação Completa

## 📚 Visão Geral

Este documento descreve todos os componentes de animação e hooks criados para o Studio iSprint usando **Framer Motion**.

Framer Motion é uma biblioteca poderosa para criar animações fluidas e interativas em React com uma API simples e intuitiva.

---

## 🎨 Componentes de Animação

### 1. **FadeInUp**
Animação de fade in com movimento para cima.

**Localização:** `/client/src/components/animations/FadeInUp.tsx`

**Props:**
- `children` (ReactNode) - Conteúdo a ser animado
- `delay` (number) - Delay em segundos (padrão: 0)
- `duration` (number) - Duração em segundos (padrão: 0.6)
- `className` (string) - Classes CSS adicionais

**Exemplo de Uso:**
```tsx
import { FadeInUp } from "@/components/animations";

<FadeInUp delay={0.2}>
  <h1>Título com Animação</h1>
</FadeInUp>
```

**Efeito:** O elemento começa com opacidade 0 e deslocado 30px para baixo, animando para opacidade 1 e posição normal.

---

### 2. **SlideInLeft**
Animação de slide in da esquerda.

**Localização:** `/client/src/components/animations/SlideInLeft.tsx`

**Props:**
- `children` (ReactNode) - Conteúdo a ser animado
- `delay` (number) - Delay em segundos (padrão: 0)
- `duration` (number) - Duração em segundos (padrão: 0.6)
- `className` (string) - Classes CSS adicionais

**Exemplo de Uso:**
```tsx
import { SlideInLeft } from "@/components/animations";

<SlideInLeft delay={0.3}>
  <div>Conteúdo deslizando da esquerda</div>
</SlideInLeft>
```

**Efeito:** O elemento começa com opacidade 0 e deslocado 50px para a esquerda, animando para opacidade 1 e posição normal.

---

### 3. **SlideInRight**
Animação de slide in da direita.

**Localização:** `/client/src/components/animations/SlideInRight.tsx`

**Props:**
- `children` (ReactNode) - Conteúdo a ser animado
- `delay` (number) - Delay em segundos (padrão: 0)
- `duration` (number) - Duração em segundos (padrão: 0.6)
- `className` (string) - Classes CSS adicionais

**Exemplo de Uso:**
```tsx
import { SlideInRight } from "@/components/animations";

<SlideInRight delay={0.3}>
  <div>Conteúdo deslizando da direita</div>
</SlideInRight>
```

**Efeito:** O elemento começa com opacidade 0 e deslocado 50px para a direita, animando para opacidade 1 e posição normal.

---

### 4. **ScaleIn**
Animação de scale in (crescimento).

**Localização:** `/client/src/components/animations/ScaleIn.tsx`

**Props:**
- `children` (ReactNode) - Conteúdo a ser animado
- `delay` (number) - Delay em segundos (padrão: 0)
- `duration` (number) - Duração em segundos (padrão: 0.6)
- `className` (string) - Classes CSS adicionais

**Exemplo de Uso:**
```tsx
import { ScaleIn } from "@/components/animations";

<ScaleIn delay={0.2}>
  <Card>Conteúdo crescendo</Card>
</ScaleIn>
```

**Efeito:** O elemento começa com opacidade 0 e escala 0.9, animando para opacidade 1 e escala 1.

---

### 5. **RotateIn**
Animação de rotação com fade in.

**Localização:** `/client/src/components/animations/RotateIn.tsx`

**Props:**
- `children` (ReactNode) - Conteúdo a ser animado
- `delay` (number) - Delay em segundos (padrão: 0)
- `duration` (number) - Duração em segundos (padrão: 0.6)
- `className` (string) - Classes CSS adicionais
- `rotation` (number) - Ângulo de rotação inicial em graus (padrão: -10)

**Exemplo de Uso:**
```tsx
import { RotateIn } from "@/components/animations";

<RotateIn delay={0.2} rotation={-15}>
  <img src="logo.png" alt="Logo" />
</RotateIn>
```

**Efeito:** O elemento começa com opacidade 0 e rotacionado, animando para opacidade 1 e rotação 0.

---

### 6. **StaggerContainer**
Container que anima múltiplos filhos com delay escalonado.

**Localização:** `/client/src/components/animations/StaggerContainer.tsx`

**Props:**
- `children` (ReactNode) - Filhos a serem animados
- `staggerDelay` (number) - Delay entre animações dos filhos (padrão: 0.1)
- `delayOffset` (number) - Delay inicial antes de começar (padrão: 0)
- `className` (string) - Classes CSS adicionais

**Exemplo de Uso:**
```tsx
import { StaggerContainer } from "@/components/animations";
import { motion } from "framer-motion";

<StaggerContainer staggerDelay={0.1}>
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    Item 1
  </motion.div>
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    Item 2
  </motion.div>
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    Item 3
  </motion.div>
</StaggerContainer>
```

**Efeito:** Cada filho anima sequencialmente com um delay entre eles.

---

## 🎯 Hooks Customizados

### 1. **useScrollAnimation**
Hook para controlar animações baseadas em scroll (Intersection Observer).

**Localização:** `/client/src/hooks/useScrollAnimation.ts`

**Retorna:**
- `ref` - Referência para o elemento a ser observado
- `controls` - Controles de animação do Framer Motion
- `inView` - Boolean indicando se o elemento está visível

**Exemplo de Uso:**
```tsx
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export function MyComponent() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      Conteúdo que anima ao entrar na viewport
    </motion.div>
  );
}
```

---

### 2. **useParallax**
Hook para criar efeito parallax baseado em scroll.

**Localização:** `/client/src/hooks/useScrollAnimation.ts`

**Parâmetros:**
- `speed` (number) - Velocidade do parallax (padrão: 0.5)

**Retorna:**
- `yOffset` - Motion value para usar em `style={{ y: yOffset }}`

**Exemplo de Uso:**
```tsx
import { useParallax } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export function HeroSection() {
  const yOffset = useParallax(0.5);

  return (
    <motion.div style={{ y: yOffset }}>
      <img src="background.jpg" alt="Background" />
    </motion.div>
  );
}
```

---

### 3. **useCountUp**
Hook para animar números contando até um valor alvo.

**Localização:** `/client/src/hooks/useScrollAnimation.ts`

**Parâmetros:**
- `target` (number) - Número alvo
- `duration` (number) - Duração em segundos (padrão: 2)
- `inView` (boolean) - Se deve animar (padrão: true)

**Retorna:**
- `rounded` - Motion value com o número arredondado

**Exemplo de Uso:**
```tsx
import { useCountUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export function Stats() {
  const projectCount = useCountUp(100, 2);

  return (
    <motion.div>
      <motion.span>{projectCount}</motion.span>
      <p>Projetos Realizados</p>
    </motion.div>
  );
}
```

---

## 🔧 Integração no Home.tsx

As animações foram integradas nas seguintes seções:

### **Hero Section**
```tsx
<FadeInUp delay={0.1}>
  <div>Badge</div>
</FadeInUp>

<FadeInUp delay={0.2}>
  <h1>Título</h1>
</FadeInUp>

<FadeInUp delay={0.3}>
  <p>Descrição</p>
</FadeInUp>

<FadeInUp delay={0.4}>
  <div>Botões</div>
</FadeInUp>
```

### **Services Section**
```tsx
<FadeInUp delay={0.1}>
  <div>Título e descrição</div>
</FadeInUp>

<StaggerContainer staggerDelay={0.15} delayOffset={0.2}>
  <div>Grid de serviços</div>
</StaggerContainer>
```

### **Portfolio Section**
```tsx
<FadeInUp delay={0.1}>
  <div>Título e descrição</div>
</FadeInUp>

<StaggerContainer staggerDelay={0.15} delayOffset={0.2}>
  <div>Grid de projetos</div>
</StaggerContainer>
```

### **About Section**
```tsx
<SlideInLeft delay={0.2}>
  <div>Conteúdo esquerdo</div>
</SlideInLeft>

<ScaleIn delay={0.3}>
  <div>Card de estatísticas</div>
</ScaleIn>
```

---

## 🎬 Propriedades Comuns de Animação

Todos os componentes de animação usam estas propriedades padrão:

| Propriedade | Valor | Descrição |
|------------|-------|-----------|
| `initial` | `{ opacity: 0, ... }` | Estado inicial |
| `whileInView` | `{ opacity: 1, ... }` | Estado quando visível |
| `transition.duration` | `0.6s` | Duração da animação |
| `transition.ease` | `easeOut` | Tipo de easing |
| `viewport.once` | `true` | Anima apenas uma vez |
| `viewport.margin` | `-100px` | Margem para trigger |

---

## 🎨 Customização Avançada

### Criar Nova Animação Customizada

```tsx
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CustomAnimProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function CustomAnimation({
  children,
  delay = 0,
  duration = 0.6,
}: CustomAnimProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}
```

### Usar Motion Direto

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
>
  Conteúdo interativo
</motion.div>
```

---

## 📊 Performance

### Boas Práticas

1. **Use `whileInView` em vez de `animate`** - Economiza recursos animando apenas quando visível
2. **Configure `viewport.once={true}`** - Anima apenas uma vez
3. **Evite animações muito longas** - Mantenha entre 0.3s e 1s
4. **Use `will-change` com cuidado** - Pode impactar performance
5. **Teste em dispositivos móveis** - Algumas animações podem ser pesadas

### Otimizações Aplicadas

- ✅ `whileInView` para renderização sob demanda
- ✅ `once: true` para evitar re-animações
- ✅ `margin: "-100px"` para animar antes de entrar na viewport
- ✅ Delays escalonados para melhor UX

---

## 🔗 Recursos Úteis

- [Documentação Framer Motion](https://www.framer.com/motion/)
- [Exemplos de Animações](https://www.framer.com/motion/examples/)
- [API Reference](https://www.framer.com/motion/animation/)

---

## 📝 Próximas Melhorias

- [ ] Adicionar animações de scroll parallax
- [ ] Criar animações de página (page transitions)
- [ ] Implementar animações de carregamento (skeletons)
- [ ] Adicionar animações de interação (hover, click)
- [ ] Criar biblioteca de variantes reutilizáveis

---

**Versão:** 1.0  
**Última Atualização:** Março 2026  
**Mantido por:** Studio iSprint
