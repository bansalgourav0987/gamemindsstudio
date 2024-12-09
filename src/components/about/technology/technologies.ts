import { Cpu, Wand2, Workflow, Layers, Brain, Gamepad, Cloud, Database, Shield, Code, Smartphone, Glasses } from 'lucide-react';
import { Technology } from './types';

export const technologies: Technology[] = [
  {
    icon: Brain,
    title: "Advanced AI",
    description: "Neural networks and machine learning for dynamic gameplay and intelligent NPCs",
    color: "bg-gradient-to-br from-blue-600 to-cyan-500",
    features: [
      "Behavioral learning",
      "Dynamic difficulty adjustment",
      "Natural language processing",
      "Procedural content generation"
    ]
  },
  {
    icon: Layers,
    title: "Ray Tracing",
    description: "Cutting-edge graphics technology for photorealistic lighting and reflections",
    color: "bg-gradient-to-br from-purple-600 to-pink-500",
    features: [
      "Real-time global illumination",
      "Accurate shadow mapping",
      "Realistic reflections",
      "Advanced material rendering"
    ]
  },
  {
    icon: Workflow,
    title: "Physics Engine",
    description: "Custom-built physics simulation for realistic environmental interactions",
    color: "bg-gradient-to-br from-green-600 to-emerald-500",
    features: [
      "Rigid body dynamics",
      "Soft body simulation",
      "Particle systems",
      "Fluid dynamics"
    ]
  },
  {
    icon: Wand2,
    title: "Procedural Gen",
    description: "Advanced algorithms creating infinite, unique game worlds",
    color: "bg-gradient-to-br from-orange-600 to-amber-500",
    features: [
      "Terrain generation",
      "Dynamic weather systems",
      "Ecosystem simulation",
      "Quest generation"
    ]
  },
  {
    icon: Glasses,
    title: "VR/AR Support",
    description: "Immersive virtual and augmented reality experiences",
    color: "bg-gradient-to-br from-indigo-600 to-blue-500",
    features: [
      "6DOF tracking",
      "Haptic feedback",
      "Spatial audio",
      "Mixed reality integration"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Gaming",
    description: "Seamless cloud-based gaming infrastructure",
    color: "bg-gradient-to-br from-cyan-600 to-teal-500",
    features: [
      "Low-latency streaming",
      "Cross-platform sync",
      "Auto-scaling servers",
      "Cloud saves"
    ]
  },
  {
    icon: Shield,
    title: "Security",
    description: "Advanced security measures for safe gaming experiences",
    color: "bg-gradient-to-br from-red-600 to-rose-500",
    features: [
      "Anti-cheat system",
      "Secure transactions",
      "DDoS protection",
      "Data encryption"
    ]
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Seamless gaming across multiple devices and platforms",
    color: "bg-gradient-to-br from-violet-600 to-purple-500",
    features: [
      "Mobile optimization",
      "Cross-save support",
      "Adaptive controls",
      "Platform-specific features"
    ]
  }
];