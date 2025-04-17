import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Données fictives pour les événements
const events = [
  {
    id: 1,
    title: "Conférence sur l'Histoire de la Langue Arabe",
    date: "15 Juin 2024",
    time: "14:00 - 16:00",
    location: "En ligne",
    attendees: "50 participants",
    description: "Une conférence approfondie sur l'évolution de la langue arabe à travers les siècles, de ses origines à son influence sur les langues modernes.",
    longDescription: "Cette conférence vous plongera dans l'histoire fascinante de la langue arabe, de ses origines pré-islamiques à son développement comme langue de science, de philosophie et de littérature. Nous explorerons comment l'arabe a influencé d'autres langues et comment il continue d'évoluer aujourd'hui. Des experts en linguistique et en histoire culturelle partageront leurs connaissances et répondront à vos questions.",
    image: "/images/event-history.jpg",
    price: "Gratuit",
    speaker: "Dr. Ahmed Hassan",
    speakerBio: "Dr. Hassan est professeur de linguistique à l'Université de Paris et auteur de plusieurs ouvrages sur l'histoire des langues sémitiques."
  },
  {
    id: 2,
    title: "Atelier de Calligraphie Arabe",
    date: "22 Juin 2024",
    time: "10:00 - 12:00",
    location: "Centre Culturel, Paris",
    attendees: "20 participants",
    description: "Découvrez l'art de la calligraphie arabe avec un maître calligraphe. Apprenez les bases et créez votre première œuvre.",
    longDescription: "Cet atelier vous initiera aux techniques fondamentales de la calligraphie arabe. Vous apprendrez à manier le calame (plume) et à tracer les lettres de l'alphabet arabe avec élégance. Le maître calligraphe vous guidera à travers les différents styles de calligraphie et vous aidera à créer votre première œuvre. Tous les matériaux nécessaires seront fournis.",
    image: "/images/event-calligraphy.jpg",
    price: "35€",
    speaker: "Maître Karim Al-Sabah",
    speakerBio: "Maître Al-Sabah est un calligraphe renommé qui a exposé ses œuvres dans le monde entier et enseigne depuis plus de 20 ans."
  },
  {
    id: 3,
    title: "Séminaire sur les Sciences Coraniques",
    date: "5 Juillet 2024",
    time: "09:00 - 17:00",
    location: "En ligne",
    attendees: "100 participants",
    description: "Un séminaire complet sur les différentes sciences coraniques, incluant le tafsir, les sciences du hadith, et la jurisprudence islamique.",
    longDescription: "Ce séminaire d'une journée vous offrira une introduction approfondie aux sciences coraniques. Vous explorerez les différentes approches du tafsir (exégèse), les principes des sciences du hadith, et les bases de la jurisprudence islamique. Des érudits reconnus partageront leurs connaissances et répondront à vos questions. Ce séminaire est adapté aux débutants comme aux personnes ayant déjà des connaissances en la matière.",
    image: "/images/event-quran-science.jpg",
    price: "75€",
    speaker: "Sheikh Mohammed Al-Rashid",
    speakerBio: "Sheikh Al-Rashid est un érudit respecté qui a étudié dans les plus prestigieuses institutions islamiques et enseigne depuis plus de 15 ans."
  },
  {
    id: 4,
    title: "Festival de Poésie Arabe",
    date: "12 Juillet 2024",
    time: "18:00 - 22:00",
    location: "Théâtre Municipal, Lyon",
    attendees: "150 participants",
    description: "Une soirée dédiée à la poésie arabe classique et moderne, avec des récitations, des performances et des discussions.",
    longDescription: "Ce festival célèbre la richesse de la poésie arabe à travers les âges. Des poètes contemporains réciteront leurs œuvres, tandis que des artistes interpréteront des poèmes classiques. Des discussions sur l'évolution de la poésie arabe et son influence sur la littérature mondiale seront également au programme. Une soirée inoubliable pour tous les amateurs de poésie et de culture arabe.",
    image: "/images/event-arabic-poems.jpg",
    price: "25€",
    speaker: "Divers poètes et artistes",
    speakerBio: "Le festival accueillera des poètes et artistes de renommée internationale, ainsi que des talents émergents de la scène poétique arabe."
  },
  {
    id: 5,
    title: "Workshop d'Arabe Conversationnel",
    date: "19 Juillet 2024",
    time: "15:00 - 17:00",
    location: "En ligne",
    attendees: "30 participants",
    description: "Améliorez vos compétences en arabe conversationnel à travers des exercices pratiques et des jeux de rôle.",
    longDescription: "Ce workshop est conçu pour vous aider à améliorer votre arabe conversationnel dans un environnement détendu et interactif. À travers des jeux de rôle, des discussions de groupe et des exercices pratiques, vous développerez votre confiance à l'oral et enrichirez votre vocabulaire. Idéal pour les personnes ayant déjà une base en arabe et souhaitant progresser dans leur expression orale.",
    image: "/images/event-arabic-speaking.jpg",
    price: "40€",
    speaker: "Prof. Leila Benali",
    speakerBio: "Prof. Benali est une enseignante d'arabe expérimentée qui a développé des méthodes innovantes pour l'apprentissage des langues."
  },
  {
    id: 6,
    title: "Exposition d'Art Islamique",
    date: "26 Juillet 2024",
    time: "11:00 - 19:00",
    location: "Galerie d'Art, Marseille",
    attendees: "200 participants",
    description: "Une exposition présentant des œuvres d'art islamique traditionnel et contemporain, avec des explications sur les motifs et les techniques.",
    longDescription: "Cette exposition vous fera découvrir la richesse et la diversité de l'art islamique à travers les siècles. Des œuvres traditionnelles aux créations contemporaines, vous explorerez les motifs géométriques, les calligraphies et les techniques utilisées par les artistes. Des experts guideront les visiteurs et expliqueront la signification culturelle et religieuse des œuvres exposées. Une expérience immersive dans l'art et la culture islamiques.",
    image: "/images/event-islamic-art.jpg",
    price: "15€",
    speaker: "Dr. Yasmine El-Maghrabi",
    speakerBio: "Dr. El-Maghrabi est une historienne de l'art spécialisée dans l'art islamique et commissaire de nombreuses expositions internationales."
  }
];

