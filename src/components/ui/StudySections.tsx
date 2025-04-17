import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function StudySection() {
  return (
    <section className="py-24 bg-[#EFE8DE]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          <div className="flex-auto">
            <h2 className="text-4xl lg:text-5xl text-[#21573A] font-bold mb-6">
              Étudiez depuis chez vous
            </h2>
            <p className="text-lg text-[#3A3A3A] mb-8">
              Accédez à nos cours en ligne et étudiez à votre rythme. Nos professeurs sont disponibles pour vous accompagner dans votre apprentissage.
            </p>
            <Link
              href="/classes-virtuelles"
              className="inline-flex items-center gap-2 text-[#21573A] hover:text-[#C49B3A] transition-colors"
            >
              <span className="text-lg font-medium">Découvrir nos cours</span>
              <ChevronRight className="size-5" />
            </Link>
          </div>

          <div className="flex-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-[#21573A] bg-[#F8F9F3] hover:bg-[#EFE8DE] transition-colors">
                <h3 className="text-xl font-semibold text-[#21573A] mb-4">Cours en direct</h3>
                <p className="text-[#3A3A3A]">
                  Suivez nos cours en direct et interagissez avec nos professeurs en temps réel.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[#21573A] bg-[#F8F9F3] hover:bg-[#EFE8DE] transition-colors">
                <h3 className="text-xl font-semibold text-[#21573A] mb-4">Cours enregistrés</h3>
                <p className="text-[#3A3A3A]">
                  Accédez à nos cours enregistrés et étudiez à votre rythme, quand vous le souhaitez.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[#21573A] bg-[#F8F9F3] hover:bg-[#EFE8DE] transition-colors">
                <h3 className="text-xl font-semibold text-[#21573A] mb-4">Support pédagogique</h3>
                <p className="text-[#3A3A3A]">
                  Bénéficiez d'un support pédagogique personnalisé pour vous accompagner dans votre apprentissage.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[#21573A] bg-[#F8F9F3] hover:bg-[#EFE8DE] transition-colors">
                <h3 className="text-xl font-semibold text-[#21573A] mb-4">Communauté</h3>
                <p className="text-[#3A3A3A]">
                  Rejoignez notre communauté d'étudiants et échangez avec d'autres apprenants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 