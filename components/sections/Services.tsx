'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Card, CardBody, Button } from '@heroui/react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

const serviceIds = ['digital-transformation', 'software-development', 'corporate-training', 'iot'] as const;

const iconMap: Record<string, ReactNode> = {
  'digital-transformation': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  'software-development': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  'corporate-training': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  'iot': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
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
