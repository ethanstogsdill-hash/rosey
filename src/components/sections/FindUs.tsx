"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FindUs() {
  const { t, tHtml } = useLanguage();

  return (
    <section id="findus" className="section-padding">
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-5">
            {t("findus-label", "FIND US")}
          </div>
          <h2 className="font-heading text-[32px] md:text-[48px] uppercase leading-[1.05] mb-6">
            {t("findus-heading", "Come Through")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-14 items-start">
          <ScrollReveal>
            <div className="mb-8">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
                {t("findus-location-label", "Location")}
              </div>
              <div
                className="text-[1.05rem] text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: tHtml(
                    "findus-location",
                    "2441 NW 43rd St, Unit 6b<br>Gainesville, FL 32606"
                  ),
                }}
              />
            </div>
            <div className="mb-8">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
                {t("findus-hours-label", "Hours")}
              </div>
              <div
                className="text-[1.05rem] text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: tHtml(
                    "findus-hours",
                    "Mon – Sat: 9AM – 7PM<br>Sun: 10AM – 2PM"
                  ),
                }}
              />
            </div>
            <div className="mb-8">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
                {t("findus-contact-label", "Contact")}
              </div>
              <div className="text-[1.05rem] text-foreground leading-relaxed">
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <br />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>
            <a
              href={siteConfig.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-[rgba(255,255,255,0.15)] rounded-full text-[0.95rem] font-medium text-foreground hover:border-gold hover:-translate-y-0.5 transition-all mt-2"
              dangerouslySetInnerHTML={{
                __html: tHtml("findus-directions", "Get Directions →"),
              }}
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-[16px] overflow-hidden border-2 border-[rgba(255,255,255,0.08)] aspect-[4/3]">
              <iframe
                src={siteConfig.mapsEmbedUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AJ23 Barbershop location on Google Maps"
                className="w-full h-full border-0"
                style={{
                  filter:
                    "invert(0.92) hue-rotate(180deg) brightness(0.7) contrast(1.1) saturate(0.3)",
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
