"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FlipBookPage {
  title: string
  content: string
  type: "content" | "question"
  options?: string[]
  correctAnswer?: number
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
  {
    title: "Question 1 of 4",
    content: "How did economic decisions in the 1920s promote personal freedom?",
    type: "question",
    options: [
      "Factory jobs decreased while working hours increased",
      "Factory jobs increased while working hours decreased from 70 to 45 hours per week",
      "Agricultural economy improved in rural areas",
      "Prohibition created more economic opportunities",
    ],
    correctAnswer: 1,
  },
  {
    title: "Question 2 of 4",
    content: "What role did technology and entertainment play in creating pop culture?",
    type: "question",
    options: [
      "They isolated people from each other",
      "They allowed shared experiences through motion pictures and radio",
      "They prevented women from participating",
      "They only benefited rural areas",
    ],
    correctAnswer: 1,
  },
  {
    title: "Question 3 of 4",
    content: "How did cities differ from rural areas in the 1920s?",
    type: "question",
    options: [
      "Rural areas were more tolerant of different cultures",
      "Cities rejected new technologies",
      "Cities were more tolerant of different cultures and minorities",
      "Rural areas had better economic opportunities",
    ],
    correctAnswer: 2,
  },
  {
    title: "Question 4 of 4",
    content: "What symbol of female empowerment emerged in the 1920s?",
    type: "question",
    options: [
      "The suffragette movement only",
      "Rural farming cooperatives",
      "The 'flapper' identity with shorter hair, cars, and jobs",
      "Factory worker unions",
    ],
    correctAnswer: 2,
  },
]

export default function PenthouseFlipbook({
  onBack,
}: {
  onBack: () => void
}) {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const page = PENTHOUSE_PAGES[currentPage]
  const progress = ((currentPage + 1) / PENTHOUSE_PAGES.length) * 100

  const handleNext = () => {
    if (currentPage < PENTHOUSE_PAGES.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentPage] = optionIndex
    setSelectedAnswers(newAnswers)
  }

  const handleFinish = () => {
    setShowResults(true)
  }

  const correctAnswers = selectedAnswers.filter((answer, index) => {
    const questionPage = PENTHOUSE_PAGES[index + 8] // Questions start at index 8
    return questionPage && questionPage.type === "question" && answer === questionPage.correctAnswer
  }).length

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
              {page.type === "content" ? (
                <div className="space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed text-slate-100 font-light text-balance">
                    {page.content}
                  </p>
                  <div className="flex gap-2 pt-4">
                    {PENTHOUSE_PAGES.slice(0, 8).map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          idx === currentPage ? "bg-amber-400" : "bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-lg md:text-xl font-light text-slate-100 mb-8 text-balance">{page.content}</p>

                  <div className="space-y-3">
                    {page.options?.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 font-light ${
                          selectedAnswers[currentPage] === idx
                            ? "border-amber-400 bg-amber-400/10 text-amber-50"
                            : "border-slate-600 bg-slate-800/50 text-slate-200 hover:border-amber-400/50 hover:bg-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                              selectedAnswers[currentPage] === idx
                                ? "border-amber-400 bg-amber-400"
                                : "border-slate-500"
                            }`}
                          >
                            {selectedAnswers[currentPage] === idx && (
                              <span className="text-slate-950 text-sm font-bold">✓</span>
                            )}
                          </div>
                          <span>{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
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

              {currentPage === PENTHOUSE_PAGES.length - 1 && !showResults ? (
                <button
                  onClick={handleFinish}
                  className="px-8 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 transition-colors font-light uppercase tracking-widest text-sm"
                >
                  Submit Answers
                </button>
              ) : currentPage < PENTHOUSE_PAGES.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 transition-colors font-light"
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {/* Results Modal */}
        {showResults && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 max-w-md text-center border border-amber-500/20">
              <p className="text-amber-400 text-sm uppercase tracking-widest font-light mb-4">Quiz Complete</p>
              <h3 className="text-4xl font-light text-amber-50 mb-2">
                {correctAnswers}/{PENTHOUSE_PAGES.length - 8}
              </h3>
              <p className="text-slate-300 text-sm mb-8">
                {correctAnswers === 4
                  ? "Perfect! You've mastered the Roaring Twenties!"
                  : correctAnswers >= 3
                    ? "Excellent understanding of the era!"
                    : "Good effort! Review the content and try again."}
              </p>
              <button
                onClick={onBack}
                className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 rounded-lg transition-colors font-light uppercase tracking-widest"
              >
                Complete Level
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
