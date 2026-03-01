import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInLeftProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * SlideInLeft - Animação de slide in da esquerda
 * 
 * Uso:
 * <SlideInLeft delay={0.2}>
 *   <div>Conteúdo</div>
 * </SlideInLeft>
 */
export function SlideInLeft({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: SlideInLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
