import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        experiences: resolve(__dirname, "experiences.html"),
        rabatDayTrip: resolve(__dirname, "rabat-day-trip-from-casablanca.html"),
        casablancaMosquePremium: resolve(__dirname, "casablanca-hassan-ii-mosque-premium-tour.html"),
        casablancaMosqueSkipTheLine: resolve(__dirname, "casablanca-hassan-ii-mosque-skip-the-line.html")
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5173
  },
  preview: {
    host: "0.0.0.0",
    port: 4173
  }
});
