import type { Locale } from '@/lib/i18n/config';

export interface TeamMember {
  id: string;
  lang: Locale;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export const team: TeamMember[] = [
  // English
  {
    id: 'member-1',
    lang: 'en',
    name: 'Miguel Angel Carrillo',
    role: 'Founder and Web Developer',
    bio: 'With over 15 years of experience in technology leadership, Miguel founded Koru to help businesses leverage cutting-edge solutions.',
    image: '/images/mac-avatar.png',
    linkedin: 'https://www.linkedin.com/in/miguelcar/',
    twitter: '#',
  },
  {
    id: 'member-2',
    lang: 'en',
    name: 'Carlos Mario Correa',
    role: 'AI and IoT Developer',
    bio: 'Developer specialized in Artificial Intelligence and IoT, focused on building intelligent, scalable systems with real-world business and product impact.',
    image: '/images/carlos-avatar.png',
    linkedin: '#',
  },
  {
    id: 'member-3',
    lang: 'en',
    name: 'Andres Felipe Garcia',
    role: 'Lead Developer',
    bio: 'Andres brings creative solutions to complex technical challenges, specializing in React and cloud-native applications.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 'member-4',
    lang: 'en',
    name: 'Laura Martinez',
    role: 'UX/UI Designer',
    bio: 'Laura crafts intuitive user experiences that balance aesthetics with functionality, ensuring every project delights users.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  // Spanish
  {
    id: 'member-1',
    lang: 'es',
    name: 'Miguel Angel Carrillo',
    role: 'Fundador y Desarrollador Web',
    bio: 'Con más de 15 años de experiencia en liderazgo tecnológico, Miguel fundó Koru para ayudar a las empresas a aprovechar soluciones de vanguardia.',
    image: '/images/mac-avatar.png',
    linkedin: 'https://www.linkedin.com/in/miguelcar/',
    twitter: '#',
  },
  {
    id: 'member-2',
    lang: 'es',
    name: 'Carlos Mario Correa',
    role: 'Desarrollador IA e IoT',
    bio: 'Desarrollador especializado en soluciones de Inteligencia Artificial e IoT, enfocado en crear sistemas inteligentes, escalables y orientados a impacto real en negocios y productos.',
    image: '/images/carlos-avatar.png',
    linkedin: '#',
  },
  {
    id: 'member-3',
    lang: 'es',
    name: 'Andrés Felipe García',
    role: 'Desarrollador Líder',
    bio: 'Andrés aporta soluciones creativas a desafíos técnicos complejos, especializándose en React y aplicaciones cloud-native.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 'member-4',
    lang: 'es',
    name: 'Laura Martínez',
    role: 'Diseñadora UX/UI',
    bio: 'Laura crea experiencias de usuario intuitivas que equilibran estética con funcionalidad, asegurando que cada proyecto deleite a los usuarios.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
];

export function getTeam(lang: Locale): TeamMember[] {
  return team.filter((member) => member.lang === lang);
}

export function getTeamMemberById(id: string, lang: Locale): TeamMember | undefined {
  return team.find((member) => member.id === id && member.lang === lang);
}
