import React from 'react';
import { Cookie, Settings, Info } from 'lucide-react';
import { LegalLayout } from '../../components/legal/LegalLayout';
import { LegalSection } from '../../components/legal/LegalSection';

const sections = [
  {
    icon: Cookie,
    title: "What Are Cookies",
    content: `Cookies are small text files that are stored on your device when you visit our website. 
    They help us remember your preferences and improve your browsing experience. We use both session 
    cookies (temporary) and persistent cookies (remain until deleted).`
  },
  {
    icon: Settings,
    title: "How We Use Cookies",
    content: `We use cookies for:
    • Essential website functionality
    • Remembering your preferences
    • Analytics and performance monitoring
    • Personalizing your gaming experience
    • Security and authentication`
  },
  {
    icon: Info,
    title: "Managing Cookies",
    content: `You can control cookies through your browser settings. You can:
    • Block all cookies
    • Delete existing cookies
    • Allow cookies from specific websites
    • Set preferences for different types of cookies

    Please note that blocking some types of cookies may impact your experience on our website.`
  }
];

export const CookiePolicyPage: React.FC = () => {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated={new Date().toLocaleDateString()}
      contactEmail="privacy@gamemindsstudio.shop"
      contactType="cookies"
    >
      {sections.map((section, index) => (
        <LegalSection
          key={section.title}
          icon={section.icon}
          title={section.title}
          content={section.content}
          index={index}
          type="cookies"
        />
      ))}
    </LegalLayout>
  );
};