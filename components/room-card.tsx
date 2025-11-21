"use client"

import { motion } from "framer-motion"

interface RoomCardProps {
  room: {
    id: string
    title: string
    subtitle: string
    description: string
    icon: string
  }
  isUnlocked: boolean
  isCompleted: boolean
  onEnter: () => void
}

export default function RoomCard({ room, isUnlocked, isCompleted, onEnter }: RoomCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      disabled={!isUnlocked}
      onClick={onEnter}
      className={`relative h-64 rounded-lg overflow-hidden group transition-all duration-300 ${
        isUnlocked ? "cursor-pointer hover:scale-105" : "cursor-not-allowed"
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          isUnlocked
            ? "bg-gradient-to-br from-secondary to-card border border-primary/40"
            : "bg-gradient-to-br from-muted to-muted border border-muted-foreground/20"
        } ${isCompleted ? "opacity-100" : "opacity-80"}`}
      />

      {/* Shimmer effect for unlocked rooms */}
      {isUnlocked && (
        <div className="absolute inset-0 shimmer-border opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Icon */}
        <div className={`text-4xl ${isUnlocked ? "group-hover:scale-110" : "opacity-50"} transition-transform`}>
          {room.icon}
        </div>

        {/* Title Section */}
        <div className="text-left">
          <h3 className="text-xl font-bold text-foreground mb-1">{room.title}</h3>
          <p className={`text-sm mb-3 ${isUnlocked ? "text-primary" : "text-muted-foreground"}`}>
            {isCompleted ? "✓ Completed" : room.subtitle}
          </p>
          <p className="text-xs text-muted-foreground line-clamp-2">{room.description}</p>
        </div>

        {/* Lock Indicator */}
        {!isUnlocked && (
          <div className="flex items-center justify-center w-8 h-8 bg-muted rounded-full lock-pulse absolute top-4 right-4">
            <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L9 4H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-4l-3-3z" />
            </svg>
          </div>
        )}

        {/* Unlock Button */}
        {isUnlocked && !isCompleted && (
          <div className="text-xs font-semibold text-primary group-hover:text-accent transition-colors">
            ENTER ROOM →
          </div>
        )}
      </div>
    </motion.button>
  )
}
