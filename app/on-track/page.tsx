'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Flag,
  Gauge,
  Instagram,
  MapPin,
  Menu,
  Trophy,
  X,
  Zap,
} from 'lucide-react';
import styles from './on-track.module.css';

const nextRace = {
  round: '05',
  venue: 'Autódromo de Interlagos',
  city: 'São Paulo, Brasil',
  date: '15 NOV 2026',
  startsAt: '2026-11-15T10:30:00-03:00',
  laps: 18,
  distance: '43,2 KM',
};

const stats = [
  { label: 'PÓDIOS', value: '18', detail: 'TOP 3 • CARREIRA', icon: Trophy },
  { label: 'VITÓRIAS', value: '07', detail: 'PILOTO • KART', icon: Flag },
  { label: 'POLES', value: '05', detail: 'MELHOR POSIÇÃO', icon: Zap },
  { label: 'POSIÇÃO MÉDIA', value: '4,2', detail: 'ÚLTIMAS 12 ETAPAS', icon: Gauge },
  { label: 'VOLTA RÁPIDA', value: '09', detail: 'RECORDE PESSOAL', icon: ArrowDownRight },
];

const seasons = [
  { year: '2026', championship: 'Campeonato Nacional', position: 'P2', podiums: '06' },
  { year: '2025', championship: 'Copa Brasil de Kart', position: 'P4', podiums: '05' },
  { year: '2024', championship: 'Kart Series Sul', position: 'P3', podiums: '04' },
];

const results = [
  { category: 'KART / OKN', round: 'ETAPA 04 · VELOPARK', date: '11 OUT 2026', position: 'P2', time: '+0.284', highlight: false },
  { category: 'KART / OKN', round: 'ETAPA 03 · CASCAVEL', date: '20 SET 2026', position: 'P1', time: '18:42.610', highlight: true },
  { category: 'KART / OKN', round: 'ETAPA 02 · SERRA', date: '16 AGO 2026', position: 'P3', time: '+1.092', highlight: false },
  { category: 'KART / OKN', round: 'ETAPA 01 · INTERLAGOS', date: '14 JUN 2026', position: 'P1', time: '19:06.238', highlight: true },
];

const photoMoments = [
  {
    src: 'https://images.pexels.com/photos/11086446/pexels-photo-11086446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Kart acelerando durante uma corrida',
    location: 'VELOPARK / BRASIL',
    year: '2026',
    className: 'photoTall',
  },
  {
    src: 'https://images.pexels.com/photos/12797362/pexels-photo-12797362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Piloto concentrado antes da corrida',
    location: 'CASCAVEL / BRASIL',
    year: '2025',
    className: 'photoShort',
  },
  {
    src: 'https://images.pexels.com/photos/27467743/pexels-photo-27467743.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Kart em alta velocidade na pista',
    location: 'SERRA / BRASIL',
    year: '2024',
    className: 'photoShort',
  },
];

const achievements = [
  { title: 'CAMPEÃO REGIONAL', category: 'Kart / Cadete', year: '2024', mark: '01' },
  { title: 'COPA DE INVERNO', category: 'Kart / Júnior', year: '2025', mark: '02' },
  { title: 'PÓDIO NACIONAL', category: 'Kart / OKN', year: '2026', mark: '03' },
  { title: 'POLE POSITION', category: 'Kart / OKN', year: '2026', mark: '04' },
];

const sessions = [
  { name: 'TREINO 1', date: 'SEX 13 NOV', time: '09:20' },
  { name: 'TREINO 2', date: 'SEX 13 NOV', time: '14:10' },
  { name: 'CLASSIFICAÇÃO', date: 'SÁB 14 NOV', time: '10:35' },
  { name: 'CORRIDA', date: 'DOM 15 NOV', time: '10:30' },
];

