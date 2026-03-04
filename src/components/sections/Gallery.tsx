"use client";

import { useLanguage } from "@/context/LanguageContext";
import { galleryImages } from "@/data/gallery";
import GalleryItem from "@/components/ui/GalleryItem";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="parallax-section py-[60px]">
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">
            {t("gallery-label", "OUR WORK")}
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.2] mb-6">
            {t("gallery-heading", "The Portfolio")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {galleryImages.map((image, i) => (
            <ScrollReveal key={image.id} delay={i}>
              <GalleryItem image={image} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
