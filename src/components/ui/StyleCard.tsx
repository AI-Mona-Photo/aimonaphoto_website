"use client";

import React from "react";
import { Style } from "@/types/studio";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { MessageCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface StyleCardProps {
  styleData: Style;
  onClick?: (style: Style) => void;
}

export function StyleCard({ styleData, onClick }: StyleCardProps) {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(buildWhatsAppURL(styleData), "_blank");
  };

  return (
    <div 
      className="group relative flex flex-col bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onClick?.(styleData)}
    >
      <div className="relative">
        <BeforeAfterSlider 
          beforeImage={styleData.beforeImage} 
          afterImage={styleData.afterImage} 
          aspectRatio="portrait"
        />
        {styleData.badge && (
          <div className="absolute bottom-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md uppercase tracking-wider">
            {styleData.badge}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="text-xs text-stone-500 font-medium tracking-wider uppercase mb-1">
              {styleData.id} • {styleData.category}
            </div>
            <h3 className="font-serif text-xl font-medium text-stone-900 leading-tight">
              {styleData.name}
            </h3>
            {styleData.marathiName && (
              <h4 className="text-stone-600 text-sm mt-0.5">{styleData.marathiName}</h4>
            )}
          </div>
          <div className="text-right">
            <div className="font-semibold text-lg text-emerald-700">₹{styleData.price}</div>
          </div>
        </div>
        
        <p className="text-stone-600 text-sm mb-4 line-clamp-2 flex-grow">
          {styleData.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
          <div className="flex items-center text-xs text-stone-500 font-medium">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {styleData.turnaround}
          </div>
          <button
            onClick={handleWhatsApp}
            className={cn(
              "flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-medium text-sm transition-colors",
              "bg-emerald-600 text-white hover:bg-emerald-700"
            )}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
