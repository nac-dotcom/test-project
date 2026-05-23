"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { TourData } from "@/lib/tours";

export function TourDetailClient({ tour }: { tour: TourData }) {
  const { t } = useLanguage();

  return (
    <>
      <section className="tour-hero section-shell">
        <div className="tour-hero-copy">
          <p className="eyebrow">{t(tour.subtitle.en, tour.subtitle.fr)}</p>
          <h1>{t(tour.title.en, tour.title.fr)}</h1>
          <p>{t(tour.description.en, tour.description.fr)}</p>
          <div className="tour-facts">
            <span>{t(tour.duration.en, tour.duration.fr)}</span>
            <span>{t(tour.price.en, tour.price.fr)}</span>
          </div>
        </div>
        <div className="tour-score">
          <span>{t("Starting from", "À partir de")}</span>
          <strong>{tour.price.en.replace("From ", "")}</strong>
          <span>{t("per person", "par personne")}</span>
        </div>
      </section>

      <section className="section-shell">
        <div className="gallery-grid">
          {tour.gallery.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={t(tour.title.en, tour.title.fr)}
              width={600}
              height={400}
              className={index === 0 ? "wide" : ""}
              style={{ objectFit: "cover", borderRadius: "24px" }}
            />
          ))}
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="tour-layout">
          <div className="tour-main">
            <div className="content-card">
              <h2>{t("Tour Highlights", "Points forts")}</h2>
              <div className="included-grid">
                {tour.highlights.map((highlight, index) => (
                  <span key={index}>{t(highlight.en, highlight.fr)}</span>
                ))}
              </div>
            </div>

            <div className="content-card">
              <h2>{t("What's Included", "Ce qui est inclus")}</h2>
              <div className="included-grid">
                {tour.included.map((item, index) => (
                  <span key={index}>{t(item.en, item.fr)}</span>
                ))}
              </div>
            </div>

            <div className="content-card">
              <h2>{t("Itinerary", "Itinéraire")}</h2>
              <div className="timeline">
                {tour.itinerary.map((item, index) => (
                  <div key={index}>
                    <span>{item.time}</span>
                    <h3>{t(item.title.en, item.title.fr)}</h3>
                    <p>{t(item.description.en, item.description.fr)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="booking-card">
            <h3>{t("Book This Tour", "Réserver cette visite")}</h3>
            <p>{t("Contact us to check availability and book your experience.", "Contactez-nous pour vérifier la disponibilité et réserver votre expérience.")}</p>
            
            <div className="quote-box">
              <div>
                <span>{t("Price", "Prix")}</span>
                <strong>{t(tour.price.en, tour.price.fr)}</strong>
              </div>
              <div>
                <span>{t("Duration", "Durée")}</span>
                <strong>{t(tour.duration.en, tour.duration.fr)}</strong>
              </div>
            </div>

            <div className="button-row" style={{ marginTop: "1.5rem" }}>
              <Link className="btn btn-primary" href="https://wa.me/212762426172" target="_blank" rel="noopener noreferrer">
                {t("Book on WhatsApp", "Réserver WhatsApp")}
              </Link>
            </div>
            <div className="button-row" style={{ marginTop: "0.75rem" }}>
              <Link className="btn btn-ghost" href="/contact">
                {t("Contact Us", "Contactez-nous")}
              </Link>
            </div>

            <p className="availability-note" style={{ marginTop: "1rem" }}>
              {t("Tours available daily. Contact us for specific dates and group pricing.", "Visites disponibles tous les jours. Contactez-nous pour les dates spécifiques et les tarifs de groupe.")}
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="cta-panel">
          <h2>{t("Ready to explore Morocco?", "Prêt à explorer le Maroc ?")}</h2>
          <div className="button-row cta-btn-row">
            <Link className="btn btn-primary" href="/experiences">{t("View All Tours", "Voir toutes les visites")}</Link>
            <Link className="btn btn-ghost" href="/contact">{t("Contact Us", "Contactez-nous")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
