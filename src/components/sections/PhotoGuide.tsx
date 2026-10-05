"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function PhotoGuide() {
  const { t } = useLanguage();

  return (
    <section id="photo-guide" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 mb-4">
            {t("guide.title")}
          </h2>
          <p className="text-stone-600 text-lg">
            {t("guide.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* GOOD */}
          <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6 text-emerald-700">
              <CheckCircle2 className="w-8 h-8" />
              <h3 className="text-2xl font-serif font-medium">{t("guide.good")}</h3>
            </div>
            
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{t("guide.good1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{t("guide.good2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{t("guide.good3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{t("guide.good4")}</span>
              </li>
            </ul>
          </div>

          {/* AVOID */}
          <div className="bg-red-50 rounded-2xl p-6 md:p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6 text-red-700">
              <XCircle className="w-8 h-8" />
              <h3 className="text-2xl font-serif font-medium">{t("guide.avoid")}</h3>
            </div>
            
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>{t("guide.avoid1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>{t("guide.avoid2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>{t("guide.avoid3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>{t("guide.avoid4")}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center text-sm text-stone-500 max-w-xl mx-auto">
          {t("guide.note")}
        </div>

      </div>
    </section>
  );
}
