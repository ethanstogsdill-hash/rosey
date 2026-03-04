"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { es } from "@/data/translations";

type Lang = "en" | "es";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string, defaultText: string) => string;
  tHtml: (key: string, defaultText: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("aj23-lang") as Lang | null;
    if (saved === "es") setLangState("es");
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("aj23-lang", newLang);
  }, []);

  const t = useCallback(
    (key: string, defaultText: string) => {
      if (lang === "es" && es[key]) return es[key];
      return defaultText;
    },
    [lang]
  );

  const tHtml = useCallback(
    (key: string, defaultText: string) => {
      if (lang === "es" && es[key]) return es[key];
      return defaultText;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tHtml }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
