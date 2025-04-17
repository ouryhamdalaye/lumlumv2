import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Evenements() {
  const events = [
    {
      id: 1,
      title: "Conférence sur l'Histoire de la Langue Arabe",
      date: "15 Juin 2024",
      time: "14:00 - 16:00",
      location: "En ligne",
      attendees: "50 participants",
      description: "Une conférence approfondie sur l'évolution de la langue arabe à travers les siècles, de ses origines à son influence sur les langues modernes.",
      image: "/images/event-history.jpg"
    },
    {
      id: 2,
      title: "Atelier de Calligraphie Arabe",
      date: "22 Juin 2024",
      time: "10:00 - 12:00",
      location: "Centre Culturel, Paris",
      attendees: "20 participants",
      description: "Découvrez l'art de la calligraphie arabe avec un maître calligraphe. Apprenez les bases et créez votre première œuvre.",
      image: "/images/event-calligraphy.jpg"
    },
    {
      id: 3,
      title: "Séminaire sur les Sciences Coraniques",
      date: "5 Juillet 2024",
      time: "09:00 - 17:00",
      location: "En ligne",
      attendees: "100 participants",
      description: "Un séminaire complet sur les différentes sciences coraniques, incluant le tafsir, les sciences du hadith, et la jurisprudence islamique.",
      image: "/images/event-quran-science.jpg"
    },
    {
      id: 4,
      title: "Festival de Poésie Arabe",
      date: "12 Juillet 2024",
      time: "18:00 - 22:00",
      location: "Théâtre Municipal, Lyon",
      attendees: "150 participants",
      description: "Une soirée dédiée à la poésie arabe classique et moderne, avec des récitations, des performances et des discussions.",
      image: "/images/event-arabic-poems.jpg"
    },
    {
      id: 5,
      title: "Workshop d'Arabe Conversationnel",
      date: "19 Juillet 2024",
      time: "15:00 - 17:00",
      location: "En ligne",
      attendees: "30 participants",
      description: "Améliorez vos compétences en arabe conversationnel à travers des exercices pratiques et des jeux de rôle.",
      image: "/images/event-arabic-speaking.jpg"
    },
    {
      id: 6,
      title: "Exposition d'Art Islamique",
      date: "26 Juillet 2024",
      time: "11:00 - 19:00",
      location: "Galerie d'Art, Marseille",
      attendees: "200 participants",
      description: "Une exposition présentant des œuvres d'art islamique traditionnel et contemporain, avec des explications sur les motifs et les techniques.",
      image: "/images/event-islamic-art.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F9F3]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#21573A] text-[#F8F9F3]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Nos Événements
            </h1>
            <p className="text-lg md:text-xl text-[#F8F9F3]/90">
              Découvrez nos conférences, ateliers et séminaires sur la langue arabe et les études coraniques.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#21573A]/20 hover:border-[#C49B3A] transition-colors"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#21573A] mb-3">{event.title}</h3>
                  <p className="text-[#3A3A3A] mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-[#3A3A3A]">
                      <Calendar className="size-4 text-[#C49B3A]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#3A3A3A]">
                      <Clock className="size-4 text-[#C49B3A]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#3A3A3A]">
                      <MapPin className="size-4 text-[#C49B3A]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#3A3A3A]">
                      <Users className="size-4 text-[#C49B3A]" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/evenements/${event.id}`} 
                    className="inline-flex items-center gap-2 text-[#21573A] hover:text-[#C49B3A] transition-colors"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#EFE8DE]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#21573A] mb-6">
              Restez informé de nos prochains événements
            </h2>
            <p className="text-lg text-[#3A3A3A] mb-8">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et invitations à nos événements.
            </p>
            <Link 
              href="/inscription" 
              className="inline-flex items-center gap-2 bg-[#21573A] text-white px-8 py-3 rounded-lg hover:bg-[#1A3A2A] transition-colors"
            >
              S'inscrire à la newsletter
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 