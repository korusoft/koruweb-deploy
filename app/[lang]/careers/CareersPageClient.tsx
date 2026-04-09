'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Card, CardBody, Chip } from '@heroui/react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export default function CareersPageClient() {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  const filledPositions = [
    {
      titleKey: 'careers.positions.designer.title',
      departmentKey: 'careers.positions.designer.department',
      filledDateKey: 'careers.positions.designer.filledDate',
    },
    {
      titleKey: 'careers.positions.backendDev.title',
      departmentKey: 'careers.positions.backendDev.department',
      filledDateKey: 'careers.positions.backendDev.filledDate',
    },
  ];

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
              {t('careers.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('careers.hero.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('careers.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* No Openings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-[#243e85]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#243e85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('careers.noOpenings.title')}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {t('careers.noOpenings.description')}
            </p>
            <Button
              as={Link}
              href={localizedPath('/contact')}
              color="primary"
              size="lg"
              radius="full"
              className="font-semibold"
            >
              {t('careers.noOpenings.contactButton')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Recently Filled Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#243e85] font-semibold text-sm uppercase tracking-wider">
              {t('careers.filled.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {t('careers.filled.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('careers.filled.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filledPositions.map((position, index) => (
              <motion.div
                key={position.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border border-gray-200">
                  <CardBody className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {t(position.titleKey)}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {t(position.departmentKey)}
                        </p>
                      </div>
                      <Chip color="success" variant="flat" size="sm">
                        {t('careers.filled.status')}
                      </Chip>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {t(position.filledDateKey)}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('careers.stayConnected.title')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('careers.stayConnected.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                as="a"
                href="https://www.linkedin.com/company/korucode"
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                size="lg"
                radius="full"
                className="font-semibold"
                startContent={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                }
              >
                LinkedIn
              </Button>
              <Button
                as={Link}
                href={localizedPath('/contact')}
                color="primary"
                size="lg"
                radius="full"
                className="font-semibold"
              >
                {t('careers.stayConnected.contactButton')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
