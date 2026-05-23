"use client";

import Link from "next/link";
import Image from "next/image";
import { HeroSlider } from "@/components/hero-slider";
import { useLanguage } from "@/components/language-provider";

const featuredTours = [
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
    delay: "",
  },
  {
    id: "premium-mosque-tour",
    image: "/images/Casablanca_Hassan_II_Mosque_Main_Exterior.jpg",
    alt: "Hassan II Mosque main exterior in Casablanca",
    category: { en: "Cultural city tour", fr: "Visite culturelle" },
    duration: { en: "Ticket included", fr: "Billet inclus" },
    title: { en: "Casablanca Hassan II Mosque Premium Tour with Entry Ticket", fr: "Mosquée Hassan II — Visite Premium avec Billet" },
    description: { en: "Explore the iconic Hassan II Mosque with included entry ticket and licensed guide explanations of its architecture and history.", fr: "Explorez l'emblématique Mosquée Hassan II avec billet d'entrée inclus et les explications d'un guide agréé." },
    highlights: [
      { en: "Entry ticket included", fr: "Billet d'entrée inclus" },
      { en: "Licensed guide", fr: "Guide agréé" },
      { en: "Cultural explanations", fr: "Explications culturelles" },
    ],
    link: "/tours/premium-mosque",
    delay: "delay-1",
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
    delay: "delay-2",
  },
];

