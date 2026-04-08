import type { Locale } from '@/lib/i18n/config';

export interface Project {
  id: string;
  lang: Locale;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  results?: string[];
}

export const projects: Project[] = [
  // English
  {
    id: 'project-1',
    lang: 'en',
    title: 'E-Commerce Platform',
    client: 'RetailMax',
    category: 'Web Development',
    description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    results: ['200% increase in online sales', '50% faster page load times', '99.9% uptime'],
  },
  {
    id: 'project-2',
    lang: 'en',
    title: 'Banking Mobile App',
    client: 'FinBank',
    category: 'Mobile Development',
    description: 'A secure mobile banking application with biometric authentication, instant transfers, and spending analytics.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
    results: ['4.8 App Store rating', '100K+ downloads', '60% user engagement increase'],
  },
  {
    id: 'project-3',
    lang: 'en',
    title: 'Cloud Infrastructure',
    client: 'DataFlow',
    category: 'Cloud Consulting',
    description: 'Complete cloud migration and infrastructure optimization for a data analytics company.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker'],
    results: ['40% cost reduction', '99.99% availability', '3x faster deployments'],
  },
  {
    id: 'project-4',
    lang: 'en',
    title: 'Healthcare Portal',
    client: 'MediCare+',
    category: 'Web Development',
    description: 'A patient management portal with appointment scheduling, telemedicine, and medical records.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Azure'],
    results: ['80% reduction in admin time', 'HIPAA compliant', '95% patient satisfaction'],
  },
  {
    id: 'project-5',
    lang: 'en',
    title: 'Logistics Tracker',
    client: 'CargoExpress',
    category: 'Mobile Development',
    description: 'Real-time shipment tracking application with route optimization and delivery notifications.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js'],
    results: ['30% faster deliveries', 'Real-time tracking', '25% fuel cost savings'],
  },
  {
    id: 'project-6',
    lang: 'en',
    title: 'HR Management System',
    client: 'PeopleFirst',
    category: 'IT Consulting',
    description: 'Enterprise HR platform with recruitment, performance management, and payroll integration.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    technologies: ['React', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
    results: ['50% faster hiring', 'Automated payroll', '90% user adoption'],
  },
  // Spanish
  {
    id: 'project-1',
    lang: 'es',
    title: 'Plataforma E-Commerce',
    client: 'RetailMax',
    category: 'Desarrollo Web',
    description: 'Una plataforma de comercio electrónico completa con inventario en tiempo real, procesamiento de pagos y panel de análisis.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    results: ['200% aumento en ventas online', '50% más rápido en carga', '99.9% disponibilidad'],
  },
  {
    id: 'project-2',
    lang: 'es',
    title: 'App Bancaria Móvil',
    client: 'FinBank',
    category: 'Desarrollo Móvil',
    description: 'Una aplicación de banca móvil segura con autenticación biométrica, transferencias instantáneas y análisis de gastos.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
    results: ['4.8 calificación App Store', '100K+ descargas', '60% aumento en engagement'],
  },
  {
    id: 'project-3',
    lang: 'es',
    title: 'Infraestructura Cloud',
    client: 'DataFlow',
    category: 'Consultoría Cloud',
    description: 'Migración completa a la nube y optimización de infraestructura para una empresa de análisis de datos.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker'],
    results: ['40% reducción de costos', '99.99% disponibilidad', '3x más rápido en despliegues'],
  },
  {
    id: 'project-4',
    lang: 'es',
    title: 'Portal de Salud',
    client: 'MediCare+',
    category: 'Desarrollo Web',
    description: 'Un portal de gestión de pacientes con programación de citas, telemedicina y registros médicos.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Azure'],
    results: ['80% reducción tiempo admin', 'Cumple HIPAA', '95% satisfacción pacientes'],
  },
  {
    id: 'project-5',
    lang: 'es',
    title: 'Rastreador Logístico',
    client: 'CargoExpress',
    category: 'Desarrollo Móvil',
    description: 'Aplicación de seguimiento de envíos en tiempo real con optimización de rutas y notificaciones de entrega.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js'],
    results: ['30% entregas más rápidas', 'Seguimiento en tiempo real', '25% ahorro en combustible'],
  },
  {
    id: 'project-6',
    lang: 'es',
    title: 'Sistema de Gestión RRHH',
    client: 'PeopleFirst',
    category: 'Consultoría IT',
    description: 'Plataforma empresarial de RRHH con reclutamiento, gestión del desempeño e integración de nómina.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    technologies: ['React', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
    results: ['50% más rápido en contratación', 'Nómina automatizada', '90% adopción usuarios'],
  },
];

export function getProjects(lang: Locale): Project[] {
  return projects.filter((project) => project.lang === lang);
}

export function getProjectById(id: string, lang: Locale): Project | undefined {
  return projects.find((project) => project.id === id && project.lang === lang);
}
