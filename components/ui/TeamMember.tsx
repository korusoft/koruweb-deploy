'use client';

import { motion } from 'motion/react';
import { Card, CardBody, Avatar } from '@heroui/react';
import type { TeamMember as TeamMemberType } from '@/data/team';

interface TeamMemberProps {
  member: TeamMemberType;
  index?: number;
}

export default function TeamMember({ member, index = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300" shadow="sm">
        <CardBody className="p-6">
          <Avatar
            src={member.image}
            className="w-28 h-28 mx-auto mb-4"
            isBordered
            color="primary"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-[#243e85] font-medium text-sm mb-3">{member.role}</p>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

          <div className="flex justify-center gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                className="text-gray-400 hover:text-[#243e85] transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                className="text-gray-400 hover:text-[#243e85] transition-colors"
                aria-label={`${member.name}'s Twitter`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            )}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
