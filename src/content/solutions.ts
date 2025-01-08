import {
  Bot,
  Braces,
  CircuitBoard,
  Code2,
  Database,
  Globe,
  Layout,
  Rocket,
  Server,
  Shield,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const solutionsContent = {
  badge: {
    text: "Solutions & Pricing",
    variant: "outline" as const,
  },
  headline: {
    primary: "Pick Your Growth Path",
    secondary:
      "From rapid MVPs to full-scale digital products. Built for founders who move fast.",
  },
  solutions: [
    {
      title: "Landing Page",
      description:
        "Convert visitors into customers with a high-impact landing page",
      icon: Globe,
      price: "€4,999",
      timeframe: "2-4 Weeks",
      features: [
        {
          title: "Growth Ready",
          description: "Customized Webflow or WordPress CMS",
          icon: Layout,
        },
        {
          title: "Conversion Focus",
          description: "Lead capture, CRM integration, automated follow-ups",
          icon: Smartphone,
        },
        {
          title: "Speed Matters",
          description: "Lightning-fast loading, SEO-optimized for day one",
          icon: Sparkles,
        },
      ],
      highlight: "Launch Fast",
    },
    {
      title: "Digital Product",
      description: "Full-stack web or mobile app ready for market validation",
      icon: Rocket,
      price: "€14,999",
      timeframe: "4-8 Weeks",
      features: [
        {
          title: "Modern Stack",
          description: "Next.js or Flutter - built for rapid iteration",
          icon: Code2,
        },
        {
          title: "Core Features",
          description: "Auth, payments, storage - everything to start selling",
          icon: Database,
        },
        {
          title: "Startup Ready",
          description: "Analytics dashboard, user management, real-time data",
          icon: Braces,
        },
      ],
      highlight: "Founder Favorite",
    },
    {
      title: "Scale Up",
      description: "Enterprise-grade solution with AI superpowers",
      icon: Bot,
      price: "From €29,999",
      timeframe: "8-12 Weeks",
      features: [
        {
          title: "AI Engine",
          description: "Custom LLMs, workflow automation, Agent systems",
          icon: CircuitBoard,
        },
        {
          title: "Built to Scale",
          description: "Microservices, auto-scaling, performance monitoring",
          icon: Server,
        },
        {
          title: "Enterprise Ready",
          description: "SSO, compliance, SLA, dedicated support",
          icon: Shield,
        },
      ],
      highlight: "Full Power",
    },
  ],
} as const;
