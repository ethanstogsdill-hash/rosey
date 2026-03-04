"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SocialCta() {
  const { t } = useLanguage();

  return (
    <section id="social" className="text-center relative overflow-hidden section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-[560px] mx-auto">
            <div className="text-gold mb-6 opacity-80">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="text-xs font-semibold tracking-[3px] uppercase text-gold mb-5">
              {t("social-label", "STAY CONNECTED")}
            </div>
            <h2 className="font-heading text-[32px] md:text-[48px] uppercase leading-[1.05] mb-6">
              {t("social-heading", "Follow Us on Instagram")}
            </h2>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.7] mb-10">
              {t(
                "social-text",
                "Stay updated on fresh cuts, new styles, shop updates, and behind-the-scenes content. Join the AJ23 community."
              )}
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-10 py-4 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white text-[1rem] font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(225,48,108,0.3)] transition-all"
            >
              Follow on Instagram
            </a>
            <div className="mt-10 text-center">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-lg"
              >
                {siteConfig.instagramHandle}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
