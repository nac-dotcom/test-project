"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-grid section-shell">
        <div>
          <Link className="brand footer-brand" href="/">
            <Image
              className="brand-logo"
              src="/images/morocco-coco-travel-logo-transparent.png"
              alt="Morocco Coco Travel logo"
              width={58}
              height={58}
            />
            <span className="brand-copy">
              <strong>Morocco Coco</strong>
              <small>Travel</small>
            </span>
          </Link>
          <p>
            {t(
              "Private guided tours, cultural experiences, and transport services across Casablanca and Morocco.",
              "Visites guidées privées, expériences culturelles et services de transport à Casablanca et à travers le Maroc."
            )}
          </p>
        </div>
        
        <div>
          <h3>{t("Tours", "Visites")}</h3>
          <Link href="/tours/rabat-day-trip">
            {t("Rabat Day Trip", "Rabat — Excursion")}
          </Link>
          <Link href="/tours/premium-mosque">
            {t("Premium Mosque Tour", "Mosquée Hassan II — Premium")}
          </Link>
          <Link href="/tours/skip-the-line">
            {t("Skip-the-Line Mosque Tour", "Mosquée Hassan II — Coupe-File")}
          </Link>
        </div>

        <div>
          <h3>{t("Company", "Société")}</h3>
          <Link href="/experiences">
            {t("Tours & Experiences", "Visites & Expériences")}
          </Link>
          <Link href="/about">{t("About", "À propos")}</Link>
          <Link href="/contact">{t("Contact", "Contact")}</Link>
        </div>

        <div>
          <h3>{t("Contact", "Contact")}</h3>
          <p>{t("Casablanca, Morocco", "Casablanca, Maroc")}</p>
          <p>
            <a href="tel:+212762426172">+212762426172</a>
          </p>
          <p>
            <a href="mailto:MoroccoCocoTravel@hotmail.com">
              MoroccoCocoTravel@hotmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom section-shell">
        <span>
          {t(
            "© 2026 Morocco Coco Travel. All rights reserved.",
            "© 2026 Morocco Coco Travel. Tous droits réservés."
          )}
        </span>
        <span>{t("Casablanca, Morocco", "Casablanca, Maroc")}</span>
        <span>
          {t("Built by ", "Site créé par ")}
          <a
            href="https://www.instagram.com/builddle_maroc/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--gold)", textDecoration: "underline" }}
          >
            Builddle Maroc
          </a>
        </span>
      </div>
    </footer>
  );
}
