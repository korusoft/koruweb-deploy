'use client';

import Link from 'next/link';
import { Button } from '@heroui/react';
import { motion } from 'motion/react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export default function Hero() {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#001D3D] via-[#003566] to-[#000814]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            >
              {t('home.hero.badge')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {t('home.hero.title')}{' '}
              <span className="text-school-bus-yellow-400">{t('home.hero.titleHighlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg"
            >
              {t('home.hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                as={Link}
                href={localizedPath('/contact')}
                size="lg"
                color="default"
                className="bg-white text-[#001D3D] font-semibold px-8"
                radius="full"
              >
                {t('buttons.getStarted')}
              </Button>
              <Button
                as={Link}
                href={localizedPath('/services')}
                size="lg"
                variant="bordered"
                className="text-white border-white/70 hover:bg-white/10 font-semibold px-8"
                radius="full"
              >
                {t('buttons.ourServices')}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-12 mt-12 pt-8 border-t border-white/20"
            >
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-blue-200 text-sm">{t('home.hero.stats.projects')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-blue-200 text-sm">{t('home.hero.stats.experience')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-blue-200 text-sm">{t('home.hero.stats.satisfaction')}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 bg-white rounded-xl shadow-2xl p-4 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">&#10003;</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{t('home.hero.floatingCards.projectComplete')}</p>
                    <p className="text-xs text-gray-500">{t('home.hero.floatingCards.ecommercePlatform')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-2xl p-4 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">&#9729;</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{t('home.hero.floatingCards.cloudMigration')}</p>
                    <p className="text-xs text-gray-500">{t('home.hero.floatingCards.costReduction')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Main Image Placeholder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-5xl">&#128640;</span>
                    </div>
                    <p className="text-white/80 text-lg font-medium">{t('home.hero.innovationStartsHere')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
