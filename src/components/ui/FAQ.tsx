'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Qu'est-ce que l'immersion chez Ulum ?",
    answer: "L'immersion chez Ulum est une expérience unique qui plonge ses étudiants dans la langue arabe, en activant plusieurs sens comme l'ouïe et la vue. Cela permet d'enrichir l'apprentissage et de vivre pleinement chaque cours."
  },
  {
    question: "Ulum offre-t-il des tarifs compétitifs ?",
    answer: "Oui, Ulum propose des tarifs parmi les plus compétitifs du marché pour l'apprentissage de l'arabe et du Coran. Nous croyons en l'accessibilité de l'éducation religieuse et linguistique de qualité, c'est pourquoi nous nous efforçons de rendre nos programmes abordables pour tous. Ainsi, vous pouvez bénéficier d'une formation complète et enrichissante sans vous soucier de votre budget."
  },
  {
    question: "Combien de temps me faut-il pour parler la langue arabe ?",
    answer: "Il faut 1 an à un étudiant de Ulum pour pouvoir s'exprimer et comprendre des conversations courantes. En gravissant les échelons de la langue arabe, cette langue n'aura plus de secrets pour vous."
  },
  {
    question: "Quels avantages puis-je attendre de la fin des cursus de langue arabe et de Coran ?",
    answer: "A la fin du cursus arabe, il sera possible pour l'étudiant de comprendre la quasi-totalité des discussions en arabe et de pouvoir s'exprimer clairement sur des sujets divers. En Coran, un étudiant assidu et suivant un rythme raisonnable, pourra réciter entièrement le Coran de manière fluide et sans erreurs (de mémoire)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F8F9F3] py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#21573A]">POURQUOI CHOISIR ULUM ?</h2>
          <h3 className="text-2xl mb-10 text-[#3A3A3A]">Les questions fréquentes.</h3>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={item.question} className="mb-6">
              <button
                className="w-full text-left p-5 bg-[#F8F9F3] rounded-lg border border-[#21573A] shadow-sm flex justify-between items-center hover:bg-[#EFE8DE] transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold text-[#21573A]">{item.question}</span>
                <span className="text-[#21573A]">
                  {openIndex === index ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-5 bg-[#F8F9F3] rounded-b-lg mt-1 border border-[#21573A] border-t-0">
                  <p className="text-[#3A3A3A]">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
