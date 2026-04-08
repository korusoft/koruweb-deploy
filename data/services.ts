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
    id: 'web-development',
    lang: 'en',
    icon: 'web',
    title: 'Web Development',
    shortDescription: 'Modern, responsive web applications built with cutting-edge technologies.',
    description: 'We create stunning, high-performance web applications using React, TypeScript, and modern frameworks. From corporate websites to complex web platforms, we deliver solutions that scale with your business.',
    features: [
      'Custom React & TypeScript applications',
      'Progressive Web Apps (PWA)',
      'E-commerce platforms',
      'Content Management Systems',
      'API integrations',
      'Performance optimization',
    ],
  },
  {
    id: 'mobile-development',
    lang: 'en',
    icon: 'mobile',
    title: 'Mobile Development',
    shortDescription: 'Native and cross-platform mobile apps for iOS and Android.',
    description: 'Build powerful mobile experiences that engage users on any device. We develop native and cross-platform applications using React Native and Flutter.',
    features: [
      'iOS & Android native apps',
      'Cross-platform development',
      'React Native applications',
      'Flutter development',
      'App Store optimization',
      'Mobile UI/UX design',
    ],
  },
  {
    id: 'cloud-consulting',
    lang: 'en',
    icon: 'cloud',
    title: 'Cloud Consulting',
    shortDescription: 'Strategic cloud solutions to optimize your infrastructure.',
    description: 'Maximize efficiency and reduce costs with expert cloud consulting. We help you migrate, optimize, and manage your cloud infrastructure on AWS, Azure, and Google Cloud.',
    features: [
      'Cloud migration strategy',
      'Infrastructure as Code (IaC)',
      'AWS, Azure, GCP expertise',
      'Cost optimization',
      'Security & compliance',
      'DevOps & CI/CD pipelines',
    ],
  },
  {
    id: 'it-consulting',
    lang: 'en',
    icon: 'consulting',
    title: 'IT Consulting',
    shortDescription: 'Strategic technology guidance to drive digital transformation.',
    description: 'Transform your business with strategic IT consulting. We analyze your needs, recommend solutions, and guide implementation to achieve your technology goals.',
    features: [
      'Digital transformation strategy',
      'Technology roadmapping',
      'System architecture design',
      'Process automation',
      'Vendor selection & management',
      'IT governance & security',
    ],
  },
  // Spanish
  {
    id: 'cloud-consulting',
    lang: 'es',
    icon: 'cloud',
    title: 'Consultoría Cloud',
    shortDescription: 'Soluciones cloud estratégicas para optimizar tu infraestructura.',
    description: 'Maximiza la eficiencia y reduce costos con consultoría cloud experta. Te ayudamos a migrar, optimizar y gestionar tu infraestructura en la nube con AWS, Azure y Google Cloud.',
    features: [
      'Estrategia de migración cloud',
      'Infraestructura como Código (IaC)',
      'Experiencia en AWS, Azure, GCP',
      'Optimización de costos',
      'Seguridad y cumplimiento',
      'Pipelines DevOps y CI/CD',
    ],
  },
  {
    id: 'web-development',
    lang: 'es',
    icon: 'web',
    title: 'Desarrollo Web',
    shortDescription: 'Aplicaciones web modernas y responsivas construidas con tecnologías de vanguardia.',
    description: 'Creamos aplicaciones web impresionantes y de alto rendimiento usando React, TypeScript y frameworks modernos. Desde sitios corporativos hasta plataformas web complejas, entregamos soluciones que escalan con tu negocio.',
    features: [
      'Aplicaciones React & TypeScript personalizadas',
      'Aplicaciones Web Progresivas (PWA)',
      'Plataformas de comercio electrónico',
      'Sistemas de Gestión de Contenido',
      'Integraciones de API',
      'Optimización de rendimiento',
    ],
  },
  {
    id: 'mobile-development',
    lang: 'es',
    icon: 'mobile',
    title: 'Desarrollo Móvil',
    shortDescription: 'Apps móviles nativas y multiplataforma para iOS y Android.',
    description: 'Construye experiencias móviles poderosas que cautivan a los usuarios en cualquier dispositivo. Desarrollamos aplicaciones nativas y multiplataforma usando React Native y Flutter.',
    features: [
      'Apps nativas iOS & Android',
      'Desarrollo multiplataforma',
      'Aplicaciones React Native',
      'Desarrollo Flutter',
      'Optimización App Store',
      'Diseño UI/UX móvil',
    ],
  },
  {
    id: 'it-consulting',
    lang: 'es',
    icon: 'consulting',
    title: 'Consultoría IT',
    shortDescription: 'Orientación tecnológica estratégica para impulsar la transformación digital.',
    description: 'Transforma tu negocio con consultoría IT estratégica. Analizamos tus necesidades, recomendamos soluciones y guiamos la implementación para alcanzar tus objetivos tecnológicos.',
    features: [
      'Estrategia de transformación digital',
      'Hoja de ruta tecnológica',
      'Diseño de arquitectura de sistemas',
      'Automatización de procesos',
      'Selección y gestión de proveedores',
      'Gobernanza IT y seguridad',
    ],
  },
];

export function getServices(lang: Locale): Service[] {
  return services.filter((service) => service.lang === lang);
}

export function getServiceById(id: string, lang: Locale): Service | undefined {
  return services.find((service) => service.id === id && service.lang === lang);
}
