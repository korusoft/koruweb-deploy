'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Card, CardBody, Avatar, Chip } from '@heroui/react';
import type { BlogPost } from '@/data/blog';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const localizedPath = useLocalizedPath();
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={localizedPath(`/blog/${post.slug}`)}>
        <Card className="h-full group overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <Chip
                size="sm"
                variant="flat"
                className="bg-white/90 text-gray-800"
              >
                {post.category}
              </Chip>
            </div>
          </div>

          <CardBody className="p-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <span>{formattedDate}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#243e85] transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <Avatar
                src={post.authorImage}
                size="sm"
              />
              <span className="text-sm font-medium text-gray-700">{post.author}</span>
            </div>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
}
