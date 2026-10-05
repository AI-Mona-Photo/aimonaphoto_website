"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "AI Styles", href: "#styles" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Photo Guide", href: "#photo-guide" },
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
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center font-serif font-bold text-stone-900 text-xl">
              M
            </div>
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
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <a
              href={buildWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg font-medium text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-stone-200 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-stone-950 border-b border-stone-800 shadow-2xl p-4 flex flex-col space-y-4">
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
            href={buildWhatsAppURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-lg font-medium text-lg mt-4"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
