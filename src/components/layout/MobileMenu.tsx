"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";
import LangToggle from "@/components/ui/LangToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; key: string; default: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const { t } = useLanguage();

  return (
    <div
      className={`fixed inset-0 bg-[rgba(11,11,11,0.97)] backdrop-blur-[20px] z-[1050] flex flex-col items-center justify-center gap-9 transition-opacity duration-350 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="font-heading text-2xl text-foreground hover:text-gold transition-colors"
        >
          {t(link.key, link.default)}
        </a>
      ))}
      <a
        href={siteConfig.booksyUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="mt-3 inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-[#1a1a1a] text-[0.85rem] font-semibold rounded-full"
      >
        {t("nav-book", "Book Now")}
      </a>
      <div className="mt-3">
        <LangToggle />
      </div>
    </div>
  );
}
