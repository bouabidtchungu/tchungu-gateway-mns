export type Language = 'en' | 'fr' | 'ar';

export interface PhilosophyBlock {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  philosophyQuote: Record<Language, string>;
}

export interface PageContent {
  hero: {
    mainStatementKey: string;
    substatementKey: string;
  };
  philosophy: {
    titleKey: string;
    descriptionKey: string;
    blocks: PhilosophyBlock[];
  };
  founder: {
    titleKey: string;
    nameKey: string;
    bioKey: string;
    yearsKey: string;
    researchAreasKey: string[];
  };
  navigation: {
    homeKey: string;
    philosophyKey: string;
    founderKey: string;
    contactKey: string;
  };
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.philosophy': 'Philosophy',
    'nav.founder': 'Founder',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.main': 'We do not teach movement.\nWe redefine your relationship with the world.',
    'hero.sub': 'TCHUNGU is not a martial art, not a sport, not a technique.\nIt is a system of existential harmony between self, movement, mind, spirit, and environment.',

    // Philosophy Section
    'philosophy.title': 'The Philosophy of Harmony',
    'philosophy.description': 'TCHUNGU emerges from over 50 years of research into the mechanisms of consciousness, adaptation, and existential integration. It represents a shift from "take and apply" to "understand, adapt, harmonize, and integrate."',

    // Philosophy Blocks
    'philosophy.harmony.title': 'Harmony Over Control',
    'philosophy.harmony.description': 'Harmony is stronger than control. True mastery lies not in dominating your environment, but in flowing with it.',
    'philosophy.harmony.quote': 'Harmony is stronger than control',

    'philosophy.adaptation.title': 'Adaptation Over Resistance',
    'philosophy.adaptation.description': 'Resistance creates friction. Adaptation creates flow. The universe is in constant change; consciousness evolves through adaptation.',
    'philosophy.adaptation.quote': 'Adaptation is higher than resistance',

    'philosophy.understanding.title': 'Understanding Over Technique',
    'philosophy.understanding.description': 'Technique is the language of the body. Understanding is the language of consciousness. We teach understanding.',
    'philosophy.understanding.quote': 'Understanding is deeper than technique',

    'philosophy.integration.title': 'Integration Over Confrontation',
    'philosophy.integration.description': 'Confrontation creates separation. Integration creates unity. We do not change the world; we integrate with it.',
    'philosophy.integration.quote': 'Integration is stronger than confrontation',

    'philosophy.impermanence.title': 'Impermanence Over Fixity',
    'philosophy.impermanence.description': 'Fixity is an illusion. Change is the only constant. Consciousness emerges through the acceptance of impermanence.',
    'philosophy.impermanence.quote': 'Fixity is illusion. Adaptation is consciousness.',

    'philosophy.movement.title': 'Movement as Language',
    'philosophy.movement.description': 'Movement is the language of the universe. Every gesture, every breath, every moment is a conversation with existence.',
    'philosophy.movement.quote': 'Movement is the language of the cosmos',

    'philosophy.self.title': 'Self-Mastery',
    'philosophy.self.description': 'True mastery begins with understanding yourself. Your body, your mind, your spirit, your place in the world.',
    'philosophy.self.quote': 'Self-mastery is the foundation of harmony',

    'philosophy.awareness.title': 'Dynamic Awareness',
    'philosophy.awareness.description': 'Consciousness is movement within movement. Awareness is not static; it flows, adapts, and evolves.',
    'philosophy.awareness.quote': 'Consciousness is movement within movement',

    'philosophy.chaos.title': 'Order Within Chaos',
    'philosophy.chaos.description': 'Chaos is not disorder; it is order not yet understood. We learn to navigate the randomness with conscious presence.',
    'philosophy.chaos.quote': 'Randomness is a system not yet understood',

    // Founder Section
    'founder.title': 'The Founder',
    'founder.name': 'Bouabid Charkaoui',
    'founder.subtitle': 'Philosopher, Researcher, Visionary',
    'founder.bio': 'Over 50 years of deep research into the mechanisms of consciousness, balance, and existential adaptation. Bouabid Charkaoui has dedicated his life to understanding the fundamental principles of harmony between self and world.',
    'founder.research': 'Research Focus',
    'founder.research1': 'Rationalization of the self',
    'founder.research2': 'Mechanisms of balance',
    'founder.research3': 'Control of stability',
    'founder.research4': 'Motor adaptation',
    'founder.research5': 'Harmony with changing environment',
    'founder.research6': 'Liberation from rigid models',
    'founder.research7': 'Building understanding over repetition',
    'founder.research8': 'Dynamic consciousness',
    'founder.research9': 'Existential integration',

