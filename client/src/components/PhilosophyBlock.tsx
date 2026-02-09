import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/content';

interface PhilosophyBlockProps {
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  quoteKey: string;
  index: number;
  isReverse?: boolean;
}

export default function PhilosophyBlock({
  titleKey,
  descriptionKey,
  imageUrl,
  quoteKey,
  index,
  isReverse = false,
}: PhilosophyBlockProps) {
  const { language, isRTL } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: index * 0.1,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  const reverseClass = isReverse && !isRTL ? 'md:order-2' : '';
  const contentReverseClass = isReverse && !isRTL ? 'md:order-1' : '';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20`}
    >
      {/* Image */}
      <motion.div
        variants={imageVariants}
        className={`relative h-96 rounded-lg overflow-hidden ${reverseClass}`}
      >
        <img
          src={imageUrl}
          alt={t(titleKey, language)}
          className="w-full h-full object-cover"
        />
        {/* Overlay with Quote */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex items-end p-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-accent text-lg md:text-xl font-serif italic leading-relaxed"
          >
            "{t(quoteKey, language)}"
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={itemVariants}
        className={contentReverseClass}
      >
        <motion.h3
          variants={itemVariants}
          className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 leading-tight"
        >
          {t(titleKey, language)}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-foreground/80 text-lg leading-relaxed mb-8 font-serif"
        >
          {t(descriptionKey, language)}
        </motion.p>
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 w-16 bg-accent origin-left"
        />
      </motion.div>
    </motion.div>
  );
}
