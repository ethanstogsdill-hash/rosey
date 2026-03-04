"use client";

import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-5">
            {t("svc-label", "THE MENU")}
          </div>
          <h2 className="font-heading text-[32px] md:text-[48px] uppercase leading-[1.05] mb-6">
            {t("svc-heading", "Services & Pricing")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
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
