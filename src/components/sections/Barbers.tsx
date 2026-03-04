"use client";

import { useLanguage } from "@/context/LanguageContext";
import { barbers } from "@/data/barbers";
import BarberCard from "@/components/ui/BarberCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Barbers() {
  const { t } = useLanguage();

  return (
    <section id="barbers" className="parallax-section section-padding">
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-5">
            {t("barbers-label", "THE TEAM")}
          </div>
          <h2 className="font-heading text-[32px] md:text-[48px] uppercase leading-[1.05] mb-6">
            {t("barbers-heading", "Meet Your Barbers")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {barbers.map((barber, i) => (
            <ScrollReveal key={barber.id} delay={i}>
              <BarberCard barber={barber} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
