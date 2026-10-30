"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import {
  ArrowDownRight,
  ArrowUpRight,
  Instagram,
  Mail,
  Menu,
  MoveRight,
  Play,
  X,
  Youtube,
  Zap,
} from "lucide-react"

const photos = [
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
]

const socialCards = [
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
]

const copy = {
  pt: {
    nav: [
      "A jornada",
      "Galeria",
      "On-Track",
      "Sobre mim",
      "Redes sociais",
      "Parcerias",
      "Contato",
    ],
    eyebrow: "Piloto de karting • Brasil",
    heroName: "DANILO\nVICENTIN",
    heroTagline: "NASCIDO PARA ACELERAR",
    heroBody:
      "Da primeira curva ao próximo grid. Uma jornada de velocidade, foco e ambição sem limites.",
    cta: "Assistir a apresentação",
    reel: "Conheça a jornada",
    journeyEyebrow: "01 / A jornada",
    journeyTitle: "Toda grande\nlinha de chegada\ncomeça aqui.",
    journeyBody:
      "Começou no kartodromo de Nova Odessa - SP, onde começou a dar seus primeiros passos em direção ao sonho de um dia ser um piloto de corrida, e cada volta, cada curva, começou a se dedicar cada vez mais para algo que um dia seria algo mais que um hooby",
    read: "Ler a história completa",
    galleryEyebrow: "02 / Dentro da pista",
    galleryTitle: "Velocidade\nem movimento",
    socialEyebrow: "03 / Acompanhe de perto",
    socialTitle: "WHAT’S UP\nNAS REDES",
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
      "About me",
      "Social media",
      "Partners",
      "Contact",
    ],
    eyebrow: "Karting driver • Brazil",
    heroName: "DANILO\nVICENTIN",
    heroTagline: "BORN TO PUSH",
    heroBody:
      "From the first corner to the next grid. A journey of speed, focus and limitless ambition.",
    cta: "Watch the apresentation",
    reel: "Know the journey",
    journeyEyebrow: "01 / The journey",
    journeyTitle: "Every great\nfinish line\nstarts here.",
    journeyBody:
      "It all started at the karting track in Nova Odessa - SP, where he took his first steps towards the dream of one day becoming a racing driver, and every lap, every corner, he began to dedicate himself more and more to something that would one day be more than a hobby.",
    read: "Read the full story",
    galleryEyebrow: "02 / Trackside",
    galleryTitle: "Speed\nin motion",
    socialEyebrow: "03 / Follow the journey",
    socialTitle: "WHAT’S UP\nON SOCIALS",
    socialFollow: "Follow Danilo on social media",
    socialLinkLabel: "Visit",
    partnersEyebrow: "04 / Race partners",
    partnersTitle: "Accelerate\nwith my brand.",
    partnersBody:
      "Brands ready to leave the grid with me and build the next chapter.",
    contact: "Start a conversation",
    footer: "The next lap starts now.",
  },
}

type Lang = keyof typeof copy

