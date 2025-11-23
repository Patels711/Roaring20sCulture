"use client"

import { useState, useEffect } from "react"
import MuseumLobby from "@/components/museum-lobby"
import RoomView from "@/components/room-view"
import CompletionPage from "@/components/completion-page"
import PodcastZone from "@/app/podcast-zone"

export default function Home() {
  const [currentRoom, setCurrentRoom] = useState<string | null>(null)
  const [completedRooms, setCompletedRooms] = useState<string[]>([])
  const [hasEscaped, setHasEscaped] = useState(false)
  const [isPodcastZoneVisible, setIsPodcastZoneVisible] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentRoom, hasEscaped])

  const handleRoomComplete = (roomId: string) => {
    const newCompletedRooms = [...completedRooms, roomId]
    setCompletedRooms(newCompletedRooms)

    if (roomId === "answers") {
      setHasEscaped(true)
    }

    setCurrentRoom(null)
  }

  const handleUnlockAll = () => {
    setCompletedRooms(["intro", "women", "leisure-tech", "modernism", "culture-urban"])
  }

  const handleRestartWithAllLevels = () => {
    setCompletedRooms(["intro", "women", "leisure-tech", "modernism", "culture-urban", "answers"])
    setHasEscaped(false)
    setCurrentRoom(null)
  }

  const enterPodcastZone = () => {
    setIsPodcastZoneVisible(true)
  }

  const exitPodcastZone = () => {
    setIsPodcastZoneVisible(false)
  }

  if (hasEscaped) {
    return <CompletionPage onRestart={handleRestartWithAllLevels} />
  }

  if (isPodcastZoneVisible) {
    return <PodcastZone onComplete={handleRoomComplete} onCompleteAll={handleRestartWithAllLevels} />
  }

  if (currentRoom) {
    return (
      <RoomView
        roomId={currentRoom}
        onComplete={handleRoomComplete}
        onExit={() => setCurrentRoom(null)}
        completedRooms={completedRooms}
      />
    )
  }

  return (
    <>
      <MuseumLobby onSelectRoom={setCurrentRoom} completedRooms={completedRooms} onEnterPodcastZone={enterPodcastZone} />
      {/* Removed Enter Podcast Zone button as per user request */}
      <button
        onClick={handleUnlockAll}
        className="fixed bottom-4 right-4 px-2 py-1 bg-primary/50 text-xs rounded opacity-50 hover:opacity-100 transition-opacity z-50"
      >
        Unlock All Levels
      </button>
    </>
  )
}
