import { Bot, Code2, Layout, Smartphone } from "lucide-react";

export const servicesContent = {
  badge: {
    text: "Services",
    variant: "outline",
  },
  headline: {
    primary: "Full-Stack Excellence",
    secondary: "Modern solutions engineered for growth.",
  },
  services: [
    {
      title: "Web Development",
      description:
        "High-performance web applications built with Next.js and React. Modern, scalable, and optimized for growth.",
      icon: Code2,
      features: [
        "Next.js & React",
        "TypeScript & APIs",
        "Performance First",
        "Cloud Deployment",
      ],
    },
    {
      title: "Web Design",
      description:
        "Professional websites with modern CMS. Perfect for marketing sites, blogs, and business presence.",
      icon: Layout,
      features: [
        "Webflow & WordPress",
        "Custom Design",
        "SEO Optimized",
        "Content Management",
      ],
    },
    {
      title: "App Development",
      description:
        "Cross-platform mobile applications with Flutter. Native performance with single codebase efficiency.",
      icon: Smartphone,
      features: [
        "Flutter & Dart",
        "iOS & Android",
        "Native Features",
        "App Store Ready",
      ],
    },
    {
      title: "AI Integration",
      description:
        "Enhance your digital products with AI capabilities. From chatbots to automation, make your product smarter.",
      icon: Bot,
      features: [
        "Agent Integration",
        "Custom AI Features",
        "Process Automation",
        "Smart Analytics",
      ],
    },
  ],
} as const;
