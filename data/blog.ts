import type { Locale } from '@/lib/i18n/config';

export interface BlogPost {
  id: string;
  lang: Locale;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  // English
  {
    id: 'post-1',
    lang: 'en',
    slug: 'future-of-web-development-2025',
    title: 'The Future of Web Development in 2025',
    excerpt: 'Explore the latest trends shaping web development, from AI-assisted coding to edge computing.',
    content: `
      <p>The web development landscape continues to evolve rapidly. As we move through 2025, several key trends are reshaping how we build and deploy web applications.</p>

      <h2>AI-Assisted Development</h2>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. From code completion to automated testing, AI tools are helping developers work more efficiently than ever.</p>

      <h2>Edge Computing</h2>
      <p>With the rise of edge computing, we're seeing a shift toward distributing application logic closer to users. This results in faster response times and better user experiences.</p>

      <h2>WebAssembly Goes Mainstream</h2>
      <p>WebAssembly is enabling high-performance applications in the browser, opening new possibilities for web-based games, video editing, and complex data visualization.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of opportunities. Staying current with these trends will help you build better, faster, and more engaging web experiences.</p>
    `,
    author: 'Carlos Mendoza',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
    tags: ['Web Development', 'AI', 'Technology Trends'],
  },
  {
    id: 'post-2',
    lang: 'en',
    slug: 'cloud-migration-best-practices',
    title: 'Cloud Migration: Best Practices for Success',
    excerpt: 'A comprehensive guide to planning and executing a successful cloud migration strategy.',
    content: `
      <p>Migrating to the cloud is a transformative journey that requires careful planning and execution. Here are the best practices we've learned from dozens of successful migrations.</p>

      <h2>Assessment Phase</h2>
      <p>Before migrating anything, conduct a thorough assessment of your current infrastructure. Identify dependencies, performance requirements, and potential challenges.</p>

      <h2>Choose the Right Strategy</h2>
      <p>Not every application should be migrated the same way. Consider lift-and-shift for legacy systems, refactoring for applications that can benefit from cloud-native features, and rebuilding for systems that need modernization.</p>

      <h2>Security First</h2>
      <p>Security shouldn't be an afterthought. Implement proper identity management, encryption, and compliance measures from day one.</p>

      <h2>Monitor and Optimize</h2>
      <p>Once migrated, continuously monitor performance and costs. Cloud optimization is an ongoing process, not a one-time task.</p>
    `,
    author: 'Maria Rodriguez',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    tags: ['Cloud', 'AWS', 'Migration'],
  },
  {
    id: 'post-3',
    lang: 'en',
    slug: 'react-19-new-features',
    title: 'React 19: What Developers Need to Know',
    excerpt: 'An in-depth look at the new features and improvements in React 19.',
    content: `
      <p>React 19 brings exciting new features that improve developer experience and application performance. Let's explore what's new.</p>

      <h2>Improved Concurrent Features</h2>
      <p>React 19 builds upon the concurrent rendering capabilities introduced in previous versions, making them more stable and easier to use.</p>

      <h2>Server Components</h2>
      <p>Server Components are now a first-class citizen in React, enabling better code splitting and reducing client-side JavaScript.</p>

      <h2>Better TypeScript Support</h2>
      <p>TypeScript integration has been improved with better type inference and more accurate type definitions.</p>

      <h2>Getting Started</h2>
      <p>Upgrading to React 19 is straightforward for most applications. Check out the official migration guide for detailed instructions.</p>
    `,
    author: 'Andres Garcia',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  // Spanish
  {
    id: 'post-1',
    lang: 'es',
    slug: 'futuro-desarrollo-web-2025',
    title: 'El Futuro del Desarrollo Web en 2025',
    excerpt: 'Explora las últimas tendencias que están moldeando el desarrollo web, desde la codificación asistida por IA hasta edge computing.',
    content: `
      <p>El panorama del desarrollo web continúa evolucionando rápidamente. A medida que avanzamos en 2025, varias tendencias clave están transformando cómo construimos y desplegamos aplicaciones web.</p>

      <h2>Desarrollo Asistido por IA</h2>
      <p>La inteligencia artificial ya no es solo una palabra de moda—se está convirtiendo en parte integral del flujo de trabajo de desarrollo. Desde autocompletado de código hasta pruebas automatizadas, las herramientas de IA están ayudando a los desarrolladores a trabajar más eficientemente que nunca.</p>

      <h2>Edge Computing</h2>
      <p>Con el auge del edge computing, estamos viendo un cambio hacia la distribución de la lógica de aplicación más cerca de los usuarios. Esto resulta en tiempos de respuesta más rápidos y mejores experiencias de usuario.</p>

      <h2>WebAssembly se Vuelve Mainstream</h2>
      <p>WebAssembly está habilitando aplicaciones de alto rendimiento en el navegador, abriendo nuevas posibilidades para juegos basados en web, edición de video y visualización de datos complejos.</p>

      <h2>Conclusión</h2>
      <p>El futuro del desarrollo web es emocionante y lleno de oportunidades. Mantenerse al día con estas tendencias te ayudará a construir experiencias web mejores, más rápidas y más atractivas.</p>
    `,
    author: 'Carlos Mendoza',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    date: '2025-01-15',
    readTime: '5 min lectura',
    category: 'Tecnología',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
    tags: ['Desarrollo Web', 'IA', 'Tendencias Tecnológicas'],
  },
  {
    id: 'post-2',
    lang: 'es',
    slug: 'mejores-practicas-migracion-cloud',
    title: 'Migración Cloud: Mejores Prácticas para el Éxito',
    excerpt: 'Una guía completa para planificar y ejecutar una estrategia de migración a la nube exitosa.',
    content: `
      <p>Migrar a la nube es un viaje transformador que requiere planificación y ejecución cuidadosa. Aquí están las mejores prácticas que hemos aprendido de docenas de migraciones exitosas.</p>

      <h2>Fase de Evaluación</h2>
      <p>Antes de migrar cualquier cosa, realiza una evaluación exhaustiva de tu infraestructura actual. Identifica dependencias, requisitos de rendimiento y desafíos potenciales.</p>

      <h2>Elige la Estrategia Correcta</h2>
      <p>No todas las aplicaciones deben migrarse de la misma manera. Considera lift-and-shift para sistemas legacy, refactorización para aplicaciones que pueden beneficiarse de características cloud-native, y reconstrucción para sistemas que necesitan modernización.</p>

      <h2>Seguridad Primero</h2>
      <p>La seguridad no debe ser una ocurrencia tardía. Implementa gestión de identidad adecuada, cifrado y medidas de cumplimiento desde el primer día.</p>

      <h2>Monitorear y Optimizar</h2>
      <p>Una vez migrado, monitorea continuamente el rendimiento y los costos. La optimización cloud es un proceso continuo, no una tarea única.</p>
    `,
    author: 'María Rodríguez',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    date: '2025-01-10',
    readTime: '7 min lectura',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    tags: ['Cloud', 'AWS', 'Migración'],
  },
  {
    id: 'post-3',
    lang: 'es',
    slug: 'react-19-nuevas-caracteristicas',
    title: 'React 19: Lo que los Desarrolladores Necesitan Saber',
    excerpt: 'Una mirada profunda a las nuevas características y mejoras en React 19.',
    content: `
      <p>React 19 trae nuevas características emocionantes que mejoran la experiencia del desarrollador y el rendimiento de las aplicaciones. Exploremos qué hay de nuevo.</p>

      <h2>Características Concurrentes Mejoradas</h2>
      <p>React 19 construye sobre las capacidades de renderizado concurrente introducidas en versiones anteriores, haciéndolas más estables y fáciles de usar.</p>

      <h2>Server Components</h2>
      <p>Los Server Components son ahora ciudadanos de primera clase en React, permitiendo mejor división de código y reduciendo el JavaScript del lado del cliente.</p>

      <h2>Mejor Soporte para TypeScript</h2>
      <p>La integración con TypeScript ha sido mejorada con mejor inferencia de tipos y definiciones de tipos más precisas.</p>

      <h2>Comenzando</h2>
      <p>Actualizar a React 19 es sencillo para la mayoría de las aplicaciones. Consulta la guía de migración oficial para instrucciones detalladas.</p>
    `,
    author: 'Andrés García',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    date: '2025-01-05',
    readTime: '6 min lectura',
    category: 'Desarrollo',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
];

export function getBlogPosts(lang: Locale): BlogPost[] {
  return blogPosts.filter((post) => post.lang === lang);
}

export function getBlogPostBySlug(slug: string, lang: Locale): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.lang === lang);
}

export function getAllBlogSlugs(): { lang: string; slug: string }[] {
  return blogPosts.map((post) => ({ lang: post.lang, slug: post.slug }));
}
