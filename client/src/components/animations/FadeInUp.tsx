import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * FadeInUp - Animação de fade in com movimento para cima
 * 
 * Uso:
 * <FadeInUp delay={0.2}>
 *   <h1>Título</h1>
 * </FadeInUp>
 */
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
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