const calendar = [
  {
    round: '05',
    venue: 'Autódromo de Interlagos',
    city: 'São Paulo, SP',
    date: '15 NOV 2026',
    laps: '18 VOLTAS',
    distance: '43,2 KM',
    detail: 'O desafio final da temporada combina o miolo técnico com a reta mais longa do calendário.',
    history: 'Última passagem: P1 · melhor volta: 1:03.482',
  },
  {
    round: '06',
    venue: 'Kartódromo de Aldeia da Serra',
    city: 'Barueri, SP',
    date: '06 DEZ 2026',
    laps: '22 VOLTAS',
    distance: '26,4 KM',
    detail: 'Traçado compacto e fluido, com curvas de raio variável e pouco espaço para erro.',
    history: 'Última passagem: P3 · melhor volta: 0:48.216',
  },
  {
    round: '07',
    venue: 'Kartódromo de Cascavel',
    city: 'Cascavel, PR',
    date: '24 JAN 2027',
    laps: '20 VOLTAS',
    distance: '31,0 KM',
    detail: 'Circuito veloz que recompensa consistência e uma boa saída das curvas de alta.',
    history: 'Última passagem: P1 · melhor volta: 0:54.901',
  },
  {
    round: '08',
    venue: 'Kartódromo do Velopark',
    city: 'Nova Santa Rita, RS',
    date: '21 FEV 2027',
    laps: '24 VOLTAS',
    distance: '28,8 KM',
    detail: 'Uma sequência técnica em que acertar o ritmo de volta faz toda a diferença.',
    history: 'Última passagem: P2 · melhor volta: 0:42.078',
  },
];

const helmetDesigns = [
  { name: 'GREEN SIGNAL', year: '2026', series: 'RACE EDITION', primary: '#32cd32', secondary: '#06102d' },
  { name: 'GOLDEN LAP', year: '2025', series: 'CHAMPION EDITION', primary: '#ffd700', secondary: '#0047ab' },
  { name: 'BLUE SHIFT', year: '2025', series: 'TRACK EDITION', primary: '#0047ab', secondary: '#ffd700' },
  { name: 'FIRST GRID', year: '2024', series: 'ORIGINAL EDITION', primary: '#32cd32', secondary: '#0047ab' },
];

const filters = ['TODOS', '2026', '2025', '2024'] as const;
type HelmetFilter = (typeof filters)[number];

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

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!inView) return;

    const target = Number(value.replace(',', '.'));
    const decimals = value.includes(',') ? value.split(',')[1].length : 0;
    const duration = 1500;
    let frame = 0;
    let startTime = 0;

    const tick = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;
      setDisplayValue(current.toFixed(decimals).replace('.', ',').padStart(value.length, '0'));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

