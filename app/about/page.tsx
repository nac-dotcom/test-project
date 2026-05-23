"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero section-shell">
        <p className="eyebrow">{t("About Us", "À propos")}</p>
        <h1>{t("Morocco Coco Travel", "Morocco Coco Travel")}</h1>
        <p>{t("A Casablanca-based travel company offering private guided tours, cultural experiences, and reliable transport services across Morocco with a licensed multilingual guide.", "Une agence de voyage basée à Casablanca proposant des visites guidées privées, des expériences culturelles et des services de transport fiables à travers le Maroc avec un guide agréé multilingue.")}</p>
      </section>

      <section className="section-block">
        <div className="section-shell">
          <div className="split-section">
            <div className="split-media">
              <Image 
                src="/images/Casablanca_Hassan_II_Mosque_Main_Exterior.jpg" 
                alt="Morocco Coco Travel guide at Hassan II Mosque"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="split-copy">
              <p className="eyebrow">{t("Our Story", "Notre histoire")}</p>
              <h2>{t("15+ Years of Local Expertise", "Plus de 15 ans d'expertise locale")}</h2>
              <p>{t("Morocco Coco Travel was founded with a simple mission: to share the beauty, culture, and history of Morocco with travelers from around the world. As a licensed multilingual guide based in Casablanca, I bring over 15 years of experience guiding visitors through the country's most iconic landmarks.", "Morocco Coco Travel a été fondé avec une mission simple : partager la beauté, la culture et l'histoire du Maroc avec les voyageurs du monde entier. En tant que guide agréé multilingue basé à Casablanca, j'apporte plus de 15 ans d'expérience à guider les visiteurs à travers les monuments les plus emblématiques du pays.")}</p>
              <p>{t("From the magnificent Hassan II Mosque to the historic streets of Rabat's Kasbah, every tour is designed to offer authentic insights, comfortable transport, and unforgettable memories.", "De la magnifique Mosquée Hassan II aux rues historiques de la Kasbah de Rabat, chaque visite est conçue pour offrir des perspectives authentiques, un transport confortable et des souvenirs inoubliables.")}</p>
              <div className="stats-grid">
                <div>
                  <strong>15+</strong>
                  <span>{t("Years Experience", "Années d'expérience")}</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>{t("Languages Spoken", "Langues parlées")}</span>
                </div>
                <div>
                  <strong>1000+</strong>
                  <span>{t("Happy Travelers", "Voyageurs satisfaits")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading centered reveal">
          <p className="eyebrow">{t("Our Values", "Nos valeurs")}</p>
          <h2>{t("What Sets Us Apart", "Ce qui nous distingue")}</h2>
        </div>
        <div className="values-grid">
          <article className="value-card reveal">
            <span>01</span>
            <h3>{t("Authentic Experiences", "Expériences authentiques")}</h3>
            <p>{t("Go beyond typical tourist routes with local insights and cultural context that bring Morocco to life.", "Allez au-delà des circuits touristiques typiques avec des perspectives locales et un contexte culturel qui donnent vie au Maroc.")}</p>
          </article>
          <article className="value-card reveal delay-1">
            <span>02</span>
            <h3>{t("Private & Flexible", "Privé et flexible")}</h3>
            <p>{t("Every tour is private and customized to your interests, pace, and schedule for a personalized experience.", "Chaque visite est privée et personnalisée selon vos intérêts, votre rythme et votre emploi du temps pour une expérience personnalisée.")}</p>
          </article>
          <article className="value-card reveal delay-2">
            <span>03</span>
            <h3>{t("Clear Communication", "Communication claire")}</h3>
            <p>{t("Fluent in English, French, and Arabic to ensure smooth communication throughout your journey.", "Courant en anglais, français et arabe pour assurer une communication fluide tout au long de votre voyage.")}</p>
          </article>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="cta-panel">
          <h2>{t("Ready to explore Morocco?", "Prêt à explorer le Maroc ?")}</h2>
          <div className="button-row cta-btn-row">
            <Link className="btn btn-primary" href="/contact">{t("Get in Touch", "Contactez-nous")}</Link>
            <Link className="btn btn-ghost" href="/experiences">{t("View Tours", "Voir les visites")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
