export const photos = [
  {
    src: "/Imagens/CleevStudio_CKB_JUL26-0668.jpg",
    label: "CKB 2026 - 8º ETAPA",
    category: "KNO / 2026",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    src: "/Imagens/CKB3-AMIKA-M-606.jpg",
    label: "CKB 2026 - 5º ETAPA",
    category: "KNO / 2026",
    className: "md:col-span-5",
  },
  {
    src: "/Imagens/CKB3-AMIKA-M-680.jpg",
    label: "CKB 2026 - 3º ETAPA",
    category: "KNO / 2026",
    className: "md:col-span-5",
  },
] as const

export const socialCards = [
  {
    platform: "INSTAGRAM",
    handle: "@danilovicentin",
    caption: { pt: "Bastidores da corrida", en: "Behind race day" },
    src: photos[1].src,
    href: "https://www.instagram.com/danilo_vicentin_silva/",
  },
  {
    platform: "TIKTOK",
    handle: "@danilovicentin",
    caption: { pt: "Pé embaixo", en: "All the way in" },
    src: photos[0].src,
    href: "https://www.tiktok.com/@danilovicentindasilva",
  },
  {
    platform: "YOUTUBE",
    handle: "DANILO VICENTIN",
    caption: { pt: "Assista à corrida", en: "Watch the race" },
    src: photos[2].src,
    href: "https://www.youtube.com/@danilovicentin",
  },
  {
    platform: "TWITCH",
    handle: "DANILOVICENTIN",
    caption: { pt: "Ao vivo do paddock", en: "Live from the paddock" },
    src: "/Imagens/CleevStudio_CKB_JUL26-0616.jpg",
    href: "https://www.twitch.tv/danilovicentin",
  },
  {
    platform: "INSTAGRAM",
    handle: "@danilovicentin",
    caption: { pt: "O próximo capítulo", en: "The next chapter" },
    src: "/Imagens/CKB3-AMIKA-M-679.jpg",
    href: "https://www.instagram.com/danilovicentin/",
  },
  {
    platform: "YOUTUBE",
    handle: "DANILO VICENTIN",
    caption: { pt: "Um dia no paddock", en: "A day in the paddock" },
    src: "/Imagens/CLEEVSTUDIO-21JUL26-CKB-740.jpg",
    href: "https://www.youtube.com/@danilovicentin",
  },
  {
    platform: "TIKTOK",
    handle: "@danilovicentin",
    caption: { pt: "Na linha de largada", en: "On the starting grid" },
    src: "/Imagens/CKB3-AMIKA-M-759.jpg",
    href: "https://www.tiktok.com/@danilovicentin",
  },
] as const
