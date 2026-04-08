'use client';

import { motion } from 'motion/react';
import { Card, CardBody, Chip } from '@heroui/react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full group overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Chip
              size="sm"
              variant="flat"
              className="bg-white/90 text-gray-800"
            >
              {project.category}
            </Chip>
          </div>
        </div>

        <CardBody className="p-6">
          <p className="text-[#243e85] text-sm font-medium mb-1">{project.client}</p>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Chip
                key={tech}
                size="sm"
                variant="flat"
                className="bg-gray-100 text-gray-700"
              >
                {tech}
              </Chip>
            ))}
          </div>

          {project.results && (
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Results</p>
              <ul className="space-y-1">
                {project.results.slice(0, 2).map((result, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}
