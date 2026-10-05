

import React from "react";
import { Search, MessageCircle, ImageUp, Sparkles, ImageDown } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Browse Styles",
      desc: "Look through our catalog and choose your favorite AI photo style.",
      icon: Search
    },
    {
      num: "02",
      title: "Order on WhatsApp",
      desc: "Click the WhatsApp button to start your order instantly.",
      icon: MessageCircle
    },
    {
      num: "03",
      title: "Send Your Photo",
      desc: "Send us a clear photo of yourself directly on WhatsApp.",
      icon: ImageUp
    },
    {
      num: "04",
      title: "We Create",
      desc: "Our studio manually applies professional AI transformations.",
      icon: Sparkles
    },
    {
      num: "05",
      title: "Get Your Photo",
      desc: "Receive your high-quality digital photo ready for sharing or printing.",
      icon: ImageDown
    }
  ];

  return (
    <section className="py-24 bg-stone-900 text-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-100 mb-4">
            How It Works
          </h2>
          <p className="text-stone-400 text-lg">
            Simple, fast, and entirely on WhatsApp. No accounts needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-stone-800 via-amber-900/50 to-stone-800 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center text-amber-500 mb-4 border border-stone-700 shadow-lg relative group">
                <step.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-3 -right-3 text-[10px] font-bold text-stone-400 bg-stone-900 px-1.5 py-0.5 rounded border border-stone-700">
                  {step.num}
                </div>
              </div>
              <h3 className="font-medium text-lg text-stone-200 mb-2">{step.title}</h3>
              <p className="text-sm text-stone-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