    // Footer
    'footer.philosophy': 'A philosophical system of existential harmony',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved',
  },

  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.philosophy': 'Philosophie',
    'nav.founder': 'Fondateur',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.main': 'Nous n\'enseignons pas le mouvement.\nNous redéfinissons votre relation avec le monde.',
    'hero.sub': 'TCHUNGU n\'est pas un art martial, pas un sport, pas une technique.\nC\'est un système d\'harmonie existentielle entre le soi, le mouvement, l\'esprit, l\'âme et l\'environnement.',

    // Philosophy Section
    'philosophy.title': 'La Philosophie de l\'Harmonie',
    'philosophy.description': 'TCHUNGU émerge de plus de 50 ans de recherche sur les mécanismes de la conscience, de l\'adaptation et de l\'intégration existentielle. Elle représente un passage de "prendre et appliquer" à "comprendre, adapter, harmoniser et intégrer".',

    // Philosophy Blocks
    'philosophy.harmony.title': 'L\'Harmonie plutôt que le Contrôle',
    'philosophy.harmony.description': 'L\'harmonie est plus forte que le contrôle. La véritable maîtrise réside non pas dans la domination de votre environnement, mais dans le flux avec lui.',
    'philosophy.harmony.quote': 'L\'harmonie est plus forte que le contrôle',

    'philosophy.adaptation.title': 'L\'Adaptation plutôt que la Résistance',
    'philosophy.adaptation.description': 'La résistance crée du frottement. L\'adaptation crée du flux. L\'univers est en changement constant; la conscience évolue par l\'adaptation.',
    'philosophy.adaptation.quote': 'L\'adaptation est plus haute que la résistance',

    'philosophy.understanding.title': 'La Compréhension plutôt que la Technique',
    'philosophy.understanding.description': 'La technique est le langage du corps. La compréhension est le langage de la conscience. Nous enseignons la compréhension.',
    'philosophy.understanding.quote': 'La compréhension est plus profonde que la technique',

    'philosophy.integration.title': 'L\'Intégration plutôt que la Confrontation',
    'philosophy.integration.description': 'La confrontation crée la séparation. L\'intégration crée l\'unité. Nous ne changeons pas le monde; nous nous intégrons avec lui.',
    'philosophy.integration.quote': 'L\'intégration est plus forte que la confrontation',

    'philosophy.impermanence.title': 'L\'Impermanence plutôt que la Fixité',
    'philosophy.impermanence.description': 'La fixité est une illusion. Le changement est la seule constante. La conscience émerge par l\'acceptation de l\'impermanence.',
    'philosophy.impermanence.quote': 'La fixité est illusion. L\'adaptation est conscience.',

    'philosophy.movement.title': 'Le Mouvement comme Langage',
    'philosophy.movement.description': 'Le mouvement est le langage de l\'univers. Chaque geste, chaque respiration, chaque moment est une conversation avec l\'existence.',
    'philosophy.movement.quote': 'Le mouvement est le langage du cosmos',

    'philosophy.self.title': 'Maîtrise de Soi',
    'philosophy.self.description': 'La véritable maîtrise commence par vous comprendre. Votre corps, votre esprit, votre âme, votre place dans le monde.',
    'philosophy.self.quote': 'La maîtrise de soi est le fondement de l\'harmonie',

    'philosophy.awareness.title': 'Conscience Dynamique',
    'philosophy.awareness.description': 'La conscience est le mouvement dans le mouvement. La conscience n\'est pas statique; elle coule, s\'adapte et évolue.',
    'philosophy.awareness.quote': 'La conscience est le mouvement dans le mouvement',

    'philosophy.chaos.title': 'L\'Ordre dans le Chaos',
    'philosophy.chaos.description': 'Le chaos n\'est pas du désordre; c\'est l\'ordre non encore compris. Nous apprenons à naviguer dans le hasard avec une présence consciente.',
    'philosophy.chaos.quote': 'Le hasard est un système non encore compris',

    // Founder Section
    'founder.title': 'Le Fondateur',
    'founder.name': 'Bouabid Charkaoui',
    'founder.subtitle': 'Philosophe, Chercheur, Visionnaire',
    'founder.bio': 'Plus de 50 ans de recherche profonde sur les mécanismes de la conscience, de l\'équilibre et de l\'adaptation existentielle. Bouabid Charkaoui a consacré sa vie à la compréhension des principes fondamentaux de l\'harmonie entre le soi et le monde.',
    'founder.research': 'Domaines de Recherche',
    'founder.research1': 'Rationalisation du soi',
    'founder.research2': 'Mécanismes d\'équilibre',
    'founder.research3': 'Contrôle de la stabilité',
    'founder.research4': 'Adaptation motrice',
    'founder.research5': 'Harmonie avec l\'environnement changeant',
    'founder.research6': 'Libération des modèles rigides',
    'founder.research7': 'Construction de la compréhension plutôt que la répétition',
    'founder.research8': 'Conscience dynamique',
    'founder.research9': 'Intégration existentielle',

    // Footer
    'footer.philosophy': 'Un système philosophique d\'harmonie existentielle',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés',
  },

  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.philosophy': 'الفلسفة',
    'nav.founder': 'المؤسس',
    'nav.contact': 'اتصل بنا',

    // Hero Section
    'hero.main': 'نحن لا نُعلّم الحركة.\nنُعيد تعريف علاقتك بالمحيط.',
    'hero.sub': 'TCHUNGU ليست فناً قتالياً، وليست رياضة، وليست تقنية.\nبل هي منظومة انسجام وجودي بين الذات والحركة والعقل والروح والمحيط.',

    // Philosophy Section
    'philosophy.title': 'فلسفة الانسجام',
    'philosophy.description': 'TCHUNGU تنبثق من أكثر من 50 سنة من البحث العميق في آليات الوعي والتكيف والتكامل الوجودي. تمثل انتقالاً من "خذ وطبّق" إلى "افهم وتكيف وانسجم وادمج".',

    // Philosophy Blocks
    'philosophy.harmony.title': 'الانسجام أقوى من السيطرة',
    'philosophy.harmony.description': 'الانسجام أقوى من السيطرة. الإتقان الحقيقي لا يكمن في السيطرة على محيطك، بل في الانسجام معه.',
    'philosophy.harmony.quote': 'الانسجام أقوى من السيطرة',

    'philosophy.adaptation.title': 'التكيف أعلى من المقاومة',
    'philosophy.adaptation.description': 'المقاومة تخلق احتكاكاً. التكيف يخلق انسيابية. الكون في تغير مستمر؛ الوعي يتطور من خلال التكيف.',
    'philosophy.adaptation.quote': 'التكيف أعلى من المقاومة',

    'philosophy.understanding.title': 'الفهم أعمق من التقنية',
    'philosophy.understanding.description': 'التقنية هي لغة الجسد. الفهم هو لغة الوعي. نحن نعلم الفهم.',
    'philosophy.understanding.quote': 'الفهم أعمق من التقنية',

    'philosophy.integration.title': 'الاندماج أقوى من المواجهة',
    'philosophy.integration.description': 'المواجهة تخلق الانفصال. الاندماج يخلق الوحدة. نحن لا نغيّر العالم؛ نندمج معه.',
    'philosophy.integration.quote': 'الاندماج أقوى من المواجهة',

    'philosophy.impermanence.title': 'اللا-ثبات أقوى من الثبات',
    'philosophy.impermanence.description': 'الثبات وهم. التغير هو الثابت الوحيد. الوعي ينبثق من قبول اللا-ثبات.',
    'philosophy.impermanence.quote': 'الثبات وهم. التكيف وعي.',

    'philosophy.movement.title': 'الحركة لغة الكون',
    'philosophy.movement.description': 'الحركة هي لغة الكون. كل حركة، كل نفس، كل لحظة هي محادثة مع الوجود.',
    'philosophy.movement.quote': 'الحركة لغة الكون',

    'philosophy.self.title': 'إتقان الذات',
    'philosophy.self.description': 'الإتقان الحقيقي يبدأ بفهم نفسك. جسدك وعقلك وروحك ومكانك في العالم.',
    'philosophy.self.quote': 'إتقان الذات هو أساس الانسجام',

    'philosophy.awareness.title': 'الوعي الديناميكي',
    'philosophy.awareness.description': 'الوعي هو حركة داخل الحركة. الوعي ليس ثابتاً؛ إنه يتدفق ويتكيف ويتطور.',
    'philosophy.awareness.quote': 'الوعي حركة داخل الحركة',

    'philosophy.chaos.title': 'النظام في الفوضى',
    'philosophy.chaos.description': 'الفوضى ليست اضطراباً؛ إنها نظام لم نفهمه بعد. نتعلم التنقل في العشوائية بحضور واعٍ.',
    'philosophy.chaos.quote': 'العشوائية نظام غير مفهوم بعد',

    // Founder Section
    'founder.title': 'المؤسس',
    'founder.name': 'بوعبيد الشرقاوي',
    'founder.subtitle': 'فيلسوف، باحث، رائد فكر',
    'founder.bio': 'أكثر من 50 سنة من البحث العميق في آليات الوعي والتوازن والتكيف الوجودي. كرس بوعبيد الشرقاوي حياته لفهم المبادئ الأساسية للانسجام بين الذات والعالم.',
    'founder.research': 'مجالات البحث',
    'founder.research1': 'عقلنة الذات',
    'founder.research2': 'آليات التوازن',
    'founder.research3': 'التحكم في الثبات',
    'founder.research4': 'التكيف الحركي',
    'founder.research5': 'الانسجام مع المحيط المتغير',
    'founder.research6': 'التحرر من النماذج الجامدة',
    'founder.research7': 'بناء الفهم بدل التكرار',
    'founder.research8': 'الوعي الديناميكي',
    'founder.research9': 'التكامل الوجودي',

    // Footer
    'footer.philosophy': 'منظومة فلسفية للانسجام الوجودي',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة',
  },
};

export function t(key: string, lang: Language): string {
  return translations[lang][key] || key;
}
