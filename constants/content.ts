import { photos as PHOTOS, socialCards as SOCIAL_CARDS } from "@/lib/data";

export { PHOTOS, SOCIAL_CARDS };

export const COPY = {
  pt: {
    nav: [
      "A jornada",
      "Galeria",
      "On-Track",
      "Redes sociais",
      "Parcerias",
      "Contato",
    ],
    eyebrow: "Piloto de karting • Brasil",
    heroName: "DANILO\nVICENTIN",
    heroTagline: "NASCIDO PARA ACELERAR",
    heroBody:
      "Da primeira curva ao próximo grid. Uma jornada de velocidade, foco e ambição sem limites.",
    cta: "Conheça a jornada",
    reel: "Assistir ao reel",
    journeyEyebrow: "01 / A jornada",
    journeyTitle: "Toda grande\nlinha de chegada\ncomeça aqui.",
    journeyBody:
      "Começou no kartodromo de Nova Odessa - SP, onde começou a dar seus primeiros passos em direção ao sonho de um dia ser um piloto de corrida, e cada volta, cada curva, começou a se dedicar cada vez mais para algo que um dia seria algo mais que um hooby",
    read: "Ler a história completa",
    galleryEyebrow: "02 / Dentro da pista",
    galleryTitle: "Velocidade\nem movimento",
    socialEyebrow: "03 / Acompanhe de perto",
    socialTitle: "WHAT'S UP\nNAS REDES",
    socialFollow: "Siga Danilo nas redes sociais",
    socialLinkLabel: "Abrir perfil de",
    partnersEyebrow: "04 / Parceiros de corrida",
    partnersTitle: "Acelere\ncom a minha marca.",
    partnersBody:
      "Marcas que querem sair do grid comigo e construir o próximo capítulo.",
    contact: "Entrar em contato",
    footer: "A próxima volta começa agora.",
  },
  en: {
    nav: [
      "The journey",
      "Gallery",
      "On-Track",
      "Social media",
      "Partners",
      "Contact",
    ],
    eyebrow: "Karting driver • Brazil",
    heroName: "DANILO\nVICENTIN",
    heroTagline: "BORN TO PUSH",
    heroBody:
      "From the first corner to the next grid. A journey of speed, focus and limitless ambition.",
    cta: "Discover the journey",
    reel: "Watch the reel",
    journeyEyebrow: "01 / The journey",
    journeyTitle: "Every great\nfinish line\nstarts here.",
    journeyBody:
      "It all started at the karting track in Nova Odessa - SP, where he took his first steps towards the dream of one day becoming a racing driver, and every lap, every corner, he began to dedicate himself more and more to something that would one day be more than a hobby.",
    read: "Read the full story",
    galleryEyebrow: "02 / Trackside",
    galleryTitle: "Speed\nin motion",
    socialEyebrow: "03 / Follow the journey",
    socialTitle: "WHAT'S UP\nON SOCIALS",
    socialFollow: "Follow Danilo on social media",
    socialLinkLabel: "Visit",
    partnersEyebrow: "04 / Race partners",
    partnersTitle: "Accelerate\nwith my brand.",
    partnersBody:
      "Brands ready to leave the grid with me and build the next chapter.",
    contact: "Start a conversation",
    footer: "The next lap starts now.",
  },
} as const;

export type Lang = keyof typeof COPY;