export default function EventPage({ params }: { params: { id: string } }) {
  // Récupérer l'événement correspondant à l'ID
  const event = events.find(e => e.id === parseInt(params.id));
  
  // Si l'événement n'existe pas, afficher un message d'erreur
  if (!event) {
    return (
      <main className="min-h-screen bg-[#F8F9F3] py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-[#21573A] mb-6">Événement non trouvé</h1>
            <p className="text-[#3A3A3A] mb-8">L'événement que vous recherchez n'existe pas ou a été supprimé.</p>
            <Link 
              href="/evenements" 
              className="inline-flex items-center gap-2 bg-[#21573A] text-white px-6 py-3 rounded-lg hover:bg-[#1A3A2A] transition-colors"
            >
              <ArrowLeft className="size-5" />
              <span>Retour aux événements</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F9F3]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#21573A] text-[#F8F9F3]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/evenements" 
              className="inline-flex items-center gap-2 text-[#F8F9F3]/80 hover:text-[#F8F9F3] mb-6"
            >
              <ArrowLeft className="size-5" />
              <span>Retour aux événements</span>
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-[#C49B3A]" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-5 text-[#C49B3A]" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-[#C49B3A]" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-5 text-[#C49B3A]" />
                <span>{event.attendees}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
                <div className="h-64 md:h-96 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-[#21573A] mb-4">À propos de cet événement</h2>
                  <p className="text-[#3A3A3A] mb-4">{event.longDescription}</p>
                  
                  <div className="border-t border-[#21573A]/20 pt-6 mt-6">
                    <h3 className="text-xl font-semibold text-[#21573A] mb-4">Intervenant</h3>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#21573A]/10 flex items-center justify-center">
                        <Users className="size-8 text-[#21573A]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#21573A]">{event.speaker}</h4>
                        <p className="text-[#3A3A3A] text-sm">{event.speakerBio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-[#21573A] mb-4">Inscription</h3>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#3A3A3A]">Prix</span>
                    <span className="font-semibold text-[#21573A]">{event.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#3A3A3A]">Places disponibles</span>
                    <span className="font-semibold text-[#21573A]">20</span>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3A3A3A] mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-[#21573A]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3A3A3A] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-[#21573A]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#3A3A3A] mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-[#21573A]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                      placeholder="Votre numéro"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#3A3A3A] mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-4 py-2 border border-[#21573A]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#21573A] text-white py-3 rounded-lg hover:bg-[#1A3A2A] transition-colors"
                  >
                    S'inscrire à l'événement
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 