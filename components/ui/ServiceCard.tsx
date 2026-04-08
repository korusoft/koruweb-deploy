'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Card, CardBody } from '@heroui/react';
import { useTranslation } from '@/hooks/useTranslation';

interface ServiceCardService {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
}

interface ServiceCardProps {
  service: ServiceCardService;
  index?: number;
}

const iconMap: Record<string, ReactNode> = {
  'web': (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  'mobile': (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  'cloud': (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  'consulting': (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

function getIconKey(serviceId: string): string {
  if (serviceId.includes('web')) return 'web';
  if (serviceId.includes('mobile')) return 'mobile';
  if (serviceId.includes('cloud')) return 'cloud';
  return 'consulting';
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const { t } = useTranslation();
  const iconKey = getIconKey(service.id);

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-xl transition-shadow duration-300" shadow="md">
        <CardBody className="p-8">
          <div className="w-16 h-16 rounded-xl bg-[#243e85]/10 flex items-center justify-center text-[#243e85] mb-6">
            {iconMap[iconKey]}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {service.title}
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </p>

          <h4 className="font-semibold text-gray-900 mb-3">{t('home.services.badge')}:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                <svg className="w-5 h-5 text-[#243e85] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </motion.div>
  );
}
