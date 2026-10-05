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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedLang = localStorage.getItem("mona_language") as Language;
    if (savedLang && ["en", "mr", "hi"].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("mona_language", lang);
  };

  const t = (key: TranslationKey): string => {
    // If not client yet, default to English to prevent hydration mismatch for simple text, 
    // or just render the current state.
    const keys = key.split(".");
    let current: any = translations[language];
    
    for (const k of keys) {
      if (current[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      current = current[k];
    }
    return current as string;
  };

  // Prevent hydration mismatch by rendering a subtle fade-in or just default english on first pass if needed.
  // We will just let it hydrate; text mismatch is usually non-fatal but to be perfectly clean:
  if (!isClient) {
    return (
      <LanguageContext.Provider value={{ language: "en", setLanguage, t: (k) => {
        const keys = k.split(".");
        let current: any = translations["en"];
        for (const key of keys) {
          if (current[key] === undefined) return k;
          current = current[key];
        }
        return current;
      } }}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </LanguageContext.Provider>
    );
  }

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
