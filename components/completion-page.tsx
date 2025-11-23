export default function CompletionPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/final-escape.jpg"
          alt="1920s Art Deco mural"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Main congratulations text */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-amber-400 uppercase tracking-wider mb-6 drop-shadow-2xl animate-pulse">
            Congratulations!
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-amber-50 font-light leading-relaxed drop-shadow-lg">
            on escaping the
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-amber-300 font-bold uppercase tracking-wide mt-4 drop-shadow-lg">
            Smithsonian Roaring 20s Culture Museum
          </p>
        </div>

        {/* Decorative Art Deco elements */}
        <div className="flex items-center justify-center gap-6 mt-12 text-amber-500/80">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
          <span className="text-2xl">◆</span>
          <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
        </div>

        {/* Additional message */}
        <div className="mt-12">
          <p className="text-xl text-amber-100/90 font-light italic drop-shadow-md">
            You've successfully navigated through the culture, innovation, and spirit of the 1920s
          </p>
        </div>
        <button
          onClick={() => window.open("https://roaring20s-culture.vercel.app/", "_blank")}
          className="mt-8 px-12 py-4 bg-amber-600 hover:bg-amber-500 rounded font-semibold uppercase tracking-wide"
          type="button"
        >
          Visit Roaring 20s Culture Escape Room
        </button>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-amber-500/60" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-amber-500/60" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-amber-500/60" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-amber-500/60" />
    </div>
  )
}
