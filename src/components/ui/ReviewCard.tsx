"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  const { t } = useLanguage();

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.05)] rounded-[12px] p-8 flex flex-col">
      <div className="text-gold text-sm tracking-wider mb-4">★★★★★</div>
      <p className="font-heading italic text-base leading-[1.7] text-foreground flex-1 mb-5">
        {t(review.textKey, review.textDefault)}
      </p>
      <div className="flex justify-between items-center pt-4 border-t border-[rgba(255,255,255,0.05)]">
        <span className="text-[0.82rem] font-medium text-foreground">
          {t(review.authorKey, review.authorDefault)}
        </span>
        <span className="text-[0.72rem] text-muted-foreground tracking-wide">
          {t(review.sourceKey, review.sourceDefault)}
        </span>
      </div>
    </div>
  );
}
