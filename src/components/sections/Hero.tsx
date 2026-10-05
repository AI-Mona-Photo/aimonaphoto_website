"use client";

import React from "react";
import { BeforeAfterSlider } from "../ui/BeforeAfterSlider";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { MessageCircle, ImageIcon, Zap, IndianRupee, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-stone-950 text-stone-50 overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Subtle Pattern or Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-stone-950 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-stone-800/50 border border-stone-700/50 rounded-full px-3 py-1 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-500">Paranda&apos;s AI Photo Studio</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Turn Your Moments Into <br/>
              <span className="text-amber-400 italic">Extraordinary Memories</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-400 max-w-xl leading-relaxed">
              Professional AI photo editing and creative portraits for babies, weddings, festivals, and professional profiles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={buildWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-lg hover:shadow-emerald-900/20"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href="#styles"
                className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-100 px-8 py-4 rounded-xl font-medium text-lg transition-all border border-stone-700"
              >
                <ImageIcon className="w-5 h-5" />
                <span>View AI Styles</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-4 border-t border-stone-800/60">
              <div className="flex flex-col">
                <span className="flex items-center text-amber-400 font-bold text-lg mb-1">
                  <ImageIcon className="w-4 h-4 mr-1.5" /> 50+
                </span>
                <span className="text-xs text-stone-400">AI Styles</span>
              </div>
              <div className="flex flex-col">
                <span className="flex items-center text-amber-400 font-bold text-lg mb-1">
                  <Zap className="w-4 h-4 mr-1.5" /> 2 Hrs
                </span>
                <span className="text-xs text-stone-400">Fast Delivery</span>
              </div>
              <div className="flex flex-col">
                <span className="flex items-center text-amber-400 font-bold text-lg mb-1">
                  <IndianRupee className="w-4 h-4 mr-1.5" /> 99
                </span>
                <span className="text-xs text-stone-400">Starting Price</span>
              </div>
              <div className="flex flex-col">
                <span className="flex items-center text-amber-400 font-bold text-lg mb-1">
                  <ShieldCheck className="w-4 h-4 mr-1.5" /> UPI
                </span>
                <span className="text-xs text-stone-400">Accepted</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Slider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-stone-800 shadow-2xl bg-stone-900 aspect-[3/4]">
              {/* Using Maharaja portrait for Hero */}
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=80"
                aspectRatio="portrait"
                className="w-full h-full"
              />
            </div>
            
            {/* Small decorative thumbnails */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-xl border-4 border-stone-950 overflow-hidden shadow-xl hidden md:block">
              <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=200&q=80" alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-xl border-4 border-stone-950 overflow-hidden shadow-xl hidden md:block">
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80" alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
