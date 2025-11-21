"use client"

import { useEffect, useState } from "react"
import BuildingFloor from "./building-floor"

interface MuseumLobbyProps {
  onSelectRoom: (roomId: string) => void
  completedRooms: string[]
}

const ROOMS = [
  {
    id: "intro",
    title: "The Roaring Culture",
    floor: 1,
    description: "A Journey Begins",
  },
  {
    id: "women",
    title: "Women's Revolution",
    floor: 2,
    description: "Explore the Changing Role of Women",
  },
  {
    id: "leisure-tech",
    title: "Leisure & Technology",
    floor: 3,
    description: "Innovation and Entertainment",
  },
  {
    id: "modernism",
    title: "Modernism in Art & Literature",
    floor: 4,
    description: "Artistic Revolution of the Era",
  },
  {
    id: "culture-urban",
    title: "Culture vs Urban Life",
    floor: 5,
    description: "The Clash of Tradition and Modernity",
  },
  {
    id: "answers",
    title: "The Podcast Zone",
    floor: 6,
    description: "Congratulation Screen and EQ Podcast",
  },
]

export default function MuseumLobby({ onSelectRoom, completedRooms }: MuseumLobbyProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const isRoomUnlocked = (floor: number) => {
    if (floor === 1) return true
    return completedRooms.length >= floor - 1
  }

  return (
    <div className="min-h-screen overflow-hidden relative">
      <header className="header-blurred relative z-20 py-12 border-b-2 border-primary/40">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="inline-block px-6 py-2 border-2 border-primary/60 mb-4 relative group">
              <div className="absolute inset-0 bg-primary/10 -z-10" />
              <p className="text-sm font-bold text-primary tracking-widest">
                Ashwath R. Jiya N. Dashna P. Sahya P. 11/1 D
              </p>
            </div>
            <h1 className="text-7xl font-black mb-4 glow-text tracking-wider drop-shadow-lg">Smithsonian Museum</h1>
            <p className="text-xl text-primary font-bold tracking-widest">Escape Room: The 1920s Roaring Culture</p>
          </div>

          {/* Decorative divider */}

          {/* Progress indicators */}
          <div className="flex justify-center gap-12 mt-8">
            <div className="relative px-6 py-3 border-2 border-primary/50 hover:border-primary/80 transition-colors">
              <div className="text-lg text-primary font-black">{completedRooms.length}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Floors Conquered</div>
            </div>
            <div className="w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            <div className="relative px-6 py-3 border-2 border-accent/50 hover:border-accent/80 transition-colors">
              <div className="text-lg text-accent font-black">6</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Floors Total</div>
            </div>
          </div>
        </div>
      </header>

      <div className="fixed inset-0 top-0 mural-glow" style={{ top: "var(--header-height)" }}>
        <div className="fixed inset-0 mural-bg-main" />
        <div className="fixed inset-0 mural-overlay" />

        {/* Enhanced atmospheric effects over mural */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Accent glows adapted for mural background */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

          {/* Corner decorations - gold accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/50" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-accent/50" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Building View */}
        <main className="max-w-6xl mx-auto px-4 py-96 relative">
          <div className="relative">
            {/* Golden glow backdrop */}
            <div className="absolute inset-0 -inset-8 bg-gradient-to-b from-primary/20 via-primary/15 to-accent/10 rounded-lg blur-2xl" />

            {/* Increased background opacity from /70 to /85 for better readability, reduced width to max-w-xl */}
            <div className="absolute inset-0 -inset-8 bg-background/85 rounded-lg backdrop-blur-lg border-2 border-primary/40 shadow-2xl shadow-primary/30 w-full max-w-xl mx-auto" />

            <div className="relative z-10">
              {/* Building Instructions */}
              <div className="text-center mb-16 max-w-3xl mx-auto relative">
                <div className="absolute -inset-8 border-2 border-primary/30 pointer-events-none" />
                <div className="absolute -inset-8 bg-background/40 -z-10" />
                <p className="text-foreground/95 text-lg leading-relaxed font-light">
                  You stand in the lobby of the magnificent Smithsonian Museum. To escape, you must ascend through each
                  floor, answering trivia about the Roaring Twenties Culture. Complete each floor to unlock the next.
                  The higher you climb, the closer you get to freedom.
                </p>
              </div>

              {/* Vertical Building Stack */}
              <div className="space-y-4 max-w-3xl mx-auto relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-60" />

                {ROOMS.map((room, index) => {
                  const isUnlocked = isRoomUnlocked(room.floor)
                  const isCompleted = completedRooms.includes(room.id)

                  return (
                    <BuildingFloor
                      key={room.id}
                      room={room}
                      isUnlocked={isUnlocked}
                      isCompleted={isCompleted}
                      onEnter={() => onSelectRoom(room.id)}
                      index={index}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
