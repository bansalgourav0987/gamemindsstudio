import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';
import { LegalLayout } from '../../components/legal/LegalLayout';
import { LegalSection } from '../../components/legal/LegalSection';

const sections = [
  {
    icon: Shield,
    title: "Information Collection",
    content: `We collect information that you provide directly to us, including when you create an account, 
    make a purchase, or contact us for support. This may include:
    • Name and contact information
    • Payment information
    • Device and usage information
    • Gaming preferences and history`
  },
  {
    icon: Lock,
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal data against 
    unauthorized or unlawful processing, accidental loss, destruction, or damage. We use industry-standard 
    encryption protocols and regularly update our security measures.`
  },
  {
    icon: Eye,
    title: "Data Usage",
    content: `We use your information to:
    • Provide and improve our gaming services
    • Process your transactions
    • Send you important updates and notifications
    • Personalize your gaming experience
    • Comply with legal obligations`
  }
];

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated={new Date().toLocaleDateString()}
      contactEmail="privacy@gamemindsstudio.shop"
      contactType="privacy"
    >
      {sections.map((section, index) => (
        <LegalSection
          key={section.title}
          icon={section.icon}
          title={section.title}
          content={section.content}
          index={index}
          type="privacy"
        />
      ))}
    </LegalLayout>
  );
};