"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  const { t } = useLanguage();

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.06)] rounded-[16px] p-8 flex flex-col">
      <div className="text-gold text-lg tracking-wider mb-5">★★★★★</div>
      <p className="text-[1.05rem] leading-[1.7] text-foreground flex-1 mb-6">
        &ldquo;{t(review.textKey, review.textDefault)}&rdquo;
      </p>
      <div className="flex justify-between items-center pt-5 border-t border-[rgba(255,255,255,0.06)]">
        <span className="text-[0.9rem] font-medium text-foreground">
          {t(review.authorKey, review.authorDefault)}
        </span>
        <span className="text-[0.78rem] text-muted-foreground tracking-wide">
          {t(review.sourceKey, review.sourceDefault)}
        </span>
      </div>
    </div>
  );
}
