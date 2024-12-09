import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'PhonePe',
    logo: 'https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png',
  },
  {
    name: 'NetBanking',
    logo: 'https://www.nicepng.com/png/full/234-2349788_net-banking-png.png',
  },
  {
    name: 'ICICI Bank',
    logo: 'https://logos-download.com/wp-content/uploads/2016/06/ICICI_Bank_logo_logotype.png',
  },
  {
    name: 'SBI',
    logo: 'https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png',
  },
  {
    name: 'Axis Bank',
    logo: 'https://logos-download.com/wp-content/uploads/2016/06/Axis_Bank_logo_logotype.png',
  },
  {
    name: 'HDFC Bank',
    logo: 'https://www.hdfc.com/sites/default/files/styles/full_width/public/2022-09/HDFC_Logo_0.jpg',
  },
  {
    name: 'Paytm',
    logo: 'https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png',
  },
  {
    name: 'UPI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png',
  },
];

export const BankingPartners: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center text-white mb-12"
        >
          Our Banking Partners
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-12 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};