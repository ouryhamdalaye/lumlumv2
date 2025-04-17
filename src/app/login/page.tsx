'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler un délai de chargement
    setTimeout(() => {
      setIsLoading(false);
      // Rediriger vers mon-espace-etudiant
      router.push('/mon-espace-etudiant');
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#F8F9F3] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-[#21573A] mb-2 text-center">Connexion</h1>
            <p className="text-[#3A3A3A] mb-8 text-center">
              Connectez-vous pour avoir accès à vos cours en ligne
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#3A3A3A] mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="size-5 text-[#21573A]/50" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-[#21573A]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#3A3A3A] mb-1">
                  Mot de passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="size-5 text-[#21573A]/50" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-[#21573A]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21573A]/50"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#21573A] focus:ring-[#21573A] border-[#21573A]/30 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[#3A3A3A]">
                    Se souvenir de moi
                  </label>
                </div>
                
                <div className="text-sm">
                  <a href="#" className="font-medium text-[#21573A] hover:text-[#1A3A2A]">
                    Mot de passe oublié?
                  </a>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[#21573A] text-white py-3 rounded-lg hover:bg-[#1A3A2A] transition-colors disabled:opacity-70"
              >
                {isLoading ? (
                  <span>Connexion en cours...</span>
                ) : (
                  <>
                    <span>Se connecter</span>
                    <ArrowRight className="size-5" />
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-[#3A3A3A]">
                Pas encore de compte?{' '}
                <a href="#" className="font-medium text-[#21573A] hover:text-[#1A3A2A]">
                  Créer un compte
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 