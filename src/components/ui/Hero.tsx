import { ChevronsDown } from 'lucide-react';

export default function Hero() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #F8F9F3 0%, rgba(248, 249, 243, 0.00) 36.12%, rgba(248, 249, 243, 0.00) 53.94%, #F8F9F3 98.55%), url(https://ext.same-assets.com/1333416088/1396220006.png) #F8F9F3",
        backgroundBlendMode: "normal, luminosity, normal"
      }}
      className="flex flex-col items-center justify-center w-full lg:h-screen text-[#3A3A3A] pt-6 pb-12 lg:pb-0"
    >
      <div className="w-full container">
        <div className="flex flex-col lg:flex-col gap-8 lg:items-center justify-center pb-12">
          <div className="w-full md:w-1/2 mx-auto bg-red-500/20 backdrop-blur-sm p-3 rounded-lg text-center text-red-800 font-medium">
            Ceci est une maquette de présentation. Elle a pour but de vous donner un aperçu du design et de l'expérience utilisateur proposés pour le site. Les éléments sont modifiables selon vos préférences. Toutes les informations sont fictives.
          </div>
          <h1 className="py-2 text-[#21573A] uppercase font-semibold text-center lg:text-left text-lg">
            Étudiez partout où vous êtes
          </h1>
          <h1 className="text-center text-[#3A3A3A]">Arabe, Coran et sciences</h1>

          <p className="hidden md:block text-5xl bg-gradient-to-r text-[#21573A] font-arabic leading-[1]" lang="ar">دار العلم</p>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            <ChevronsDown className="size-10 text-[#21573A]" />
          </div>
        </div>
      </div>
    </div>
  );
}
