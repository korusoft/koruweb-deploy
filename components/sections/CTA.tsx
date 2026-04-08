'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@heroui/react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export default function CTASection() {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  return (
    <section className="py-20 bg-gradient-to-br from-[#001D3D] via-[#003566] to-[#000814] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={Link}
              href={localizedPath('/contact')}
              size="lg"
              className="bg-white text-[#001D3D] font-semibold px-8"
              radius="full"
            >
              {t('buttons.getInTouch')}
            </Button>
            <Button
              as={Link}
              href={localizedPath('/portfolio')}
              size="lg"
              variant="bordered"
              className="text-white border-white/70 hover:bg-white/10 font-semibold px-8"
              radius="full"
            >
              {t('buttons.viewOurWork')}
            </Button>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20"
          >
            <a href="mailto:hello@korucode.com" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hola@korucode.com
            </a>
            <a href="tel:+573001234567" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +57 311 636 5228
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
