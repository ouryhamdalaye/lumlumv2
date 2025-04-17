import { GraduationCap, Users, Clock, Globe, BookOpen, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ClassesVirtuelles() {
  return (
    <main className="min-h-screen bg-[#F8F9F3]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#21573A] text-[#F8F9F3]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Classes Virtuelles
            </h1>
            <p className="text-lg md:text-xl text-[#F8F9F3]/90">
              Étudiez l'arabe et le Coran depuis chez vous, avec des professeurs expérimentés et une communauté active.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-[#21573A]/20 hover:border-[#C49B3A] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#21573A]/10 rounded-full">
                  <GraduationCap className="size-6 text-[#21573A]" />
                </div>
                <h3 className="text-xl font-semibold text-[#21573A]">Cours en Direct</h3>
              </div>
              <p className="text-[#3A3A3A]">
                Suivez vos cours en direct avec vos professeurs et interagissez en temps réel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#21573A]/20 hover:border-[#C49B3A] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#21573A]/10 rounded-full">
                  <Users className="size-6 text-[#21573A]" />
                </div>
                <h3 className="text-xl font-semibold text-[#21573A]">Petits Groupes</h3>
              </div>
              <p className="text-[#3A3A3A]">
                Bénéficiez d'un suivi personnalisé dans des groupes de taille réduite.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#21573A]/20 hover:border-[#C49B3A] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#21573A]/10 rounded-full">
                  <Clock className="size-6 text-[#21573A]" />
                </div>
                <h3 className="text-xl font-semibold text-[#21573A]">Flexibilité</h3>
              </div>
              <p className="text-[#3A3A3A]">
                Choisissez vos horaires et accédez aux replays de vos cours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-[#EFE8DE]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#21573A] text-center mb-12">
            Nos Programmes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#21573A] mb-4">Arabe Débutant</h3>
              <ul className="space-y-3 text-[#3A3A3A]">
                <li className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#C49B3A]" />
                  <span>Alphabet et prononciation</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#C49B3A]" />
                  <span>Grammaire de base</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#C49B3A]" />
                  <span>Conversation simple</span>
                </li>
              </ul>
              <Link 
                href="/inscription" 
                className="mt-6 inline-flex items-center gap-2 text-[#21573A] hover:text-[#C49B3A] transition-colors"
              >
                S'inscrire
                <Calendar className="size-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#21573A] mb-4">Arabe Intermédiaire</h3>
              <ul className="space-y-3 text-[#3A3A3A]">
                <li className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#C49B3A]" />
                  <span>Grammaire avancée</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#C49B3A]" />
                  <span>Compréhension écrite</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#C49B3A]" />
                  <span>Expression orale</span>
                </li>
              </ul>
              <Link 
                href="/inscription" 
                className="mt-6 inline-flex items-center gap-2 text-[#21573A] hover:text-[#C49B3A] transition-colors"
              >
                S'inscrire
                <Calendar className="size-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#21573A] mb-4">Études Coraniques</h3>
              <ul className="space-y-3 text-[#3A3A3A]">
                <li className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#C49B3A]" />
                  <span>Récitation du Coran</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#C49B3A]" />
                  <span>Tafsir</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#C49B3A]" />
                  <span>Sciences coraniques</span>
                </li>
              </ul>
              <Link 
                href="/inscription" 
                className="mt-6 inline-flex items-center gap-2 text-[#21573A] hover:text-[#C49B3A] transition-colors"
              >
                S'inscrire
                <Calendar className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#21573A] mb-6">
              Prêt à commencer votre apprentissage ?
            </h2>
            <p className="text-lg text-[#3A3A3A] mb-8">
              Rejoignez notre communauté d'étudiants et commencez votre voyage dans l'apprentissage de l'arabe et du Coran.
            </p>
            <Link 
              href="/inscription" 
              className="inline-flex items-center gap-2 bg-[#21573A] text-white px-8 py-3 rounded-lg hover:bg-[#1A3A2A] transition-colors"
            >
              S'inscrire maintenant
              <Globe className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 