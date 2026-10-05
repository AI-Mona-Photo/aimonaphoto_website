"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLanguage, Language } from "@/lib/i18n/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.home"), href: "#" },
    { label: t("nav.styles"), href: "#styles" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.guide"), href: "#photo-guide" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-stone-950/90 backdrop-blur-md border-b border-stone-800 py-3 shadow-lg" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img 
              src="/images/logo.png" 
              alt="Mona Photo Studio" 
              className="w-10 h-10 object-contain rounded-md"
            />
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-lg text-stone-50 leading-none">
                Mona Photo Studio
              </span>
              <span className="text-[10px] text-amber-400 font-medium tracking-widest uppercase mt-0.5">
                Paranda
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-2 bg-stone-900/50 rounded-lg p-1 border border-stone-800">
              {(["en", "hi", "mr"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    "text-xs font-semibold px-2 py-1 rounded transition-colors uppercase",
                    language === lang 
                      ? "bg-amber-500 text-stone-900" 
                      : "text-stone-400 hover:text-stone-200"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <a
              href={buildWhatsAppURL(language)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg font-medium text-sm transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t("nav.orderWhatsApp")}</span>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              className="text-stone-200 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-stone-950 border-b border-stone-800 shadow-2xl p-4 flex flex-col space-y-4">
          
          <div className="flex items-center justify-center gap-2 bg-stone-900 p-1.5 rounded-lg border border-stone-800 mb-2">
            {(["en", "hi", "mr"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "flex-1 text-sm font-semibold py-2 rounded transition-colors uppercase",
                  language === lang 
                    ? "bg-amber-500 text-stone-900" 
                    : "text-stone-400"
                )}
              >
                {lang === "en" ? "English" : lang === "hi" ? "हिंदी" : "मराठी"}
              </button>
            ))}
          </div>

          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-300 hover:text-white text-lg font-medium py-2 border-b border-stone-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWhatsAppURL(language)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-lg font-medium text-lg mt-4"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>{t("nav.orderWhatsApp")}</span>
          </a>
        </div>
      )}
    </header>
  );
}
