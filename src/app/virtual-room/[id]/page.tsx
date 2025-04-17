'use client';

import { useState } from 'react';
import { use } from 'react';
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  MessageSquare, 
  Users, 
  X, 
  ChevronLeft,
  Settings,
  Share
} from 'lucide-react';
import Link from 'next/link';

export default function VirtualRoom({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  
  // Données fictives pour la classe virtuelle
  const virtualClass = {
    id: resolvedParams.id,
    name: "Arabe Débutant - Niveau 1",
    teacher: "Prof. Leila Benali",
    time: "10:00 - 11:30",
    day: "Lundi",
    participants: [
      { id: 1, name: "Prof. Leila Benali", role: "teacher", isSpeaking: true },
      { id: 2, name: "Ahmed Benali", role: "student", isSpeaking: false },
      { id: 3, name: "Fatima Al-Sabah", role: "student", isSpeaking: false },
      { id: 4, name: "Karim Hassan", role: "student", isSpeaking: false },
      { id: 5, name: "Yasmine El-Maghrabi", role: "student", isSpeaking: false },
      { id: 6, name: "Mohammed Al-Rashid", role: "student", isSpeaking: false },
      { id: 7, name: "Leila Benali", role: "student", isSpeaking: false },
      { id: 8, name: "Hassan Al-Sabah", role: "student", isSpeaking: false }
    ],
    messages: [
      { id: 1, sender: "Prof. Leila Benali", content: "Bonjour à tous ! Bienvenue dans notre cours d'arabe débutant.", time: "10:00" },
      { id: 2, sender: "Ahmed Benali", content: "Bonjour professeur !", time: "10:01" },
      { id: 3, sender: "Fatima Al-Sabah", content: "Bonjour !", time: "10:01" },
      { id: 4, sender: "Prof. Leila Benali", content: "Aujourd'hui, nous allons apprendre les salutations de base en arabe.", time: "10:02" },
      { id: 5, sender: "Karim Hassan", content: "Super !", time: "10:03" }
    ]
  };
  
  // Fonction pour quitter la classe
  const handleLeaveClass = () => {
    // Rediriger vers l'espace étudiant
    window.location.href = '/mon-espace-etudiant';
  };
  
  return (
    <main className="min-h-screen bg-[#F8F9F3]">
      {/* Header */}
      <header className="bg-white border-b border-[#21573A]/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/mon-espace-etudiant" 
                className="text-[#21573A] hover:text-[#1A3A2A] transition-colors"
              >
                <ChevronLeft className="size-6" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-[#21573A]">{virtualClass.name}</h1>
                <p className="text-[#3A3A3A] text-sm">{virtualClass.teacher}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-[#21573A] hover:text-[#1A3A2A] transition-colors">
                <Settings className="size-5" />
              </button>
              <button className="text-[#21573A] hover:text-[#1A3A2A] transition-colors">
                <Share className="size-5" />
              </button>
              <button 
                onClick={handleLeaveClass}
                className="text-[#21573A] hover:text-[#1A3A2A] transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Video Area */}
          <div className="flex-1">
            <div className="bg-[#3A3A3A] rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <Video className="size-24 text-white/50" />
            </div>
            
            {/* Controls */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className={`p-3 rounded-full ${
                  isMuted 
                    ? 'bg-red-500 text-white' 
                    : 'bg-[#21573A] text-white'
                }`}
              >
                {isMuted ? <MicOff className="size-5" /> : <Mic className="size-5" />}
              </button>
              <button 
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`p-3 rounded-full ${
                  isVideoOff 
                    ? 'bg-red-500 text-white' 
                    : 'bg-[#21573A] text-white'
                }`}
              >
                {isVideoOff ? <VideoOff className="size-5" /> : <Video className="size-5" />}
              </button>
              <button 
                onClick={() => setIsChatOpen(!isChatOpen)}
                className={`p-3 rounded-full ${
                  isChatOpen 
                    ? 'bg-[#C49B3A] text-white' 
                    : 'bg-[#21573A] text-white'
                }`}
              >
                <MessageSquare className="size-5" />
              </button>
              <button 
                onClick={() => setIsParticipantsOpen(!isParticipantsOpen)}
                className={`p-3 rounded-full ${
                  isParticipantsOpen 
                    ? 'bg-[#C49B3A] text-white' 
                    : 'bg-[#21573A] text-white'
                }`}
              >
                <Users className="size-5" />
              </button>
            </div>
          </div>
          
          {/* Sidebar - Chat or Participants */}
          <div className={`w-full lg:w-80 transition-all duration-300 ${
            isChatOpen || isParticipantsOpen ? 'opacity-100' : 'opacity-0 hidden lg:block'
          }`}>
            {isChatOpen && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[600px] flex flex-col">
                <div className="p-4 border-b border-[#21573A]/10">
                  <h2 className="font-semibold text-[#21573A]">Chat</h2>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {virtualClass.messages.map((message) => (
                    <div key={message.id} className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#21573A]">{message.sender}</span>
                        <span className="text-[#3A3A3A] text-xs">{message.time}</span>
                      </div>
                      <p className="text-[#3A3A3A] mt-1">{message.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-[#21573A]/10">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Écrivez votre message..." 
                      className="flex-1 px-3 py-2 border border-[#21573A]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                    />
                    <button className="bg-[#21573A] text-white px-4 py-2 rounded-lg hover:bg-[#1A3A2A] transition-colors">
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {isParticipantsOpen && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[600px] flex flex-col">
                <div className="p-4 border-b border-[#21573A]/10">
                  <h2 className="font-semibold text-[#21573A]">Participants ({virtualClass.participants.length})</h2>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-3">
                    {virtualClass.participants.map((participant) => (
                      <li key={participant.id} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#21573A]/10 flex items-center justify-center">
                          <span className="text-[#21573A] font-medium">
                            {participant.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-[#21573A]">{participant.name}</span>
                            {participant.role === 'teacher' && (
                              <span className="bg-[#C49B3A] text-white text-xs px-2 py-0.5 rounded-full">
                                Professeur
                              </span>
                            )}
                          </div>
                          {participant.isSpeaking && (
                            <span className="text-[#21573A] text-xs">Parle en ce moment</span>
                          )}
                        </div>
                        {participant.isSpeaking && (
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 