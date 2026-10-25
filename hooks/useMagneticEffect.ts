import { useMotionValue, useSpring } from 'framer-motion';
import { SPRING_CONFIG } from '@/constants/animations';

export function useMagneticEffect(intensity: number = 0.18) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * intensity);
    y.set((event.clientY - (rect.top + rect.height / 2)) * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { springX, springY, handleMouseMove, handleMouseLeave };
}
