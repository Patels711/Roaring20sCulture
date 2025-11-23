"use client"

import { useState } from "react"
import PodcastZoneEssays from "../components/podcast-zone-essays"

export default function PodcastZone({ onComplete }: { onComplete: () => void }) {
  const [showEssays, setShowEssays] = useState(false)

  const handleComplete = () => {
    if (showEssays) {
      setShowEssays(false)
    } else {
      onComplete()
    }
  }

  return (
    <div className="min-h-screen p-6 relative bg-slate-900 text-amber-300 flex flex-col max-w-4xl mx-auto rounded-lg shadow-lg border border-amber-500">
      {!showEssays ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={() => setShowEssays(true)}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded font-semibold"
            >
              View Essays
            </button>
            <button
              type="button"
              onClick={handleComplete}
              className="px-4 py-2 bg-amber-700 hover:bg-amber-600 rounded font-semibold"
            >
              Complete and Return
            </button>
          </div>
          <div className="flex justify-center items-center flex-grow text-amber-400 text-lg">
            Select "View Essays" to read the essays with audio.
          </div>
        </>
      ) : (
        <PodcastZoneEssays onBack={() => setShowEssays(false)} />
      )}
    </div>
  )
}
