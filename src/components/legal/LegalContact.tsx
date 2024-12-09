import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface LegalContactProps {
  email: string;
  type: 'privacy' | 'legal' | 'cookies';
}

const contactColors = {
  privacy: 'blue',
  legal: 'purple',
  cookies: 'green'
} as const;

export const LegalContact: React.FC<LegalContactProps> = ({ email, type }) => {
  const color = contactColors[type];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className={`mt-12 p-6 bg-${color}-500/10 rounded-xl border border-${color}-500/20`}
    >
      <div className="flex items-center gap-3">
        <Mail className={`w-5 h-5 text-${color}-400`} />
        <p className="text-gray-300">
          Questions about our {type === 'legal' ? 'Terms of Service' : `${type.charAt(0).toUpperCase() + type.slice(1)} Policy`}? Contact us at{' '}
          <a 
            href={`mailto:${email}`} 
            className={`text-${color}-400 hover:text-${color}-300 transition-colors`}
          >
            {email}
          </a>
        </p>
      </div>
    </motion.div>
  );
};