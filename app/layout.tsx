import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Morocco Coco Travel | Authentic Tours & Private Experiences in Morocco",
  description: "Discover Morocco with personalized private tours and authentic cultural experiences. From the Hassan II Mosque to the Sahara Desert, explore Morocco's wonders with local experts.",
  keywords: "Morocco tours, private tours Morocco, Casablanca tours, Hassan II Mosque tour, Morocco travel, authentic Morocco experiences",
  openGraph: {
    title: "Morocco Coco Travel | Authentic Tours & Private Experiences",
    description: "Discover Morocco with personalized private tours and authentic cultural experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo-gold.svg" type="image/svg+xml" />
      </head>
      <body className="js">
        <ThemeProvider>
          <LanguageProvider>
            <a href="#main" className="skip-link">Skip to content</a>
            <Header />
            <main id="main">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
