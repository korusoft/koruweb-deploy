import type { Locale } from '@/lib/i18n/config';

export interface Testimonial {
  id: string;
  lang: Locale;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  // English
  {
    id: 'testimonial-1',
    lang: 'en',
    name: 'Juan Perez',
    role: 'CEO',
    company: 'TechStart Colombia',
    content: 'Koru transformed our digital presence completely. Their team delivered a modern web application that exceeded our expectations and helped us increase conversions by 40%.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    lang: 'en',
    name: 'Ana Sofia Ramirez',
    role: 'Director of Technology',
    company: 'Fintech Solutions',
    content: 'Working with Koru on our cloud migration was a game-changer. They reduced our infrastructure costs by 35% while improving performance and security.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    lang: 'en',
    name: 'Roberto Vargas',
    role: 'Founder',
    company: 'EcoMarket',
    content: 'The mobile app Koru developed for us has become essential to our business. Their attention to user experience and technical excellence is outstanding.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    rating: 5,
  },
  // Spanish
  {
    id: 'testimonial-1',
    lang: 'es',
    name: 'Juan Pérez',
    role: 'CEO',
    company: 'TechStart Colombia',
    content: 'Koru transformó nuestra presencia digital por completo. Su equipo entregó una aplicación web moderna que superó nuestras expectativas y nos ayudó a aumentar las conversiones en un 40%.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    lang: 'es',
    name: 'Ana Sofía Ramírez',
    role: 'Directora de Tecnología',
    company: 'Fintech Solutions',
    content: 'Trabajar con Koru en nuestra migración a la nube fue un cambio radical. Redujeron nuestros costos de infraestructura en un 35% mientras mejoraban el rendimiento y la seguridad.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    lang: 'es',
    name: 'Roberto Vargas',
    role: 'Fundador',
    company: 'EcoMarket',
    content: 'La aplicación móvil que Koru desarrolló para nosotros se ha vuelto esencial para nuestro negocio. Su atención a la experiencia de usuario y excelencia técnica es sobresaliente.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    rating: 5,
  },
];

export function getTestimonials(lang: Locale): Testimonial[] {
  return testimonials.filter((testimonial) => testimonial.lang === lang);
}
