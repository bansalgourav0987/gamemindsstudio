import React from 'react';
import { motion } from 'framer-motion';
import { PaymentMethodCard } from './PaymentMethodCard';
import { SectionTitle } from '../common/SectionTitle';
import { paymentMethods } from './paymentData';

export const PaymentTypeSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle>Payment Methods</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paymentMethods.map((method, index) => (
            <PaymentMethodCard 
              key={method.name}
              method={method}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};