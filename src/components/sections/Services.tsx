"use client";

import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-[60px]">
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">
            {t("svc-label", "THE MENU")}
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.2] mb-6">
            {t("svc-heading", "Services & Pricing")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
