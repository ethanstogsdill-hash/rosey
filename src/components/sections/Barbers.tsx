"use client";

import { useLanguage } from "@/context/LanguageContext";
import { barbers } from "@/data/barbers";
import BarberCard from "@/components/ui/BarberCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Barbers() {
  const { t } = useLanguage();

  return (
    <section id="barbers" className="parallax-section py-[60px]">
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">
            {t("barbers-label", "THE TEAM")}
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.2] mb-6">
            {t("barbers-heading", "Meet Your Barbers")}
          </h2>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {barbers.map((barber, i) => (
            <ScrollReveal
              key={barber.id}
              delay={i}
              className="w-full md:w-[calc(33.333%-16px)]"
            >
              <BarberCard barber={barber} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
