import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/lib/content';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get language from localStorage or browser preference
    const saved = localStorage.getItem('tchungu-language') as Language | null;
    if (saved && ['en', 'fr', 'ar'].includes(saved)) {
      setLanguageState(saved);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'fr' || browserLang === 'ar') {
        setLanguageState(browserLang as Language);
      }
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('tchungu-language', lang);
  };

  const isRTL = language === 'ar';

  // Apply RTL to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language, isRTL, mounted]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
