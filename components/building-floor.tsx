"use client"

import { motion } from "framer-motion"

interface BuildingFloorProps {
  room: {
    id: string
    title: string
    floor: number
    description: string
  }
  isUnlocked: boolean
  isCompleted: boolean
  onEnter: () => void
  index: number
}

export default function BuildingFloor({ room, isUnlocked, isCompleted, onEnter, index }: BuildingFloorProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      disabled={!isUnlocked}
      onClick={onEnter}
      className={`relative w-full group building-ascend transition-all duration-300 ${
        isUnlocked ? "cursor-pointer" : "cursor-not-allowed"
      }`}
    >
      {/* Floor Container */}
      <div
        className={`relative overflow-hidden py-8 px-10 transition-all duration-300 border-l-8 border-r-8 ${
          isCompleted
            ? "bg-gradient-to-r from-primary/25 via-primary/10 to-accent/25 border-primary/70 shadow-lg shadow-primary/20"
            : isUnlocked
              ? "bg-gradient-to-r from-secondary/40 via-background to-primary/15 border-secondary/70 hover:from-secondary/50 hover:via-secondary/10 hover:to-primary/25 shadow-lg shadow-secondary/15 hover:shadow-secondary/25"
              : "bg-gradient-to-r from-muted/30 to-muted/20 border-muted-foreground/40 opacity-60"
        }`}
      >
        {/* Art Deco geometric pattern overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 600 120" preserveAspectRatio="none" opacity="0.3">
            <defs>
              <pattern id={`deco-${room.id}`} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="1" />
                <polygon points="40,0 50,25 40,40 30,25" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
              </pattern>
            </defs>
            <rect width="600" height="120" fill={`url(#deco-${room.id})`} />
          </svg>
        </div>

        <div className="absolute top-1 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/40 group-hover:border-primary/70 transition-colors" />
        <div className="absolute bottom-1 right-2 w-4 h-4 border-b-2 border-r-2 border-accent/40 group-hover:border-accent/70 transition-colors" />

        {/* Content */}
        <div className="relative flex items-center justify-between gap-8">
          {/* Left: Floor Number & Status */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <div className="text-center">
              <div className={`text-6xl font-black tracking-wider ${isCompleted ? "text-primary" : "text-accent"}`}>
                {room.floor}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2 font-bold">Floor</div>
            </div>

            {/* Status Icon */}
            <div className="flex-shrink-0 relative">
              {isCompleted ? (
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center border-2 border-primary/70 shadow-lg shadow-primary/30">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : isUnlocked ? (
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/40 to-secondary/20 flex items-center justify-center border-2 border-secondary/70 art-deco-pulse shadow-lg shadow-secondary/30">
                  <svg className="w-7 h-7 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-2c1.66 0 3 1.34 3 3v2H9V6c0-1.66 1.34-3 3-3z" />
                  </svg>
                </div>
              ) : (
                <div className="w-14 h-14 rounded-full bg-muted/40 flex items-center justify-center border-2 border-muted-foreground/40">
                  <svg className="w-7 h-7 text-muted-foreground/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Center: Room Info */}
          <div className="flex-1 text-center">
            <h3
              className={`text-2xl font-black mb-2 uppercase tracking-wider ${
                isUnlocked ? "text-foreground drop-shadow-md" : "text-muted-foreground/60"
              }`}
            >
              {room.title}
            </h3>
            <p
              className={`text-sm font-medium ${isUnlocked ? "text-muted-foreground/80" : "text-muted-foreground/40"}`}
            >
              {room.description}
            </p>
          </div>

          {/* Right: CTA */}
          {isUnlocked && !isCompleted && (
            <div className="flex-shrink-0 text-right">
              <div className="text-sm font-bold text-primary uppercase tracking-widest group-hover:text-accent transition-colors">
                ENTER
              </div>
              <div className="text-3xl group-hover:translate-x-2 transition-transform font-bold text-secondary">→</div>
            </div>
          )}
          {isCompleted && (
            <div className="flex-shrink-0 text-right">
              <div className="text-xs font-bold text-primary uppercase tracking-widest">Ascended</div>
              <div className="text-2xl text-primary font-bold">✓</div>
            </div>
          )}
        </div>

        {/* Decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
    </motion.button>
  )
}
