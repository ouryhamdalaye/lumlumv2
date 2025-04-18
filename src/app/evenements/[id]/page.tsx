'use client';

import { useState } from 'react';
import { use } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ChevronRight,
  ArrowLeft,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Données fictives pour les événements
  const events = [
    {
      id: 1,
      title: "Conférence sur l'Histoire de la Langue Arabe",
      date: "15 Juin 2024",
      time: "14:00 - 16:00",
      location: "Auditorium, Marseille",
      attendees: "150 participants",
      description: "Une conférence fascinante sur l'évolution de la langue arabe à travers les siècles.",
      longDescription: "Cette conférence explorera l'histoire riche et complexe de la langue arabe, de ses origines à son influence sur les langues modernes. Nous aborderons les différentes périodes de son évolution, les variations dialectales, et son importance dans la littérature et la culture islamique. Des experts renommés partageront leurs connaissances et répondront à vos questions.",
      image: "/images/event-history.jpg",
      price: "15€",
      speaker: "Dr. Ahmed Hassan",
      speakerBio: "Linguiste et historien spécialisé dans les langues sémitiques, Dr. Hassan a publié de nombreux ouvrages sur l'évolution de la langue arabe."
    },
    {
      id: 2,
      title: "Atelier de Calligraphie Arabe",
      date: "22 Juin 2024",
      time: "10:00 - 12:00",
      location: "Salle d'Art, Marseille",
      attendees: "20 participants",
      description: "Apprenez les bases de la calligraphie arabe avec un maître calligraphe.",
      longDescription: "Cet atelier pratique vous initiera aux techniques fondamentales de la calligraphie arabe. Vous apprendrez à manier le calame, à tracer les lettres de base et à composer des mots simples. Le maître calligraphe vous guidera pas à pas, partageant des secrets ancestraux de cet art millénaire. Tous les matériaux nécessaires seront fournis.",
      image: "/images/event-calligraphy.jpg",
      price: "45€",
      speaker: "Maître Yasmine",
      speakerBio: "Maître calligraphe avec plus de 20 ans d'expérience, Yasmine a étudié auprès des plus grands maîtres du Moyen-Orient et a exposé ses œuvres dans le monde entier."
    },
    {
      id: 3,
      title: "Séminaire sur les Sciences Coraniques",
      date: "5 Juillet 2024",
      time: "09:00 - 17:00",
      location: "Centre d'Études Islamiques, Marseille",
      attendees: "80 participants",
      description: "Un séminaire approfondi sur les différentes sciences liées à l'étude du Coran.",
      longDescription: "Ce séminaire d'une journée explorera les diverses sciences coraniques, notamment l'exégèse (tafsir), les circonstances de révélation (asbab al-nuzul), l'abrogeant et l'abrogé (nasikh wa mansukh), et les différentes lectures (qira'at). Des érudits reconnus partageront leurs connaissances et répondront à vos questions. Le séminaire inclut des sessions de discussion et d'analyse de textes.",
      image: "/images/event-quran-science.jpg",
      price: "75€",
      speaker: "Sheikh Mohammed Al-Rashid",
      speakerBio: "Érudit islamique reconnu internationalement, Sheikh Al-Rashid a étudié dans les plus prestigieuses institutions islamiques et a publié de nombreux ouvrages sur les sciences coraniques."
    },
    {
      id: 4,
      title: "Festival de Poésie Arabe",
      date: "12 Juillet 2024",
      time: "18:00 - 22:00",
      location: "Jardin des Arts, Marseille",
      attendees: "200 participants",
      description: "Une soirée dédiée à la poésie arabe classique et contemporaine.",
      longDescription: "Ce festival célèbre la richesse de la poésie arabe à travers des récitations, des performances musicales et des discussions. Des poètes contemporains partageront leurs œuvres, tandis que des artistes interpréteront des poèmes classiques. Des ateliers d'écriture seront également proposés pour ceux qui souhaitent explorer leur créativité. Une soirée inoubliable pour tous les amateurs de poésie et de culture arabe.",
      image: "/images/event-arabic-poems.jpg",
      price: "25€",
      speaker: "Dr. Yasmine El-Maghrabi",
      speakerBio: "Poétesse et universitaire, Dr. El-Maghrabi est spécialiste de la poésie arabe moderne et a traduit de nombreux poètes arabes en français."
    },
    {
      id: 5,
      title: "Workshop d'Arabe Conversationnel",
      date: "19 Juillet 2024",
      time: "15:00 - 17:00",
      location: "En ligne",
      attendees: "30 participants",
      description: "Améliorez votre arabe conversationnel dans un environnement interactif.",
      longDescription: "Ce workshop en ligne est conçu pour les apprenants intermédiaires souhaitant améliorer leurs compétences conversationnelles en arabe. À travers des jeux de rôle, des discussions guidées et des exercices pratiques, vous développerez votre aisance à l'oral et enrichirez votre vocabulaire. L'accent sera mis sur les expressions idiomatiques et les situations de la vie quotidienne. Un excellent moyen de pratiquer l'arabe dans un cadre convivial et encourageant.",
      image: "/images/event-arabic-speaking.jpg",
      price: "35€",
      speaker: "Prof. Karim Al-Sabah",
      speakerBio: "Professeur d'arabe avec plus de 15 ans d'expérience dans l'enseignement des langues, Karim est spécialisé dans les méthodes d'apprentissage communicatives et interactives."
    },
    {
      id: 6,
      title: "Exposition d'Art Islamique",
      date: "26 Juillet 2024",
      time: "11:00 - 19:00",
      location: "Galerie d'Art, Marseille",
      attendees: "200 participants",
      description: "Découvrez la richesse et la diversité de l'art islamique à travers les siècles.",
      longDescription: "Cette exposition présente une sélection d'œuvres d'art islamique allant du Moyen Âge à nos jours. Vous découvrirez des calligraphies, des céramiques, des textiles, des miniatures et des œuvres contemporaines inspirées par la tradition islamique. Des experts seront présents pour guider les visiteurs et répondre à leurs questions. Des ateliers de découverte seront également proposés pour les enfants et les familles.",
      image: "/images/event-islamic-art.jpg",
      price: "12€",
      speaker: "Dr. Leila Benali",
      speakerBio: "Historienne de l'art spécialisée dans l'art islamique, Dr. Benali a organisé de nombreuses expositions internationales et a publié plusieurs ouvrages sur le sujet."
    }
  ];
  
  // Récupérer l'événement correspondant à l'ID
  const event = events.find(e => e.id === parseInt(resolvedParams.id));
  
  // Si l'événement n'existe pas, afficher un message d'erreur
  if (!event) {
    return (
      <main className="min-h-screen bg-[#F8F9F3] py-24">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h1 className="text-2xl font-bold text-[#21573A] mb-4">Événement non trouvé</h1>
            <p className="text-[#3A3A3A] mb-6">L'événement que vous recherchez n'existe pas ou a été supprimé.</p>
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
  
  // Gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler un délai de traitement
    setTimeout(() => {
      setIsSubmitting(false);
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      // Afficher un message de succès (à implémenter)
      alert('Inscription réussie ! Vous recevrez un email de confirmation.');
    }, 1000);
  };
  
  // Gérer les changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <main className="min-h-screen bg-[#F8F9F3] py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link 
            href="/evenements" 
            className="inline-flex items-center gap-2 text-[#21573A] hover:text-[#1A3A2A] transition-colors"
          >
            <ArrowLeft className="size-5" />
            <span>Retour aux événements</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-[#21573A] rounded-lg overflow-hidden mb-8">
              <div className="h-64 md:h-80 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-white">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{event.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="size-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description de l'événement */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#21573A] mb-4">À propos de l'événement</h2>
                <p className="text-[#3A3A3A] mb-6">{event.longDescription}</p>
                
                <h3 className="text-lg font-bold text-[#21573A] mb-2">Intervenant</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#21573A]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#21573A] font-medium text-xl">
                      {event.speaker.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#21573A]">{event.speaker}</h4>
                    <p className="text-[#3A3A3A] text-sm">{event.speakerBio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulaire d'inscription */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-6 border-b border-[#21573A]/10">
                <h2 className="text-xl font-bold text-[#21573A]">S'inscrire à l'événement</h2>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[#3A3A3A]">Prix</span>
                  <span className="font-bold text-[#21573A]">{event.price}</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3A3A3A] mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-[#21573A]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3A3A3A] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-[#21573A]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#3A3A3A] mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-[#21573A]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#3A3A3A] mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-[#21573A]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-[#21573A] text-white py-3 rounded-lg hover:bg-[#1A3A2A] transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Traitement en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>S'inscrire à l'événement</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 