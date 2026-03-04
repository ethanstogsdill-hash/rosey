"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  const { t, tHtml } = useLanguage();

  return (
    <footer className="bg-card border-t border-[rgba(255,255,255,0.06)] py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="font-heading text-2xl tracking-wider uppercase mb-4">
              AJ23 <span className="text-gold">BARBERSHOP</span>
            </div>
            <p className="text-[0.9rem] text-muted-foreground leading-[1.7] max-w-[280px]">
              {t(
                "footer-desc",
                "Gainesville's premier barbershop. Precision fades, sharp lineups, and over 10 years of experience."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg uppercase tracking-wider text-gold mb-5">
              {t("footer-links-heading", "Quick Links")}
            </h4>
            <ul className="space-y-3 list-none">
              {[
                { href: "#about", label: t("nav-about", "About") },
                { href: "#services", label: t("nav-services", "Services") },
                { href: "#gallery", label: t("nav-gallery", "Gallery") },
                { href: "#barbers", label: t("nav-barbers", "Barbers") },
                { href: "#reviews", label: t("nav-reviews", "Reviews") },
                { href: "#findus", label: t("nav-findus", "Find Us") },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9rem] text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg uppercase tracking-wider text-gold mb-5">
              {t("footer-contact-heading", "Contact")}
            </h4>
            <div className="space-y-3 text-[0.9rem] text-muted-foreground">
              <div>2441 NW 43rd St, Unit 6b<br />Gainesville, FL 32606</div>
              <div>
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex gap-5 pt-2">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.booksyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Booksy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] mt-14 pt-8 text-center">
          <span
            className="text-[0.82rem] text-muted-foreground"
            dangerouslySetInnerHTML={{
              __html: tHtml(
                "footer-copy",
                "&copy; 2026 AJ23 Barbershop. All rights reserved."
              ),
            }}
          />
        </div>
      </div>
    </footer>
  );
}
