export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const STAGGER_IN = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
} as const;

export const RISE_IN = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_OUT } },
} as const;

export const REVEAL_WORD = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
} as const;

export const SPRING_CONFIG = {
  stiffness: 300,
  damping: 20,
} as const;

export const SCROLL_CONFIG = {
  offset: ["start start", "end end"],
} as const;

export const VIEWPORT_CONFIG = {
  once: false,
  amount: 0.25,
} as const;
