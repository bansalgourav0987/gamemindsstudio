import { LucideIcon } from 'lucide-react';

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  achievements: string[];
}