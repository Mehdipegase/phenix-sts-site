import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phenix13.fr"),
  title: {
    default: "PHENIX STS | Terrassement & livraison d’agrégats à Marseille",
    template: "%s | PHENIX STS",
  },
  description:
    "Terrassement, mini-pelle avec chauffeur et livraison d’agrégats à Marseille, Aubagne, Allauch et alentours. Tarifs repères et devis direct.",
  keywords: [
    "terrassement Marseille",
    "mini pelle avec chauffeur Marseille",
    "livraison agrégats Marseille",
    "terre végétale Aubagne",
    "location mini pelle 3.5t",
    "PHENIX STS",
  ],
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/images/logo-phoenix.png",
    shortcut: "/images/logo-phoenix.png",
  },
  openGraph: {
    title: "PHENIX STS — Votre chantier avance",
    description:
      "Terrassement, engins avec chauffeur et agrégats livrés autour de Marseille.",
    images: ["/images/terrassement-chemin-premium.png"],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "PHENIX STS",
  url: "https://www.phenix13.fr",
  telephone: "+33610040890",
  email: "contact@phenix13.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1120 route de Gémenos",
    postalCode: "13400",
    addressLocality: "Aubagne",
    addressCountry: "FR",
  },
  areaServed: [
    "Marseille",
    "Aubagne",
    "Allauch",
    "Plan-de-Cuques",
    "Gémenos",
  ],
  description:
    "Terrassement, mini-pelle avec chauffeur, évacuation et livraison d’agrégats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${barlow.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
