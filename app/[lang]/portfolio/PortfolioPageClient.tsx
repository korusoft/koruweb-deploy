'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@heroui/react';
import ProjectCard from '@/components/ui/ProjectCard';
import CTASection from '@/components/sections/CTA';
import { getProjects } from '@/data/projects';
import { useTranslation } from '@/hooks/useTranslation';

const categoryKeys = ['all', 'web', 'mobile', 'cloud'] as const;

const categoryFilters: Record<string, Record<string, string | null>> = {
  en: {
    all: null,
    web: 'Web Development',
    mobile: 'Mobile Development',
    cloud: 'Cloud Consulting',
  },
  es: {
    all: null,
    web: 'Desarrollo Web',
    mobile: 'Desarrollo Móvil',
    cloud: 'Consultoría Cloud',
  },
};

export default function PortfolioPageClient() {
  const { t, lang } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const projects = getProjects(lang);
  const categoryToFilter = categoryFilters[lang] || categoryFilters.en;

  const filteredProjects = categoryToFilter[selectedCategory] === null
    ? projects
    : projects.filter(project => project.category === categoryToFilter[selectedCategory]);

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
              {t('portfolio.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('portfolio.hero.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('portfolio.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categoryKeys.map((key) => (
              <Button
                key={key}
                variant={selectedCategory === key ? 'solid' : 'bordered'}
                color={selectedCategory === key ? 'primary' : 'default'}
                radius="full"
                size="sm"
                onPress={() => setSelectedCategory(key)}
              >
                {t(`portfolio.filters.${key}`)}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
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
              {t('portfolio.stats.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {t('portfolio.stats.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('portfolio.stats.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50+', labelKey: 'portfolio.stats.items.projectsDelivered' },
              { number: '98%', labelKey: 'portfolio.stats.items.clientSatisfaction' },
              { number: '85%', labelKey: 'portfolio.stats.items.repeatClients' },
              { number: '5+', labelKey: 'portfolio.stats.items.countriesServed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-[#243e85] mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">{t(stat.labelKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
