"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FindUs() {
  const { t, tHtml } = useLanguage();

  return (
    <section id="findus" className="py-[60px]">
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-4">
            {t("findus-label", "FIND US")}
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.2] mb-6">
            {t("findus-heading", "Come Through")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start">
          <ScrollReveal>
            <div className="mb-7">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-2">
                {t("findus-location-label", "Location")}
              </div>
              <div
                className="text-base text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: tHtml(
                    "findus-location",
                    "2441 NW 43rd St, Unit 6b<br>Gainesville, FL 32606"
                  ),
                }}
              />
            </div>
            <div className="mb-7">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-2">
                {t("findus-hours-label", "Hours")}
              </div>
              <div
                className="text-base text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: tHtml(
                    "findus-hours",
                    "Mon – Sat: 9AM – 7PM<br>Sun: 10AM – 2PM"
                  ),
                }}
              />
            </div>
            <div className="mb-7">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-2">
                {t("findus-contact-label", "Contact")}
              </div>
              <div className="text-base text-foreground leading-relaxed">
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
              className="inline-flex items-center gap-2 px-7 py-3 bg-transparent border border-[rgba(242,240,235,0.2)] rounded-full text-[0.9rem] font-medium text-foreground hover:border-gold hover:-translate-y-0.5 transition-all mt-2"
              dangerouslySetInnerHTML={{
                __html: tHtml("findus-directions", "Get Directions →"),
              }}
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-[12px] overflow-hidden border border-[rgba(255,255,255,0.05)] aspect-[4/3]">
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
