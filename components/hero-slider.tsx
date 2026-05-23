"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

const heroSlides = [
  {
    bg: "/images/hero/hero-casablanca-mosque-sunrise.jpg",
    labels: ["Casablanca-based", "Private tours", "Transport services"],
    labelsFr: ["Basé à Casablanca", "Visites privées", "Transport"],
    eyebrow: "Casablanca-based private tours",
    eyebrowFr: "Visites privées depuis Casablanca",
    title: "Private Tours & Cultural Experiences in Casablanca",
    titleFr: "Visites Privées & Expériences Culturelles à Casablanca",
    text: "Discover Morocco with Morocco Coco Travel — premium private tours, cultural visits, and reliable transport from Casablanca.",
    textFr: "Découvrez le Maroc avec Morocco Coco Travel — visites privées premium, découvertes culturelles et transport fiable depuis Casablanca.",
    cta1: "Explore Tours",
    cta1Fr: "Explorer",
    cta1Link: "/experiences",
    cta2: "Contact on WhatsApp",
    cta2Fr: "Contactez-nous",
    cta2Link: "https://wa.me/212762426172",
  },
  {
    bg: "/images/hero/hero-casablanca-mosque-exterior.jpg",
    labels: ["Iconic landmark", "Guided visit", "Entry options"],
    labelsFr: ["Monument emblématique", "Visite guidée", "Options d'entrée"],
    eyebrow: "Iconic landmark",
    eyebrowFr: "Monument emblématique",
    title: "Visit the Iconic Hassan II Mosque",
    titleFr: "Visitez la Mosquée Hassan II",
    text: "Enjoy a premium guided mosque experience with entry ticket options, cultural explanations, and local insight.",
    textFr: "Profitez d'une visite guidée premium de la mosquée avec options de billet, explications culturelles et conseils locaux.",
    cta1: "View Mosque Tours",
    cta1Fr: "Visites mosquée",
    cta1Link: "/experiences",
    cta2: "Book on WhatsApp",
    cta2Fr: "Réserver WhatsApp",
    cta2Link: "https://wa.me/212762426172",
  },
  {
    bg: "/images/hero/hero-casablanca-mosque-interior.jpg",
    labels: ["Full-day tour", "Imperial capital", "Licensed guide"],
    labelsFr: ["Excursion journée", "Capitale impériale", "Guide agréé"],
    eyebrow: "Imperial capital",
    eyebrowFr: "Capitale impériale",
    title: "Explore Rabat on a Private Day Trip",
    titleFr: "Explorez Rabat en Excursion Privée",
    text: "Discover Morocco's capital with a licensed guide — visit Hassan Tower, Kasbah of the Udayas, and the royal Mausoleum.",
    textFr: "Découvrez la capitale du Maroc avec un guide agréé — visitez la Tour Hassan, la Kasbah des Oudayas et le Mausolée royal.",
    cta1: "View Rabat Trip",
    cta1Fr: "Voir excursion",
    cta1Link: "/tours/rabat-day-trip",
    cta2: "Request Availability",
    cta2Fr: "Demander disponibilité",
    cta2Link: "/contact",
  },
  {
    bg: "/images/hero/hero-casablanca-mosque-oceanfront.jpg",
    labels: ["Licensed guide", "Private tours", "Transport"],
    labelsFr: ["Guide agréé", "Visites privées", "Transport"],
    eyebrow: "Local expertise",
    eyebrowFr: "Expertise locale",
    title: "Private Travel, Local Expertise",
    titleFr: "Voyage Privé, Expertise Locale",
    text: "Travel with a licensed multilingual local guide offering flexible private tours, cultural experiences, and transport services.",
    textFr: "Voyagez avec un guide local agréé multilingue proposant des visites privées flexibles, des expériences culturelles et des services de transport.",
    cta1: "Plan Your Tour",
    cta1Fr: "Planifier",
    cta1Link: "/experiences",
    cta2: "Send Email",
    cta2Fr: "Envoyer un email",
    cta2Link: "mailto:MoroccoCocoTravel@hotmail.com",
  },
];

export function HeroSlider() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero hero-slider">
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            />
            <div className="hero-overlay" />
            <div className="hero-content">
              <div className="hero-label-row">
                {(t(slide.labels.join("|"), slide.labelsFr.join("|"))).split("|").map((label, i) => (
                  <span key={i}>{label}</span>
                ))}
              </div>
              <p className="hero-eyebrow">{t(slide.eyebrow, slide.eyebrowFr)}</p>
              <h1>{t(slide.title, slide.titleFr)}</h1>
              <p className="hero-text">{t(slide.text, slide.textFr)}</p>
              <div className="button-row hero-actions">
                <Link className="btn btn-primary" href={slide.cta1Link}>
                  {t(slide.cta1, slide.cta1Fr)}
                </Link>
                <Link 
                  className="btn btn-ghost" 
                  href={slide.cta2Link}
                  target={slide.cta2Link.startsWith("http") ? "_blank" : undefined}
                  rel={slide.cta2Link.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {t(slide.cta2, slide.cta2Fr)}
                </Link>
              </div>
              <div className="hero-trust-badges" aria-label="Morocco Coco Travel trust badges">
                <span>{t("Licensed Multilingual Guide", "Guide agréé multilingue")}</span>
                <span>{t("15+ Years Experience", "15+ ans d'expérience")}</span>
                <span>{t("Private Tours", "Visites privées")}</span>
                <span>{t("Casablanca-Based", "Basé à Casablanca")}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="hero-arrow hero-arrow-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="hero-arrow hero-arrow-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="hero-dots" role="tablist" aria-label="Slide navigation">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={index === currentSlide ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === currentSlide}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}
