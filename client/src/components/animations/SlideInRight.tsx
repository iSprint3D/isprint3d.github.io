import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInRightProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * SlideInRight - Animação de slide in da direita
 * 
 * Uso:
 * <SlideInRight delay={0.2}>
 *   <div>Conteúdo</div>
 * </SlideInRight>
 */
export function SlideInRight({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: SlideInRightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
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
