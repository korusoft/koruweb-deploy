'use client';

import { motion } from 'motion/react';
import { useTranslation } from '@/hooks/useTranslation';

export default function PrivacyPageClient() {
  const { t } = useTranslation();

  const sections = [
    'dataController',
    'dataCollected',
    'purposes',
    'legalBasis',
    'rights',
    'exerciseRights',
    'internationalTransfer',
    'security',
    'cookies',
    'validity',
  ] as const;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#243e85] via-[#1e3a8a] to-[#1a2e64] relative overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('privacy.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('privacy.subtitle')}
            </p>
            <p className="text-blue-200 mt-4 text-sm">
              {t('privacy.lastUpdated')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Introduction */}
            <div className="mb-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.introduction')}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((sectionKey, index) => (
                <motion.div
                  key={sectionKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="border-b border-gray-100 pb-10 last:border-0"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#243e85]/10 rounded-lg flex items-center justify-center text-[#243e85] text-sm font-bold">
                      {index + 1}
                    </span>
                    {t(`privacy.sections.${sectionKey}.title`)}
                  </h2>
                  <div className="text-gray-600 leading-relaxed pl-11">
                    <p className="mb-4">{t(`privacy.sections.${sectionKey}.content`)}</p>
                    {(() => {
                      const items = t(`privacy.sections.${sectionKey}.items`);
                      if (Array.isArray(items) && items.length > 0) {
                        return (
                          <ul className="space-y-2">
                            {items.map((item: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-[#243e85] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    })()}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-6 bg-[#243e85]/5 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('privacy.contact.title')}
              </h3>
              <p className="text-gray-600 mb-4">{t('privacy.contact.description')}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:privacy@korucode.com"
                  className="inline-flex items-center gap-2 text-[#243e85] font-medium hover:underline"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  privacy@korucode.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
