"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";

export default function Hero() {
  const { t, tHtml } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `var(--background) url('/images/aj23.png') center top / contain no-repeat`,
      }}
    >
      <div className="absolute inset-0 bg-[rgba(10,10,10,0.75)] pointer-events-none" />
      <div className="container relative pt-32 pb-24">
        <h1
          className="font-heading text-[48px] md:text-[80px] uppercase leading-[0.95] tracking-tight mb-6 opacity-0 translate-y-5 animate-[fade-up_0.8s_ease_forwards_0.3s] [&>em]:not-italic [&>em]:text-gold"
          dangerouslySetInnerHTML={{
            __html: tHtml(
              "hero-heading",
              'Where Every Cut Is a <em>Masterpiece</em>'
            ),
          }}
        />
        <p className="text-[1.1rem] text-muted-foreground max-w-[500px] mb-10 leading-[1.7] opacity-0 translate-y-5 animate-[fade-up_0.8s_ease_forwards_0.5s]">
          {t(
            "hero-sub",
            "Gainesville's premier barbershop. Precision fades, sharp lineups, and over 10 years of experience in the chair."
          )}
        </p>
        <div className="opacity-0 translate-y-5 animate-[fade-up_0.8s_ease_forwards_0.7s]">
          <a
            href={siteConfig.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-[#0A0A0A] text-[1rem] font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)] transition-all w-full sm:w-auto"
          >
            {t("hero-cta-book", "Book Your Cut")}
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fade-up_0.8s_ease_forwards_1.2s]">
        <span className="text-[0.7rem] tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-[pulse-line_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
