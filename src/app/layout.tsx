import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aj23barbershop.com"),
  title: "AJ23 Barbershop | Gainesville, FL",
  description:
    "AJ23 Barbershop in Gainesville, FL — professional cuts, fades & grooming with 8 expert barbers. 4.9 stars, 550+ reviews. Book online today!",
  keywords: [
    "barbershop Gainesville FL",
    "haircut Gainesville",
    "fades Gainesville",
    "AJ23 barbershop",
    "barber near me",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://aj23barbershop.com",
  },
  openGraph: {
    title: "AJ23 Barbershop | Gainesville, FL",
    description:
      "Professional cuts, fades & grooming. 4.9 stars, 550+ reviews. Book your appointment online!",
    type: "website",
    url: "https://aj23barbershop.com",
    locale: "en_US",
    siteName: "AJ23 Barbershop",
    images: [{ url: "/images/og-preview.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ23 Barbershop | Gainesville, FL",
    description:
      "Professional cuts, fades & grooming in Gainesville, FL. Book online today!",
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Gainesville",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230A0A0A'/><text x='50' y='52' text-anchor='middle' dominant-baseline='middle' font-size='36' fill='%23D4AF37' font-family='serif' font-weight='bold'>AJ23</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${outfit.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
