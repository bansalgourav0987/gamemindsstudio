import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';
import { BusinessHours } from './contact/BusinessHours';
import { GridBackground } from './common/GridBackground';

export const Contact: React.FC = () => {
  return (
    <GridBackground className="min-h-screen py-20 bg-gray-900/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about our games or services? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <BusinessHours />
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </GridBackground>
  );
};