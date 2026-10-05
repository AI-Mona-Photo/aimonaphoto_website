"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FinalCTA() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
          {t("cta.title")}
        </h2>
        <p className="text-xl text-stone-300 mb-10">
          {t("cta.desc")}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={buildWhatsAppURL(language)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-xl w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t("cta.btn")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
