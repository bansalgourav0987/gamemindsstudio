import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { ContactDetail } from './types';

interface ContactMethodProps {
  detail: ContactDetail;
  index: number;
}

export const ContactMethod: React.FC<ContactMethodProps> = ({ detail, index }) => {
  const isWhatsApp = detail.label === 'WhatsApp';

  return (
    <motion.a
      href={detail.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-4 group"
    >
      <div className="p-3 bg-electric-blue/10 rounded-xl group-hover:bg-electric-blue/20 transition-colors">
        {isWhatsApp ? (
          <WhatsAppIcon className="w-6 h-6 text-electric-blue" />
        ) : (
          React.cloneElement(detail.icon as React.ReactElement, { 
            className: 'w-6 h-6 text-electric-blue'
          })
        )}
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-1">{detail.label}</p>
        <p className="text-white group-hover:text-electric-blue transition-colors">
          {detail.value}
        </p>
      </div>
    </motion.a>
  );
};