"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center border border-[rgba(201,169,110,0.3)] rounded-full overflow-hidden">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
          lang === "en"
            ? "bg-gold text-[#1a1a1a]"
            : "bg-transparent text-muted-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={`px-3 py-1.5 text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
          lang === "es"
            ? "bg-gold text-[#1a1a1a]"
            : "bg-transparent text-muted-foreground"
        }`}
      >
        ES
      </button>
    </div>
  );
}
