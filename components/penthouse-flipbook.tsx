"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FlipBookPage {
  title: string
  content: string
  type: "content"
}

const PENTHOUSE_PAGES: FlipBookPage[] = [
  {
    title: "The Roaring Twenties",
    content: "A Decade Defined by Economic Growth & Personal Freedom",
    type: "content",
  },
  {
    title: "Economic Transformation",
    content:
      "Many flocked to rapidly developing urbanized parts of America. Factory owners and industrial giants created more jobs through industry, manufacturing, and new technology like automobiles. Working hours decreased from 70 to 45 hours per week, while pay increased dramatically. This gave the average American more time and money for leisure activities.",
    type: "content",
  },
  {
    title: "The New Consumer Culture",
    content:
      "With extra time and money, people went to the cinema, bought radios, purchased appliances, and attended sports events. Motion pictures and radio allowed people to experience the thrill of emerging sports and aviation. These shared interests created a new unified pop culture across the nation.",
    type: "content",
  },
  {
    title: "Women's Revolutionary Role",
    content:
      "Women played a critical role in economic sectors using their newly gained rights and presence in society to break boundaries set upon them before. All these economic breakthroughs, political rights, and cultural emergence led to growth of personal freedom and equality for everyone.",
    type: "content",
  },
  {
    title: "Rural vs. Urban Divide",
    content:
      "Rural areas often prevented growth of personal freedom and equality due to their conservative economic and political decisions. The agricultural economy was in decline, and rural areas resisted mechanization and technologies that could have improved farming efficiency.",
    type: "content",
  },
  {
    title: "Urban Centers of Tolerance",
    content:
      "Cities were much more tolerant of different cultures and gave both women and minorities increased freedom and equality. This created a distinct city culture characterized by influences from many different cultures. The Harlem Renaissance emerged as a powerful example of new cultural expression.",
    type: "content",
  },
  {
    title: "Literary Disillusionment",
    content:
      "Writers who experienced World War I described the inequality and hopelessness of the period. Hemingway's 'A Farewell to Arms' highlighted conflict between patriotism, personal desire, and morality, influencing later discussions about war and national responsibility.",
    type: "content",
  },
  {
    title: "The Flapper Generation",
    content:
      "Women in the 1920s gained new forms of self-expression through the 'flapper' identity, which challenged traditional expectations. Many cut their hair short, drove cars, held jobs, and explored new freedoms. The 19th Amendment opened a new stage of the women's rights movement.",
    type: "content",
  },
]

export default function PenthouseFlipbook({
  onBack,
  onGoToPodcastZone,
}: {
  onBack: () => void
  onGoToPodcastZone: () => void
}) {
  const [currentPage, setCurrentPage] = useState(0)
  const [showCongrats, setShowCongrats] = useState(false)

  const page = PENTHOUSE_PAGES[currentPage]
  const progress = ((currentPage + 1) / PENTHOUSE_PAGES.length) * 100

  const handleNext = () => {
    if (currentPage < PENTHOUSE_PAGES.length - 1) {
      setCurrentPage(currentPage + 1)
    } else {
      setShowCongrats(true)
    }
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (showCongrats) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-12 bg-black/80 text-amber-300">
        <div className="max-w-3xl bg-gray-900 bg-opacity-90 rounded-lg p-8 shadow-lg text-center space-y-8">
          <h2 className="text-4xl font-bold">Congratulations!</h2>
          <p className="text-lg max-w-xl mx-auto">
            You have completed the Podcast Zone. Now, explore the essential questions that dive deeper into this era.
          </p>
          <button
            onClick={onGoToPodcastZone}
            className="mt-4 px-6 py-3 bg-amber-600 hover:bg-amber-500 rounded font-semibold"
          >
            Go to Podcast Zone Essays
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <p className="text-amber-300/70 text-xs uppercase tracking-widest font-light">
              Page {currentPage + 1} of {PENTHOUSE_PAGES.length}
            </p>
            <p className="text-amber-300/70 text-xs uppercase tracking-widest font-light">
              {Math.round(progress)}% Complete
            </p>
          </div>
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Flip Book Card */}
        <div className="perspective">
          <div className="bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 rounded-lg shadow-2xl border border-amber-500/20 overflow-hidden">
            {/* Page Header */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-b border-amber-500/10 px-8 py-6">
              <p className="text-amber-400/80 text-xs uppercase tracking-[0.3em] font-light mb-2">
                Level 6 - The Penthouse
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-amber-50 text-balance">{page.title}</h2>
            </div>

            {/* Page Content */}
            <div className="p-8 md:p-12 min-h-96 flex flex-col justify-center">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-slate-100 font-light text-balance">
                  {page.content}
                </p>
                <div className="flex gap-2 pt-4">
                  {PENTHOUSE_PAGES.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        idx === currentPage ? "bg-amber-400" : "bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="border-t border-amber-500/10 px-8 py-6 flex justify-between items-center bg-slate-900/50">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="flex items-center gap-2 px-6 py-2 rounded-lg border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-light"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              {currentPage < PENTHOUSE_PAGES.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 transition-colors font-light"
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  onClick={onBack}
                  className="px-8 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 transition-colors font-light uppercase tracking-widest text-sm"
                >
                  Complete Level
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
