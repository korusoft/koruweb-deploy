import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/data/blog';
import BlogPostPageClient from './BlogPostPageClient';

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug, lang as Locale);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const dictionary = await getDictionary(lang as Locale);

  return {
    title: `${post.title} | ${dictionary.metadata.blog.title}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://korucode.com/${lang}/blog/${slug}`,
      siteName: 'Koru - Consulting & Development',
      locale: lang === 'es' ? 'es_CO' : 'en_US',
      type: 'article',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug, lang as Locale);

  if (!post) {
    notFound();
  }

  return <BlogPostPageClient post={post} />;
}
