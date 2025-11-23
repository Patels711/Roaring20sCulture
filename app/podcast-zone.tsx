"use client"

import { useState } from "react"
import PodcastZoneEssays from "../components/podcast-zone-essays"
import PenthouseFlipbook from "../components/penthouse-flipbook"

export default function PodcastZone({ onComplete }: { onComplete: () => void }) {
  const [view, setView] = useState<"flipbook" | "essays">("flipbook")

  const handleBackToFlipbook = () => {
    setView("flipbook")
  }

  const handleShowCongratulations = () => {
    onComplete()
  }

  return (
    <div className="min-h-screen p-6 relative bg-slate-900 text-amber-300 flex flex-col max-w-4xl mx-auto rounded-lg shadow-lg border border-amber-500">
      {view === "flipbook" && (
        <>
          <PenthouseFlipbook onBack={() => onComplete()} onGoToPodcastZone={() => setView("essays")} />
          <div className="mt-6 flex justify-center gap-8">
            <button
              onClick={() => window.open("https://roaring20s-culture.vercel.app/", "_blank")}
              className="px-8 py-3 bg-amber-700 hover:bg-amber-600 rounded font-semibold"
              type="button"
            >
              Complete Level
            </button>
            <button
              onClick={() => setView("essays")}
              className="px-8 py-3 bg-amber-600 hover:bg-amber-500 rounded font-semibold"
              type="button"
            >
              View Essays
            </button>
          </div>
        </>
      )}

      {view === "essays" && (
        <PodcastZoneEssays onBack={handleBackToFlipbook} onShowCongratulations={handleShowCongratulations} />
      )}
    </div>
  )
}
