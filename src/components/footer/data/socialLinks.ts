import { Youtube } from 'lucide-react';
import { InstagramIcon } from '../icons/InstagramIcon';
import { XIcon } from '../icons/XIcon';
import { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    name: 'YouTube',
    href: 'https://youtube.com/@gamemindsstudio',
    icon: Youtube
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/gamemindsstudio',
    icon: InstagramIcon
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/gamemindsstudio',
    icon: XIcon
  }
];