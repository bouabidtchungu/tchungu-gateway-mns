import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/content';

export default function FounderSection() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const researchAreas = [
    'founder.research1',
    'founder.research2',
    'founder.research3',
    'founder.research4',
    'founder.research5',
    'founder.research6',
    'founder.research7',
    'founder.research8',
    'founder.research9',
  ];

  return (
    <section id="founder" className="py-32 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-full h-96 bg-primary/5 blur-3xl"
        />
      </div>

      <div className="container max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4"
          >
            {t('founder.title', language)}
          </motion.h2>

          {/* Name */}
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-serif text-accent mb-2"
          >
            {t('founder.name', language)}
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 font-serif mb-8"
          >
            {t('founder.subtitle', language)}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-20 bg-accent mb-12 origin-left"
          />

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/80 font-serif leading-relaxed mb-12"
          >
            {t('founder.bio', language)}
          </motion.p>

          {/* Research Focus */}
          <motion.div variants={itemVariants}>
            <h4 className="text-2xl font-serif font-bold text-foreground mb-8">
              {t('founder.research', language)}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground/80 font-serif">{t(area, language)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 border-l-4 border-accent bg-background/50 rounded-r-lg"
          >
            <p className="text-lg text-foreground/80 font-serif italic leading-relaxed">
              "TCHUNGU is not a legacy, but a living philosophy. It evolves with those who embrace it, adapts to those who practice it, and transforms those who understand it."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
