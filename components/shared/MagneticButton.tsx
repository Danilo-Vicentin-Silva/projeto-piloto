"use client"

import { useMotionValue, useSpring } from "framer-motion"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export function MagneticButton({ children, className = "", href = "#contact" }: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  return (
    <motion.a
      href={href}
      className={`magnetic-button group ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - (rect.left + rect.width / 2)) * 0.18)
        y.set((event.clientY - (rect.top + rect.height / 2)) * 0.18)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <ArrowUpRight size={18} />
      </span>
      <span className="button-shimmer" />
    </motion.a>
  )
}
