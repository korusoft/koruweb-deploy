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
  'transformation': (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  'software': (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  'training': (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  'iot': (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
};

function getIconKey(serviceId: string): string {
  if (serviceId.includes('transformation')) return 'transformation';
  if (serviceId.includes('software')) return 'software';
  if (serviceId.includes('training')) return 'training';
  if (serviceId.includes('iot')) return 'iot';
  return 'software';
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
