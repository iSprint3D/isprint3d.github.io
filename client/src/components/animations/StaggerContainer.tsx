import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayOffset?: number;
  className?: string;
}

/**
 * StaggerContainer - Anima múltiplos filhos com delay escalonado
 * 
 * Uso:
 * <StaggerContainer staggerDelay={0.1}>
 *   <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Item 1</motion.div>
 *   <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Item 2</motion.div>
 *   <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Item 3</motion.div>
 * </StaggerContainer>
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayOffset = 0,
  className = "",
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayOffset,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
