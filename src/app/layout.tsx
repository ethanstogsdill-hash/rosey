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
  title: "AJ23 Barbershop — Gainesville's Premier Barbershop",
  description:
    "Precision fades, sharp lineups, and a vibe that keeps you coming back. Book your cut at AJ23 Barbershop in Gainesville, FL.",
  openGraph: {
    title: "AJ23 Barbershop — Gainesville's Premier Barbershop",
    description:
      "Precision fades, sharp lineups, and a vibe that keeps you coming back. Book your cut at AJ23 Barbershop in Gainesville, FL.",
    type: "website",
    locale: "en_US",
    siteName: "AJ23 Barbershop",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230B0B0B'/><text x='50' y='52' text-anchor='middle' dominant-baseline='middle' font-size='36' fill='%23C9A96E' font-family='serif' font-weight='bold'>AJ23</text></svg>",
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
