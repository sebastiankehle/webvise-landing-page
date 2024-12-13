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
    text: "Solutions",
    variant: "outline" as const,
  },
  headline: {
    primary: "Choose Your Solution",
    secondary:
      "From static websites to enterprise applications, we deliver scalable solutions tailored to your needs.",
  },
  solutions: [
    {
      title: "Website",
      description: "High-performance marketing and landing pages",
      icon: Globe,
      price: "€4,999",
      timeframe: "4-6 Weeks",
      features: [
        {
          title: "Modern CMS",
          description: "Webflow or WordPress with custom design & animations",
          icon: Layout,
        },
        {
          title: "Essential Features",
          description: "Responsive design, CMS, Forms, Analytics, Blog",
          icon: Smartphone,
        },
        {
          title: "Performance",
          description: "SEO optimization, CDN, Core Web Vitals optimization",
          icon: Sparkles,
        },
      ],
      highlight: "Quick Launch",
    },
    {
      title: "Web Application",
      description: "Full-stack solutions with mobile integration",
      icon: Rocket,
      price: "€14,999",
      timeframe: "8-12 Weeks",
      features: [
        {
          title: "Cutting Edge Frameworks",
          description:
            "Next.js for web, Flutter for mobile, database of choice",
          icon: Code2,
        },
        {
          title: "Core Systems",
          description: "Auth, API Gateway, File Storage",
          icon: Database,
        },
        {
          title: "Advanced Features",
          description: "Admin Dashboard, Analytics, Payments, Notifications",
          icon: Braces,
        },
      ],
      highlight: "Most Popular",
    },
    {
      title: "Enterprise",
      description: "Custom solutions with advanced AI capabilities",
      icon: Bot,
      price: "From €29,999",
      timeframe: "12-16 Weeks",
      features: [
        {
          title: "AI Integration",
          description: "Custom LLMs, AI Media generation, Agent systems",
          icon: CircuitBoard,
        },
        {
          title: "Infrastructure",
          description: "Microservices, Auto-scaling, CI/CD, Monitoring",
          icon: Server,
        },
        {
          title: "Enterprise Grade",
          description: "SLA, ISO Compliance, 24/7 Support, Training",
          icon: Shield,
        },
      ],
      highlight: "Full Service",
    },
  ],
} as const;
