"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const { t } = useLanguage();

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.06)] rounded-[16px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
      <div className="flex justify-between items-start mb-3">
        <span className="font-heading text-[22px] uppercase tracking-wide">
          {t(service.nameKey, service.nameDefault)}
        </span>
        <span className="font-heading text-[28px] text-gold whitespace-nowrap ml-4">
          {service.price}
        </span>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[0.75rem] text-muted-foreground bg-[rgba(255,255,255,0.05)] px-3 py-1 rounded-full">
          {service.duration}
        </span>
      </div>
      <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
        {t(service.descKey, service.descDefault)}
      </p>
    </div>
  );
}
