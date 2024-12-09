import React from 'react';
import { motion } from 'framer-motion';
import { SocialLink as SocialLinkType } from './types';
import { SocialLink } from './SocialLink';
import { socialLinks } from './data/socialLinks';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const SocialLinks: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex space-x-4"
    >
      {socialLinks.map((link) => (
        <SocialLink
          key={link.name}
          href={link.href}
          icon={link.icon}
          name={link.name}
        />
      ))}
    </motion.div>
  );
};