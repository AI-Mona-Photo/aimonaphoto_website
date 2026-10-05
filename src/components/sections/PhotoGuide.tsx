

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export function PhotoGuide() {
  return (
    <section id="photo-guide" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 mb-4">
            Send Us The Right Photo
          </h2>
          <p className="text-stone-600 text-lg">
            A better input photo gives you a much better AI result. Please follow these simple guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* GOOD */}
          <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6 text-emerald-700">
              <CheckCircle2 className="w-8 h-8" />
              <h3 className="text-2xl font-serif font-medium">GOOD</h3>
            </div>
            
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Clear face looking directly at the camera</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Good even lighting (no harsh shadows)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>High resolution (not pixelated)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Multiple photos from different angles (Recommended for better face consistency)</span>
              </li>
            </ul>
          </div>

          {/* AVOID */}
          <div className="bg-red-50 rounded-2xl p-6 md:p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6 text-red-700">
              <XCircle className="w-8 h-8" />
              <h3 className="text-2xl font-serif font-medium">AVOID</h3>
            </div>
            
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Blurry or shaky images</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Wearing sunglasses or face coverings</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Side profile or looking away</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Very dark photos or heavy filters</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center text-sm text-stone-500 max-w-xl mx-auto">
          Note: We strive for the best results, but AI edits are creative interpretations. Sending 2-3 clear photos of the same person helps us maintain the best possible face consistency.
        </div>

      </div>
    </section>
  );
}
