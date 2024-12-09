import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AnimatedNavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const AnimatedNavLink: React.FC<AnimatedNavLinkProps> = ({
  to,
  children,
  className = '',
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={to}
        className={className}
        onClick={onClick}
      >
        <motion.span
          initial={{ backgroundPosition: "0% 50%" }}
          whileHover={{ 
            backgroundPosition: "100% 50%",
            transition: { duration: 0.3 }
          }}
          className="relative inline-block"
        >
          {children}
          <motion.span
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-deep-purple transform origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>
      </Link>
    </motion.div>
  );
};