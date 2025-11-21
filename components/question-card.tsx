"use client"

interface QuestionCardProps {
  question: {
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
  userAnswer?: number
  showResult: boolean
  onAnswer: (optionIndex: number) => void
}

export default function QuestionCard({ question, userAnswer, showResult, onAnswer }: QuestionCardProps) {
  return (
    <div className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/40 rounded-lg p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />

      <div className="relative z-10">
        {/* Question */}
        <h3 className="text-3xl font-black mb-10 text-accent text-balance tracking-tight leading-tight">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-4 mb-10">
          {question.options.map((option, index) => {
            const isSelected = userAnswer === index
            const isCorrect = index === question.correctAnswer
            const isWrong = isSelected && !isCorrect

            let className =
              "w-full p-5 text-left rounded-lg border-2 transition-all duration-300 font-semibold tracking-wide"

            if (showResult && isCorrect) {
              className += " border-primary/80 bg-primary/15 text-primary"
            } else if (showResult && isWrong) {
              className += " border-red-400/80 bg-red-500/10 text-red-300"
            } else if (isSelected && !showResult) {
              className += " border-secondary/80 bg-secondary/20 text-foreground"
            } else if (showResult && isSelected) {
              className += " border-muted-foreground/20 bg-muted/5 text-muted-foreground"
            } else {
              className +=
                " border-border/50 bg-transparent text-foreground hover:border-primary/60 hover:bg-primary/10 cursor-pointer"
            }

            return (
              <button
                key={index}
                onClick={() => !showResult && onAnswer(index)}
                disabled={showResult}
                className={className}
              >
                <div className="flex items-center">
                  <span className="mr-4 text-xl font-black text-primary">{String.fromCharCode(65 + index)}.</span>
                  <span className="text-lg">{option}</span>
                  {showResult && isCorrect && <span className="ml-auto text-2xl">✓</span>}
                  {showResult && isWrong && <span className="ml-auto text-2xl">✗</span>}
                </div>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="bg-secondary/15 border-2 border-secondary/50 rounded-lg p-6 relative">
            <div className="absolute top-0 left-0 w-2 h-8 bg-secondary rounded-r" />
            <p className="text-foreground/90 leading-relaxed">
              <span className="font-black text-secondary mb-3 block uppercase tracking-wider">Why?</span>
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
