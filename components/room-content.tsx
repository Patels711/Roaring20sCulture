"use client"

import PenthouseRoom from "./penthouse-room"

interface RoomContentProps {
  roomId: string
  onStartQuiz: () => void
  onExit: () => void
}

const ROOM_CONTENTS = {
  intro: {
    title: "The Roaring Culture",
    subtitle: "A Journey Begins",
    sections: [],
  },
  women: {
    title: "Women of the 1920s",
    subtitle: "A Decade of Transformation",
  },
  "leisure-tech": {
    title: "Leisure & Technology",
    subtitle: "Innovation and Entertainment",
  },
  modernism: {
    title: "Modernism in Art & Literature",
    subtitle: "Artistic Revolution of the Era",
  },
  rural: {
    title: "Culture vs Urban Life",
    subtitle: "The Rural-Urban Divide",
  },
  penthouse: {
    title: "The Podcast Zone",
    subtitle: "Congratulation Screen and EQ Podcast",
  },
  "culture-urban": {
    title: "Culture vs Urban Life",
    subtitle: "The Rural-Urban Divide",
  },
}

export default function RoomContent({ roomId, onStartQuiz, onExit }: RoomContentProps) {
  const content = ROOM_CONTENTS[roomId as keyof typeof ROOM_CONTENTS]

  if (roomId === "answers") {
    return <PenthouseRoom onBack={onExit} />
  }

  if (roomId === "culture-urban") {
    return (
      <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center py-20">
        <div className="relative z-10 text-center space-y-12 px-4 max-w-4xl">
          <div className="space-y-6">
            <p className="text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light">Level 5</p>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]">
              {content.title}
            </h1>
            <div className="flex gap-3 justify-center items-center py-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
              <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
            </div>
          </div>

          <div className="pt-8 pb-12">
            <img
              src="/images/rural-women-culture.png"
              alt="Culture vs Urban Life"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
            />
          </div>

          <div className="pt-12 space-y-16">
            <div>
              <p className="text-amber-300/70 uppercase tracking-[0.3em] text-xs font-light mb-6">Begin The Quest</p>
              <a
                href="https://narayananj.wixsite.com/rural"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-slate-900 border-2 border-amber-600/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Visit Culture vs Urban Life →</span>
              </a>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">
                Interactive deep dive into the era
              </p>
            </div>

            <div>
              <p className="text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6">Ready To Ascend</p>
              <button
                onClick={onStartQuiz}
                className="inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Test Your Knowledge</span>
              </button>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">4 questions • 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="text-center py-12 bg-slate-950">
        <p className="text-slate-300 mb-4">
          Content for this room coming soon. Please provide a link to the V0 website for this room's content.
        </p>
        <button
          onClick={onStartQuiz}
          className="mt-8 px-8 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors font-semibold uppercase tracking-wide"
        >
          Start Quiz
        </button>
      </div>
    )
  }

  if (roomId === "rural") {
    return (
      <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center py-20">
        <div className="relative z-10 text-center space-y-12 px-4 max-w-4xl">
          <div className="space-y-6">
            <p className="text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light">Level 5</p>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]">
              {content.title}
            </h1>
            <div className="flex gap-3 justify-center items-center py-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
              <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
            </div>
          </div>

          <div className="pt-8 pb-12">
            <img
              src="/images/rural-women-culture.png"
              alt="Culture vs Urban Life"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
            />
          </div>

          <div className="pt-12 space-y-16">
            <div>
              <p className="text-amber-300/70 uppercase tracking-[0.3em] text-xs font-light mb-6">Begin The Quest</p>
              <a
                href="https://narayananj.wixsite.com/rural"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-slate-900 border-2 border-amber-600/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Visit Culture vs Urban Life →</span>
              </a>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">
                Interactive deep dive into the era
              </p>
            </div>

            <div>
              <p className="text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6">Ready To Ascend</p>
              <button
                onClick={onStartQuiz}
                className="inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Test Your Knowledge</span>
              </button>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">4 questions • 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (roomId === "modernism") {
    return (
      <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center py-20">
        <div className="relative z-10 text-center space-y-12 px-4 max-w-4xl">
          <div className="space-y-6">
            <p className="text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light">Level 4</p>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]">
              {content.title}
            </h1>
            <div className="flex gap-3 justify-center items-center py-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
              <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
            </div>
          </div>

          <div className="pt-8 pb-12">
            <img
              src="/images/image.png"
              alt="Art Deco Modernism in Art and Literature"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
            />
          </div>

          <div className="pt-12 space-y-16">
            <div>
              <p className="text-amber-300/70 uppercase tracking-[0.3em] text-xs font-light mb-6">Begin The Quest</p>
              <a
                href="https://patildashna.wixsite.com/my-site-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-slate-900 border-2 border-amber-600/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Visit Modernism in Art & Literature →</span>
              </a>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">
                Interactive deep dive into the era
              </p>
            </div>

            <div>
              <p className="text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6">Ready To Ascend</p>
              <button
                onClick={onStartQuiz}
                className="inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Test Your Knowledge</span>
              </button>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">4 questions • 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (roomId === "leisure-tech") {
    return (
      <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center py-20">
        <div className="relative z-10 text-center space-y-12 px-4 max-w-4xl">
          <div className="space-y-6">
            <p className="text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light">Level 3</p>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]">
              {content.title}
            </h1>
            <div className="flex gap-3 justify-center items-center py-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
              <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
            </div>
          </div>

          <div className="pt-8 pb-12">
            <img
              src="/images/leisure-art-deco.jpg"
              alt="Art Deco Leisure and Technology"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
            />
          </div>

          <div className="pt-12 space-y-16">
            <div>
              <p className="text-amber-300/70 uppercase tracking-[0.3em] text-xs font-light mb-6">Begin The Quest</p>
              <a
                href="https://roaring20leisuretime.vercel.app/exhibit-sahya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-slate-900 border-2 border-amber-600/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Visit Leisure & Technology →</span>
              </a>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">
                Interactive deep dive into the era
              </p>
            </div>

            <div>
              <p className="text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6">Ready To Ascend</p>
              <button
                onClick={onStartQuiz}
                className="inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Test Your Knowledge</span>
              </button>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">4 questions • 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (roomId === "women") {
    return (
      <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center py-20">
        <div className="relative z-10 text-center space-y-12 px-4 max-w-4xl">
          <div className="space-y-6">
            <p className="text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light">Level 2</p>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]">
              {content.title}
            </h1>
            <div className="flex gap-3 justify-center items-center py-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
              <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
            </div>
          </div>

          <div className="pt-8 pb-12">
            <img
              src="/images/women-art-deco.png"
              alt="Art Deco Women of the 1920s"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
            />
          </div>

          <div className="pt-12 space-y-16">
            <div>
              <p className="text-amber-300/70 uppercase tracking-[0.3em] text-xs font-light mb-6">Begin The Quest</p>
              <a
                href="https://womenofthe1920s.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-slate-900 border-2 border-amber-600/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Visit Women of the 1920s →</span>
              </a>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">
                Interactive deep dive into the era
              </p>
            </div>

            <div>
              <p className="text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6">Ready To Ascend</p>
              <button
                onClick={onStartQuiz}
                className="inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Test Your Knowledge</span>
              </button>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">4 questions • 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-950 text-slate-100">
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('https://blob.v0.app/uYxdG.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(217,119,6,0.3)]" />

        <div className="relative z-10 text-center space-y-6 px-4 max-w-3xl">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400/30">
              <polygon points="50,10 60,40 50,50 40,40" fill="currentColor" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <p className="text-amber-300/70 text-xs uppercase tracking-[0.4em] font-light">Explore the Exhibition</p>
          <h1 className="text-6xl md:text-7xl font-light tracking-wider uppercase text-amber-50/95 drop-shadow-[0_0_30px_rgba(217,119,6,0.6)]">
            {content.title}
          </h1>
          <div className="flex gap-3 justify-center items-center py-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
            <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(217,119,6,0.8)]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400 shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
          </div>
          <p className="text-lg md:text-xl font-light tracking-wide text-amber-50/80 uppercase pt-2">
            {content.subtitle}
          </p>

          <div className="mt-12 pt-8">
            <img
              src="/images/art-deco-hero.jpeg"
              alt="Art Deco Roaring Twenties Illustration"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-[0_0_60px_rgba(217,119,6,0.4)] border border-amber-500/30"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-950 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-300/80 text-sm uppercase tracking-[0.3em] font-light">A Preview</p>
          </div>

          <div className="space-y-12">
            <div className="relative">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center rounded shadow-lg border-2 border-amber-500/50">
                  <span className="text-5xl md:text-6xl font-serif font-bold text-slate-950">T</span>
                </div>

                <div className="flex-1 pt-2">
                  <p className="text-base md:text-lg text-slate-100 leading-relaxed font-light">
                    he year 1920 was a watershed moment for American women. With the ratification of the 19th Amendment,
                    millions stepped into polling booths for the first time to claim their voices in shaping the
                    nation's future. What followed wasn't simply political; it was a cultural earthquake.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l-4 border-amber-500/50">
              <p className="text-base md:text-lg text-slate-100 leading-relaxed font-light">
                Yet this decade of liberation and innovation was marked by profound contradictions. While jazz clubs and
                speakeasies flourished, Prohibition created an underground economy controlled by organized crime. As
                consumer goods became more accessible through mass production, factory workers endured monotonous labor
                conditions. The stock market soared to unprecedented heights, setting the stage for an economic collapse
                that would end the era as dramatically as it began.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div>
              <p className="text-amber-300/60 uppercase tracking-[0.3em] text-xs font-light mb-6">
                Advance to Deeper Levels
              </p>
              <button
                onClick={onStartQuiz}
                className="inline-block px-14 py-4 bg-slate-900 border-2 border-amber-500/70 text-amber-50 hover:border-amber-400/90 hover:bg-slate-800 transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Test Your Knowledge</span>
              </button>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light mt-3">4 questions • 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
