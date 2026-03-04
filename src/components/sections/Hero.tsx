"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";

export default function Hero() {
  const { t, tHtml } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 py-[120px_24px_80px] overflow-hidden"
      style={{
        background: `var(--background) url('/images/aj23.png') center top / contain no-repeat`,
      }}
    >
      <div className="absolute inset-0 bg-[rgba(11,11,11,0.7)] pointer-events-none" />
      <div className="relative max-w-[700px]">
        <div className="inline-flex items-center gap-1.5 px-[18px] py-2 bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.2)] rounded-full text-[0.8rem] font-medium text-gold mb-8 opacity-0 translate-y-5 animate-[fade-up_0.8s_ease_forwards_0.2s]">
          {t("hero-badge", "★ 4.9 Stars · 550+ Reviews")}
        </div>
        <h1
          className="font-heading text-[clamp(2.5rem,7vw,4rem)] font-bold leading-[1.15] mb-6 opacity-0 translate-y-5 animate-[fade-up_0.8s_ease_forwards_0.4s] [&>em]:italic [&>em]:text-gold"
          dangerouslySetInnerHTML={{
            __html: tHtml(
              "hero-heading",
              'Where Every Cut Is a <em>Masterpiece</em>'
            ),
          }}
        />
        <p className="text-[1.05rem] text-muted-foreground max-w-[520px] mx-auto mb-10 leading-[1.7] opacity-0 translate-y-5 animate-[fade-up_0.8s_ease_forwards_0.6s]">
          {t(
            "hero-sub",
            "Gainesville's premier barbershop. Precision fades, sharp lineups, and over 10 years of experience in the chair."
          )}
        </p>
        <div className="flex gap-4 justify-center flex-wrap opacity-0 translate-y-5 animate-[fade-up_0.8s_ease_forwards_0.8s]">
          <a
            href={siteConfig.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gold text-[#1a1a1a] text-[0.9rem] font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(201,169,110,0.3)] transition-all"
          >
            {t("hero-cta-book", "Book Your Cut")}
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3 border border-[rgba(242,240,235,0.2)] rounded-full text-[0.9rem] font-medium text-foreground bg-transparent hover:border-gold hover:-translate-y-0.5 hover:bg-[rgba(201,169,110,0.05)] transition-all"
          >
            {t("hero-cta-services", "View Services")}
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
