"use client"

import { useState } from "react"
import QuestionCard from "./question-card"

interface QuizPanelProps {
  roomId: string
  onComplete: () => void
}

const QUIZZES = {
  intro: [
    {
      id: 1,
      question: "What did the 19th Amendment, ratified in 1920, grant to American women?",
      options: [
        "The right to own property",
        "The right to vote",
        "The right to work in any profession",
        "The right to attend college",
      ],
      correctAnswer: 1,
      explanation:
        "The 19th Amendment, ratified in 1920, granted women the right to vote, marking a watershed moment in American history and women's suffrage.",
    },
    {
      id: 2,
      question: "What was the 'New Woman' of the 1920s known for?",
      options: [
        "Following traditional Victorian values",
        "Staying at home and avoiding public life",
        "Cutting hair short, driving cars, and challenging social norms",
        "Avoiding education and professional work",
      ],
      correctAnswer: 2,
      explanation:
        "The 'New Woman' of the 1920s was characterized by her rejection of traditional constraints—she cut her hair short, raised hemlines, drove cars, smoked in public, and pursued education and careers.",
    },
    {
      id: 3,
      question: "What major contradiction existed during the Roaring Twenties?",
      options: [
        "Women gained the vote but had no interest in politics",
        "Prohibition created an underground economy while jazz clubs flourished",
        "The stock market crashed at the beginning of the decade",
        "Technology declined while culture advanced",
      ],
      correctAnswer: 1,
      explanation:
        "The 1920s was marked by profound contradictions: while Prohibition aimed to eliminate alcohol, it actually created a thriving underground economy controlled by organized crime, even as jazz clubs and speakeasies flourished.",
    },
    {
      id: 4,
      question: "What happened at the end of the Roaring Twenties that dramatically ended the era?",
      options: [
        "World War I began",
        "The stock market crashed, leading to economic collapse",
        "Prohibition was enacted",
        "The 19th Amendment was repealed",
      ],
      correctAnswer: 1,
      explanation:
        "The Roaring Twenties ended dramatically with the stock market crash of 1929, which led to the Great Depression and brought an abrupt end to the era's prosperity and cultural exuberance.",
    },
  ],
  women: [
    {
      id: 1,
      question:
        "Which statement best explains how the expanding use of the typewriter in the 1920s changed the roles available to women in the workforce?",
      options: [
        "It limited women to factory jobs because companies no longer needed clerical workers.",
        "It opened new clerical and secretarial positions, giving women paid work and modest economic independence.",
        "It caused most women to leave the workforce because typing was considered 'too technical.'",
        "It led to equal pay between male and female office workers throughout the decade.",
      ],
      correctAnswer: 1,
      explanation:
        "The typewriter revolutionized office work and created thousands of clerical and secretarial positions that became accessible to women, providing them with paid employment and a degree of economic independence previously unavailable.",
    },
    {
      id: 2,
      question:
        "How did the rise of the 'flapper' challenge older ideas about how women were expected to behave in American society?",
      options: [
        "Flappers encouraged all women to stop working and stay at home.",
        "They rejected the new fashions of the era and promoted traditional Victorian dress.",
        "They represented a bold, visible break from traditional norms through clothing, behavior, and attitudes toward independence.",
        "They primarily focused on political activism rather than social or cultural expression.",
      ],
      correctAnswer: 2,
      explanation:
        "Flappers challenged traditional gender norms through their distinctive fashion (short skirts, bobbed hair), behavior (smoking, drinking in public), and embrace of personal freedom and independence, representing a visible cultural revolution.",
    },
    {
      id: 3,
      question:
        "Why was the passage of the 19th Amendment in 1920 considered a major turning point in the role of women in national life?",
      options: [
        "It immediately guaranteed women equal wages across all industries.",
        "It gave women the right to vote, expanding their political influence and encouraging broader civic participation.",
        "It required all women to join political parties.",
        "It replaced all male elected officials with female ones at the local level.",
      ],
      correctAnswer: 1,
      explanation:
        "The 19th Amendment granted women the constitutional right to vote, marking a watershed moment that expanded their political influence and opened the door to greater civic participation and engagement in shaping national policy.",
    },
    {
      id: 4,
      question:
        "How did the literary movements of the 1920s—such as the Harlem Renaissance and the broader modernist movement—create new opportunities and voices for women?",
      options: [
        "They restricted women writers to publishing only in newspapers.",
        "They encouraged women to focus solely on domestic themes and avoid political topics.",
        "They provided creative spaces for female authors to challenge social norms, explore identity, and gain national recognition.",
        "They discouraged experimentation, pushing all writers to follow strict, traditional storytelling styles.",
      ],
      correctAnswer: 2,
      explanation:
        "The literary movements of the 1920s provided platforms for women writers to explore themes of identity, challenge social conventions, and experiment with new forms of expression, earning them national recognition and literary significance.",
    },
  ],
  "leisure-tech": [
    {
      id: 1,
      question:
        "Which factor MOST directly explains why radio became America's first truly 'shared' national culture in the 1920s?",
      options: [
        "Radios made it easier for local communities to record their own music",
        "Radio broadcasts reached households simultaneously across the country",
        "Early radios had built-in phonographs so families could listen together",
        "Radio ownership was limited to major cities during the mid-1920s",
      ],
      correctAnswer: 1,
      explanation:
        "Radio broadcasts reached households simultaneously across the country, creating a shared national experience where people from different regions could listen to the same programs, news, and entertainment at the same time.",
    },
    {
      id: 2,
      question:
        "Why did automobiles play a bigger role in spreading national pop culture than any other invention of the decade?",
      options: [
        "Cars allowed people to attend more political rallies to share ideas",
        "Cars were mostly bought by wealthy elites who shaped trends intentionally",
        "Cars reduced the need for electric appliances, freeing up more time for fun",
        "Cars allowed people to travel, access the same entertainment spots, and vacation widely",
      ],
      correctAnswer: 3,
      explanation:
        "Automobiles revolutionized mobility, allowing Americans to travel freely to entertainment venues, vacation destinations, and social gatherings across the country, thereby spreading cultural trends and creating a more unified national pop culture.",
    },
    {
      id: 3,
      question: "Which statement BEST explains how women contributed to the spread of modern culture in the 1920s?",
      options: [
        "Women primarily stayed in domestic spaces and had little visibility in public life",
        "Women focused mostly on factory work, limiting their cultural impact",
        "Women used new political rights and public visibility to model modern attitudes and lifestyles",
        "Women's sports participation stayed small and mostly local",
      ],
      correctAnswer: 2,
      explanation:
        "Women leveraged their newly won political rights and increased public visibility to model modern attitudes and lifestyles, becoming influential cultural figures who helped define the era's values and social norms.",
    },
    {
      id: 4,
      question:
        "Why did aviation—especially events like Charles Lindbergh's 1927 flight—become a major part of shared American culture?",
      options: [
        "Radio and film newsreels turned aviators into national heroes everyone followed",
        "Aviation allowed Americans to travel across the country cheaply and frequently",
        "Newspapers refused to cover aviation stories, making them mysterious and appealing",
        "Aviation was already the safest and most common form of transportation",
      ],
      correctAnswer: 0,
      explanation:
        "Radio broadcasts and film newsreels extensively covered aviation achievements like Lindbergh's transatlantic flight, transforming aviators into national heroes and celebrities that captured the public imagination across the entire country.",
    },
  ],
  modernism: [
    {
      id: 1,
      question: "Art Deco's rise in the 1920s was largely influenced by which of the following?",
      options: [
        "A rejection of modernity and technology",
        "An interest in handcrafted rustic materials",
        "A cultural shift toward modernity, progress, and technological optimism",
        "A desire to eliminate decorative elements in design",
      ],
      correctAnswer: 2,
      explanation:
        "Art Deco emerged from a cultural shift toward modernity, progress, and technological optimism. The style celebrated modern materials, geometric forms, and the excitement of the machine age.",
    },
    {
      id: 2,
      question: "Both The Great Gatsby and A Farewell to Arms explore the idea that post-WWI America was marked by:",
      options: [
        "Renewed optimism and confidence in society",
        "Deep disillusionment, loss, and questioning of meaning",
        "A celebration of moral values and spiritual clarity",
        "A universal belief in the American Dream",
      ],
      correctAnswer: 1,
      explanation:
        "Both novels capture the disillusionment of the post-war generation. Despite the prosperity and glamour of the surface, these works reveal deep questioning about meaning, morality, and the loss experienced by those who lived through World War I.",
    },
    {
      id: 3,
      question: "Which statement best distinguishes Dadaism from Surrealism?",
      options: [
        "Dadaism was anti-art and nihilistic, while Surrealism explored the unconscious mind",
        "Dadaism embraced logic, while Surrealism rejected it",
        "Surrealism focused on realism, while Dadaism focused on dreams",
        "Surrealism rejected Freud, while Dadaism embraced him",
      ],
      correctAnswer: 0,
      explanation:
        "Dadaism was fundamentally anti-art and nihilistic, rejecting logic and reason in response to WWI's horrors. Surrealism, by contrast, embraced the unconscious mind and drew heavily on Freudian psychology to explore dreams and the irrational.",
    },
    {
      id: 4,
      question: "How did the younger generation view jazz and new dances in the 1920s?",
      options: [
        "As boring and outdated",
        "As symbols of rebellion and modernity",
        "As strictly traditional",
        "As morally dangerous",
      ],
      correctAnswer: 1,
      explanation:
        "Jazz and new dances like the Charleston became powerful symbols of rebellion and modernity for the younger generation. They represented a break from Victorian restraint and embodied the spirit of the era's cultural revolution.",
    },
  ],
  "culture-urban": [
    {
      id: 1,
      question: 'Which of the following correctly describes the region and "side" of the "Culture War" of the 1920s?',
      options: [
        "The North was against slavery and the South was for slavery.",
        "The east coast was anti-immigrants and anti-women and African American suffrage. The west coast, on the other hand, supported and welcomed immigrants and pushed for women and African Americans to get the right to vote.",
        "Urban areas/cities prioritized personal freedom, innovation, and industrialism. Rural communities, on the other hand, prioritized tradition, were resistant to change, and believed in moral discipline.",
        "Urban areas/cities prioritized tradition, were resistant to change, and believed in moral discipline. Rural communities, on the other hand, prioritized personal freedom, innovation, and industrialism.",
      ],
      correctAnswer: 2,
      explanation:
        "The Culture War of the 1920s was fundamentally a conflict between urban and rural America. Urban areas embraced personal freedom and modern innovation, while rural communities prioritized tradition and moral discipline.",
    },
    {
      id: 2,
      question: "What two factors BEST explains why so many people moved to urban areas during the 1920s?",
      options: [
        "Economic opportunities, more structured",
        "More jobs, less farming",
        "More freedom/equality, less dirty",
        "Economic opportunities, more freedom/equality",
      ],
      correctAnswer: 3,
      explanation:
        "People migrated to cities seeking both economic opportunities from industrial expansion and personal freedom that urban life offered—freedom from traditional constraints and the chance to participate in modern culture.",
    },
    {
      id: 3,
      question: "Why were rural communities in such bad economic situations during the 1920s?",
      options: [
        "The urban people were stealing money from the rural citizens. They were scamming them.",
        "Even though there were a lot of technological innovations in the 1920s, there were no advances in agriculture or farming. Therefore, farming fell behind many industries, which was bad for the agrarian rural part of the country.",
        "People in rural communities did not care about money and the economy that much. They just managed their farm and did their own thing.",
        "New technology made farming faster, which caused there to be an oversupply of the crops that people who live in rural communities sell.",
      ],
      correctAnswer: 3,
      explanation:
        "Mechanized farming technology increased productivity dramatically, leading to crop oversupply and falling agricultural prices. This left rural farmers struggling economically despite technological advances benefiting other industries.",
    },
    {
      id: 4,
      question: 'Which events were the "battles" of the "Culture War" of the 1920s?',
      options: [
        "Scopes Trial, Prohibition",
        "Prohibition, Civil Rights",
        "Women's suffrage, Scopes Trial",
        "Harlem Renaissance, Women's suffrage",
      ],
      correctAnswer: 0,
      explanation:
        "The Scopes Trial (1925) centered on teaching evolution, challenging religious fundamentalism, while Prohibition (1920-1933) represented urban moral concerns clashing with rural values, making these two defining cultural battlegrounds of the era.",
    },
  ],
}

