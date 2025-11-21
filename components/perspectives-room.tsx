"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const PERSPECTIVES = [
  {
    id: 1,
    title: "Literary Disillusionment",
    author: "Ernest Hemingway & Lost Generation Writers",
    icon: "📖",
    color: "from-amber-900 to-amber-700",
    content:
      "Writers who experienced WWI described the inequality and hopelessness of the period. In A Farewell to Arms, Hemingway reveals the conflict between patriotism, personal desire, and morality. These literary voices challenged the nation to reconsider war and national responsibility.",
    quote: "The world breaks everyone, and afterward, many are strong at the broken places.",
  },
  {
    id: 2,
    title: "Cultural Renaissance",
    author: "Harlem Renaissance Artists & Musicians",
    icon: "🎨",
    color: "from-purple-900 to-purple-700",
    content:
      "Art movements such as the Harlem Renaissance redefined cultural identity and challenged racist stereotypes. Through music, visual art, and performance, Black artists showed the importance of viewing public actions from the perspective of those most affected, reshaping American culture forever.",
    quote: "Negro art is going to be a real art form.",
  },
  {
    id: 3,
    title: "Women's Liberation",
    author: "The Flapper Generation",
    icon: "👯",
    color: "from-rose-900 to-rose-700",
    content:
      "Women in the 1920s gained new forms of self-expression through the 'flapper' identity. They cut their hair short, drove cars, held jobs, and explored new freedoms. The ratification of the 19th Amendment opened a new stage in women's rights, challenging traditional expectations and expanding independence.",
    quote: "A woman has to work twice as hard to be thought half as good as a man.",
  },
  {
    id: 4,
    title: "Urban Tolerance",
    author: "City Immigrants & Minorities",
    icon: "🏙️",
    color: "from-blue-900 to-blue-700",
    content:
      "Cities were much more tolerant of different cultures, giving women and minorities increased freedom and equality. The Great Migration brought African Americans, rural Americans, and immigrants from around the world. This created a distinct urban culture characterized by diverse influences and new forms of artistic expression.",
    quote: "Out of many, we are one—a new American culture.",
  },
]

export default function PerspectivesRoom({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])

  const current = PERSPECTIVES[currentIndex]

  const togglePerspective = (id: number) => {
    setCompleted((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PERSPECTIVES.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PERSPECTIVES.length) % PERSPECTIVES.length)
  }

  const allExplored = completed.length === PERSPECTIVES.length

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <div className="border-b border-border pt-8 pb-6 px-6 text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Multiple Perspectives</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Understanding the 1920s through the voices of those who experienced it
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Current Perspective Card */}
        <div className={`w-full max-w-2xl bg-gradient-to-br ${current.color} rounded-lg p-1 mb-8`}>
          <Card className="bg-card border-0">
            <CardHeader className="text-center pb-4">
              <div className="text-5xl mb-4">{current.icon}</div>
              <CardTitle className="text-3xl text-primary mb-2">{current.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{current.author}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">{current.content}</p>
              <div className="bg-muted/50 border-l-4 border-primary p-4 rounded">
                <p className="italic text-foreground">"{current.quote}"</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {PERSPECTIVES.map((p) => (
              <button
                key={p.id}
                onClick={() => setCurrentIndex(p.id - 1)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === p.id - 1 ? "bg-primary w-8" : "bg-border"
                } ${completed.includes(p.id) ? "ring-2 ring-primary" : ""}`}
                title={p.title}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Explore Button */}
        <Button
          onClick={() => togglePerspective(current.id)}
          className={`mb-8 px-8 py-2 ${
            completed.includes(current.id) ? "bg-primary/80 hover:bg-primary" : "bg-primary hover:bg-primary/90"
          }`}
        >
          {completed.includes(current.id) ? "✓ Perspective Explored" : "Explore This Perspective"}
        </Button>
      </div>

      {/* Bottom Progress */}
      <div className="border-t border-border p-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground mb-3">
            Perspectives explored: {completed.length}/{PERSPECTIVES.length}
          </p>
          <div className="flex gap-2 mb-6">
            {PERSPECTIVES.map((p) => (
              <div
                key={p.id}
                className={`h-2 flex-1 rounded transition-colors ${
                  completed.includes(p.id) ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          {allExplored && (
            <Button onClick={onComplete} className="w-full bg-primary hover:bg-primary/90 py-2 text-lg">
              Ascend to the Podcast Zone
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
