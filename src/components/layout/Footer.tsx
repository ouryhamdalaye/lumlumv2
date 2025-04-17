import Link from 'next/link';
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter, 
  ArrowRight, 
  Heart, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Users, 
  User, 
  FileText, 
  Shield, 
  Scale
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F8F9F3] text-[#F8F9F3]">
      <div className="py-16">
        <div className="container">
          <div className="bg-[#21573A]/80 p-8 rounded-xl border border-[#C49B3A]/30 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <h2 className="text-2xl font-bold text-[#F8F9F3]">
                Vous souhaitez soutenir l'institut Ulum ?
              </h2>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                <div className="border-r border-[#C49B3A]/30 pr-6">
                  <div className="mb-6">
                    <p className="text-[#C49B3A] font-medium mb-4">AIDER ULUM</p>
                    <p className="text-[#F8F9F3]/90">
                      Contribuez au développement des formations linguistiques en participant à la cagnotte dédiée à l'institut.
                    </p>
                  </div>
                  <Link 
                    href="/dons?cause=institut" 
                    className="inline-flex items-center gap-2 text-[#F8F9F3] hover:text-[#C49B3A] transition-colors"
                  >
                    <span>Faire un don à Ulum</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div>
                  <div className="mb-6">
                    <p className="text-[#C49B3A] font-medium mb-4">AIDER LES ÉTUDIANTS</p>
                    <p className="text-[#F8F9F3]/90">
                      Facilitez l'accès aux formations pour celles et ceux qui rencontrent des difficultés de financement.
                    </p>
                  </div>
                  <Link 
                    href="/dons?cause=etudiant" 
                    className="inline-flex items-center gap-2 text-[#F8F9F3] hover:text-[#C49B3A] transition-colors"
                  >
                    <span>Faire un don aux étudiants</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A3A2A] py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <p className="text-[#F8F9F3]/90 mb-6 text-justify">L'Institut Ulum est né de la volonté d'enseignants spécialisés en sciences islamiques et dans l'étude du Coran, passionnés par la transmission d'un savoir authentique et vivant. Nous proposons des formations linguistiques et spirituelles de qualité, adaptées à celles et ceux qui souhaitent enrichir leur expression personnelle tout en renforçant leur cheminement spirituel.Nous enseignons la langue arabe et le Coran lors de formations immersives accessibles en ligne.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/massalikululum" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#F8F9F3] hover:text-[#C49B3A] transition-colors"
                >
                  <Instagram className="size-6" />
                </a>
                <a 
                  href="https://www.youtube.com/@Massalikululum/featured" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#F8F9F3] hover:text-[#C49B3A] transition-colors"
                >
                  <Youtube className="size-6" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61558684542044" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#F8F9F3] hover:text-[#C49B3A] transition-colors"
                >
                  <Facebook className="size-6" />
                </a>
                <a 
                  href="https://twitter.com/massalikululum" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#F8F9F3] hover:text-[#C49B3A] transition-colors"
                >
                  <Twitter className="size-6" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-2/3">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-[#C49B3A] mb-2">Navigation</h3>
                <Link href="/classes-virtuelles" className="text-[#F8F9F3]/90 hover:text-[#C49B3A] transition-colors flex items-center gap-2">
                  <GraduationCap className="size-4" />
                  <span>Classes virtuelles</span>
                </Link>
                <Link href="/produits" className="text-[#F8F9F3]/90 hover:text-[#C49B3A] transition-colors flex items-center gap-2">
                  <BookOpen className="size-4" />
                  <span>Ressources en ligne</span>
                </Link>
                <Link href="/evenements" className="text-[#F8F9F3]/90 hover:text-[#C49B3A] transition-colors flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>Événements</span>
                </Link>
                <Link href="/equipe-pedagogique" className="text-[#F8F9F3]/90 hover:text-[#C49B3A] transition-colors flex items-center gap-2">
                  <Users className="size-4" />
                  <span>Équipe pédagogique</span>
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-[#C49B3A] mb-2">Légal</h3>
                <Link href="/conditions-generales-de-vente" className="text-[#F8F9F3]/90 hover:text-[#C49B3A] transition-colors flex items-center gap-2">
                  <FileText className="size-4" />
                  <span>Conditions Générales de Vente</span>
                </Link>
                <Link href="/politique-de-confidentialite" className="text-[#F8F9F3]/90 hover:text-[#C49B3A] transition-colors flex items-center gap-2">
                  <Shield className="size-4" />
                  <span>Politique de confidentialité</span>
                </Link>
                <Link href="/mentions-legales" className="text-[#F8F9F3]/90 hover:text-[#C49B3A] transition-colors flex items-center gap-2">
                  <Scale className="size-4" />
                  <span>Mentions légales</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#C49B3A]/30 text-center text-[#F8F9F3]/70 text-sm">
            <p>© 2024 · Ulum · Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
