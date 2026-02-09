import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/content';

export default function Hero() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card -z-10" />

      {/* Decorative elements */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-4xl text-center z-10 relative"
      >
        {/* Main Statement */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight"
        >
          {t('hero.main', language)}
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 w-20 bg-accent mx-auto mb-8"
        />

        {/* Substatement */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-foreground/80 font-serif leading-relaxed mb-12"
        >
          {t('hero.sub', language)}
        </motion.p>

        {/* CTA */}
        <motion.a
          variants={itemVariants}
          href="#philosophy"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-md font-serif font-bold tracking-wide hover:bg-accent/90 transition-colors duration-300"
        >
          {t('nav.philosophy', language)}
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
