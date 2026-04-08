'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Card, CardBody, Button } from '@heroui/react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

const serviceIds = ['web-development', 'mobile-development', 'cloud-consulting', 'it-consulting'] as const;

const iconMap: Record<string, ReactNode> = {
  'web-development': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  'mobile-development': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  'cloud-consulting': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  'it-consulting': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default function ServicesSection() {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#001D3D] font-semibold text-sm uppercase tracking-wider">
            {t('home.services.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            {t('home.services.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('home.services.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceIds.map((serviceId, index) => (
            <motion.div
              key={serviceId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="h-full border border-gray-100 hover:shadow-lg hover:border-[#001D3D]/20 transition-all duration-300"
                shadow="sm"
              >
                <CardBody className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-[#001D3D]/10 flex items-center justify-center text-[#001D3D] mb-5">
                    {iconMap[serviceId]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`services.items.${serviceId}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {t(`services.items.${serviceId}.shortDescription`)}
                  </p>
                  <Link
                    href={localizedPath(`/services#${serviceId}`)}
                    className="inline-flex items-center text-[#001D3D] font-semibold text-sm hover:gap-2 transition-all"
                  >
                    {t('home.services.learnMore')}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            as={Link}
            href={localizedPath('/services')}
            color="primary"
            size="lg"
            radius="full"
            className="font-semibold px-8"
          >
            {t('buttons.viewAllServices')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