const whyChooseUs = [
  { title: { en: "Licensed Multilingual Guide", fr: "Guide agréé multilingue" }, text: { en: "Official Moroccan tour guide fluent in English, French, and Arabic for clear communication and cultural insight.", fr: "Guide touristique officiel marocain parlant anglais, français et arabe pour une communication claire et des perspectives culturelles." }, delay: "" },
  { title: { en: "15+ Years Experience", fr: "15+ ans d'expérience" }, text: { en: "Over a decade of guiding travelers across Casablanca, Rabat, and Morocco with reliable, professional service.", fr: "Plus d'une décennie à guider les voyageurs à Casablanca, Rabat et à travers le Maroc avec un service fiable et professionnel." }, delay: "delay-1" },
  { title: { en: "Private & Flexible Tours", fr: "Visites privées et flexibles" }, text: { en: "Every experience is private and customized around your pickup location, interests, and preferred pace.", fr: "Chaque expérience est privée et personnalisée selon votre lieu de prise en charge, vos intérêts et votre rythme." }, delay: "delay-2" },
  { title: { en: "Reliable Transport", fr: "Transport fiable" }, text: { en: "Comfortable, air-conditioned transport included for all tours with door-to-door service from your accommodation.", fr: "Transport confortable et climatisé inclus pour toutes les visites avec service porte-à-porte depuis votre hébergement." }, delay: "" },
  { title: { en: "Casablanca-Based", fr: "Basé à Casablanca" }, text: { en: "Locally based in Casablanca for expert knowledge of the city, the mosque, and the surrounding region.", fr: "Basé localement à Casablanca pour une connaissance experte de la ville, de la mosquée et de la région environnante." }, delay: "delay-1" },
  { title: { en: "Flexible Experiences", fr: "Expériences flexibles" }, text: { en: "Choose from cultural tours, historical day trips, mosque visits, and custom itineraries tailored to your group.", fr: "Choisissez parmi des visites culturelles, des excursions historiques, des visites de mosquées et des itinéraires sur mesure." }, delay: "delay-2" },
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <HeroSlider />

      {/* Trust Strip */}
      <section className="trust-strip section-shell reveal" aria-label="Trust section">
        <span>{t("Licensed multilingual guide", "Guide agréé multilingue")}</span>
        <span>{t("Over 15 years of experience", "Plus de 15 ans d'expérience")}</span>
        <span>{t("Private tours and transport", "Visites et transport privés")}</span>
        <a
          href="https://www.tripadvisor.com/Attraction_Review-g293732-d34381789-Reviews-Morocco_Coco_Travel-Casablanca_Casablanca_Settat.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
          TripAdvisor
        </a>
      </section>

      {/* Featured Tours */}
      <section className="section-shell section-block">
        <div className="section-heading reveal">
          <p className="eyebrow">{t("Featured tours", "Visites phares")}</p>
          <h2>{t("Private Morocco experiences designed for comfort, culture, and clear communication.", "Expériences marocaines privées conçues pour le confort, la culture et une communication claire.")}</h2>
          <Link className="text-link" href="/experiences">{t("View all tours", "Toutes les visites")}</Link>
        </div>
        <div className="experience-grid featured-product-grid">
          {featuredTours.map((tour) => (
            <article key={tour.id} className={`experience-card reveal ${tour.delay}`}>
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
                <div className="card-actions">
                  <Link className="btn btn-primary btn-small" href={tour.link}>{t("View Details", "Détails")}</Link>
                  <Link className="btn btn-ghost btn-small" href="/contact">{t("Contact to Book", "Réserver")}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-shell section-block">
        <div className="section-heading centered reveal">
          <p className="eyebrow">{t("Why choose us", "Pourquoi nous choisir")}</p>
          <h2>{t("Travel with a trusted local guide.", "Voyagez avec un guide local de confiance.")}</h2>
        </div>
        <div className="review-grid">
          {whyChooseUs.map((item, index) => (
            <article key={index} className={`review-card reveal ${item.delay}`}>
              <h3>{t(item.title.en, item.title.fr)}</h3>
              <p>{t(item.text.en, item.text.fr)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Hassan II Mosque Highlight */}
      <section className="section-block">
        <div className="section-shell">
          <div className="split-section">
            <div className="split-media">
              <Image 
                src="/images/Casablanca_Hassan_II_Mosque_Main_Exterior.jpg" 
                alt="Hassan II Mosque exterior in Casablanca"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="split-copy">
              <p className="eyebrow">{t("Casablanca highlight", "Point fort — Casablanca")}</p>
              <h2>{t("Hassan II Mosque", "Mosquée Hassan II")}</h2>
              <p>{t("One of the largest mosques in the world, set on the Atlantic coast with intricate architecture, oceanfront views, and cultural significance. Morocco Coco Travel offers premium guided tours with entry ticket options.", "L'une des plus grandes mosquées du monde, située sur la côte atlantique avec une architecture raffinée, une vue sur l'océan et une importance culturelle. Morocco Coco Travel propose des visites guidées premium avec options de billet.")}</p>
              <div className="feature-list">
                <div>
                  <strong>{t("Premium guided tour", "Visite guidée premium")}</strong>
                  <span>{t("Licensed guide with cultural explanations", "Guide agréé avec explications culturelles")}</span>
                </div>
                <div>
                  <strong>{t("Entry ticket included", "Billet d'entrée inclus")}</strong>
                  <span>{t("Skip-the-line or standard entry available", "Entrée coupe-file ou standard disponible")}</span>
                </div>
                <div>
                  <strong>{t("Pickup from Casablanca", "Prise en charge depuis Casablanca")}</strong>
                  <span>{t("Door-to-door transport included", "Transport porte-à-porte inclus")}</span>
                </div>
              </div>
              <div className="button-row">
                <Link className="btn btn-primary" href="/experiences">{t("View Mosque Tours", "Voir les visites")}</Link>
                <Link className="btn btn-ghost" href="https://wa.me/212762426172" target="_blank" rel="noopener noreferrer">{t("Book on WhatsApp", "Réserver par WhatsApp")}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rabat Day Trip Highlight */}
      <section className="section-block">
        <div className="section-shell">
          <div className="split-section">
            <div className="split-copy">
              <p className="eyebrow">{t("Rabat day trip", "Excursion à Rabat")}</p>
              <h2>{t("Rabat Day Trip from Casablanca", "Rabat — Excursion d'une journée depuis Casablanca")}</h2>
              <p>{t("Explore Morocco's capital city with a licensed guide. Visit Hassan Tower, the Mausoleum of Mohammed V, the Kasbah of the Udayas, and the Andalusian Gardens on a full-day private trip from Casablanca.", "Explorez la capitale du Maroc avec un guide agréé. Visitez la Tour Hassan, le Mausolée Mohammed V, la Kasbah des Oudayas et les Jardins Andalouses lors d'une excursion privée d'une journée depuis Casablanca.")}</p>
              <div className="feature-list">
                <div>
                  <strong>{t("Full-day private trip", "Excursion privée d'une journée")}</strong>
                  <span>{t("From Casablanca with door-to-door transport", "Depuis Casablanca avec transport porte-à-porte")}</span>
                </div>
                <div>
                  <strong>{t("Licensed guide included", "Guide agréé inclus")}</strong>
                  <span>{t("Cultural and historical explanations throughout", "Explications culturelles et historiques tout au long")}</span>
                </div>
                <div>
                  <strong>{t("Key landmarks", "Sites principaux")}</strong>
                  <span>{t("Hassan Tower, Mausoleum, Kasbah, Gardens", "Tour Hassan, Mausolée, Kasbah, Jardins")}</span>
                </div>
              </div>
              <div className="button-row">
                <Link className="btn btn-primary" href="/tours/rabat-day-trip">{t("View Rabat Trip", "Voir l'excursion")}</Link>
                <Link className="btn btn-ghost" href="/contact">{t("Request Availability", "Demander disponibilité")}</Link>
              </div>
            </div>
            <div className="split-media">
              <Image 
                src="/images/Rabat_Hassan_Tower.jpg" 
                alt="Hassan Tower in Rabat"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Panel */}
      <section className="section-shell section-block">
        <div className="cta-panel">
          <h2>{t("Ready to explore Morocco?", "Prêt à explorer le Maroc ?")}</h2>
          <div className="button-row cta-btn-row">
            <Link className="btn btn-primary" href="/contact">{t("Contact Us", "Contactez-nous")}</Link>
            <Link className="btn btn-ghost" href="https://wa.me/212762426172" target="_blank" rel="noopener noreferrer">{t("WhatsApp", "WhatsApp")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
