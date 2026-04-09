import type { Locale } from '@/lib/i18n/config';

export interface Service {
  id: string;
  lang: Locale;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  // English
  {
    id: 'digital-transformation',
    lang: 'en',
    icon: 'transformation',
    title: 'Digital Transformation Consulting',
    shortDescription: 'Strategic guidance to modernize your business processes and embrace digital innovation.',
    description: 'We help organizations navigate the complex journey of digital transformation. From process optimization to change management, we provide comprehensive consulting to modernize your operations and unlock new growth opportunities.',
    features: [
      'Digital strategy and roadmap',
      'Business process optimization',
      'Change management',
      'Technology assessment and selection',
      'Digital culture development',
      'Innovation workshops',
    ],
  },
  {
    id: 'software-development',
    lang: 'en',
    icon: 'software',
    title: 'Software Development',
    shortDescription: 'Custom software solutions tailored to your unique business requirements.',
    description: 'We build high-quality, scalable software solutions using modern technologies and best practices. From web and mobile applications to enterprise systems, we deliver solutions that drive business value.',
    features: [
      'Custom web applications',
      'Mobile app development',
      'Enterprise software solutions',
      'API development and integration',
      'Legacy system modernization',
      'Cloud-native applications',
    ],
  },
  {
    id: 'corporate-training',
    lang: 'en',
    icon: 'training',
    title: 'Corporate Training',
    shortDescription: 'Empower your team with cutting-edge technology skills and knowledge.',
    description: 'Invest in your most valuable asset - your people. We offer comprehensive technology training programs designed to upskill your workforce, boost productivity, and keep your team ahead of the curve.',
    features: [
      'Customized training programs',
      'Technical workshops',
      'Leadership in technology',
      'Agile and DevOps practices',
      'Cloud technologies training',
      'Certification preparation',
    ],
  },
  {
    id: 'iot',
    lang: 'en',
    icon: 'iot',
    title: 'IoT Solutions',
    shortDescription: 'Connect, monitor, and optimize your operations with intelligent IoT solutions.',
    description: 'Harness the power of the Internet of Things to transform your business operations. We design and implement IoT solutions that provide real-time insights, automate processes, and create new value streams.',
    features: [
      'IoT architecture design',
      'Sensor integration',
      'Real-time monitoring systems',
      'Predictive maintenance',
      'Industrial automation',
      'Data analytics and visualization',
    ],
  },
  // Spanish
  {
    id: 'digital-transformation',
    lang: 'es',
    icon: 'transformation',
    title: 'Consultoría en Transformación Digital',
    shortDescription: 'Orientación estratégica para modernizar tus procesos de negocio y adoptar la innovación digital.',
    description: 'Ayudamos a las organizaciones a navegar el complejo camino de la transformación digital. Desde la optimización de procesos hasta la gestión del cambio, brindamos consultoría integral para modernizar tus operaciones y desbloquear nuevas oportunidades de crecimiento.',
    features: [
      'Estrategia digital y hoja de ruta',
      'Optimización de procesos de negocio',
      'Gestión del cambio',
      'Evaluación y selección de tecnología',
      'Desarrollo de cultura digital',
      'Talleres de innovación',
    ],
  },
  {
    id: 'software-development',
    lang: 'es',
    icon: 'software',
    title: 'Desarrollo de Software',
    shortDescription: 'Soluciones de software personalizadas adaptadas a los requerimientos únicos de tu negocio.',
    description: 'Construimos soluciones de software de alta calidad y escalables usando tecnologías modernas y mejores prácticas. Desde aplicaciones web y móviles hasta sistemas empresariales, entregamos soluciones que generan valor de negocio.',
    features: [
      'Aplicaciones web personalizadas',
      'Desarrollo de aplicaciones móviles',
      'Soluciones de software empresarial',
      'Desarrollo e integración de APIs',
      'Modernización de sistemas legados',
      'Aplicaciones nativas en la nube',
    ],
  },
  {
    id: 'corporate-training',
    lang: 'es',
    icon: 'training',
    title: 'Capacitación Empresarial',
    shortDescription: 'Empodera a tu equipo con habilidades y conocimientos tecnológicos de vanguardia.',
    description: 'Invierte en tu activo más valioso - tu gente. Ofrecemos programas integrales de capacitación tecnológica diseñados para mejorar las habilidades de tu equipo, aumentar la productividad y mantener a tu equipo a la vanguardia.',
    features: [
      'Programas de capacitación personalizados',
      'Talleres técnicos',
      'Liderazgo en tecnología',
      'Prácticas Agile y DevOps',
      'Capacitación en tecnologías cloud',
      'Preparación para certificaciones',
    ],
  },
  {
    id: 'iot',
    lang: 'es',
    icon: 'iot',
    title: 'Soluciones IoT',
    shortDescription: 'Conecta, monitorea y optimiza tus operaciones con soluciones IoT inteligentes.',
    description: 'Aprovecha el poder del Internet de las Cosas para transformar las operaciones de tu negocio. Diseñamos e implementamos soluciones IoT que proporcionan información en tiempo real, automatizan procesos y crean nuevas fuentes de valor.',
    features: [
      'Diseño de arquitectura IoT',
      'Integración de sensores',
      'Sistemas de monitoreo en tiempo real',
      'Mantenimiento predictivo',
      'Automatización industrial',
      'Análisis de datos y visualización',
    ],
  },
];

export function getServices(lang: Locale): Service[] {
  return services.filter((service) => service.lang === lang);
}

export function getServiceById(id: string, lang: Locale): Service | undefined {
  return services.find((service) => service.id === id && service.lang === lang);
}
