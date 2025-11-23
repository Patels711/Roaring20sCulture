"use client"

import { useState } from "react"
import PenthouseFlipbook from "./penthouse-flipbook"

export default function PenthouseRoom({ onBack }: { onBack: () => void }) {
  const [showFlipbook, setShowFlipbook] = useState(true)
  const [showCongrats, setShowCongrats] = useState(false)
  const [showEssays, setShowEssays] = useState(false)

  const handleCompleteFlipbook = () => {
    setShowFlipbook(false)
    setShowCongrats(true)
  }

  const handleGoToPodcastZone = () => {
    setShowCongrats(false)
    setShowEssays(true)
  }

  if (showFlipbook) {
    // Changed onComplete to onGoToPodcastZone to fit PenthouseFlipbook props
    return <PenthouseFlipbook onBack={onBack} onGoToPodcastZone={handleCompleteFlipbook} />
  }

  if (showCongrats) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-12 bg-black/90 text-amber-300">
        <div className="max-w-3xl bg-gray-900 bg-opacity-95 rounded-lg p-8 shadow-lg text-center space-y-8 backdrop-blur-md">
          <h2 className="text-5xl font-extrabold tracking-wide">Congratulations!</h2>
          <p className="text-xl max-w-xl mx-auto leading-relaxed">
            You have completed the Podcast Zone. Now, explore the essential questions that dive deeper into this era.
          </p>
          <button
            onClick={handleGoToPodcastZone}
            className="mt-6 px-8 py-4 bg-amber-600 hover:bg-amber-500 rounded-lg font-semibold shadow-lg transition-transform active:scale-95"
          >
            Go to Podcast Zone Essays
          </button>
        </div>
      </div>
    )
  }

  if (showEssays) {
    const PodcastZoneEssays = require("./podcast-zone-essays").default
    return <PodcastZoneEssays onBack={onBack} />
  }

  return null
}
