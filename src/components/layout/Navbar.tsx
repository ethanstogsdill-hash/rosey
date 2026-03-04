"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site-config";
import LangToggle from "@/components/ui/LangToggle";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "#about", key: "nav-about", default: "About" },
  { href: "#services", key: "nav-services", default: "Services" },
  { href: "#gallery", key: "nav-gallery", default: "Gallery" },
  { href: "#barbers", key: "nav-barbers", default: "Barbers" },
  { href: "#reviews", key: "nav-reviews", default: "Reviews" },
  { href: "#findus", key: "nav-findus", default: "Find Us" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-350 ${
          scrolled
            ? "bg-[rgba(10,10,10,0.9)] backdrop-blur-[20px] py-3.5 border-b border-[rgba(255,255,255,0.04)]"
            : "py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#"
            className="font-heading text-2xl tracking-wider uppercase"
          >
            AJ23 <span className="text-gold">BARBERSHOP</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.85rem] font-normal tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(link.key, link.default)}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-2.5 bg-gold text-[#0A0A0A] text-[0.85rem] font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)] transition-all"
              >
                {t("nav-book", "Book Now")}
              </a>
            </li>
            <li>
              <LangToggle />
            </li>
          </ul>
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[1100]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-foreground rounded-sm transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-foreground rounded-sm transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-foreground rounded-sm transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} links={navLinks} />
    </>
  );
}