function Countdown() {
  const [remaining, setRemaining] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const updateCountdown = () => {
      const distance = Math.max(0, new Date(nextRace.startsAt).getTime() - Date.now());
      const days = Math.floor(distance / 86_400_000);
      const hours = Math.floor((distance % 86_400_000) / 3_600_000);
      const minutes = Math.floor((distance % 3_600_000) / 60_000);
      const seconds = Math.floor((distance % 60_000) / 1_000);
      setRemaining([days, hours, minutes, seconds]);
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdownDigits} aria-label={`${remaining[0]} dias, ${remaining[1]} horas, ${remaining[2]} minutos e ${remaining[3]} segundos`}>
      {remaining.map((value, index) => (
        <span className={styles.countdownUnit} key={index}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.strong
              key={value}
              initial={{ y: -9, opacity: 0, filter: 'blur(3px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: 9, opacity: 0, filter: 'blur(3px)' }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              {String(value).padStart(2, '0')}
            </motion.strong>
          </AnimatePresence>
          <small>{['DIAS', 'HORAS', 'MIN', 'SEG'][index]}</small>
        </span>
      ))}
    </div>
  );
}

function HelmetArtwork({ primary, secondary }: { primary: string; secondary: string }) {
  return (
    <svg className={styles.helmetArtwork} viewBox="0 0 300 250" role="img" aria-label="Ilustração de capacete de competição">
      <defs>
        <linearGradient id={`helmet-base-${primary.slice(1)}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f3f1e9" />
        </linearGradient>
      </defs>
      <ellipse cx="154" cy="211" rx="100" ry="14" fill="rgba(6,16,45,.12)" />
      <path d="M54 157C51 91 94 42 158 38c53-3 94 34 96 86l25 25c4 5 1 12-6 13l-39 1c-9 28-39 48-77 49h-46c-27-1-49-23-57-55Z" fill={`url(#helmet-base-${primary.slice(1)})`} stroke="#06102d" strokeWidth="5" strokeLinejoin="round" />
      <path d="M69 127c14-48 48-72 91-76 37-4 67 13 82 42-38 7-70 28-95 61H65Z" fill={primary} />
      <path d="M63 143c39-3 81-24 119-58 17 2 34 8 48 18-31 8-60 28-87 61-28 11-54 12-75 8-4-9-6-19-5-29Z" fill={secondary} />
      <path d="M92 166c32-1 66-13 99-37l-24 43c-27 20-52 28-73 25l-2-31Z" fill={primary} />
      <path d="M103 127c32-18 67-35 105-41-16 12-29 26-39 43-24 14-47 24-70 29l4-31Z" fill="#06102d" />
      <path d="M72 176c26 8 61 5 101-11l-14 26c-35 15-65 11-87-1Z" fill="#ffd700" />
      <path d="M53 157c20 5 40 8 61 8 16 0 33-3 51-10l-10 25c-30 12-61 13-91 4-6-8-10-17-11-27Z" fill="#06102d" stroke="#06102d" strokeWidth="4" />
      <path d="M242 125h31l11 17-42 2" fill={primary} stroke="#06102d" strokeWidth="4" strokeLinejoin="round" />
      <path d="M80 77l16-13m1 30 20-18m82 81 18-15" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".8" />
    </svg>
  );
}

export default function OnTrackPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openRound, setOpenRound] = useState<string | null>('05');
  const [helmetFilter, setHelmetFilter] = useState<HelmetFilter>('TODOS');
  const heroRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const trackInView = useInView(trackRef, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleParallax = useSpring(useTransform(scrollYProgress, [0, 1], [0, -135]), { stiffness: 80, damping: 24, mass: 0.5 });
  const visualParallax = useSpring(useTransform(scrollYProgress, [0, 1], [0, 78]), { stiffness: 85, damping: 25, mass: 0.55 });

  const visibleHelmets = helmetDesigns.filter((design) => helmetFilter === 'TODOS' || design.year === helmetFilter);

  return (
    <main className={styles.page}>
      <motion.header
        className={`${styles.header} site-header`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link href="/" className="brand-mark" aria-label="Pilot 23 — página inicial"><span>23</span><i>{'///'}</i></Link>
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
            <p className={styles.eyebrow}><span>{'///'}</span> PILOT 23 · CADERNO DE PISTA</p>
            <motion.h1 aria-label="On Track" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.12 } } }}>
              <span className={styles.heroWordMask}><motion.span className={styles.heroWord} variants={revealWord}>ON</motion.span></span>
              <span className={styles.heroWordMask}><motion.span className={`${styles.heroWord} ${styles.heroWordAccent}`} variants={revealWord}>TRACK</motion.span></span>
            </motion.h1>
            <motion.p className={styles.heroLead} variants={riseIn}>Cada curva conta uma história.<br />Esta é a minha, volta após volta.</motion.p>
            <motion.div className={styles.bioTags} variants={staggerIn}>
              {['17 ANOS · DADO DEMONSTRATIVO', 'SÃO PAULO / BR', 'KARTING · OKN', 'BORN TO PUSH'].map((tag, index) => (
                <motion.span
                  className={index === 3 ? styles.tagline : ''}
                  key={tag}
                  variants={{ hidden: { opacity: 0, y: 14, scale: 0.88 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 280, damping: 18 } } }}
                >
                  {index === 1 && <MapPin size={13} />}
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            <motion.a href="#telemetry" className={styles.scrollLink} variants={riseIn}>EXPLORAR TELEMETRIA <ArrowDownRight size={16} /></motion.a>
          </motion.div>
          <motion.div
            className={styles.heroVisual}
            style={{ y: visualParallax }}
            initial={{ clipPath: 'inset(0 0 100% 0 round 8px)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0 0% 0 round 8px)', opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="https://images.pexels.com/photos/11086446/pexels-photo-11086446.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800" alt="Kart acelerando em uma curva durante a corrida" />
            <div className={styles.heroImageWash} />
            <span className={styles.imageCoordinates}>23°33&apos;S&nbsp; 46°39&apos;W</span>
            <span className={styles.imageFrameLabel}>ON BOARD / RACE DAY</span>
            <svg className={styles.signature} viewBox="0 0 230 90" aria-label="Assinatura estilizada de Danilo">
              <motion.path d="M8 60c20-45 25-38 13 2-8 27 20-37 29-31 5 3-15 32-3 30 8-1 16-25 22-25 4 0-7 24-3 26 3 2 11-22 17-21 5 1-7 19 1 20 6 1 13-21 20-22 7-1-5 20 4 21 7 1 14-22 22-22 7 0-5 20 4 21 8 1 20-19 30-28 5-5-9 23-2 27 7 4 26-16 40-20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, delay: 1, ease: easeOut }} />
              <motion.path d="M123 76c35 4 65 1 97-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 2.6, ease: easeOut }} />
            </svg>
            <span className={styles.imageIndex}>FRAME 023 <span>•</span> 2026</span>
          </motion.div>
        </div>
        <div className={styles.raceStatus}>
          <motion.div className={styles.previousRace} initial={{ opacity: 0, x: -26 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.72, duration: 0.75, ease: easeOut }}>
            <span className={styles.statusLabel}><i /> ÚLTIMA ETAPA</span>
            <p>04 <span>—</span> VELOPARK</p>
            <strong>2º LUGAR <small>+0.284s</small></strong>
          </motion.div>
          <motion.div className={styles.nextRace} initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.84, duration: 0.75, ease: easeOut }}>
            <span className={styles.statusLabel}><motion.i animate={{ opacity: [1, 0.35, 1], scale: [1, 0.86, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} /> PRÓXIMO ROUND</span>
            <div><strong>05</strong><span><b>INTERLAGOS</b><small>{nextRace.date} · SÃO PAULO, BR</small></span><ArrowUpRight size={20} /></div>
          </motion.div>
        </div>
        <p className={styles.demoNotice}>DADOS E RESULTADOS DE DEMONSTRAÇÃO · NÃO OFICIAIS</p>
      </section>

      <section id="telemetry" className={styles.section}>
        <div className={styles.container}>
          <SectionHeading index="01" eyebrow="LEITURA DE CARREIRA" title={<>NÚMEROS QUE<br /><span>FALAM POR SI.</span></>} description="Ritmo, consistência e evolução — medidos a cada passagem pela linha de chegada." />
          <motion.div className={styles.statsGrid} variants={staggerIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {stats.map(({ label, value, detail, icon: Icon }, index) => (
              <motion.article
                className={`${styles.statCard} ${index === 0 ? styles.statLead : ''}`}
                key={label}
                variants={riseIn}
                whileHover={{ y: -5 }}
              >
                <div className={styles.statTop}><span>0{index + 1} / KPI</span><Icon size={18} /></div>
                <strong className={styles.statValue}><CountUp value={value} /></strong>
                <div className={styles.statBottom}><span>{label}</span><small>{detail}</small></div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div className={styles.seasonCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.75, ease: easeOut }}>
            <div className={styles.tableHeading}><div><span className={styles.eyebrow}><span>{'///'}</span> TRAJETÓRIA</span><h3>Temporadas</h3></div><span className={styles.pill}><i /> 2024 — 2026</span></div>
            <motion.div className={styles.seasonTable} role="table" aria-label="Resultados por temporada" variants={staggerIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <div className={styles.seasonRow + ' ' + styles.tableHeader} role="row"><span>ANO</span><span>CAMPEONATO</span><span>POSIÇÃO</span><span>PÓDIOS</span></div>
              {seasons.map((season) => <motion.div className={styles.seasonRow} role="row" key={season.year} variants={riseIn}><strong>{season.year}</strong><span>{season.championship}</span><b>{season.position}</b><span className={styles.mono}>{season.podiums}</span></motion.div>)}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.resultsSection}>
        <div className={styles.container}>
          <SectionHeading index="02" eyebrow="DADOS DE CORRIDA" title={<>CADA ETAPA.<br /><span>CADA DETALHE.</span></>} description="A temporada contada em setores, grids e resultados." />
          <div className={styles.resultsCard}>
            <div className={styles.resultsTitle}><h3>CLASSIFICAÇÃO DE ETAPA</h3><span className={styles.liveLabel}><i /> REGISTRO DE TEMPORADA</span></div>
            <div className={styles.resultsTable} role="table" aria-label="Resultados recentes de corrida">
              <div className={`${styles.resultRow} ${styles.resultHeader}`} role="row"><span>CATEGORIA</span><span>ETAPA / PISTA</span><span>DATA</span><span>POS.</span><span>TEMPO / DIF.</span></div>
              {results.map((result, index) => <motion.div className={styles.resultRow} role="row" key={result.round} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ x: 8 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}><span className={styles.category}>{result.category}</span><strong>{result.round}</strong><span className={styles.mono}>{result.date}</span><motion.b className={result.highlight ? styles.winner : ''} animate={result.highlight ? { boxShadow: ['0 0 0 0 rgba(50,205,50,0)', '0 0 0 5px rgba(50,205,50,0.16)', '0 0 0 0 rgba(50,205,50,0)'] } : undefined} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}>{result.position}</motion.b><span className={styles.mono}>{result.time}</span></motion.div>)}
            </div>
          </div>
          <div className={styles.editorialGrid}>
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
                <figcaption><span>{photo.location}</span><strong>{photo.year}</strong></figcaption>
              </motion.figure>
            ))}
            <motion.blockquote className={styles.quoteCard} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, ease: easeOut }}>
              <span>“</span>
              <p>O cronômetro não mente. Mas é a vontade de melhorar que muda o resultado.</p>
              <footer><i /> DANILO VICENTIN <small>· CADERNO DE PISTA</small></footer>
            </motion.blockquote>
          </div>
        </div>
      </section>

      <section className={styles.trophySection}>
        <div className={styles.container}>
          <SectionHeading index="03" eyebrow="CONQUISTAS" title={<>FEITAS DE<br /><span>VOLTA EM VOLTA.</span></>} description="Cada troféu marca um começo — nunca uma linha de chegada." />
          <motion.div className={styles.trophyGrid} variants={staggerIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {achievements.map((achievement, index) => (
              <motion.article className={styles.trophyCard} key={achievement.mark} variants={riseIn} whileHover={{ y: -7, rotateX: 2, rotateY: index % 2 ? -2 : 2 }} style={{ transformPerspective: 900 }} transition={{ duration: 0.5, ease: easeOut }}>
                <div className={styles.trophyCardTop}><span>0{achievement.mark}</span><Trophy size={21} /></div>
                <div className={styles.trophyGlyph}><Flag size={28} strokeWidth={1.4} /></div>
                <div><h3>{achievement.title}</h3><p>{achievement.category}</p></div>
                <strong className={styles.trophyYear}>{achievement.year}</strong>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.raceSection}>
        <div className={styles.container}>
          <motion.div className={styles.countdownBanner} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: easeOut }}>
            <div className={styles.countdownCopy}><p className={styles.eyebrow}><span>{'///'}</span> A PRÓXIMA LARGADA</p><h2>O GRID NÃO<br /><span>ESPERA.</span></h2><p>INTERLAGOS · ROUND {nextRace.round} · {nextRace.date}</p></div>
            <div className={styles.countdownPanel}><span className={styles.countdownLabel}><motion.i animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} /> LIVE / NEXT</span><Countdown /><div className={styles.countdownTrack}><motion.span animate={{ width: ['52%', '68%', '52%'] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} /></div></div>
            <div className={styles.countdownMark}>23</div>
          </motion.div>

          <motion.div className={styles.circuitCard} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.85, ease: easeOut }}>
            <div className={styles.circuitInfo}>
              <p className={styles.eyebrow}><span>04</span> CIRCUIT SPOTLIGHT</p>
              <h2>INTERLAGOS<span>.</span></h2>
              <p className={styles.circuitLocation}><MapPin size={15} /> SÃO PAULO, BRASIL</p>
              <div className={styles.circuitStats}>
                <div><small>EXTENSÃO</small><strong>2,400 <i>KM</i></strong></div>
                <div><small>PRIMEIRA VEZ</small><strong>2024</strong></div>
                <div><small>DISTÂNCIA TOTAL</small><strong>{nextRace.distance}</strong></div>
                <div><small>Nº DE VOLTAS</small><strong>{nextRace.laps}</strong></div>
              </div>
              <motion.div className={styles.sessionSchedule} variants={staggerIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>{sessions.map((session) => <motion.div key={session.name} variants={riseIn}><span>{session.name}</span><small>{session.date}</small><b>{session.time}</b></motion.div>)}</motion.div>
            </div>
            <div className={styles.trackMap} ref={trackRef}>
              <span className={styles.trackMapLabel}>TRACK MAP / 01</span>
              <svg viewBox="0 0 520 400" role="img" aria-label="Traçado demonstrativo do circuito de Interlagos">
                <motion.path className={styles.trackShadow} d="M96 96 151 58l62 21 44-28 65 16 37 42 58 5 24 45-24 52-48 11-13 61-53 27-46-28-53 41-49-22 8-47-49-34 5-48-44-34 15-46Z" initial={{ pathLength: 0 }} animate={trackInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 2.3, ease: easeOut }} />
                <motion.path className={styles.trackLine} d="M96 96 151 58l62 21 44-28 65 16 37 42 58 5 24 45-24 52-48 11-13 61-53 27-46-28-53 41-49-22 8-47-49-34 5-48-44-34 15-46Z" initial={{ pathLength: 0 }} animate={trackInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 2.1, delay: 0.15, ease: easeOut }} />
                <motion.path className={styles.trackStart} d="m96 96 18-12" initial={{ pathLength: 0 }} animate={trackInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 0.4, delay: 1.8, ease: easeOut }} />
                <motion.circle cx="96" cy="96" r="8" className={styles.trackMarker} initial={{ scale: 0 }} animate={trackInView ? { scale: [0, 1.35, 1] } : { scale: 0 }} transition={{ duration: 0.45, delay: 2.1, ease: easeOut }} />
                <text x="114" y="89">S/F</text>
                <text x="302" y="319">INTERLAGOS</text>
              </svg>
              <span className={styles.mapCoordinates}>23°42&apos;S&nbsp; 46°41&apos;W</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.calendarSection}>
        <div className={styles.container}>
          <SectionHeading index="05" eyebrow="PRÓXIMOS DESAFIOS" title={<>CALENDÁRIO<br /><span>DA TEMPORADA.</span></>} description="Cada circuito tem seu próprio idioma. É hora de aprender a próxima curva." />
          <div className={styles.calendarHeader}><span className={styles.pill}><i /> POSIÇÃO ATUAL <b>P2</b></span><span className={styles.calendarDemo}>CALENDÁRIO DEMONSTRATIVO</span></div>
          <div className={styles.calendarList}>
            {calendar.map((round) => {
              const expanded = openRound === round.round;
              return (
                <article className={`${styles.calendarItem} ${expanded ? styles.expanded : ''}`} key={round.round}>
                  <button className={styles.calendarTrigger} onClick={() => setOpenRound(expanded ? null : round.round)} aria-expanded={expanded} aria-controls={`round-${round.round}`}>
                    <span className={styles.roundNumber}>R{round.round}</span>
                    <span className={styles.roundVenue}><strong>{round.venue}</strong><small>{round.city}</small></span>
                    <span className={styles.roundDate}>{round.date}</span>
                    <span className={styles.roundStats}><i>{round.laps}</i><i>{round.distance}</i></span>
                    <ChevronDown className={styles.roundChevron} size={19} />
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div id={`round-${round.round}`} className={styles.roundDetails} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
                        <div><span>BRIEFING DE PISTA</span><p>{round.detail}</p></div>
                        <div><span>HISTÓRICO DO PILOTO</span><p>{round.history}</p></div>
                        <div><span>SESSÕES DO FIM DE SEMANA</span><p>Treinos na sexta · classificação no sábado · corrida no domingo.</p></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.helmetSection}>
        <div className={styles.container}>
          <SectionHeading index="06" eyebrow="IDENTIDADE DE PISTA" title={<>HALL OF FAME<br /><span>CAPACETES.</span></>} description="Pinturas que guardam capítulos da jornada. Cada edição, uma memória." />
          <div className={styles.helmetFilters} role="group" aria-label="Filtrar capacetes por temporada">
            {filters.map((filter) => <button className={helmetFilter === filter ? styles.filterActive : ''} key={filter} onClick={() => setHelmetFilter(filter)} aria-pressed={helmetFilter === filter}>{filter}</button>)}
          </div>
          <motion.div className={styles.helmetGrid} layout>
            <AnimatePresence mode="popLayout">
              {visibleHelmets.map((design) => (
                <motion.article className={styles.helmetCard} key={design.name} layout initial={{ opacity: 0, scale: 0.96, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 10 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                  <div className={styles.helmetArtArea}><span>{design.year}</span><HelmetArtwork primary={design.primary} secondary={design.secondary} /><i>DV / 23</i></div>
                  <div className={styles.helmetMeta}><span>{design.series}</span><h3>{design.name}</h3><ArrowUpRight size={17} /></div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <Link href="/" className={styles.footerBrand}><span>23</span> PILOT <i>{'///'}</i></Link>
          <p>A PRÓXIMA VOLTA COMEÇA AGORA.</p>
          <div><Link href="/#socials"><Instagram size={15} /> ACOMPANHE A JORNADA</Link><Link href="/#contact">CONTATO <ArrowRight size={15} /></Link></div>
          <small>© 2026 PILOT 23 · DADOS DE PISTA DEMONSTRATIVOS</small>
        </div>
      </footer>
    </main>
  );
}
