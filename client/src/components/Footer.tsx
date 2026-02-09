import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/content';

export default function Footer() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold tracking-widest text-accent mb-4">TCHUNGU</h3>
            <p className="text-foreground/70 font-serif">{t('footer.philosophy', language)}</p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-serif font-bold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-foreground/70 hover:text-accent transition-colors duration-300 font-serif"
                >
                  {t('nav.home', language)}
                </a>
              </li>
              <li>
                <a
                  href="#philosophy"
                  className="text-foreground/70 hover:text-accent transition-colors duration-300 font-serif"
                >
                  {t('nav.philosophy', language)}
                </a>
              </li>
              <li>
                <a
                  href="#founder"
                  className="text-foreground/70 hover:text-accent transition-colors duration-300 font-serif"
                >
                  {t('nav.founder', language)}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-serif font-bold text-foreground mb-4">
              {t('nav.contact', language)}
            </h4>
            <p className="text-foreground/70 font-serif">
              For inquiries about TCHUNGU philosophy and practice.
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-border mb-8 origin-left"
        />

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <p className="text-foreground/60 text-sm font-serif">
            © 2026 TCHUNGU Philosophy. {t('footer.rights', language)}.
          </p>
          <p className="text-foreground/50 text-xs font-serif mt-2">
            Founded by Bouabid Charkaoui | A Digital Gateway to Existential Harmony
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
