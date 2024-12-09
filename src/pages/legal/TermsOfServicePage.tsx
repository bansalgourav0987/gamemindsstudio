import React from 'react';
import { FileText, UserCheck, AlertCircle } from 'lucide-react';
import { LegalLayout } from '../../components/legal/LegalLayout';
import { LegalSection } from '../../components/legal/LegalSection';

const sections = [
  {
    icon: UserCheck,
    title: "User Agreement",
    content: `By accessing or using Game Minds Studio services, you agree to be bound by these Terms of Service. 
    If you disagree with any part of the terms, you may not access our services.

    You must be at least 13 years of age to use our services. If you are under 18, you must have parental 
    consent to use our services.`
  },
  {
    icon: FileText,
    title: "License & Usage",
    content: `We grant you a limited, non-exclusive, non-transferable license to use our games and services 
    for personal, non-commercial purposes. You agree not to:
    • Modify or create derivative works
    • Reverse engineer our games
    • Use cheats or unauthorized third-party software
    • Exploit bugs or glitches
    • Engage in any activity that violates our community guidelines`
  },
  {
    icon: AlertCircle,
    title: "Termination",
    content: `We reserve the right to terminate or suspend your account and access to our services at our sole 
    discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful 
    to other users, us, or third parties, or for any other reason.`
  }
];

export const TermsOfServicePage: React.FC = () => {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated={new Date().toLocaleDateString()}
      contactEmail="legal@gamemindsstudio.shop"
      contactType="legal"
    >
      {sections.map((section, index) => (
        <LegalSection
          key={section.title}
          icon={section.icon}
          title={section.title}
          content={section.content}
          index={index}
          type="legal"
        />
      ))}
    </LegalLayout>
  );
};