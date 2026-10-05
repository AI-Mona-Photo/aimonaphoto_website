"use client";

import React, { useState } from "react";
import { categories } from "@/data/categories";
import { stylesData } from "@/data/styles";
import { StyleCard } from "../ui/StyleCard";
import { StyleModal } from "../ui/StyleModal";
import { Style, Category } from "@/types/studio";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function StyleCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);
  const { t } = useLanguage();

  const filteredStyles = activeCategory === "All" 
    ? stylesData 
    : stylesData.filter(style => style.category === activeCategory);

  return (
    <section id="styles" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 mb-4">
            {t("catalog.title")}
          </h2>
          <p className="text-stone-600 text-lg">
            {t("catalog.desc")}
          </p>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center gap-2 hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-stone-900 text-white shadow-md"
                  : "bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:bg-stone-100"
              }`}
            >
              {t(`categories.${category}` as any)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredStyles.map((style) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={style.id}
              >
                <StyleCard 
                  styleData={style} 
                  onClick={(s) => setSelectedStyle(s)} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStyles.length === 0 && (
          <div className="text-center py-20 text-stone-500">
            {t("catalog.empty")}
          </div>
        )}

      </div>

      <StyleModal 
        styleData={selectedStyle} 
        isOpen={!!selectedStyle} 
        onClose={() => setSelectedStyle(null)} 
      />
    </section>
  );
}
