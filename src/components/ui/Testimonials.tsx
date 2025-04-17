import Image from 'next/image';

const testimonials = [
  {
    id: '1',
    name: 'Ada',
    date: '12 mars 2024',
    rating: 5,
    text: "Je ne peux que recommander l'institut compte tenu de ma rapide progression et je n'hésiterai pas à me réinscrire aux niveaux suivants ! Le fait que les cours ne soient qu'en langue arabe peut faire peur au début quand on a aucune base, mais en réalité c'est la meilleure manière pour apprendre. Le professeur est soucieux de notre évolution, on ressent qu'il souhaite vraiment nous faire atteindre le meilleur niveau possible sans pour autant nous faire subir une pression excessive."
  },
  {
    id: '2',
    name: 'Nia',
    date: '13 mars 2024',
    rating: 5,
    text: "Cours de qualité, avec une réelle immersion grâce a l'emploi du temps qui est étalé sur la semaine. Les étudiants bénéficient d'une acquisition rapide de bases concrètes, facilement réutilisable dans la vie quotidienne. Pour les étudiants francophones n'ayant pas l'habitude de prononcer de l'arabe ce mode d'apprentissage représente ce qu'il y a de meilleur sur le marché."
  },
  {
    id: '3',
    name: 'Mon',
    date: '14 mars 2024',
    rating: 5,
    text: "Je ne peux que recommander cet institut où tout est au top : immersion en arabe et le fait de participer oralement permets de progresser rapidement, qualité du support qui permets de travailler aussi l'ecrit, enseignant pédagogue, motivant et patient, horaires compatibles avec la vie active ou étudiante."
  },
  {
    id: '4',
    name: 'Mélissa B.',
    date: '23 mars 2024',
    rating: 5,
    text: "Un institut qui m'a apporté beaucoup en terme de connaissances mais aussi spirituellement, en très peu de temps. Je suis aussi très reconnaissante des professeurs et des étudiants qui sont de tres belles personnes et qui tirent toujours les autres vers le haut. Je recommande l'institut à tout ceux qui souhaitent apprendre l'arabe ou le coran à distance, aussi bien qu'en presentiel."
  },
  {
    id: '5',
    name: 'Hafi Ismael',
    date: '12 mars 2024',
    rating: 5,
    text: "Très satisfaite de cet institut, en totale immersion dans la langue arabe. Beaucoup de lecture de texte, et de dialogue entre le professeur et les élèves. Je recommande fortement si vous souhaitez apprendre la langue de manière ludique et rapidement."
  }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <Image
            key={i}
            src="https://ext.same-assets.com/1734499609/3160495444.svg"
            alt="★"
            width={16}
            height={16}
          />
        );
      } else {
        stars.push(
          <Image
            key={i}
            src="https://ext.same-assets.com/1734499609/658199468.svg"
            alt="☆"
            width={16}
            height={16}
          />
        );
      }
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="bg-bg-[#EFE8DE] py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">La parole des inscrits.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">{testimonial.name}</h3>
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              </div>
              {renderStars(testimonial.rating)}
              <p className="mt-4 text-gray-700 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