function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  return (
    <motion.a
      href="#contact"
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="label-dot" />
      {children}
    </div>
  )
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt")
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSocial, setActiveSocial] = useState(3)
  const [hasScrolled, setHasScrolled] = useState(false)
  const mainRef = useRef<HTMLElement>(null)
  const { scrollYProgress, scrollY } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  })
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "34%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0])
  const lineX = useTransform(scrollY, [0, 2400], [0, -420])
  const activeCopy = copy[lang]

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <main ref={mainRef} className="overflow-hidden bg-[#06102d] text-white">
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`site-header ${hasScrolled ? "is-scrolled" : ""}`}
      >
        <a href="#top" className="brand-mark" aria-label="Danilo Vicentin — página inicial">
          <img src="/Marca/logo.png" alt="" />
        </a>
        <nav className="hidden items-center gap-4 lg:flex lg:gap-5 xl:gap-8">
          {activeCopy.nav.map((item, index) => (
            <motion.a
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + index * 0.08 }}
              key={item}
              href={
                [
                  "#journey",
                  "#gallery",
                  "/on-track",
                  "/about",
                  "#socials",
                  "#partners",
                  "#contact",
                ][index]
              }
              className="nav-link"
            >
              0{index + 1} <span>{item}</span>
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="language-switch"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            aria-label="Change language"
          >
            <span className={lang === "pt" ? "active" : ""}>PT</span>
            <b>/</b>
            <span className={lang === "en" ? "active" : ""}>EN</span>
          </button>
          <button
            className="menu-button lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mobile-menu"
          >
            {activeCopy.nav.map((item, index) => (
              <a
                onClick={() => setMenuOpen(false)}
                key={item}
                href={
                  [
                    "#journey",
                    "#gallery",
                    "/on-track",
                    "/about",
                    "#socials",
                    "#partners",
                    "#contact",
                  ][index]
                }
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </motion.header>

      <section
        id="top"
        className="hero-section relative flex min-h-[820px] items-end md:min-h-screen"
      >
        <motion.div
          className="hero-grid"
          animate={{ backgroundPosition: ["0px 0px", "80px 40px", "0px 0px"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          style={{ x: lineX }}
          className="speed-lines"
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-orb orb-one"
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 24, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="hero-image-wrap"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.img
            src="/Imagens/CleevStudio_CKB_JUL26-0668.jpg"
            alt="Danilo Vicentin pilotando seu kart azul"
            animate={{ scale: [1.05, 1.1, 1.05] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="image-wash" />
        </motion.div>
        <motion.div
          className="hero-copy"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="hero-kicker">
            <span>{"///"}</span> {activeCopy.eyebrow}
          </div>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12, delayChildren: 0.32 },
              },
            }}
          >
            {activeCopy.heroName.split("\n").map((line) => (
              <motion.span
                key={line}
                variants={{
                  hidden: { opacity: 0, x: -80, skewX: -16 },
                  show: {
                    opacity: 1,
                    x: 0,
                    skewX: -7,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            className="hero-tagline"
            initial={{ opacity: 0, letterSpacing: ".6em" }}
            animate={{ opacity: 1, letterSpacing: ".22em" }}
            transition={{ delay: 0.85, duration: 1 }}
          >
            {activeCopy.heroTagline}
          </motion.div>
          <div className="hero-bottomline">
            <p>{activeCopy.heroBody}</p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton>{activeCopy.cta}</MagneticButton>
              <a href="#gallery" className="text-button">
                <Play size={15} fill="currentColor" /> {activeCopy.reel}
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="hero-number"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          01 <span>/ 05</span>
        </motion.div>
        <motion.a
          href="#journey"
          className="scroll-cue"
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <span>Scroll to explore</span>
          <ArrowDownRight size={20} />
        </motion.a>
      </section>

      <section id="journey" className="journey-section section-clip relative">
        <motion.div
          className="journey-flow"
          animate={{
            x: ["-4%", "5%", "-4%"],
            y: ["0%", "8%", "0%"],
            rotate: [-2, 2, -2],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="noise-overlay" />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-12 md:px-10 md:py-48">
          <motion.div
            className="md:col-span-5"
            initial={{ x: -90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>{activeCopy.journeyEyebrow}</SectionLabel>
            <h2 className="display-title mt-7">
              {activeCopy.journeyTitle.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="body-copy mt-9 max-w-md">{activeCopy.journeyBody}</p>
            <a
              href="/about"
              className="underlined-link mt-10 inline-flex items-center gap-4"
            >
              {activeCopy.read} <MoveRight size={18} />
            </a>
          </motion.div>
          <motion.div
            className="relative md:col-span-7"
            initial={{ x: 100, opacity: 0, rotate: 3 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            whileHover={{ y: -12, rotate: -1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="journey-photo">
              <img
                src="/Imagens/CLEEVSTUDIO-21JUL26-CKB-533.jpg"
                alt="Danilo Vicentin pilotando seu kart na pista"
              />
            </div>
            <div className="number-card">
              <span>KART</span>
              <img className="number-card-logo" src="/Marca/logo.png" alt="Logo de Danilo Vicentin" />
              <i>THE STARTING LINE</i>
            </div>
            <div className="photo-caption">
              SÃO PAULO / BRAZIL <span>2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="gallery"
        className="gallery-section relative px-6 py-32 md:px-10 md:py-44"
      >
        <motion.div
          className="gallery-flow"
          animate={{ x: ["-8%", "4%", "-8%"], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>{activeCopy.galleryEyebrow}</SectionLabel>
            <h2 className="display-title mt-7 max-w-lg">
              {activeCopy.galleryTitle.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </motion.div>
          <div className="gallery-grid mt-16">
            {photos.map((photo, index) => (
              <motion.a
                href="#contact"
                className={`gallery-card ${photo.className}`}
                key={photo.src}
                initial={{ opacity: 0, y: 70, rotate: index % 2 ? 2 : -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -14, rotate: index % 2 ? -1 : 1 }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
              >
                <img src={photo.src} alt={photo.label} />
                <div className="gallery-overlay">
                  <span>{photo.category}</span>
                  <strong>{photo.label}</strong>
                  <ArrowUpRight size={24} />
                </div>
                <div className="gallery-index">0{index + 1}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="socials"
        className="social-section relative overflow-hidden px-6 pt-14 pb-24 md:px-10 md:pt-16 md:pb-32"
      >
        <motion.div
          className="social-section-content relative z-10 mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75 }}
        >
          <div className="social-heading">
            <SectionLabel>{activeCopy.socialEyebrow}</SectionLabel>
            <h2 className="display-title social-display-title">
              {activeCopy.socialTitle.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </div>

          <div
            className="social-card-stack"
            aria-label={activeCopy.socialFollow}
            onMouseLeave={() => setActiveSocial(3)}
          >
            {socialCards.map((card, index) => (
              <motion.a
                key={`${card.platform}-${index}`}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className={`social-card social-card-${index}${activeSocial === index ? " is-active" : ""}`}
                aria-label={`${activeCopy.socialLinkLabel} ${card.platform}: ${card.caption[lang]}`}
                onMouseEnter={() => setActiveSocial(index)}
                onFocus={() => setActiveSocial(index)}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img src={card.src} alt={card.caption[lang]} loading="lazy" />
              </motion.a>
            ))}
          </div>

          <div className="social-follow">
            <p>{activeCopy.socialFollow}</p>
            <div className="social-platform-links">
              {socialCards
                .filter(
                  (card, index, cards) =>
                    cards.findIndex(
                      (item) => item.platform === card.platform,
                    ) === index,
                )
                .map((card) => (
                  <a
                    key={card.platform}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {card.platform}
                    <ArrowUpRight size={12} />
                  </a>
                ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="ticker-section">
        <motion.div
          className="ticker-glow"
          animate={{ x: ["-20%", "30%", "-20%"], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="ticker-track">
          <motion.div style={{ x: lineX }} className="ticker-content">
            {Array.from({ length: 3 }).map((_, index) => (
              <span key={index}>
                CKB <b>•</b> DANILO VICENTIN<b>•</b> KNO{" "}
                <b>•</b> KART <b>•</b>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="partners"
        className="partners-section relative px-6 py-32 md:px-10 md:py-48"
      >
        <motion.div
          className="partner-flow"
          animate={{
            x: ["0%", "-5%", "0%"],
            backgroundPosition: ["0px 0px", "90px 45px", "0px 0px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 partner-grid" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-12 md:items-end">
            <motion.div
              className="md:col-span-7"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.9 }}
            >
              <SectionLabel>{activeCopy.partnersEyebrow}</SectionLabel>
              <h2 className="display-title mt-7">
                {activeCopy.partnersTitle.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
            </motion.div>
            <motion.p
              className="body-copy md:col-span-4 md:col-start-9"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
            >
              {activeCopy.partnersBody}
            </motion.p>
          </div>
          <div aria-hidden="true" className="sponsor-grid mt-24 min-h-[150px]" />
          <div id="contact" className="contact-row mt-24">
            <span>{activeCopy.contact}</span>
            <div className="flex flex-wrap gap-4">
              <MagneticButton className="button-lime">
                <Mail size={17} /> EMAIL
              </MagneticButton>
              <MagneticButton className="button-outline">
                <Instagram size={17} /> INSTAGRAM
              </MagneticButton>
              <MagneticButton className="button-outline">
                <Youtube size={17} /> YOUTUBE
              </MagneticButton>
              <MagneticButton className="button-outline">
                <Zap size={17} /> WHATSAPP
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-stage">
          <motion.div
            className="footer-contours"
            animate={{
              x: ["0%", "-3%", "0%"],
              y: ["0%", "2%", "0%"],
              scale: [1, 1.04, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="footer-topbar"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="footer-wordmark">
              <span>PILOT</span>
              <strong>DRIVER</strong>
            </div>
            <a href="#contact" className="footer-store">
              <Zap size={14} /> STORE
            </a>
            <a href="#top" className="footer-menu">
              <Menu size={17} />
            </a>
          </motion.div>
          <motion.div
            className="footer-hero-copy"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="signature-mark">{"///"}</div>
            <h2>
              NUNCA
              <br />
              <span>DESISTIR</span>
            </h2>
          </motion.div>
          <motion.div
            className="footer-racer"
            initial={{ opacity: 0, y: 100, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/Imagens/CleevStudio_CKB_JUL26-0668.jpg"
              alt="Danilo Vicentin pilotando seu kart azul"
            />
          </motion.div>
          <motion.nav
            className="footer-pages"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <small>PAGES</small>
            {["HOME", "ON TRACK", "OFF TRACK", "CALENDAR"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={["#top", "/on-track", "#gallery", "#partners"][index]}
                  variants={{
                    hidden: { opacity: 0, x: -25 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  {item}
                </motion.a>
              ),
            )}
            <motion.a
              href="#contact"
              className="footer-highlight"
              variants={{
                hidden: { opacity: 0, x: -25 },
                show: { opacity: 1, x: 0 },
              }}
            >
              CONTACT
            </motion.a>
          </motion.nav>
          <motion.nav
            className="footer-socials"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08, delayChildren: 0.18 },
              },
            }}
          >
            <small>FOLLOW ON</small>
            {[
              { name: "INSTAGRAM", href: "https://www.instagram.com/danilo_vicentin_silva/" },
              { name: "YOUTUBE", href: "https://www.youtube.com/@danilovicentin" },
              { name: "TIKTOK", href: "https://www.tiktok.com/@danilovicentindasilva" },
              { name: "LINKEDIN", href: "https://www.linkedin.com" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                variants={{
                  hidden: { opacity: 0, x: 25 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>
          <div className="footer-base">
            <span>© 2024 DRIVER PORTFOLIO. ALL RIGHTS RESERVED</span>
            <span>
              <a href="#top">PRIVACY POLICY</a>
              <a href="#top">TERMS</a>
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
