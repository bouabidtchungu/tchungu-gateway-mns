import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/content';
import PhilosophyBlock from './PhilosophyBlock';

const philosophyBlocks = [
  {
    titleKey: 'philosophy.harmony.title',
    descriptionKey: 'philosophy.harmony.description',
    quoteKey: 'philosophy.harmony.quote',
    imageUrl:
      'https://private-us-east-1.manuscdn.com/sessionFile/3XTgDYwWTarKXXn8Y2OUv6/sandbox/J7arZJGFYOi5ZnFyMuUIw0-img-1_1770484214000_na1fn_dGNodW5ndS1oYXJtb255.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM1hUZ0RZd1dUYXJLWFhuOFkyT1V2Ni9zYW5kYm94L0o3YXJaSkdGWU9pNVpuRnlNdVVJdzAtaW1nLTFfMTc3MDQ4NDIxNDAwMF9uYTFmbl9kR05vZFc1bmRTMW9ZWEp0YjI1NS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WNuSV7H8GFR9oVjDZeDAb-2K7JzhRlGGzQabTLE3O70KDY9A3qqIiTmmY--HBg0CMMhA6SSObt3ZirTsKygQJySs1pUnRIzAP~b4G18ajO~MvfLkCWvcx1cTPngt3PWMDLfuKNEwSM-A43-lC-Lx5Skk8hfXKsuDwityfxntzqJz9sPuEvsSbNDLDp7W~YQfgIFEoiW7Db8V50hjVTrpqDAGPwcmlGoXHIIGD~0OaHFIvJ1XrxctwS-62azDaio0wRMaekliWnD8Q3XXQDla9Rc-~gKWQkLPSUIBIKEXRRLcpKuoC~zGTT4Ab1b0d4rk~iTnW6YqUCS3Nq7f2RKB3g__',
  },
  {
    titleKey: 'philosophy.adaptation.title',
    descriptionKey: 'philosophy.adaptation.description',
    quoteKey: 'philosophy.adaptation.quote',
    imageUrl:
      'https://private-us-east-1.manuscdn.com/sessionFile/3XTgDYwWTarKXXn8Y2OUv6/sandbox/J7arZJGFYOi5ZnFyMuUIw0-img-2_1770484214000_na1fn_dGNodW5ndS10cmFuc2Zvcm1hdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM1hUZ0RZd1dUYXJLWFhuOFkyT1V2Ni9zYW5kYm94L0o3YXJaSkdGWU9pNVpuRnlNdVVJdzAtaW1nLTJfMTc3MDQ4NDIxNDAwMF9uYTFmbl9kR05vZFc1bmRTMTBjbUZ1YzJadmNtMWhkR2x2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uBE8uS63SlV6jEdnzqeO~aKkqkBJP55HYTxwnrEhRvNNNL-dqC~P0wLtJHmi8SfEEPBpAwB4ttbhxZliSsCiAWtw7~D3Nc4eTgg9E~Q2n1-dxECWNWYswFXlnwTDES5WUcHpK6gcjydnF5IcFPMtulEDvqFVDOVe33-tbyK9KDhlhvduM0wAYkYmu5IiNfDP2-K-nQ4XVJpZyqS2bV1GAFLhNs-k5GH7SwkqcSMoZcGC064cMZj7STebPidv8UOtsh30s6yERJEa1DTw3Y9SUTZi18anDKSlV~7-Lai8qI5EuG9Yfa3dYC5hcNCdHrcc8DudW0uu2ZPVgJWqTQe3hA__',
  },
  {
    titleKey: 'philosophy.understanding.title',
    descriptionKey: 'philosophy.understanding.description',
    quoteKey: 'philosophy.understanding.quote',
    imageUrl:
      'https://private-us-east-1.manuscdn.com/sessionFile/3XTgDYwWTarKXXn8Y2OUv6/sandbox/J7arZJGFYOi5ZnFyMuUIw0-img-3_1770484214000_na1fn_dGNodW5ndS1jb25zY2lvdXNuZXNz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM1hUZ0RZd1dUYXJLWFhuOFkyT1V2Ni9zYW5kYm94L0o3YXJaSkdGWU9pNVpuRnlNdVVJdzAtaW1nLTNfMTc3MDQ4NDIxNDAwMF9uYTFmbl9kR05vZFc1bmRTMWpiMjV6WTJsdmRYTnVaWE56LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GCSPRcSuni5k~RO1I4CY08G5tyY8NbUFXOGtU01bbKBlKwGIfLITEb4BNAXqfRFr0ZS7fSfHoJFui7NMvuYNL7eInyy2Tnyac4mJB01K7Qs~Viu6EPLv1AfvUpF0dPDuu-McaKIIbvMnwmtZa9T-IKUGCHLFSUc67AQjwMyg6pJKjws-YLnyWCoYBvw1a85A6ZoiKH0SDCr~nQZUU655UHe27ZjhOjqjzHfpAF8TP6o2Li5HBxPQSi-nE5u7D6kPk3YRrnXDzbe0cEFXDCOMmiO-z6VZS7fny1R9uVrHXs1nbUIsn2q0K6QVTQlFCgVxlOaaqAhYyLuUIv1df0Jk7A__',
  },
  {
    titleKey: 'philosophy.integration.title',
    descriptionKey: 'philosophy.integration.description',
    quoteKey: 'philosophy.integration.quote',
    imageUrl:
      'https://private-us-east-1.manuscdn.com/sessionFile/3XTgDYwWTarKXXn8Y2OUv6/sandbox/J7arZJGFYOi5ZnFyMuUIw0-img-4_1770484215000_na1fn_dGNodW5ndS1hZGFwdGF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM1hUZ0RZd1dUYXJLWFhuOFkyT1V2Ni9zYW5kYm94L0o3YXJaSkdGWU9pNVpuRnlNdVVJdzAtaW1nLTRfMTc3MDQ4NDIxNTAwMF9uYTFmbl9kR05vZFc1bmRTMWhaR0Z3ZEdGMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=s9Q9~Lyb4KCxHhFWM7vt6N8eR7b03zvRvnT7jI6zCAZyIOQctmEnt9aiXQdKYLy2lMOURM5JcJpIEXD8Yt4R8dFDvgqvVE90AYBZzarjtnQh6nlw1YmObsfwwnVUz-WXyb74dt4O-TFmRar9baL15nRrGkaPwblsK5pq2~f6l8GDuIe7ygqSWqThmhTCtNakq6jtNPL7dtEyVWvfTkIl1-GFq2bT3ECWQ0CwY40Rv0ChCwGpLtHitjaKbxe0qcVRMo4MoSRo~dWR3xRM1F5AI8x0iId-xeEMZjADa7SvuvwsDnYnWuNEdIHyNgouqsKfa0toLbvq~eTKbeDGk6kasQ__',
  },
  {
    titleKey: 'philosophy.impermanence.title',
    descriptionKey: 'philosophy.impermanence.description',
    quoteKey: 'philosophy.impermanence.quote',
    imageUrl:
      'https://private-us-east-1.manuscdn.com/sessionFile/3XTgDYwWTarKXXn8Y2OUv6/sandbox/J7arZJGFYOi5ZnFyMuUIw0-img-5_1770484216000_na1fn_dGNodW5ndS11bml0eQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM1hUZ0RZd1dUYXJLWFhuOFkyT1V2Ni9zYW5kYm94L0o3YXJaSkdGWU9pNVpuRnlNdVVJdzAtaW1nLTVfMTc3MDQ4NDIxNjAwMF9uYTFmbl9kR05vZFc1bmRTMTFibWwwZVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AjIQBdHUzIg8Sf3v6L4xXIQnQL426VywbkMSy05jfs0uD-eqtSkGqsa5V9CwVkTIOAdl4vgxYgEK3BIMirNS0GU~bpZRNw-IdFQ6OJeOw~2zB-oIhEMDfsByG9m2qV4rULVyT-VG3XUzI0SZPFSd-fG-dpt-22c0qP-QUOVNQcyCVd~Kzsv9yP~ustbOcvwqx9lzq5paqGt~qvZD7xDdM6LS7-g9lTQdcuV~y72iXMfKWnBdcZMoSCcP90NrobQs4LcroAL5-Br063UT70lXg3zs09E28hFmsY5PAh6CnTsJEXWu3ZsLIOA0fmyZFyHNoUGE0fS~fnDVkojPz3XUJA__',
  },
];

export default function PhilosophySection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="philosophy" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-full h-96 bg-accent/5 blur-3xl"
        />
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6"
          >
            {t('philosophy.title', language)}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/80 font-serif leading-relaxed"
          >
            {t('philosophy.description', language)}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-20 bg-accent mt-8 origin-left"
          />
        </motion.div>

        {/* Philosophy Blocks */}
        <div className="space-y-32">
          {philosophyBlocks.map((block, index) => (
            <PhilosophyBlock
              key={index}
              {...block}
              index={index}
              isReverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
