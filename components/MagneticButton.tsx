import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function MagneticButton({ children, className = '', href = '#contact' }: MagneticButtonProps) {
  const { springX, springY, handleMouseMove, handleMouseLeave } = useMagneticEffect();

  return (
    <motion.a
      href={href}
      className={`magnetic-button group ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <ArrowUpRight size={18} />
      </span>
      <span className="button-shimmer" />
    </motion.a>
  );
}
