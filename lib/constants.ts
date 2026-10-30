export const NAV_ITEMS = {
  pt: [
    "A jornada",
    "Galeria",
    "On-Track",
    "Sobre mim",
    "Redes sociais",
    "Parcerias",
    "Contato",
  ],
  en: [
    "The journey",
    "Gallery",
    "On-Track",
    "About me",
    "Social media",
    "Partners",
    "Contact",
  ],
} as const

export const NAV_LINKS = [
  "#journey",
  "#gallery",
  "/on-track",
  "/about",
  "#socials",
  "#partners",
  "#contact",
] as const

export const SOCIAL_LINKS = [
  { name: "INSTAGRAM", href: "https://www.instagram.com/danilo_vicentin_silva/" },
  { name: "YOUTUBE", href: "https://www.youtube.com/@danilovicentin" },
  { name: "TIKTOK", href: "https://www.tiktok.com/@danilovicentindasilva" },
  { name: "LINKEDIN", href: "https://www.linkedin.com" },
] as const

export const ANIMATION_CONFIG = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: {
    fast: 0.7,
    normal: 0.9,
    slow: 1.2,
  },
} as const
