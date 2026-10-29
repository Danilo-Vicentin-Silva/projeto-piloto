'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Menu, X } from 'lucide-react';
import styles from './on-track-simple.module.css';

export default function OnTrackPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Danilo Vicentin — página inicial">
          <img src="/Marca/logo.png" alt="" />
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <Link href="/#journey">A jornada</Link>
          <Link href="/on-track" aria-current="page">On Track</Link>
          <Link href="/#gallery">Galeria</Link>
          <Link href="/#socials">Redes</Link>
        </nav>

        <button
          className={styles.menuButton}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {menuOpen && (
          <nav className={styles.mobileNav} aria-label="Navegação mobile">
            <Link onClick={() => setMenuOpen(false)} href="/#journey">A jornada</Link>
            <Link onClick={() => setMenuOpen(false)} href="/on-track">On Track</Link>
            <Link onClick={() => setMenuOpen(false)} href="/#gallery">Galeria</Link>
            <Link onClick={() => setMenuOpen(false)} href="/#socials">Redes</Link>
          </nav>
        )}
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>/// MINHA TRAJETÓRIA NO KART</p>
          <h1>ON <span>TRACK</span></h1>
          <p className={styles.intro}>Um registro simples da minha experiência nas pistas.</p>
        </div>
        <img
          className={styles.heroImage}
          src="/Imagens/CKB3-AMIKA-M-759.jpg"
          alt="Kart na pista durante uma etapa"
        />
      </section>

      <section className={styles.resultSection} aria-labelledby="result-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>MINHA PARTICIPAÇÃO</p>
          <h2 id="result-title">Meu resultado</h2>
        </div>

        <article className={styles.resultCard}>
          <div className={styles.resultChampionship}>
            <span>CAMPEONATO</span>
            <h3>CKB</h3>
          </div>
          <div className={styles.resultVenue}>
            <span>LOCAL</span>
            <p><MapPin size={17} aria-hidden="true" /> Kartódromo de Nova Odessa</p>
          </div>
          <div className={styles.resultPosition}>
            <span>CLASSIFICAÇÃO</span>
            <strong>12º</strong>
            <small>lugar</small>
          </div>
        </article>
      </section>

      <footer className={styles.footer}>
        <Link href="/">Danilo Vicentin</Link>
        <span>On Track</span>
      </footer>
    </main>
  );
}
