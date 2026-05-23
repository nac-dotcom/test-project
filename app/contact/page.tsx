"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(t("Sending...", "Envoi en cours..."));
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus(t("Thank you! We'll be in touch soon.", "Merci ! Nous vous contacterons bientôt."));
    }, 1500);
  };

  return (
    <>
      <section className="page-hero section-shell">
        <p className="eyebrow">{t("Contact", "Contact")}</p>
        <h1>{t("Get in Touch", "Contactez-nous")}</h1>
        <p>{t("Ready to plan your Morocco experience? Reach out via WhatsApp, email, or the form below. We typically respond within 24 hours.", "Prêt à planifier votre expérience au Maroc ? Contactez-nous via WhatsApp, email ou le formulaire ci-dessous. Nous répondons généralement sous 24 heures.")}</p>
      </section>

      <section className="section-shell section-block">
        <div className="contact-layout">
          <div className="contact-card">
            <Image
              className="contact-logo"
              src="/images/morocco-coco-travel-logo-transparent.png"
              alt="Morocco Coco Travel logo"
              width={142}
              height={142}
            />
            <h3>Morocco Coco Travel</h3>
            <p>{t("Private tours, cultural experiences, and transport services from Casablanca.", "Visites privées, expériences culturelles et services de transport depuis Casablanca.")}</p>
            
            <div className="contact-method">
              <span>{t("WhatsApp", "WhatsApp")}</span>
              <a href="https://wa.me/212762426172" target="_blank" rel="noopener noreferrer">+212762426172</a>
            </div>
            
            <div className="contact-method">
              <span>{t("Email", "Email")}</span>
              <a href="mailto:MoroccoCocoTravel@hotmail.com">MoroccoCocoTravel@hotmail.com</a>
            </div>
            
            <div className="contact-method">
              <span>{t("Location", "Localisation")}</span>
              <p>{t("Casablanca, Morocco", "Casablanca, Maroc")}</p>
            </div>

            <div className="button-row product-contact-buttons">
              <Link className="btn btn-primary" href="https://wa.me/212762426172" target="_blank" rel="noopener noreferrer">
                {t("WhatsApp", "WhatsApp")}
              </Link>
              <Link className="btn btn-ghost" href="mailto:MoroccoCocoTravel@hotmail.com">
                {t("Email", "Email")}
              </Link>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                {t("Name", "Nom")}
                <input type="text" name="name" required />
              </label>
              <label>
                {t("Email", "Email")}
                <input type="email" name="email" required />
              </label>
            </div>
            
            <label>
              {t("Phone (optional)", "Téléphone (optionnel)")}
              <input type="tel" name="phone" />
            </label>
            
            <label>
              {t("Interested In", "Intéressé par")}
              <select name="interest" defaultValue="">
                <option value="" disabled>{t("Select a tour or service", "Sélectionnez une visite ou service")}</option>
                <option value="rabat">{t("Rabat Day Trip", "Excursion à Rabat")}</option>
                <option value="mosque-premium">{t("Premium Mosque Tour", "Visite Premium Mosquée")}</option>
                <option value="mosque-skip">{t("Skip-the-Line Mosque Tour", "Visite Mosquée Coupe-File")}</option>
                <option value="custom">{t("Custom Tour", "Visite Personnalisée")}</option>
                <option value="transport">{t("Transport Only", "Transport uniquement")}</option>
              </select>
            </label>
            
            <label>
              {t("Message", "Message")}
              <textarea name="message" rows={5} required></textarea>
            </label>
            
            <button className="btn btn-primary" type="submit">
              {t("Send Message", "Envoyer le message")}
            </button>
            
            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
