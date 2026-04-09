'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Input, Textarea, Button, Card, CardBody } from '@heroui/react';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';

export default function ContactPageClient() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      titleKey: 'contact.info.email',
      content: t('contact.info.emailValue'),
      href: `mailto:${t('contact.info.emailValue')}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      titleKey: 'contact.info.phone',
      content: t('contact.info.phoneValue'),
      href: 'tel:+573001234567',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      titleKey: 'contact.info.address',
      content: t('contact.info.addressValue'),
      href: null,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-br from-[#243e85] via-[#1e3a8a] to-[#1a2e64] relative overflow-hidden">
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
              {t('contact.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('contact.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('contact.info.title')}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('contact.info.description')}
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.titleKey} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#243e85]/10 rounded-lg flex items-center justify-center text-[#243e85] shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{t(info.titleKey)}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-gray-600 hover:text-[#243e85] transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">{t('contact.social.title')}</h4>
                <div className="flex gap-4">
                  <Link href="https://www.linkedin.com/company/korucode" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#243e85] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#243e85] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                  <Link href="https://github.com/korusoft" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#243e85] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card shadow="lg">
                <CardBody className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.form.success')}</h3>
                      <Button
                        color="primary"
                        onPress={() => setIsSubmitted(false)}
                      >
                        {t('contact.form.sendAnother')}
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contact.form.title')}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label={t('contact.form.name')}
                          placeholder={t('contact.form.namePlaceholder')}
                          value={formData.name}
                          onValueChange={(value) => handleChange('name', value)}
                          isRequired
                          variant="bordered"
                        />
                        <Input
                          label={t('contact.form.email')}
                          placeholder={t('contact.form.emailPlaceholder')}
                          type="email"
                          value={formData.email}
                          onValueChange={(value) => handleChange('email', value)}
                          isRequired
                          variant="bordered"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label={t('contact.form.company')}
                          placeholder={t('contact.form.companyPlaceholder')}
                          value={formData.company}
                          onValueChange={(value) => handleChange('company', value)}
                          variant="bordered"
                        />
                        <Input
                          label={t('contact.form.subject')}
                          placeholder={t('contact.form.subjectPlaceholder')}
                          value={formData.subject}
                          onValueChange={(value) => handleChange('subject', value)}
                          isRequired
                          variant="bordered"
                        />
                      </div>
                      <Textarea
                        label={t('contact.form.message')}
                        placeholder={t('contact.form.messagePlaceholder')}
                        value={formData.message}
                        onValueChange={(value) => handleChange('message', value)}
                        isRequired
                        variant="bordered"
                        minRows={5}
                      />
                      <Button
                        type="submit"
                        color="primary"
                        size="lg"
                        className="w-full font-semibold"
                        isLoading={isSubmitting}
                      >
                        {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                      </Button>
                    </form>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-75.6200%2C6.2000%2C-75.5200%2C6.2800&layer=mapnik&marker=6.2442%2C-75.5812"
          width="100%"
          height="100%"
          className="map-iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Koru Location - Medellín, Colombia"
        />
      </section>
    </>
  );
}
