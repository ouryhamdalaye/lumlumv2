'use client';

import { useState } from 'react';
import { 
  Calendar, 
  Video, 
  MessageSquare, 
  Mail, 
  CreditCard, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Users, 
  LogOut,
  Bell
} from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('schedule');
  
  // Données fictives pour les événements inscrits
  const registeredEvents = [
    {
      id: 5,
      title: "Workshop d'Arabe Conversationnel",
      date: "19 Juillet 2024",
      time: "15:00 - 17:00",
      location: "En ligne",
      attendees: "30 participants",
      image: "/images/event-arabic-speaking.jpg"
    },
    {
      id: 6,
      title: "Exposition d'Art Islamique",
      date: "26 Juillet 2024",
      time: "11:00 - 19:00",
      location: "Galerie d'Art, Marseille",
      attendees: "200 participants",
      image: "/images/event-islamic-art.jpg"
    }
  ];
  
  // Données fictives pour les messages
  const messages = [
    {
      id: 1,
      sender: "Prof. Leila Benali",
      subject: "Devoirs pour la semaine prochaine",
      date: "12 Juin 2024",
      read: false
    },
    {
      id: 2,
      sender: "Administration",
      subject: "Confirmation d'inscription au Workshop",
      date: "10 Juin 2024",
      read: true
    },
    {
      id: 3,
      sender: "Dr. Ahmed Hassan",
      subject: "Ressources supplémentaires pour le cours",
      date: "5 Juin 2024",
      read: true
    }
  ];
  
  // Données fictives pour l'emploi du temps
  const schedule = [
    {
      day: "Lundi",
      courses: [
        { time: "10:00 - 11:30", name: "Arabe Débutant", teacher: "Prof. Leila Benali", room: "Salle 101" },
        { time: "14:00 - 15:30", name: "Grammaire Arabe", teacher: "Dr. Ahmed Hassan", room: "Salle 203" }
      ]
    },
    {
      day: "Mercredi",
      courses: [
        { time: "10:00 - 11:30", name: "Conversation Arabe", teacher: "Prof. Karim Al-Sabah", room: "Salle 102" },
        { time: "14:00 - 15:30", name: "Calligraphie Arabe", teacher: "Maître Yasmine", room: "Salle 301" }
      ]
    },
    {
      day: "Vendredi",
      courses: [
        { time: "10:00 - 11:30", name: "Études Coraniques", teacher: "Sheikh Mohammed Al-Rashid", room: "Salle 201" },
        { time: "14:00 - 15:30", name: "Histoire de l'Islam", teacher: "Dr. Yasmine El-Maghrabi", room: "Salle 202" }
      ]
    }
  ];
  
  // Données fictives pour les professeurs
  const teachers = [
    {
      id: 1,
      name: "Prof. Leila Benali",
      subject: "Arabe Débutant",
      email: "leila.benali@example.com",
      image: "https://images.unsplash.com/photo-1584559582128-97f5f1842b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      name: "Dr. Ahmed Hassan",
      subject: "Grammaire Arabe",
      email: "ahmed.hassan@example.com",
      image: "https://images.unsplash.com/photo-1584559582128-97f5f1842b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      name: "Prof. Karim Al-Sabah",
      subject: "Conversation Arabe",
      email: "karim.alsabah@example.com",
      image: "https://images.unsplash.com/photo-1584559582128-97f5f1842b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];
  
  // Données fictives pour les classes virtuelles
  const virtualClasses = [
    {
      id: 1,
      name: "Arabe Débutant - Niveau 1",
      teacher: "Prof. Leila Benali",
      time: "10:00 - 11:30",
      day: "Lundi",
      status: "live"
    },
    {
      id: 2,
      name: "Grammaire Arabe - Niveau 2",
      teacher: "Dr. Ahmed Hassan",
      time: "14:00 - 15:30",
      day: "Lundi",
      status: "upcoming"
    },
    {
      id: 3,
      name: "Conversation Arabe - Niveau 1",
      teacher: "Prof. Karim Al-Sabah",
      time: "10:00 - 11:30",
      day: "Mercredi",
      status: "upcoming"
    }
  ];
  
  // Données fictives pour le solde étudiant
  const studentBalance = {
    paid: 450,
    remaining: 150,
    total: 600,
    nextPayment: "1 Juillet 2024"
  };

  return (
    <main className="min-h-screen bg-[#F8F9F3] py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#21573A]/10">
                <h2 className="text-xl font-bold text-[#21573A]">Mon Espace Étudiant</h2>
                <p className="text-[#3A3A3A] text-sm">Bienvenue, Étudiant</p>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setActiveTab('schedule')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === 'schedule' 
                          ? 'bg-[#21573A] text-white' 
                          : 'text-[#3A3A3A] hover:bg-[#21573A]/10'
                      }`}
                    >
                      <Calendar className="size-5" />
                      <span>Emploi du temps</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('virtual-classes')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === 'virtual-classes' 
                          ? 'bg-[#21573A] text-white' 
                          : 'text-[#3A3A3A] hover:bg-[#21573A]/10'
                      }`}
                    >
                      <Video className="size-5" />
                      <span>Classes virtuelles</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('teachers')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === 'teachers' 
                          ? 'bg-[#21573A] text-white' 
                          : 'text-[#3A3A3A] hover:bg-[#21573A]/10'
                      }`}
                    >
                      <MessageSquare className="size-5" />
                      <span>Contacter un professeur</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('events')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === 'events' 
                          ? 'bg-[#21573A] text-white' 
                          : 'text-[#3A3A3A] hover:bg-[#21573A]/10'
                      }`}
                    >
                      <Calendar className="size-5" />
                      <span>Mes événements</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('messages')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === 'messages' 
                          ? 'bg-[#21573A] text-white' 
                          : 'text-[#3A3A3A] hover:bg-[#21573A]/10'
                      }`}
                    >
                      <Mail className="size-5" />
                      <span>Messages</span>
                      {messages.some(m => !m.read) && (
                        <span className="ml-auto bg-[#C49B3A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {messages.filter(m => !m.read).length}
                        </span>
                      )}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('balance')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === 'balance' 
                          ? 'bg-[#21573A] text-white' 
                          : 'text-[#3A3A3A] hover:bg-[#21573A]/10'
                      }`}
                    >
                      <CreditCard className="size-5" />
                      <span>Mon solde</span>
                    </button>
                  </li>
                </ul>
              </nav>
              
              <div className="p-4 border-t border-[#21573A]/10">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#3A3A3A] hover:bg-[#21573A]/10 transition-colors">
                  <LogOut className="size-5" />
                  <span>Déconnexion</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Emploi du temps */}
            {activeTab === 'schedule' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#21573A]/10">
                  <h2 className="text-xl font-bold text-[#21573A]">Mon Emploi du Temps</h2>
                  <p className="text-[#3A3A3A] text-sm">Consultez vos cours de la semaine</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    {schedule.map((day, index) => (
                      <div key={index} className="border border-[#21573A]/20 rounded-lg overflow-hidden">
                        <div className="bg-[#21573A] text-white px-4 py-2">
                          <h3 className="font-semibold">{day.day}</h3>
                        </div>
                        <div className="divide-y divide-[#21573A]/10">
                          {day.courses.map((course, courseIndex) => (
                            <div key={courseIndex} className="p-4">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div>
                                  <h4 className="font-semibold text-[#21573A]">{course.name}</h4>
                                  <p className="text-[#3A3A3A] text-sm">{course.teacher}</p>
                                </div>
                                <div className="flex flex-wrap gap-3 text-sm">
                                  <div className="flex items-center gap-1">
                                    <Clock className="size-4 text-[#21573A]" />
                                    <span>{course.time}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="size-4 text-[#21573A]" />
                                    <span>{course.room}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Classes virtuelles */}
            {activeTab === 'virtual-classes' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#21573A]/10">
                  <h2 className="text-xl font-bold text-[#21573A]">Classes Virtuelles</h2>
                  <p className="text-[#3A3A3A] text-sm">Rejoignez vos cours en ligne</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {virtualClasses.map((class_) => (
                      <div key={class_.id} className="border border-[#21573A]/20 rounded-lg overflow-hidden">
                        <div className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-[#21573A]">{class_.name}</h3>
                              <p className="text-[#3A3A3A] text-sm">{class_.teacher}</p>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs ${
                              class_.status === 'live' 
                                ? 'bg-red-100 text-red-700' 
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {class_.status === 'live' ? 'En direct' : 'À venir'}
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2 text-sm">
                            <Clock className="size-4 text-[#21573A]" />
                            <span>{class_.day}, {class_.time}</span>
                          </div>
                          <Link 
                            href={`/virtual-room/${class_.id}`}
                            className="mt-4 w-full flex items-center justify-center gap-2 bg-[#21573A] text-white py-2 rounded-lg hover:bg-[#1A3A2A] transition-colors"
                          >
                            <Video className="size-4" />
                            <span>Rejoindre la classe</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Contacter un professeur */}
            {activeTab === 'teachers' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#21573A]/10">
                  <h2 className="text-xl font-bold text-[#21573A]">Contacter un Professeur</h2>
                  <p className="text-[#3A3A3A] text-sm">Envoyez un message à vos professeurs</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teachers.map((teacher) => (
                      <div key={teacher.id} className="border border-[#21573A]/20 rounded-lg overflow-hidden">
                        <div className="h-32 bg-[#21573A]/10 flex items-center justify-center">
                          <Users className="size-16 text-[#21573A]/50" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-[#21573A]">{teacher.name}</h3>
                          <p className="text-[#3A3A3A] text-sm">{teacher.subject}</p>
                          <p className="text-[#3A3A3A] text-sm mt-1">{teacher.email}</p>
                          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#21573A] text-white py-2 rounded-lg hover:bg-[#1A3A2A] transition-colors">
                            <MessageSquare className="size-4" />
                            <span>Envoyer un message</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Mes événements */}
            {activeTab === 'events' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#21573A]/10">
                  <h2 className="text-xl font-bold text-[#21573A]">Mes Événements</h2>
                  <p className="text-[#3A3A3A] text-sm">Événements auxquels vous êtes inscrit</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {registeredEvents.map((event) => (
                      <div key={event.id} className="border border-[#21573A]/20 rounded-lg overflow-hidden">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-[#21573A]">{event.title}</h3>
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="size-4 text-[#21573A]" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="size-4 text-[#21573A]" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="size-4 text-[#21573A]" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-between items-center">
                            <Link 
                              href={`/evenements/${event.id}`}
                              className="text-[#21573A] hover:text-[#1A3A2A] text-sm font-medium flex items-center gap-1"
                            >
                              Voir les détails
                              <ChevronRight className="size-4" />
                            </Link>
                            <button className="px-3 py-1 bg-[#21573A]/10 text-[#21573A] rounded-full text-sm">
                              Inscrit
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Messages */}
            {activeTab === 'messages' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#21573A]/10">
                  <h2 className="text-xl font-bold text-[#21573A]">Mes Messages</h2>
                  <p className="text-[#3A3A3A] text-sm">Votre boîte de réception</p>
                </div>
                
                <div className="divide-y divide-[#21573A]/10">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`p-4 hover:bg-[#21573A]/5 transition-colors ${
                        !message.read ? 'bg-[#21573A]/5' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-[#21573A]">{message.sender}</h3>
                          <p className="text-[#3A3A3A]">{message.subject}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#3A3A3A] text-sm">{message.date}</span>
                          {!message.read && (
                            <span className="bg-[#C49B3A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              N
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-2 flex justify-end">
                        <button className="text-[#21573A] hover:text-[#1A3A2A] text-sm font-medium">
                          Lire le message
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Mon solde */}
            {activeTab === 'balance' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#21573A]/10">
                  <h2 className="text-xl font-bold text-[#21573A]">Mon Solde</h2>
                  <p className="text-[#3A3A3A] text-sm">Gérez vos paiements</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#21573A]/10 rounded-lg p-6">
                      <h3 className="text-[#21573A] font-semibold">Total payé</h3>
                      <p className="text-3xl font-bold text-[#21573A] mt-2">{studentBalance.paid}€</p>
                    </div>
                    <div className="bg-[#21573A]/10 rounded-lg p-6">
                      <h3 className="text-[#21573A] font-semibold">Reste à payer</h3>
                      <p className="text-3xl font-bold text-[#21573A] mt-2">{studentBalance.remaining}€</p>
                    </div>
                    <div className="bg-[#21573A]/10 rounded-lg p-6">
                      <h3 className="text-[#21573A] font-semibold">Total</h3>
                      <p className="text-3xl font-bold text-[#21573A] mt-2">{studentBalance.total}€</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 border border-[#21573A]/20 rounded-lg overflow-hidden">
                    <div className="bg-[#21573A] text-white px-4 py-2">
                      <h3 className="font-semibold">Prochain paiement</h3>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[#3A3A3A]">Date d'échéance</p>
                          <p className="font-semibold text-[#21573A]">{studentBalance.nextPayment}</p>
                        </div>
                        <div>
                          <p className="text-[#3A3A3A]">Montant</p>
                          <p className="font-semibold text-[#21573A]">{studentBalance.remaining}€</p>
                        </div>
                      </div>
                      <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#21573A] text-white py-3 rounded-lg hover:bg-[#1A3A2A] transition-colors">
                        <CreditCard className="size-5" />
                        <span>Effectuer le paiement</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 