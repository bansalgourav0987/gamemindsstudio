import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  name: string;
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.9
  }
};

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, name }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={iconVariants}
      whileHover="hover"
      whileTap="tap"
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={`Follow us on ${name}`}
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  );
};