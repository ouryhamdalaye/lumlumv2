'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('acceptedCookies') === 'true';
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('acceptedCookies', 'true');
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem('acceptedCookies', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 sm:bottom-4 sm:left-4 p-6 rounded-xl z-50 text-white bg-brand-darkest border border-brand-medium">
      <div>
        <h2 className="pb-4 text-xl font-semibold">Gestion des cookies</h2>
        <p className="pb-4">Nous utilisons des cookies pour améliorer votre expérience.</p>
        <div className="pb-4 flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              className="text-brand-medium focus:ring-brand-medium"
              disabled
              type="checkbox"
              checked
            />
            Cookies nécessaires
          </label>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button
            className="btn btn-dark"
            onClick={acceptCookies}
          >
            Tout accepter
          </button>
          <button
            className="btn btn-light"
            onClick={savePreferences}
          >
            Enregistrer mes préférences
          </button>
        </div>
      </div>
    </div>
  );
}
