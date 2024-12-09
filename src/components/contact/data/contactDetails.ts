import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { ContactDetail } from '../types';

export const contactDetails: ContactDetail[] = [
  {
    icon: React.createElement(Mail, { className: "w-6 h-6" }),
    label: 'Email',
    value: 'contact@gamemindsstudio.shop',
    link: 'mailto:contact@gamemindsstudio.shop'
  },
  {
    icon: null, // WhatsApp icon is handled in ContactMethod
    label: 'WhatsApp',
    value: '+92 347-224-5413',
    link: 'https://wa.me/923472245413'
  },
  {
    icon: React.createElement(MapPin, { className: "w-6 h-6" }),
    label: 'Address',
    value: 'Post Office Mohma Samad Khan Rakhni District, Barkhan Balochistan, Pakistan Zip Code: 84400',
    link: 'https://maps.google.com/?q=Post+Office+Mohma+Samad+Khan+Rakhni+District+Barkhan+Balochistan+Pakistan'
  }
];