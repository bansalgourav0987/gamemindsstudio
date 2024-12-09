import React from 'react';
import { motion } from 'framer-motion';
import { LegalHeader } from './LegalHeader';
import { LegalContact } from './LegalContact';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  contactEmail: string;
  contactType: 'privacy' | 'legal' | 'cookies';
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  lastUpdated,
  children,
  contactEmail,
  contactType
}) => {
  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <LegalHeader title={title} lastUpdated={lastUpdated} />
          <div className="space-y-12">
            {children}
          </div>
          <LegalContact email={contactEmail} type={contactType} />
        </motion.div>
      </div>
    </div>
  );
};