export default function QuizPanel({ roomId, onComplete }: QuizPanelProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const quiz = QUIZZES[roomId as keyof typeof QUIZZES]

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Quiz content coming soon</p>
      </div>
    )
  }

  const question = quiz[currentQuestion]
  const userAnswer = answers[currentQuestion]
  const isCorrect = userAnswer === question.correctAnswer
  const answeredAll = answers.length === quiz.length

  const handleAnswer = (optionIndex: number) => {
    if (showResult) return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const correctCount = answers.filter((answer, index) => answer === quiz[index].correctAnswer).length

  if (quizComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-black border-2 border-amber-500/70 rounded-lg p-16 text-center relative overflow-hidden shadow-2xl shadow-amber-600/20">
            {/* Decorative corner elements with Art Deco styling */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-500/60" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-500/60" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-500/60" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-500/60" />

            {/* Art Deco geometric accents */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />

            <div className="relative z-10">
              {/* Result Indicator */}
              <div className="mb-6">
                {correctCount === quiz.length ? (
                  <div className="inline-block">
                    <div className="w-24 h-24 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center mb-4 shadow-lg shadow-amber-600/30">
                      <span className="text-5xl font-bold text-amber-400">✓</span>
                    </div>
                  </div>
                ) : correctCount >= 3 ? (
                  <div className="inline-block">
                    <div className="w-24 h-24 mx-auto rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-600/30">
                      <span className="text-4xl font-black text-blue-400">OK</span>
                    </div>
                  </div>
                ) : (
                  <div className="inline-block">
                    <div className="w-24 h-24 mx-auto rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center mb-4 shadow-lg shadow-red-600/30">
                      <span className="text-4xl font-black text-red-400">TRY</span>
                    </div>
                  </div>
                )}
              </div>

              <h2 className="text-4xl font-black mb-4 text-amber-400 uppercase tracking-wider">
                {correctCount === quiz.length
                  ? "Perfect! You've Escaped!"
                  : correctCount >= 3
                    ? "Room Unlocked!"
                    : "Try Again"}
              </h2>
              <p className="text-xl text-amber-50 mb-8">
                You answered <span className="text-amber-400 font-bold text-2xl">{correctCount}</span> out of{" "}
                <span className="text-amber-400 font-bold text-2xl">{quiz.length}</span> questions correctly.
              </p>

              {correctCount === quiz.length ? (
                <button
                  onClick={onComplete}
                  className="px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 font-bold text-lg uppercase tracking-widest shadow-lg shadow-amber-600/40"
                >
                  Proceed to Next Floor
                </button>
              ) : (
                <button
                  onClick={() => {
                    setCurrentQuestion(0)
                    setAnswers([])
                    setShowResult(false)
                    setQuizComplete(false)
                  }}
                  className="px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 font-bold text-lg uppercase tracking-widest shadow-lg shadow-amber-600/40"
                >
                  Retry Quiz
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Question {currentQuestion + 1} of {quiz.length}
            </span>
            <span className="text-sm text-primary font-bold uppercase tracking-wider">
              {Math.round(((currentQuestion + 1) / quiz.length) * 100)}% Complete
            </span>
          </div>
          <div className="h-3 bg-muted/30 rounded-full overflow-hidden border border-primary/30">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quiz.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard question={question} userAnswer={userAnswer} showResult={showResult} onAnswer={handleAnswer} />

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between">
          <button
            disabled={currentQuestion === 0}
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1)
              setShowResult(false)
            }}
            className="px-6 py-2 text-muted-foreground hover:text-primary disabled:opacity-30 transition-colors font-semibold uppercase tracking-wider text-sm"
          >
            Previous
          </button>

          {showResult && (
            <div className="text-sm font-bold uppercase tracking-wider">
              {isCorrect ? (
                <span className="text-primary">Correct</span>
              ) : (
                <span className="text-red-400">Incorrect</span>
              )}
            </div>
          )}

          <button
            disabled={!showResult}
            onClick={handleNext}
            className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 transition-colors font-bold uppercase tracking-wider text-sm"
          >
            {currentQuestion === quiz.length - 1 ? "View Results" : "Next"}
          </button>
        </div>
      </div>
    </div>
  )
}
