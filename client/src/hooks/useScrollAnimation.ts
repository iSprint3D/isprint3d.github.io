import { useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

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
  const [inView, setInView] = useState(false);
  const [element, setElement] = useState<Element | null>(null);
  const ref = useCallback((node: Element | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, inView]);

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
    if (!inView) {
      count.set(0);
      return;
    }

    const safeDuration = Math.max(duration, 0.1);
    const step = target / (safeDuration * 60);
    const interval = setInterval(() => {
      const prev = count.get();
      const next = Math.min(prev + step, target);
      count.set(next);

      if (next >= target) {
        clearInterval(interval);
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [count, target, duration, inView]);

  return rounded;
}
