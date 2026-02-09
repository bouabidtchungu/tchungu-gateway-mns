import { useLanguage } from '@/contexts/LanguageContext';
import { t, Language } from '@/lib/content';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const { language, setLanguage, isRTL } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold tracking-widest text-accent"
        >
          TCHUNGU
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground/80 hover:text-accent transition-colors duration-300 text-sm tracking-wide"
          >
            {t('nav.home', language)}
          </motion.a>
          <motion.a
            href="#philosophy"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/80 hover:text-accent transition-colors duration-300 text-sm tracking-wide"
          >
            {t('nav.philosophy', language)}
          </motion.a>
          <motion.a
            href="#founder"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground/80 hover:text-accent transition-colors duration-300 text-sm tracking-wide"
          >
            {t('nav.founder', language)}
          </motion.a>
        </div>

        {/* Language Switcher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-card transition-colors duration-300 text-sm"
          >
            <span className="font-medium">{language.toUpperCase()}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {showLangMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 bg-card border border-border rounded-md overflow-hidden shadow-lg"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setShowLangMenu(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors duration-200 ${
                    language === lang.code ? 'text-accent font-semibold' : 'text-foreground/80'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </nav>
  );
}
