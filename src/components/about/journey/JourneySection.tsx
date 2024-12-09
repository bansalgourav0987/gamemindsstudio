import React from 'react';
import { motion } from 'framer-motion';
import { JourneyTimeline } from './JourneyTimeline';
import { JourneyBackground } from './JourneyBackground';
import { JourneyHeader } from './JourneyHeader';
import { JourneyStats } from './JourneyStats';

export const Journey: React.FC = () => {
  return (
    <section className="relative py-20 bg-gray-900/95 overflow-hidden">
      <JourneyBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <JourneyHeader />
        <JourneyStats />
        <div className="max-w-5xl mx-auto">
          <JourneyTimeline />
        </div>
      </div>
    </section>
  );
};