export interface TourData {
  slug: string;
  title: { en: string; fr: string };
  subtitle: { en: string; fr: string };
  description: { en: string; fr: string };
  image: string;
  gallery: string[];
  duration: { en: string; fr: string };
  price: { en: string; fr: string };
  highlights: { en: string; fr: string }[];
  included: { en: string; fr: string }[];
  itinerary: {
    time: string;
    title: { en: string; fr: string };
    description: { en: string; fr: string };
  }[];
}

export const tours: Record<string, TourData> = {
  "rabat-day-trip": {
    slug: "rabat-day-trip",
    title: {
      en: "Rabat Day Trip from Casablanca with Licensed Guide",
      fr: "Rabat — Excursion d'une journée depuis Casablanca",
    },
    subtitle: {
      en: "Explore Morocco's capital city",
      fr: "Explorez la capitale du Maroc",
    },
    description: {
      en: "Discover Rabat on a full-day private tour from Casablanca. Visit Hassan Tower, the Mausoleum of Mohammed V, the historic Kasbah of the Udayas with its blue-and-white streets, and the peaceful Andalusian Gardens. Travel in comfort with door-to-door transport and a licensed multilingual guide.",
      fr: "Découvrez Rabat lors d'une excursion privée d'une journée depuis Casablanca. Visitez la Tour Hassan, le Mausolée Mohammed V, la Kasbah historique des Oudayas avec ses rues bleu et blanc, et les paisibles Jardins Andalous. Voyagez confortablement avec un transport porte-à-porte et un guide agréé multilingue.",
    },
    image: "/images/Rabat_Kasbah_of_the_Udayas.jpg",
    gallery: [
      "/images/Rabat_Hassan_Tower.jpg",
      "/images/Rabat_Kasbah_of_the_Udayas.jpg",
    ],
    duration: { en: "Full-day (8-10 hours)", fr: "Journée complète (8-10 heures)" },
    price: { en: "From €150 per person", fr: "À partir de 150€ par personne" },
    highlights: [
      { en: "Hassan Tower & Mohammed V Mausoleum", fr: "Tour Hassan & Mausolée Mohammed V" },
      { en: "Kasbah of the Udayas", fr: "Kasbah des Oudayas" },
      { en: "Andalusian Gardens", fr: "Jardins Andalous" },
      { en: "Bouregreg River Views", fr: "Vues sur le Bouregreg" },
      { en: "Private Transport Included", fr: "Transport privé inclus" },
      { en: "Licensed Guide", fr: "Guide agréé" },
    ],
    included: [
      { en: "Private door-to-door transport", fr: "Transport privé porte-à-porte" },
      { en: "Licensed multilingual guide", fr: "Guide agréé multilingue" },
      { en: "All entrance fees", fr: "Tous les frais d'entrée" },
      { en: "Bottled water", fr: "Eau en bouteille" },
      { en: "Hotel pickup and drop-off", fr: "Prise en charge et retour à l'hôtel" },
    ],
    itinerary: [
      { time: "09:00", title: { en: "Hotel Pickup", fr: "Prise en charge à l'hôtel" }, description: { en: "Pickup from your Casablanca accommodation", fr: "Prise en charge depuis votre hébergement à Casablanca" } },
      { time: "10:30", title: { en: "Hassan Tower", fr: "Tour Hassan" }, description: { en: "Visit the iconic minaret and Mausoleum of Mohammed V", fr: "Visitez le minaret emblématique et le Mausolée Mohammed V" } },
      { time: "12:30", title: { en: "Kasbah of the Udayas", fr: "Kasbah des Oudayas" }, description: { en: "Explore the blue-and-white streets and Andalusian Gardens", fr: "Explorez les rues bleu et blanc et les Jardins Andalous" } },
      { time: "14:00", title: { en: "Lunch Break", fr: "Pause déjeuner" }, description: { en: "Optional lunch at a local restaurant (not included)", fr: "Déjeuner optionnel dans un restaurant local (non inclus)" } },
      { time: "15:30", title: { en: "Bouregreg Views", fr: "Vues sur le Bouregreg" }, description: { en: "Photo stops along the river", fr: "Arrêts photo le long de la rivière" } },
      { time: "17:00", title: { en: "Return to Casablanca", fr: "Retour à Casablanca" }, description: { en: "Comfortable drive back to your hotel", fr: "Retour confortable à votre hôtel" } },
    ],
  },
  "premium-mosque": {
    slug: "premium-mosque",
    title: {
      en: "Casablanca Hassan II Mosque Premium Tour with Entry Ticket",
      fr: "Mosquée Hassan II — Visite Premium avec Billet",
    },
    subtitle: {
      en: "Experience Morocco's most iconic landmark",
      fr: "Découvrez le monument le plus emblématique du Maroc",
    },
    description: {
      en: "Explore the magnificent Hassan II Mosque with included entry ticket and expert guide explanations. Learn about the mosque's stunning architecture, cultural significance, and religious importance. This premium tour includes hotel pickup and drop-off for your convenience.",
      fr: "Explorez la magnifique Mosquée Hassan II avec billet d'entrée inclus et explications d'un guide expert. Découvrez l'architecture époustouflante de la mosquée, son importance culturelle et religieuse. Cette visite premium comprend la prise en charge et le retour à l'hôtel.",
    },
    image: "/images/Casablanca_Hassan_II_Mosque_Main_Exterior.jpg",
    gallery: [
      "/images/Casablanca_Hassan_II_Mosque_Main_Exterior.jpg",
      "/images/Casablanca_Hassan_II_Mosque_Sunrise_Skyline.jpg",
    ],
    duration: { en: "3-4 hours", fr: "3-4 heures" },
    price: { en: "From €80 per person", fr: "À partir de 80€ par personne" },
    highlights: [
      { en: "Entry Ticket Included", fr: "Billet d'entrée inclus" },
      { en: "Licensed Guide Explanations", fr: "Explications du guide agréé" },
      { en: "Interior Tour", fr: "Visite de l'intérieur" },
      { en: "Architectural Details", fr: "Détails architecturaux" },
      { en: "Cultural & Religious Context", fr: "Contexte culturel et religieux" },
      { en: "Hotel Pickup Included", fr: "Prise en charge à l'hôtel incluse" },
    ],
    included: [
      { en: "Mosque entry ticket", fr: "Billet d'entrée mosquée" },
      { en: "Licensed multilingual guide", fr: "Guide agréé multilingue" },
      { en: "Hotel pickup and drop-off", fr: "Prise en charge et retour à l'hôtel" },
      { en: "Private transport", fr: "Transport privé" },
    ],
    itinerary: [
      { time: "09:00", title: { en: "Hotel Pickup", fr: "Prise en charge" }, description: { en: "Pickup from your Casablanca accommodation", fr: "Prise en charge depuis votre hébergement" } },
      { time: "09:30", title: { en: "Mosque Arrival", fr: "Arrivée à la mosquée" }, description: { en: "Arrive at Hassan II Mosque for your tour", fr: "Arrivée à la Mosquée Hassan II pour votre visite" } },
      { time: "10:00", title: { en: "Guided Tour", fr: "Visite guidée" }, description: { en: "Explore the mosque interior with expert commentary", fr: "Explorez l'intérieur de la mosquée avec commentaires experts" } },
      { time: "12:00", title: { en: "Return", fr: "Retour" }, description: { en: "Return to your hotel or continue exploring", fr: "Retour à votre hôtel ou continuez à explorer" } },
    ],
  },
  "skip-the-line": {
    slug: "skip-the-line",
    title: {
      en: "Casablanca Hassan II Mosque Guided Tour with Skip-the-Line Entry",
      fr: "Mosquée Hassan II — Visite avec Coupe-File",
    },
    subtitle: {
      en: "Priority access to Morocco's masterpiece",
      fr: "Accès prioritaire au chef-d'œuvre du Maroc",
    },
    description: {
      en: "Skip the queues and enjoy priority entry to the Hassan II Mosque. This efficient tour includes a guided visit of the mosque, followed by photo stops along La Corniche with stunning Atlantic views. Perfect for travelers with limited time.",
      fr: "Évitez les files d'attente et profitez d'une entrée prioritaire à la Mosquée Hassan II. Cette visite efficace comprend une visite guidée de la mosquée, suivie d'arrêts photo le long de La Corniche avec de superbes vues sur l'Atlantique. Parfait pour les voyageurs avec peu de temps.",
    },
    image: "/images/Casablanca_Hassan_II_Mosque_Sunrise_Skyline.jpg",
    gallery: [
      "/images/Casablanca_Hassan_II_Mosque_Sunrise_Skyline.jpg",
      "/images/Casablanca_Corniche_Ain_Diab_Night.jpg",
    ],
    duration: { en: "2-3 hours", fr: "2-3 heures" },
    price: { en: "From €60 per person", fr: "À partir de 60€ par personne" },
    highlights: [
      { en: "Skip-the-Line Entry", fr: "Entrée coupe-file" },
      { en: "Priority Access", fr: "Accès prioritaire" },
      { en: "Guided Mosque Visit", fr: "Visite guidée de la mosquée" },
      { en: "La Corniche Photo Stops", fr: "Arrêts photo La Corniche" },
      { en: "Atlantic Ocean Views", fr: "Vues sur l'océan Atlantique" },
      { en: "Pickup Included", fr: "Prise en charge incluse" },
    ],
    included: [
      { en: "Skip-the-line mosque entry", fr: "Entrée coupe-file mosquée" },
      { en: "Licensed multilingual guide", fr: "Guide agréé multilingue" },
      { en: "Hotel pickup and drop-off", fr: "Prise en charge et retour à l'hôtel" },
      { en: "La Corniche photo stops", fr: "Arrêts photo La Corniche" },
    ],
    itinerary: [
      { time: "09:00", title: { en: "Hotel Pickup", fr: "Prise en charge" }, description: { en: "Pickup from your Casablanca accommodation", fr: "Prise en charge depuis votre hébergement" } },
      { time: "09:20", title: { en: "Skip-the-Line Entry", fr: "Entrée coupe-file" }, description: { en: "Priority access to the mosque", fr: "Accès prioritaire à la mosquée" } },
      { time: "10:00", title: { en: "Guided Tour", fr: "Visite guidée" }, description: { en: "Explore the mosque with your guide", fr: "Explorez la mosquée avec votre guide" } },
      { time: "11:00", title: { en: "La Corniche", fr: "La Corniche" }, description: { en: "Photo stops along the Atlantic coast", fr: "Arrêts photo le long de la côte atlantique" } },
      { time: "11:30", title: { en: "Return", fr: "Retour" }, description: { en: "Return to your hotel", fr: "Retour à votre hôtel" } },
    ],
  },
};

export function getTourBySlug(slug: string): TourData | undefined {
  return tours[slug];
}

export function getAllTourSlugs(): string[] {
  return Object.keys(tours);
}
