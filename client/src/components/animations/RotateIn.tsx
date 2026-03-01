import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RotateInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  rotation?: number;
}

/**
 * RotateIn - Animação de rotação com fade in
 * 
 * Uso:
 * <RotateIn delay={0.2} rotation={-10}>
 *   <div>Conteúdo</div>
 * </RotateIn>
 */
export function RotateIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  rotation = -10,
}: RotateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: rotation }}
      whileInView={{ opacity: 1, rotate: 0 }}
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
