"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const { t } = useLanguage();

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.05)] rounded-[12px] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(201,169,110,0.2)]">
      <div className="flex justify-between items-start mb-2.5">
        <span className="font-heading text-lg font-semibold">
          {t(service.nameKey, service.nameDefault)}
        </span>
        <span className="font-heading text-xl font-semibold text-gold whitespace-nowrap ml-4">
          {service.price}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {t(service.descKey, service.descDefault)}
      </p>
    </div>
  );
}
