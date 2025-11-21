"use client"

import { useState } from "react"
import PenthouseFlipbook from "./penthouse-flipbook"

export default function PenthouseRoom({ onBack }: { onBack: () => void }) {
  const [showFlipbook, setShowFlipbook] = useState(true)

  if (showFlipbook) {
    return <PenthouseFlipbook onBack={onBack} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Penthouse Entrance */}
        <div className="space-y-12">
          {/* Framed Roaring 20s Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Ornate Frame */}
              <div className="bg-gradient-to-br from-amber-700 via-amber-600 to-amber-700 p-6 rounded-lg shadow-2xl border-4 border-amber-500/50">
                {/* Inner Frame */}
                <div className="bg-gradient-to-br from-amber-900 to-amber-800 p-4 rounded">
                  {/* Image */}
                  <img
                    src="/elegant-roaring-twenties-art-deco-luxury-penthouse.jpg"
                    alt="Roaring Twenties Penthouse"
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400" />
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light">Level 6 - The Podcast Zone</p>
              <h1 className="text-5xl md:text-6xl font-light tracking-wider text-amber-50 drop-shadow-lg">
                The Roaring Twenties
              </h1>
              <p className="text-amber-400/80 text-lg font-light tracking-wide">
                Personal Freedom & Cultural Transformation
              </p>
            </div>

            <div className="flex gap-3 justify-center items-center py-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400" />
              <div className="w-3 h-3 bg-amber-400 rounded-full" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Discover how economic, political, and cultural decisions shaped personal freedom and equality. Navigate
              through history with our interactive flip-book experience.
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => setShowFlipbook(true)}
                className="inline-block px-16 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 rounded-lg transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/30 hover:shadow-amber-500/40 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center gap-2">Open the Penthouse Library</span>
              </button>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-4">
                8 pages of history • 4 reflection questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
