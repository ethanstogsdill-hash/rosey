"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { Barber } from "@/data/barbers";

export default function BarberCard({ barber }: { barber: Barber }) {
  const { t } = useLanguage();
  const [imgSrc, setImgSrc] = useState(barber.image);

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.3)] group">
      <div className="w-full aspect-[3/3.5] overflow-hidden relative">
        <Image
          src={imgSrc}
          alt={`${barber.displayName} — ${t(barber.roleKey, barber.roleDefault)}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={() => setImgSrc(barber.unsplashFallback)}
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-[24px] uppercase tracking-wide mb-1">
          {barber.displayName}
        </h3>
        <div className="text-xs font-semibold text-gold tracking-wider uppercase mb-3">
          {t(barber.roleKey, barber.roleDefault)}
        </div>
        <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
          {t(barber.descKey, barber.descDefault)}
        </p>
      </div>
    </div>
  );
}
