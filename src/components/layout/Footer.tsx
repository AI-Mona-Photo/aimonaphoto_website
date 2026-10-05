

import React from "react";
import { studioInfo } from "@/data/studio";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/whatsapp";

export function Footer() {
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
              <div className="inline-flex items-center gap-2 bg-stone-900 px-3 py-1.5 rounded text-xs font-medium border border-stone-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                UPI Accepted Here
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-100 font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#styles" className="hover:text-amber-500 transition-colors">AI Styles</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-500 transition-colors">How It Works</a></li>
              <li><a href="#photo-guide" className="hover:text-amber-500 transition-colors">Photo Guide</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-stone-100 font-medium mb-4">Services</h4>
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
            <h4 className="text-stone-100 font-medium mb-4">Visit Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-stone-500 flex-shrink-0" />
                <span>{studioInfo.address}</span>
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
              href={buildWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-200 px-4 py-2 rounded-lg font-medium text-sm transition-colors mt-6 border border-stone-700"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              Message us
            </a>
          </div>

        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 gap-4">
          <p>© {new Date().getFullYear()} Mona Photo Studio. All rights reserved.</p>
          <p>Designed for Paranda</p>
        </div>
      </div>
    </footer>
  );
}
