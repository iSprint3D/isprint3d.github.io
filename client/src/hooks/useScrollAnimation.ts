import { useInView } from "react-intersection-observer";
import { useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

/**
 * Hook para controlar animações baseadas em scroll
 * 
 * Uso:
 * const { ref, controls } = useScrollAnimation();
 * 
 * <motion.div ref={ref} animate={controls}>
 *   Conteúdo
 * </motion.div>
 */
export function useScrollAnimation() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return { ref, controls, inView };
}

/**
 * Hook para criar parallax effect
 * 
 * Uso:
 * const yOffset = useParallax(0.5);
 * 
 * <motion.div style={{ y: yOffset }}>
 *   Conteúdo
 * </motion.div>
 */
export function useParallax(speed: number = 0.5) {
  const scrollY = useMotionValue(0);
  const yOffset = useTransform(scrollY, (value) => value * speed);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return yOffset;
}

/**
 * Hook para animações de contador
 * 
 * Uso:
 * const count = useCountUp(100, 2);
 * 
 * <motion.div>{count}</motion.div>
 */
export function useCountUp(
  target: number,
  duration: number = 2,
  inView: boolean = true
) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) return;

    const controls = {
      animate: async () => {
        await new Promise((resolve) => {
          const interval = setInterval(() => {
            count.set((prev) => {
              const next = prev + target / (duration * 60);
              if (next >= target) {
                clearInterval(interval);
                resolve(null);
                return target;
              }
              return next;
            });
          }, 1000 / 60);
        });
      },
    };

    controls.animate();
  }, [count, target, duration, inView]);

  return rounded;
}
