"use client";

import { LightboxProvider } from "@/hooks/useLightbox";
import { useParallax } from "@/hooks/useParallax";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Lightbox from "@/components/ui/Lightbox";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Barbers from "@/components/sections/Barbers";
import Reviews from "@/components/sections/Reviews";
import SocialCta from "@/components/sections/SocialCta";
import Booking from "@/components/sections/Booking";
import FindUs from "@/components/sections/FindUs";

export default function Home() {
  useParallax();

  return (
    <LightboxProvider>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <BeforeAfter />
      <Barbers />
      <Reviews />
      <SocialCta />
      <Booking />
      <FindUs />
      <Footer />
      <Lightbox />
    </LightboxProvider>
  );
}
