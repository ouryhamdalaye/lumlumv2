import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';


const teachers = [
  {
    name: 'Seikh Khaled Steinmann',
    role: 'Enseignant de Sira',
    formation: 'Étudiant de longue date des sciences islamiques, il a suivi une formation traditionnelle (talaqqi) auprès de savants en Égypte et se spécialise dans la biographie prophétique.',
    position: 'Directeur de Ulum',
    image: '/images/teacherMen2.png'
  },
  {
    name: 'Seikh Ahmed Benyamina',
    role: 'Enseignant en langue arabe',
    formation: 'Diplômé de l’Université Islamique de Médine en langue arabe, il enseigne depuis plus de 15 ans dans des instituts francophones.',
    position: 'Reponsable département Langue Arabe',
    image: '/images/teacherMen1.png'
  },
  {
    name: 'Ustadha Amel El-Khattabi',
    role: 'Enseignante en langue arabe',
    formation: 'Titulaire d’un Master en didactique des langues, elle a étudié la langue arabe au Maroc et au Liban, et anime des ateliers pour femmes depuis 10 ans.',
    position: 'Reponsable centre de recherche et co-fondatrice d\'Ulum',
    image: '/images/teacherWoman1.png'
  },
  {
    name: 'Ustadha Fatima Zahra Maïnassara',
    role: 'Enseignante de Coran',
    formation: 'Hafidha du Coran avec ijaza en tajwid, elle enseigne le Coran aux enfants et aux adultes depuis 8 ans dans divers centres islamique en France.',
    position: 'Reponsable département Coran',
    image: '/images/teacherWoman2.png'
  },
  {
    name: 'Seikh Idriss Chérif',
    role: 'Enseignant de sciences religieuses',
    formation: 'Formé entre la Mauritanie et le Qatar, il a étudié le fiqh malikite et la aqida ashariyya, et intervient régulièrement lors de conférences et séminaires.',
    position: 'Reponsable département Sciences religieuses',
    image: '/images/teacherMen3.png'
  },
  {
    name: 'Youssef Abdelrahman',
    role: 'Enseignant de Coran',
    formation: 'Jeune diplômé d’Al-Azhar (Le Caire), il a mémorisé le Coran très jeune et a étudié le tajwid ainsi que les règles de récitation auprès de cheikhs égyptiens. Il anime aujourd’hui des sessions pour les jeunes adultes en quête de bases solides',
    position: 'Assistant du département Coran',
    image: '/images/teacherMen4.png'
  }
];

export default function TeachersSection() {
  return (
    <section id="equipe-pedagogique" className="py-24 bg-[#F8F9F3]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#21573A]">ÉCHANGEZ AVEC DES ENSEIGNANTS QUALIFIÉS</h2>
          <p className="text-xl mb-8 text-[#3A3A3A]">
            J'étudie auprès de professeurs diplômés en sciences islamiques et en enseignement du Coran.
          </p>
          <p className="text-[#3A3A3A] max-w-3xl mx-auto">
            L'Institut Ulum est né de la volonté d'enseignants spécialisés en sciences islamiques et dans l'étude du Coran, passionnés par la transmission d'un savoir authentique et vivant. Nous proposons des formations linguistiques et spirituelles de qualité, adaptées à celles et ceux qui souhaitent enrichir leur expression personnelle tout en renforçant leur cheminement spirituel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher) => (
            <div key={teacher.name} className="bg-[#F8F9F3] rounded-xl overflow-hidden shadow-lg hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#21573A]">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#21573A]">{teacher.name}</h3>
                    <p className="text-sm text-[#C49B3A] font-medium">{teacher.role}</p>
                    <p className="text-sm text-[#3A3A3A]">{teacher.position}</p>
                  </div>
                </div>
                <p className="text-sm text-[#3A3A3A]">{teacher.formation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-16">
          <Link 
            href="/equipe-pedagogique" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#21573A] text-[#F8F9F3] rounded-lg hover:bg-[#21573A]/90 transition-colors"
          >
            <span className="font-medium">EN SAVOIR PLUS SUR L'ÉQUIPE</span>
            <ChevronRight className="size-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F8F9F3] p-6 rounded-xl border border-[#21573A] hover:bg-[#F8F9F3]/80 transition-colors">
            <h3 className="text-lg font-bold mb-4 text-[#21573A]">Apprenez depuis chez vous</h3>
            <p className="text-[#3A3A3A]">
            Suivez des cours interactifs en ligne et participez à des classes virtuelles en direct.
            </p>
          </div>
          <div className="bg-[#F8F9F3] p-6 rounded-xl border border-[#21573A] hover:bg-[#F8F9F3]/80 transition-colors">
            <h3 className="text-lg font-bold mb-4 text-[#21573A]">Des enseignants passionnés</h3>
            <p className="text-[#3A3A3A]">
            Profitez de supports pédagogiques soigneusement conçus par des professeurs qualifiés, expérimentés et motivés.
            </p>
          </div>
          <div className="bg-[#F8F9F3] p-6 rounded-xl border border-[#21573A] hover:bg-[#F8F9F3]/80 transition-colors">
            <h3 className="text-lg font-bold mb-4 text-[#21573A]">Une approche immersive</h3>
            <p className="text-[#3A3A3A]">
            Développez vos compétences linguistiques et enrichissez votre parcours spirituel grâce à un apprentissage ancré dans les sciences islamiques et l’étude du Coran.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
