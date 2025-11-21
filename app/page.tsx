"use client"

import { useState, useEffect } from "react"
import MuseumLobby from "@/components/museum-lobby"
import RoomView from "@/components/room-view"
import CompletionPage from "@/components/completion-page"

export default function Home() {
  const [currentRoom, setCurrentRoom] = useState<string | null>(null)
  const [completedRooms, setCompletedRooms] = useState<string[]>([])
  const [hasEscaped, setHasEscaped] = useState(false)

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

  if (hasEscaped) {
    return <CompletionPage />
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
      <MuseumLobby onSelectRoom={setCurrentRoom} completedRooms={completedRooms} />
      <button
        onClick={handleUnlockAll}
        className="fixed bottom-4 right-4 px-2 py-1 bg-primary/50 text-xs rounded opacity-50 hover:opacity-100 transition-opacity z-50"
      >
        Unlock All Levels
      </button>
    </>
  )
}
