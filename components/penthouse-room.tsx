
"use client"

import { useState } from "react"
import PenthouseFlipbook from "./penthouse-flipbook"

export default function PenthouseRoom({ onBack }: { onBack: () => void }) {
  const [showEssays, setShowEssays] = useState(false)

  const handleGoToPodcastZone = () => {
    setShowEssays(true)
  }

  if (showEssays) {
    const PodcastZone = require("../app/podcast-zone").default
    return <PodcastZone onComplete={onBack} />
  }

  return <PenthouseFlipbook onBack={onBack} onGoToPodcastZone={handleGoToPodcastZone} />
}
