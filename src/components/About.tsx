import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Heart } from 'lucide-react';
import { SectionTitle } from './common/SectionTitle';
import { ValueCard } from './about/ValueCard';
import { AboutContent } from './about/AboutContent';

const values = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team First",
    description: "We believe in the power of collaboration and diverse perspectives"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Innovation",
    description: "Pushing boundaries in gaming technology and storytelling"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Player Focus",
    description: "Creating memorable experiences that resonate with players"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle>About Us</SectionTitle>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
        >
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </motion.div>

        <AboutContent />
      </div>
    </section>
  );
};