import { Rocket, Users, Gamepad, Trophy, Globe, Award } from 'lucide-react';
import { Milestone } from '../types';

export const milestones: Milestone[] = [
  {
    year: "2024 Q1",
    title: "The Beginning",
    description: "Founded Game Minds Studio with a vision to revolutionize gaming experiences through innovative technology and storytelling.",
    icon: Rocket,
    achievements: [
      "Assembled founding team",
      "Secured initial funding",
      "Established studio vision"
    ]
  },
  {
    year: "2024 Q1",
    title: "Dream Team Assembly",
    description: "Brought together a talented team of developers, artists, and designers from around the world.",
    icon: Users,
    achievements: [
      "20+ industry veterans",
      "Multiple award winners",
      "Diverse skill sets"
    ]
  },
  {
    year: "2024 Q2",
    title: "Project Launch",
    description: "Began development of our groundbreaking debut title 'Cyber Odyssey', pushing technical boundaries.",
    icon: Gamepad,
    achievements: [
      "Innovative game mechanics",
      "Cutting-edge graphics",
      "Unique storytelling"
    ]
  },
  {
    year: "2024 Q2",
    title: "Industry Recognition",
    description: "Received 'Most Promising Studio' award at GameDev Summit 2024 for our innovative approach.",
    icon: Trophy,
    achievements: [
      "Industry recognition",
      "Media coverage",
      "Community growth"
    ]
  },
  {
    year: "2024 Q3",
    title: "Global Expansion",
    description: "Expanded operations to reach international markets and establish global presence.",
    icon: Globe,
    achievements: [
      "Multiple office locations",
      "International partnerships",
      "Market expansion"
    ]
  },
  {
    year: "2024 Q4",
    title: "Major Milestone",
    description: "Celebrated our first million active players across all platforms and continued growth.",
    icon: Award,
    achievements: [
      "1M+ active players",
      "High user satisfaction",
      "Strong community"
    ]
  }
];