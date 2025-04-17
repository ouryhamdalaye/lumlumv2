'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {  SquareUserRound, MonitorPlay, CalendarDays, Menu, X, ChevronRight, User, Calendar, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Fermer le menu
    setIsMenuOpen(false);
    
    // Récupérer l'ID de la section cible
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      // Faire défiler jusqu'à la section
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  // Fonction pour générer le lien approprié selon la page actuelle
  const getSectionLink = (sectionId: string) => {
    if (isHomePage) {
      return `#${sectionId}`;
    } else {
      return `/#${sectionId}`;
    }
  };

  return (
    <header className={`h-[7.5rem] p-6 flex items-center justify-between fixed top-0 left-0 w-full z-[999] transition-colors shadow-[0_4px_20px_-4px_rgba(33,87,58,0.1)]
    ${isMenuOpen ? 'bg-[#EFE8DE] duration-0' 
      : 'bg-[#F8F9F3] duration-300'}
    `}>
      <Link href="/" className="h-full aspect-square rounded-full border border-[#21573A]">
        <Image
          src="/images/logo-ulum.png"
          alt="Maquette Uloum"
          width={300}
          height={300}
          className="w-full h-full object-contain"
        />
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="hidden md:flex btn btn-dark rounded-md border border-[#21573A] px-6 py-2 gap-2 bg-[#21573A] text-[#F8F9F3] hover:bg-[#21573A]/90"
          onClick={handleLinkClick}
        >
          <SquareUserRound className="size-8" />
          <span className="hidden lg:inline-block">SE CONNECTER</span>
        </Link>

        <Link
          href="/classes-virtuelles"
          aria-label="classes virtuelles"
          className="hidden md:flex btn-icon btn-dark rounded-md border border-[#21573A] px-4 gap-2 text-white hover:bg-[#21573A] hover:text-[#F8F9F3]"
          onClick={handleLinkClick}
        >
          <MonitorPlay className="size-6" />
          <span className="hidden lg:inline-block">CLASSES VIRTUELLES</span>
        </Link>

        <Link
          href="/evenements"
          aria-label="événements"
          className="flex btn-icon btn-dark rounded-md border border-[#21573A] px-4 gap-2 text-white hover:bg-[#21573A] hover:text-[#F8F9F3]"
          onClick={handleLinkClick}
        >
          <CalendarDays className="size-6" />
          <span className="hidden lg:inline-block">ÉVÉNEMENTS</span>
        </Link>

      <button
        aria-label="open nav"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-[#21573A]"
      >
        <span className="inline-flex justify-center items-center size-12 p-3 group">
          <span className="inline-flex flex-col justify-between items-center gap-1 size-8 py-2">
            <span className={`burger-line bg-[#21573A] ${isMenuOpen ? 'rotate-45 translate-y-[0.4rem]' : ''}`} />
            <span className={`burger-line bg-[#21573A] ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`burger-line bg-[#21573A] ${isMenuOpen ? '-rotate-45 -translate-y-[0.4rem]' : ''}`} />
          </span>
        </span>
      </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-[7.5rem] bg-[#EFE8DE] z-[998] p-6">
          <div className="container mx-auto">
            
            <div className="flex flex-col gap-8 text-[#3A3A3A] max-w-md mx-auto">
              <Link href="/classes-virtuelles" className="text-2xl hover:text-[#21573A] text-center" onClick={handleLinkClick}>
                Classes virtuelles
              </Link>
              <Link href="/ressources-en-ligne" className="text-2xl hover:text-[#21573A] text-center" onClick={handleLinkClick}>
                Ressources en ligne
              </Link>
              <Link href="/evenements" className="text-2xl hover:text-[#21573A] text-center" onClick={handleLinkClick}>
                Événements
              </Link>
              <Link href={getSectionLink('equipe-pedagogique')} className="text-2xl hover:text-[#21573A] text-center" onClick={handleLinkClick}>
                Équipe pédagogique
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
