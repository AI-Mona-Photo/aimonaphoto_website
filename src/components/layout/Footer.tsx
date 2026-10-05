"use client";

import React from "react";
import { studioInfo } from "@/data/studio";
import { MapPin, Phone, Clock } from "lucide-react";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-stone-950 pt-20 pb-10 border-t border-stone-900 text-stone-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="font-serif font-bold text-2xl text-stone-100">
                Mona Photo Studio
              </span>
              <span className="text-xs text-amber-500 font-medium tracking-widest uppercase">
                Paranda
              </span>
            </div>
            <p className="text-sm mb-6 max-w-sm">
              {studioInfo.description}
            </p>
            {studioInfo.upiAccepted && (
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2.5 bg-stone-900 w-fit px-3 py-2 rounded-lg text-xs font-medium border border-stone-800">
                  <img src="/images/upi-logo.svg" alt="UPI Accepted" className="h-3.5 w-auto" />
                  <span>{t("footer.upi")}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="bg-stone-100 px-2 py-1 rounded-md flex items-center justify-center h-7">
                    <img src="/images/gpay-logo.svg" alt="Google Pay" className="h-3.5 w-auto" />
                  </div>
                  <div className="bg-stone-100 px-2 py-1 rounded-md flex items-center justify-center h-7">
                    <img src="/images/phonepe-logo.svg" alt="PhonePe" className="h-3.5 w-auto" />
                  </div>
                  <div className="bg-stone-100 px-2 py-1 rounded-md flex items-center justify-center h-7">
                    <img src="/images/paytm-logo.svg" alt="Paytm" className="h-2.5 w-auto" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-100 font-medium mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">{t("nav.home")}</a></li>
              <li><a href="#styles" className="hover:text-amber-500 transition-colors">{t("nav.styles")}</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-500 transition-colors">{t("nav.howItWorks")}</a></li>
              <li><a href="#photo-guide" className="hover:text-amber-500 transition-colors">{t("nav.guide")}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-stone-100 font-medium mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm">
              <li>AI Baby Photos</li>
              <li>AI Royal Portraits</li>
              <li>Professional Profiles</li>
              <li>Wedding Photo Edits</li>
              <li>Photo Restoration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-stone-100 font-medium mb-4">{t("footer.visitUs")}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-stone-500 flex-shrink-0 mt-0.5" />
                <a 
                  href={studioInfo.mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-500 transition-colors"
                >
                  {studioInfo.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-stone-500 flex-shrink-0" />
                <span>{studioInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-stone-500 flex-shrink-0" />
                <span>{studioInfo.hours}</span>
              </li>
            </ul>
            <a
              href={buildWhatsAppURL(language)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-200 px-4 py-2 rounded-lg font-medium text-sm transition-colors mt-6 border border-stone-700"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
              {t("footer.msgUs")}
            </a>
          </div>

        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 gap-4">
          <p>© {new Date().getFullYear()} Mona Photo Studio. {t("footer.rights")}</p>
          <p>{t("footer.designed")}</p>
        </div>
      </div>
    </footer>
  );
}
