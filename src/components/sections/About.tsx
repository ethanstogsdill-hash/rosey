"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  const { t, tHtml } = useLanguage();

  return (
    <section id="about" className="text-center py-[60px]">
      <div className="container">
        <ScrollReveal>
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">
            {t("about-label", "THE VIBE")}
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.2] mb-6">
            {t("about-heading", "Artistry Meets Precision")}
          </h2>
          <p
            className="max-w-[620px] mx-auto text-muted-foreground text-[1.05rem] leading-[1.8] [&>strong]:text-foreground [&>strong]:font-medium"
            dangerouslySetInnerHTML={{
              __html: tHtml(
                "about-text",
                'At AJ23 Barbershop, every visit is more than a haircut — it\'s an experience built on <strong>over a decade of expertise</strong> and a genuine love for the craft. Our bilingual team treats every fade, lineup, and beard sculpt like a work of art. We\'ve built a space where <strong>classic barbershop culture meets modern style</strong> — with a kid-friendly gaming area and a welcoming vibe for the whole family. Whether you\'re a regular or it\'s your first time in the chair, you\'ll feel the difference from the first cut.'
              ),
            }}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
