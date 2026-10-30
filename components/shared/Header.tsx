"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  currentPath?: string
  lang: "pt" | "en"
  onLangChange: () => void
  navItems: readonly string[]
  navLinks: readonly string[]
}

export function Header({ currentPath = "/", lang, onLangChange, navItems, navLinks }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useState(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  })

  return (
    <header className={`site-header ${hasScrolled ? "is-scrolled" : ""}`}>
      <Link href="/" className="brand-mark" aria-label="Danilo Vicentin — página inicial">
        <img src="/Marca/logo.png" alt="" />
      </Link>
      <nav className="hidden items-center gap-4 lg:flex lg:gap-5 xl:gap-8">
        {navItems.map((item, index) => (
          <Link
            key={item}
            href={navLinks[index]}
            className="nav-link"
          >
            0{index + 1} <span>{item}</span>
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <button
          className="language-switch"
          onClick={onLangChange}
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
        <nav className="mobile-menu">
          {navItems.map((item, index) => (
            <Link
              onClick={() => setMenuOpen(false)}
              key={item}
              href={navLinks[index]}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
