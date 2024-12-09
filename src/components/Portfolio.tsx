import React from 'react';
import { motion } from 'framer-motion';
import { GameCard } from './games/GameCard';
import { SectionTitle } from './common/SectionTitle';
import { GameBackground } from './games/GameBackground';

const projects = [
  {
    title: "Cyber Odyssey",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    description: "A futuristic RPG set in a dystopian cyberpunk world",
    category: "RPG",
    rating: 4.8,
    players: "50K+"
  },
  {
    title: "Stellar Conquest",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=800&q=80",
    description: "Space strategy game with real-time fleet battles",
    category: "Strategy",
    rating: 4.9,
    players: "100K+"
  },
  {
    title: "Forest Guardian",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=80",
    description: "Adventure through mystical forests protecting nature",
    category: "Adventure",
    rating: 4.7,
    players: "75K+"
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

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-20 bg-gray-900 overflow-hidden">
      <GameBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Our Games</SectionTitle>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <GameCard key={project.title} game={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};