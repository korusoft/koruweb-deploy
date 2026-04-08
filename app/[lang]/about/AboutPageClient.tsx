'use client';

import { motion } from 'motion/react';
import TeamMember from '@/components/ui/TeamMember';
import CTASection from '@/components/sections/CTA';
import { getTeam } from '@/data/team';
import { useTranslation } from '@/hooks/useTranslation';

const valueKeys = ['innovation', 'quality', 'collaboration', 'integrity'] as const;

const valueIcons: Record<string, string> = {
  innovation: '\uD83C\uDFAF',
  quality: '\u2B50',
  collaboration: '\uD83E\uDD1D',
  integrity: '\uD83D\uDD12',
};

export default function AboutPageClient() {
  const { t, lang } = useTranslation();
  const team = getTeam(lang);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#243e85] via-[#1e3a8a] to-[#1a2e64] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              {t('about.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('about.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#243e85] font-semibold text-sm uppercase tracking-wider">
                {t('about.story.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('about.story.description1')}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('about.story.description2')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.story.description3')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt={t('about.story.imageAlt')}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#243e85]/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-[#243e85] font-semibold text-sm uppercase tracking-wider">
              {t('about.mission.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              {t('about.mission.title')}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('about.mission.description')}
            </p>
            <ul className="text-left max-w-xl mx-auto space-y-3">
              {(t('about.mission.points') as string[]).map((point: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#243e85] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#243e85] font-semibold text-sm uppercase tracking-wider">
              {t('about.values.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('about.values.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{valueIcons[key]}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`about.values.items.${key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`about.values.items.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#243e85] font-semibold text-sm uppercase tracking-wider">
              {t('about.team.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('about.team.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
