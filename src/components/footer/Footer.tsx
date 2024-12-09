import React from 'react';
import { motion } from 'framer-motion';
import { FooterLink } from './FooterLink';
import { SocialLinks } from './SocialLinks';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Game Minds Studio</h3>
            <p className="text-gray-400">
              Crafting Digital Dreams Into Reality
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/games">Games</FooterLink></li>
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Legal</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
              <li><FooterLink href="/cookies">Cookie Policy</FooterLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to our newsletter</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <motion.div
          variants={footerVariants}
          className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Game Minds Studio. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};