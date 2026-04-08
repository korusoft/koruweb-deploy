'use client';

import { motion } from 'motion/react';
import BlogCard from '@/components/ui/BlogCard';
import { getBlogPosts } from '@/data/blog';
import { useTranslation } from '@/hooks/useTranslation';

export default function BlogPageClient() {
  const { t, lang } = useTranslation();
  const blogPosts = getBlogPosts(lang);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#243e85] via-[#1e3a8a] to-[#1a2e64] relative overflow-hidden">
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
              {t('blog.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('blog.hero.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('blog.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">{t('blog.noPosts')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('blog.newsletter.title')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('blog.newsletter.description')}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#243e85] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#243e85] text-white font-semibold rounded-lg hover:bg-[#1a2e64] transition-colors"
              >
                {t('blog.newsletter.button')}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
