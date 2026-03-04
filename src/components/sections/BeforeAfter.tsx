"use client";

import { useLanguage } from "@/context/LanguageContext";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import ScrollReveal from "@/components/ui/ScrollReveal";

const sliders = [
  {
    beforeSrc:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=400&fit=crop",
    afterSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    beforeSrc:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&h=400&fit=crop",
    afterSrc:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop",
  },
  {
    beforeSrc:
      "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600&h=400&fit=crop",
    afterSrc:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=400&fit=crop",
  },
];

export default function BeforeAfter() {
  const { t } = useLanguage();

  return (
    <section id="transformations" className="parallax-section py-[60px]">
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">
            {t("ba-label", "TRANSFORMATIONS")}
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.2] mb-6">
            {t("ba-heading", "Before & After")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-[500px] md:max-w-none mx-auto">
          {sliders.map((s, i) => (
            <ScrollReveal key={i} delay={i}>
              <BeforeAfterSlider
                beforeSrc={s.beforeSrc}
                afterSrc={s.afterSrc}
                beforeAlt="Before haircut"
                afterAlt="After haircut"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
