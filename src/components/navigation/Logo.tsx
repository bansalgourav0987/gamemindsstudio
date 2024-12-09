import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const logoVariants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

const iconVariants = {
  hover: {
    rotate: 360,
    scale: 1.1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex-shrink-0">
      <motion.div
        className="flex items-center"
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <motion.div 
          className="bg-deep-purple p-1.5 rounded-full"
          variants={iconVariants}
        >
          <Gamepad2 className="h-5 w-5 text-white" />
        </motion.div>
        <motion.span 
          className="ml-2 text-white font-bold text-lg"
          variants={{
            hover: {
              color: '#00f7ff',
              transition: { duration: 0.3 }
            }
          }}
        >
          GameMinds
        </motion.span>
      </motion.div>
    </Link>
  );
};