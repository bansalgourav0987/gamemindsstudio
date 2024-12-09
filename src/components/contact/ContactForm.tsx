import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-full"
    >
      <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <label className="block text-gray-400 text-sm mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-900/50 text-white rounded-xl border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <label className="block text-gray-400 text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-gray-900/50 text-white rounded-xl border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <label className="block text-gray-400 text-sm mb-2">Subject</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-gray-900/50 text-white rounded-xl border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
            placeholder="How can we help?"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <label className="block text-gray-400 text-sm mb-2">Message</label>
          <textarea
            className="w-full px-4 py-3 bg-gray-900/50 text-white rounded-xl border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all h-32 resize-none"
            placeholder="Your message"
          ></textarea>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-electric-blue to-deep-purple text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          Send Message
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Send className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </form>
    </motion.div>
  );
};