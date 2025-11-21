"use client"

import PenthouseFlipbook from "./penthouse-flipbook"

export default function PenthouseRoom({ onBack }: { onBack: () => void }) {
  return <PenthouseFlipbook onBack={onBack} />
}
