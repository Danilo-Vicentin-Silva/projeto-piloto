'use client';

import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  Instagram,
  Menu,
  X,
} from 'lucide-react';
import styles from './on-track.module.css';

const photoMoments = [
  {
    src: '/Imagens/CKB3-AMIKA-M-621.jpg',
    alt: 'Karts disputando uma etapa no kartódromo',
    className: 'photoTall',
  },
  {
    src: '/Imagens/CKB3-AMIKA-M-622.jpg',
    alt: 'Danilo Vicentin acompanhando uma etapa no kartódromo',
    className: 'photoShort',
  },
  {
    src: '/Imagens/CKB3-AMIKA-M-759.jpg',
    alt: 'Kart na pista durante uma etapa de corrida',
    className: 'photoShort',
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;
const staggerIn = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const riseIn = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } },
};
const revealWord = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.9, ease: easeOut } },
};

function SectionHeading({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: ReactNode; description?: string }) {
  return (
    <motion.div
      className={styles.sectionHeading}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      <div>
        <p className={styles.eyebrow}><span>{index}</span>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className={styles.sectionDescription}>{description}</p>}
    </motion.div>
  );
}

export default function OnTrackPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleParallax = useSpring(useTransform(scrollYProgress, [0, 1], [0, -135]), { stiffness: 80, damping: 24, mass: 0.5 });
  const visualParallax = useSpring(useTransform(scrollYProgress, [0, 1], [0, 78]), { stiffness: 85, damping: 25, mass: 0.55 });

  return (
    <main className={styles.page}>
      <motion.header
        className={`${styles.header} site-header`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link href="/" className="brand-mark" aria-label="Danilo Vicentin — página inicial"><img src="/Marca/logo.png" alt="" /></Link>
        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <Link href="/#journey" className="nav-link">01 <span>A JORNADA</span></Link>
          <Link href="/on-track" className={styles.activeNav}>02 <span>ON-TRACK</span></Link>
          <Link href="/#gallery" className="nav-link">03 <span>GALERIA</span></Link>
          <Link href="/#socials" className="nav-link">04 <span>REDES</span></Link>
        </nav>
        <button className={`${styles.menuButton} menu-button lg:hidden`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className={`${styles.mobileNav} mobile-menu`} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} aria-label="Navegação mobile">
              <Link onClick={() => setMenuOpen(false)} href="/#journey">A jornada</Link>
              <Link onClick={() => setMenuOpen(false)} href="/on-track">On-Track</Link>
              <Link onClick={() => setMenuOpen(false)} href="/#gallery">Galeria</Link>
              <Link onClick={() => setMenuOpen(false)} href="/#socials">Redes sociais</Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <section id="top" ref={heroRef} className={styles.hero}>
        <div className={styles.heroBlueprint} aria-hidden="true" />
        <motion.div className={styles.heroDisplay} style={{ y: titleParallax }} aria-hidden="true">ON TRACK</motion.div>
        <div className={styles.heroInner}>
          <motion.div className={styles.heroCopy} style={{ y: useTransform(scrollYProgress, [0, 1], [0, -48]) }} initial="hidden" animate="show" variants={staggerIn}>
            <p className={styles.eyebrow}><span>{'///'}</span> <img className={styles.inlineLogo} src="/Marca/logo.png" alt="Logo de Danilo Vicentin" /> · CADERNO DE PISTA</p>
            <motion.h1 aria-label="On Track" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.12 } } }}>
              <span className={styles.heroWordMask}><motion.span className={styles.heroWord} variants={revealWord}>ON</motion.span></span>
              <span className={styles.heroWordMask}><motion.span className={`${styles.heroWord} ${styles.heroWordAccent}`} variants={revealWord}>TRACK</motion.span></span>
            </motion.h1>
            <motion.p className={styles.heroLead} variants={riseIn}>Cada curva conta uma história.<br />Esta é a minha, volta após volta.</motion.p>
            <motion.div className={styles.bioTags} variants={staggerIn}>
              {['KARTING · BRASIL', 'BORN TO PUSH'].map((tag, index) => (
                <motion.span
                  className={index === 1 ? styles.tagline : ''}
                  key={tag}
                  variants={{ hidden: { opacity: 0, y: 14, scale: 0.88 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 280, damping: 18 } } }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            <motion.a href="#trackside" className={styles.scrollLink} variants={riseIn}>VER MOMENTOS DA PISTA <ArrowDownRight size={16} /></motion.a>
          </motion.div>
          <motion.div
            className={styles.heroVisual}
            style={{ y: visualParallax }}
            initial={{ clipPath: 'inset(0 0 100% 0 round 8px)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0 0% 0 round 8px)', opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/Imagens/CKB3-AMIKA-M-759.jpg" alt="Kart na pista durante uma etapa de corrida" />
            <div className={styles.heroImageWash} />
            <span className={styles.imageFrameLabel}>KARTING / NA PISTA</span>
            <svg className={styles.signature} viewBox="0 0 230 90" aria-label="Assinatura estilizada de Danilo">
              <motion.path d="M8 60c20-45 25-38 13 2-8 27 20-37 29-31 5 3-15 32-3 30 8-1 16-25 22-25 4 0-7 24-3 26 3 2 11-22 17-21 5 1-7 19 1 20 6 1 13-21 20-22 7-1-5 20 4 21 7 1 14-22 22-22 7 0-5 20 4 21 8 1 20-19 30-28 5-5-9 23-2 27 7 4 26-16 40-20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, delay: 1, ease: easeOut }} />
              <motion.path d="M123 76c35 4 65 1 97-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 2.6, ease: easeOut }} />
            </svg>
            <span className={styles.imageIndex}><img className={styles.inlineLogo} src="/Marca/logo.png" alt="Logo de Danilo Vicentin" /></span>
          </motion.div>
        </div>
      </section>

      <section className={styles.resultsSection}>
        <div className={styles.container}>
          <SectionHeading index="01" eyebrow="NA PISTA" title={<>KARTING<br /><span>EM MOVIMENTO.</span></>} description="Um pouco da minha jornada sobre quatro rodas." />
          <div className={`${styles.editorialGrid} ${styles.trackGallery}`}>
            {photoMoments.map((photo, index) => (
              <motion.figure
                className={`${styles.editorialPhoto} ${styles[photo.className]}`}
                key={photo.src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption><span>DANILO VICENTIN</span><strong>0{index + 1}</strong></figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <Link href="/" className={styles.footerBrand}><img className={styles.footerLogo} src="/Marca/logo.png" alt="" /> PILOT <i>{'///'}</i></Link>
          <p>A PRÓXIMA VOLTA COMEÇA AGORA.</p>
          <div><Link href="/#socials"><Instagram size={15} /> ACOMPANHE A JORNADA</Link><Link href="/#contact">CONTATO <ArrowRight size={15} /></Link></div>
          <small>© {new Date().getFullYear()} <img className={styles.footerCopyrightLogo} src="/Marca/logo.png" alt="Logo de Danilo Vicentin" /> PILOT</small>
        </div>
      </footer>
    </main>
  );
}
