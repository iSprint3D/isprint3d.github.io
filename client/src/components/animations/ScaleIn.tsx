import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * ScaleIn - Animação de scale in (crescimento)
 * 
 * Uso:
 * <ScaleIn delay={0.2}>
 *   <div>Conteúdo</div>
 * </ScaleIn>
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
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
