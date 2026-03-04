"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  const { tHtml } = useLanguage();

  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <span
          className="text-[0.82rem] text-muted-foreground"
          dangerouslySetInnerHTML={{
            __html: tHtml(
              "footer-copy",
              "&copy; 2026 AJ23 Barbershop. All rights reserved."
            ),
          }}
        />
        <div className="flex gap-5">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.82rem] text-muted-foreground hover:text-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href={siteConfig.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.82rem] text-muted-foreground hover:text-gold transition-colors"
          >
            Booksy
          </a>
        </div>
      </div>
    </footer>
  );
}
