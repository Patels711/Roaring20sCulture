"use client"

export default function PodcastZoneEssays({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen p-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-amber-300 max-w-5xl mx-auto rounded-xl shadow-lg flex flex-col">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Podcast Zone Essays</h1>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded font-semibold"
          type="button"
        >
          Back to Main Screen
        </button>
      </header>

      <nav className="mb-8 flex space-x-4 justify-center">
        <button
          onClick={() => document.getElementById("eq1")?.scrollIntoView({ behavior: "smooth" })}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded font-semibold"
          type="button"
        >
          EQ #1
        </button>
        <button
          onClick={() => document.getElementById("eq2")?.scrollIntoView({ behavior: "smooth" })}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded font-semibold"
          type="button"
        >
          EQ #2
        </button>
      </nav>

      <section id="eq1" className="mb-12 scroll-mt-16">
        <h2 className="text-3xl font-semibold mb-4">EQ #1</h2>
        <p className="mb-4 leading-relaxed text-lg">
          The essential question that the American urban and rural cultures of the 1920s answers is A2 (How have economic, political and cultural decisions promoted or prevented the growth of personal freedom, individual responsibility, equality and respect for human dignity?
        </p>
          <audio controls className="mb-6 w-full max-w-lg" aria-label="Podcast for EQ #1">
          <source src="/Audio File.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="mb-4 leading-relaxed text-lg">
          Many flocked to the rapidly developing urbanized parts of America due to its economic and cultural decisions that promoted the growth of personal freedom, individual responsibility, equality, and respect for human dignity. To many Americans, cities and other urbanized areas had more freedom and new opportunities that may not have been present in rural and suburban areas. The economic decisions taken by factory owners and industrial giants created more jobs and thus, more economic opportunities for city residents. Industry, manufacturing, and the development and making of new technology (like automobiles) were huge during the 1920s. Therefore, more and more factories opened up, which allowed for more potential workers to earn money. Despite an increase in factory jobs, there was a decrease in the working hours from 70 hours a week before the war to 45 hours a week by the 1920s. In comparison, the pay that these workers received increased dramatically, helping the average American to have more time and money to devote to more expenses and other leisure activities. With the addition of automobiles, people were able to spend the extra time and money they had to go to the cinema, buy radios, buy appliances, and even go to sports. With the addition of the motion picture and radio, people were able to experience the thrill of sports and aviation that were emerging at the time. With these shared interests, a new pop culture emerged across the nation. Sports and aviation, and the breakthroughs in these fields, also became big, helping to contribute to the increase in the unified pop culture. Women also played a big role in all these sectors, using their newly gained rights and presence in society to make a mark and destroy the boundaries that were set upon them before. All of these economic breakthroughs and inventions, political rights and freedoms, and shared cultural emergence led to a growth of personal growth and equality for everyone in the nation.
        </p>
        <p className="leading-relaxed text-lg">
          Additionally, cities were much more tolerant of different cultures and gave both women and minorities increased freedom and equality. When people from around the world heard about these new economic opportunities and increased freedom, they came flooding into cities. This included Americans from rural areas, African Americans (in the Great Migration), women, and even immigrants from all around the world. This created a distinct city culture, which was characterized by different influences from a vast range of other cultures. People in cities became more tolerant of different religions and ethnicities, new roles for women emerged, and new cultures and art inspired by new city inhabitants were created (one example is the Harlem Renaissance).
        </p>
        <p className="leading-relaxed text-lg">
          On the other hand, more rural areas often prevented the growth of personal freedom, individual responsibility, equality, and respect for human dignity due to their economic, political, and cultural decisions. The economic prospects of staying in rural areas during the 1920s were not good. The agricultural economy was in decline, and crop prices were also falling. Rural areas also idealized tradition and were conservative. They resisted changes like mechanization and other technologies that could have helped make farming more efficient, which restricted rural economic growth and individual freedom. Additionally, rural political support for the Scopes Trial and Prohibition not only demonstrated their adherence to traditional values, but also suppressed individual freedom.
        </p>
      </section>

      <section id="eq2" className="mb-12 scroll-mt-16">
        <h2 className="text-3xl font-semibold mb-4">EQ #2</h2>
        <p className="mb-4 leading-relaxed text-lg">
          D2 How can the study of multiple perspectives, belief systems and cultures provide a context for understanding and challenging current public actions and decisions in a diverse and interdependent world?
        </p>
          <audio controls className="mb-6 w-full max-w-lg" aria-label="Podcast for EQ #2">
          <source src="/Essential Question D2.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="leading-relaxed text-lg">
          The documentation of multiple perspectives and cultures after World War I helped shape later movements and policies that support diversity and individual freedom. Writers who experienced the war described the inequality and hopelessness of the period. In A Farewell to Arms, Hemingway shows the disillusionment felt by many soldiers and highlights the conflict between patriotism, personal desire, and morality. These ideas influenced later discussions about war and national responsibility. Art movements such as the Harlem Renaissance redefined cultural identity and challenged racist stereotypes. Through music, visual art, and performance, the movement shows the importance of viewing public actions from the perspective of the people most affected. Women in the 1920s also gained new forms of self-expression through the “flapper” identity, which challenged traditional expectations. Many women cut their hair short, drove cars, held jobs, and explored new freedoms. The ratification of the 19th Amendment opened a new stage of the women’s rights movement, although more progress was still needed to address older standards and expand independence for women.
        </p>
      </section>

      <div className="mt-auto flex justify-center">
        <button
          type="button"
          onClick={onBack}
          className="mb-4 px-12 py-4 bg-amber-600 hover:bg-amber-500 rounded font-semibold"
        >
          Back to Main Screen
        </button>
      </div>
    </div>
  )
}
