"use client"

import { useState } from "react"
import PodcastZoneEssays from "../components/podcast-zone-essays"
import PenthouseFlipbook from "../components/penthouse-flipbook"

export default function PodcastZone({ onComplete, onCompleteAll }: { onComplete: () => void, onCompleteAll: () => void }) {
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
            {/* Removed Complete Level button as per user request */}
            <button
              onClick={() => setView("essays")}
              className="px-12 py-4 bg-amber-600 hover:bg-amber-500 rounded font-semibold text-lg w-full max-w-lg mx-auto"
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
