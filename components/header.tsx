"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [navOpen]);

  const navLinks = [
    { href: "/", label: t("Home", "Accueil") },
    { href: "/experiences", label: t("Tours", "Visites") },
    { href: "/tours/rabat-day-trip", label: t("Rabat Day Trip", "Rabat — Excursion") },
    { href: "/about", label: t("About", "À propos") },
    { href: "/contact", label: t("Contact", "Contact") },
  ];

  const headerClasses = [
    "site-header",
    isScrolled ? "is-scrolled" : "",
    isHidden ? "is-hidden" : "",
    !isHome ? "is-solid" : "",
  ].filter(Boolean).join(" ");

  return (
    <header className={headerClasses} data-header>
      <Link className="brand" href="/" aria-label="Morocco Coco Travel home">
        <Image
          className="brand-logo"
          src="/images/morocco-coco-travel-logo-transparent.png"
          alt="Morocco Coco Travel logo"
          width={42}
          height={42}
        />
        <span className="brand-copy">
          <strong>Morocco Coco</strong>
          <small>Travel</small>
        </span>
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-label="Open navigation"
        aria-expanded={navOpen}
        aria-controls="primary-navigation"
        onClick={() => setNavOpen(!navOpen)}
      >
        <span></span>
        <span></span>
      </button>

      <nav className="primary-nav" id="primary-navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
            aria-current={pathname === link.href ? "page" : undefined}
            onClick={() => setNavOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
        >
          <span className={`sun ${theme === "light" ? "active" : ""}`}>
            {t("Light", "Clair")}
          </span>
          <span className={`moon ${theme === "dark" ? "active" : ""}`}>
            {t("Dark", "Sombre")}
          </span>
        </button>

        <button
          className="lang-toggle"
          type="button"
          aria-label="Switch language"
          aria-pressed={language === "fr"}
          onClick={toggleLanguage}
        >
          {language === "en" ? "FR" : "EN"}
        </button>

        <Link
          className="btn btn-small btn-primary"
          href="https://wa.me/212762426172"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </Link>
      </div>
    </header>
  );
}
