"use client";

import React from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function Testimonials() {
  const { t, language } = useLanguage();

  const reviews = translations[language].testimonials.reviews;

  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 mb-4">
            {t("testimonials.title")}
          </h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
          </div>
          <p className="text-stone-600 text-lg">
            {t("testimonials.desc")}
          </p>
        </div>

        <div className="relative overflow-hidden -mx-4 md:mx-0 px-4 md:px-0">
          {/* Fading edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-stone-100 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-stone-100 to-transparent z-10" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
            <div className="flex gap-6 pr-6">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 relative w-[300px] md:w-[400px] shrink-0 flex flex-col transition-transform hover:scale-[1.02]">
                  <div className="text-4xl text-stone-200 font-serif absolute top-4 right-6">&quot;</div>
                  <p className="text-stone-700 mb-6 relative z-10 flex-grow">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-bold text-stone-600 shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-stone-900">{review.name}</div>
                      <div className="text-xs text-stone-500">{review.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-6 pr-6" aria-hidden="true">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 relative w-[300px] md:w-[400px] shrink-0 flex flex-col transition-transform hover:scale-[1.02]">
                  <div className="text-4xl text-stone-200 font-serif absolute top-4 right-6">&quot;</div>
                  <p className="text-stone-700 mb-6 relative z-10 flex-grow">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-bold text-stone-600 shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-stone-900">{review.name}</div>
                      <div className="text-xs text-stone-500">{review.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
