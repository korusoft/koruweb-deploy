'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@heroui/react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

const valueKeys = ['innovation', 'partnership', 'excellence'] as const;

const valueIcons: Record<string, string> = {
  innovation: '\uD83C\uDFAF',
  partnership: '\uD83E\uDD1D',
  excellence: '\u2B50',
};

export default function AboutSection() {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#001D3D] font-semibold text-sm uppercase tracking-wider">
              {t('home.about.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              {t('home.about.title')}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('home.about.description1')}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('home.about.description2')}
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {valueKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{valueIcons[key]}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t(`home.about.values.${key}.title`)}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {t(`home.about.values.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>

            <Button
              as={Link}
              href={localizedPath('/about')}
              color="primary"
              size="lg"
              radius="full"
              className="font-semibold px-8"
            >
              {t('buttons.learnMoreAboutUs')}
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt={t('home.about.teamCollaboration')}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#001D3D] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">10+</p>
                    <p className="text-gray-500 text-sm">{t('home.about.yearsInBusiness')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#001D3D]/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 rounded-full -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
