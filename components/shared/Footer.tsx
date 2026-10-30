"use client"

import { motion } from "framer-motion"
import { Menu } from "lucide-react"

interface FooterProps {
  basePath?: string
}

const socialLinks = [
  { name: "INSTAGRAM", href: "https://www.instagram.com/danilo_vicentin_silva/" },
  { name: "YOUTUBE", href: "https://www.youtube.com/@danilovicentin" },
  { name: "TIKTOK", href: "https://www.tiktok.com/@danilovicentindasilva" },
  { name: "LINKEDIN", href: "https://www.linkedin.com" },
]

const pageLinks = [
  { name: "HOME", href: "/" },
  { name: "ON TRACK", href: "/on-track" },
  { name: "ABOUT", href: "/about" },
  { name: "CALENDAR", href: "/#partners" },
]

export function Footer({ basePath = "" }: FooterProps) {
  return (
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
          <a href={`${basePath}/#contact`} className="footer-store">
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
          {pageLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={{
                hidden: { opacity: 0, x: -25 },
                show: { opacity: 1, x: 0 },
              }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href={`${basePath}/#contact`}
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
          {socialLinks.map((item) => (
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
  )
}
