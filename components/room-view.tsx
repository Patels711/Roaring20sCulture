"use client"

import { useState, useEffect } from "react"
import QuizPanel from "./quiz-panel"
import RoomContent from "./room-content"
import PenthouseRoom from "./penthouse-room"

interface RoomViewProps {
  roomId: string
  onComplete: (roomId: string) => void
  onExit: () => void
  completedRooms: string[]
}

export default function RoomView({ roomId, onComplete, onExit, completedRooms }: RoomViewProps) {
  // Bypass quiz for penthouse room (podcast zone)
  if (roomId === "answers") {
    return <PenthouseRoom onBack={() => onComplete(roomId)} />
  }

  const [quizStarted, setQuizStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(120) // 2 minutes in seconds

  useEffect(() => {
    if (!quizStarted) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizStarted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (quizStarted) {
    return (
      <div className="min-h-screen relative">
        <div className="fixed inset-0 bg-black/10" />

        <div className="sticky top-0 z-50 border-b-2 border-primary/40 bg-card/95">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => {
                setQuizStarted(false)
                onExit()
              }}
              className="text-muted-foreground hover:text-primary transition-colors font-semibold uppercase tracking-wide text-sm"
            >
              Exit Room
            </button>
            <div className={`text-2xl font-bold ${timeLeft < 60 ? "text-red-500 animate-pulse" : "text-primary"}`}>
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <QuizPanel
            roomId={roomId}
            onComplete={() => {
              onComplete(roomId)
              setQuizStarted(false)
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <header className="relative z-10 border-b-2 border-primary/40 bg-card/95 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <button
            onClick={onExit}
            className="text-muted-foreground hover:text-primary transition-colors font-semibold uppercase tracking-wide text-sm"
          >
            Back to Lobby
          </button>
          <h1 className="text-2xl font-bold text-accent uppercase tracking-widest">Room Information</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10 bg-black">
        <RoomContent roomId={roomId} onStartQuiz={() => setQuizStarted(true)} onExit={onExit} />
      </main>
    </div>
  )
}
