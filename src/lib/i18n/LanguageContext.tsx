"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, TranslationKey } from "./translations";

export type Language = "en" | "mr" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("mona_language") as Language;
      if (savedLang && ["en", "mr", "hi"].includes(savedLang)) {
        setLanguageState(savedLang);
      }
    } catch (e) {
      // Ignore localStorage errors (e.g. incognito mode)
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("mona_language", lang);
    } catch (e) {}
  };

  const t = (key: TranslationKey): string => {
    const keys = key.split(".");
    let current: any = translations[language] || translations["en"];
    
    for (const k of keys) {
      if (current[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      current = current[k];
    }
    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
