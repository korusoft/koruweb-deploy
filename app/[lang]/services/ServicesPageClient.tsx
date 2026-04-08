'use client';

import { motion } from 'motion/react';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTA';
import { useTranslation } from '@/hooks/useTranslation';

const serviceIds = ['web-development', 'mobile-development', 'cloud-consulting', 'it-consulting'] as const;

const processSteps = ['discovery', 'strategy', 'development', 'delivery'] as const;

const technologies = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Azure', category: 'cloud' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'YII', category: 'framework' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'React Native', category: 'mobile' },
  { name: 'Flutter', category: 'mobile' },
];

export default function ServicesPageClient() {
  const { t } = useTranslation();

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
              {t('services.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('services.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              {t('services.expertise.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {t('services.expertise.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.expertise.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceIds.map((serviceId, index) => (
              <ServiceCard
                key={serviceId}
                service={{
                  id: serviceId,
                  icon: serviceId,
                  title: t(`services.items.${serviceId}.title`),
                  shortDescription: t(`services.items.${serviceId}.shortDescription`),
                  description: t(`services.items.${serviceId}.description`),
                  features: t(`services.items.${serviceId}.features`) as string[],
                }}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#243e85] font-semibold text-sm uppercase tracking-wider">
              {t('services.process.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {t('services.process.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.process.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-[#243e85]/10 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`services.process.steps.${step}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`services.process.steps.${step}.description`)}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-[#243e85]/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              {t('services.technologies.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {t('services.technologies.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.technologies.description')}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200 hover:border-[#243e85] hover:bg-[#243e85]/5 transition-colors cursor-default"
              >
                <span className="font-medium text-gray-700">{tech.name}</span>
                <span className="text-gray-400 text-sm ml-2">
                  ({t(`services.technologies.categories.${tech.category}`)})
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#243e85] font-semibold text-sm uppercase tracking-wider">
                {t('services.whyUs.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                {t('services.whyUs.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#243e85]/10 rounded-lg flex items-center justify-center text-[#243e85]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t('services.whyUs.experiencedTeam.title')}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t('services.whyUs.experiencedTeam.description')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#243e85]/10 rounded-lg flex items-center justify-center text-[#243e85]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t('services.whyUs.fastDelivery.title')}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t('services.whyUs.fastDelivery.description')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#243e85]/10 rounded-lg flex items-center justify-center text-[#243e85]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t('services.whyUs.ongoingSupport.title')}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t('services.whyUs.ongoingSupport.description')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
