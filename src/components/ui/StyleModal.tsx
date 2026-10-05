"use client";

import React, { useEffect } from "react";
import { Style } from "@/types/studio";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { X, MessageCircle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface StyleModalProps {
  styleData: Style | null;
  isOpen: boolean;
  onClose: () => void;
}

export function StyleModal({ styleData, isOpen, onClose }: StyleModalProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !styleData) return null;

  const displayName = language === "mr" && styleData.marathiName ? styleData.marathiName :
                      language === "hi" && styleData.hindiName ? styleData.hindiName :
                      styleData.name;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-stone-900 rounded-full backdrop-blur transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full md:w-1/2 bg-stone-100 flex-shrink-0">
            <BeforeAfterSlider
              beforeImage={styleData.beforeImage}
              afterImage={styleData.afterImage}
              aspectRatio="portrait"
              className="h-full object-cover max-h-[50vh] md:max-h-[90vh]"
              beforeLabel={t("hero.before")}
              afterLabel={t("hero.after")}
            />
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
            <div className="mb-6">
              <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-2">
                {t(`categories.${styleData.category}` as any)} • {styleData.id}
              </div>
              <h2 className="font-serif text-3xl font-medium text-stone-900 mb-2">
                {displayName}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {styleData.description}
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-stone-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-stone-500 mb-1">{t("catalog.price")}</div>
                  <div className="text-3xl font-semibold text-stone-900">₹{styleData.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-stone-500 mb-1">{t("catalog.turnaround")}</div>
                  <div className="flex items-center text-stone-900 font-medium">
                    <Clock className="w-4 h-4 mr-1.5 text-stone-500" />
                    {styleData.turnaround}
                  </div>
                </div>
              </div>

              <a
                href={buildWhatsAppURL(language, styleData)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-xl font-medium text-lg transition-colors shadow-sm hover:shadow-md"
              >
                <MessageCircle className="w-6 h-6" />
                <span>{t("nav.orderWhatsApp")}</span>
              </a>
              <p className="text-xs text-center text-stone-500 mt-4">
                {t("catalog.modalMsg")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
