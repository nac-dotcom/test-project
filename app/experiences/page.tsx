"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

const tours = [
  {
    id: "rabat-day-trip",
    image: "/images/Rabat_Kasbah_of_the_Udayas.jpg",
    alt: "Kasbah of the Udayas in Rabat",
    category: { en: "Private day trip", fr: "Excursion privée" },
    duration: { en: "Full-day", fr: "Journée complète" },
    title: { en: "Rabat Day Trip from Casablanca with Licensed Guide", fr: "Rabat — Excursion d'une journée depuis Casablanca" },
    description: { en: "Visit Hassan Tower, the Mausoleum of Mohammed V, the Kasbah of the Udayas, Andalusian Gardens, and Bouregreg river views.", fr: "Visitez la Tour Hassan, le Mausolée Mohammed V, la Kasbah des Oudayas, les Jardins Andalouses et la vue sur le Bouregreg." },
    highlights: [
      { en: "Hassan Tower & Mausoleum", fr: "Tour Hassan & Mausolée" },
      { en: "Kasbah of the Udayas", fr: "Kasbah des Oudayas" },
      { en: "Private transport included", fr: "Transport privé inclus" },
    ],
    link: "/tours/rabat-day-trip",
    price: "From €150",
    priceFr: "À partir de 150€",
  },
  {
    id: "premium-mosque-tour",
    image: "/images/Casablanca_Hassan_II_Mosque_Main_Exterior.jpg",
    alt: "Hassan II Mosque main exterior in Casablanca",
    category: { en: "Cultural city tour", fr: "Visite culturelle" },
    duration: { en: "3-4 hours", fr: "3-4 heures" },
    title: { en: "Casablanca Hassan II Mosque Premium Tour with Entry Ticket", fr: "Mosquée Hassan II — Visite Premium avec Billet" },
    description: { en: "Explore the iconic Hassan II Mosque with included entry ticket and licensed guide explanations of its architecture and history.", fr: "Explorez l'emblématique Mosquée Hassan II avec billet d'entrée inclus et les explications d'un guide agréé." },
    highlights: [
      { en: "Entry ticket included", fr: "Billet d'entrée inclus" },
      { en: "Licensed guide", fr: "Guide agréé" },
      { en: "Cultural explanations", fr: "Explications culturelles" },
    ],
    link: "/tours/premium-mosque",
    price: "From €80",
    priceFr: "À partir de 80€",
  },
  {
    id: "skip-line-mosque-tour",
    image: "/images/Casablanca_Hassan_II_Mosque_Sunrise_Skyline.jpg",
    alt: "Hassan II Mosque sunrise skyline in Casablanca",
    category: { en: "Private tour", fr: "Visite privée" },
    duration: { en: "2 hours", fr: "2 heures" },
    title: { en: "Casablanca Hassan II Mosque Guided Tour with Skip-the-Line Entry", fr: "Mosquée Hassan II — Visite avec Coupe-File" },
    description: { en: "Enjoy direct priority entry, a guided mosque visit, and La Corniche photo stops with pickup options in Casablanca.", fr: "Profitez d'une entrée prioritaire directe, d'une visite guidée et d'arrêts photo à La Corniche avec options de prise en charge." },
    highlights: [
      { en: "Priority skip-the-line entry", fr: "Entrée coupe-file prioritaire" },
      { en: "Guided mosque visit", fr: "Visite guidée" },
      { en: "Pickup included", fr: "Prise en charge incluse" },
    ],
    link: "/tours/skip-the-line",
    price: "From €60",
    priceFr: "À partir de 60€",
  },
];

export default function ExperiencesPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero section-shell">
        <p className="eyebrow">{t("Tours & Experiences", "Visites & Expériences")}</p>
        <h1>{t("Explore Morocco with a Local Guide", "Explorez le Maroc avec un Guide Local")}</h1>
        <p>{t("Private tours, cultural experiences, and transport services from Casablanca. Choose your perfect Morocco experience.", "Visites privées, expériences culturelles et services de transport depuis Casablanca. Choisissez votre expérience marocaine parfaite.")}</p>
      </section>

      <section className="section-shell section-block">
        <div className="experience-grid">
          {tours.map((tour) => (
            <article key={tour.id} className="experience-card reveal">
              <div className="experience-media">
                <Image src={tour.image} alt={tour.alt} fill style={{ objectFit: "cover" }} />
                <div className="experience-overlay" />
                <span className="card-badge category">{t(tour.category.en, tour.category.fr)}</span>
                <span className="card-badge duration">{t(tour.duration.en, tour.duration.fr)}</span>
              </div>
              <div className="experience-body">
                <h2>{t(tour.title.en, tour.title.fr)}</h2>
                <p>{t(tour.description.en, tour.description.fr)}</p>
                <ul className="card-highlights">
                  {tour.highlights.map((h, i) => (
                    <li key={i}>{t(h.en, h.fr)}</li>
                  ))}
                </ul>
                <div className="card-foot">
                  <strong>{t(tour.price, tour.priceFr)}</strong>
                  <Link href={tour.link}>{t("View Details", "Voir détails")}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="cta-panel">
          <h2>{t("Can't find what you're looking for?", "Vous ne trouvez pas ce que vous cherchez ?")}</h2>
          <div className="button-row cta-btn-row">
            <Link className="btn btn-primary" href="/contact">{t("Request Custom Tour", "Demander visite personnalisée")}</Link>
            <Link className="btn btn-ghost" href="https://wa.me/212762426172" target="_blank" rel="noopener noreferrer">{t("WhatsApp", "WhatsApp")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
