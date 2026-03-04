"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { Barber } from "@/data/barbers";

export default function BarberCard({ barber }: { barber: Barber }) {
  const { t } = useLanguage();
  const [imgSrc, setImgSrc] = useState(barber.image);

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.05)] rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(201,169,110,0.2)] group">
      <div className="w-full aspect-[3/3.5] overflow-hidden relative">
        <Image
          src={imgSrc}
          alt={`${barber.displayName} — ${t(barber.roleKey, barber.roleDefault)}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 900px) 100vw, 33vw"
          onError={() => setImgSrc(barber.unsplashFallback)}
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold mb-1">
          {barber.displayName}
        </h3>
        <div className="text-xs font-medium text-gold tracking-wide mb-3">
          {t(barber.roleKey, barber.roleDefault)}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(barber.descKey, barber.descDefault)}
        </p>
      </div>
    </div>
  );
}
