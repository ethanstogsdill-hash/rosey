"use client";

import { useLanguage } from "@/context/LanguageContext";
import { reviews } from "@/data/reviews";
import ReviewCard from "@/components/ui/ReviewCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="text-center section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-5">
            {t("reviews-label", "THE PEOPLE HAVE SPOKEN")}
          </div>
          <h2 className="font-heading text-[32px] md:text-[48px] uppercase leading-[1.05] mb-6">
            {t("reviews-heading", "What Clients Are Saying")}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="text-gold text-3xl tracking-wider">★★★★★</span>
            <span className="text-[1.05rem] text-muted-foreground">
              {t("reviews-rating", "4.9/5 · 550+ Reviews")}
            </span>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.id} delay={i}>
              <ReviewCard review={review} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
