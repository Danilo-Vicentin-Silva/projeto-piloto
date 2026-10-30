"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import {
  ArrowDownRight,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Youtube,
  X,
  Zap,
} from "lucide-react"

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
    title: "SOBRE\nMIM",
    subtitle: "DANILO VICENTIN",
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    followText: "Siga nas redes sociais",
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
    title: "ABOUT\nME",
    subtitle: "DANILO VICENTIN",
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    followText: "Follow on social media",
    footer: "The next lap starts now.",
  },
}

type Lang = keyof typeof copy

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="label-dot" />
      {children}
    </div>
  )
}

export default function About() {
  const [lang, setLang] = useState<Lang>("pt")
  const [menuOpen, setMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const mainRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  })
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
        <a href="/" className="brand-mark" aria-label="Danilo Vicentin — página inicial">
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
                  "/#journey",
                  "/#gallery",
                  "/on-track",
                  "/#socials",
                  "/#partners",
                  "/#contact",
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
                    "/#journey",
                    "/#gallery",
                    "/on-track",
                    "/about",
                    "/#socials",
                    "/#partners",
                    "/#contact",
                  ][index]
                }
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </motion.header>

      <section className="about-section relative px-6 py-24 md:px-10 md:py-32">
        <motion.div
          className="about-flow"
          animate={{
            x: ["-4%", "5%", "-4%"],
            y: ["0%", "8%", "0%"],
            rotate: [-2, 2, -2],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="noise-overlay" />
        <div className="mx-auto grid max-w-7xl gap-8 md:gap-12 md:grid-cols-12 md:items-start">
          <motion.div
            className="md:col-span-5"
            initial={{ x: -90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>{activeCopy.eyebrow}</SectionLabel>
            <h2 className="display-title mt-5 mb-4">
              {activeCopy.title.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="hero-tagline">{activeCopy.subtitle}</p>
          </motion.div>
          <motion.div
            className="relative md:col-span-7"
            initial={{ x: 100, opacity: 0, rotate: 3 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            whileHover={{ y: -12, rotate: -1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-photo">
              <img
                src="/Imagens/CleevStudio_CKB_JUL26-0668.jpg"
                alt="Danilo Vicentin piloto de karting"
              />
            </div>
            <div className="photo-caption">
              SÃO PAULO / BRAZIL <span>2024</span>
            </div>
          </motion.div>
        </div>
        <motion.a
          href="#about-content"
          className="scroll-cue"
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <span>Scroll to explore</span>
          <ArrowDownRight size={20} />
        </motion.a>
      </section>

      <section id="about-content" className="about-content-section relative px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-text">{activeCopy.aboutText}</p>
          </motion.div>

          <motion.div
            className="social-links mt-16"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            <p className="follow-label">{activeCopy.followText}</p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/danilo_vicentin_silva/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@danilovicentin"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@danilovicentindasilva"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="TikTok"
              >
                <Zap size={24} />
              </a>
              <a
                href="mailto:contato@danilovicentin.com"
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
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
            <a href="/#contact" className="footer-store">
              STORE
            </a>
            <a href="/" className="footer-menu">
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
            {["HOME", "ON TRACK", "ABOUT", "CALENDAR"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={["/", "/on-track", "/about", "/#partners"][index]}
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
              href="/#contact"
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
              <a href="/">PRIVACY POLICY</a>
              <a href="/">TERMS</a>
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
