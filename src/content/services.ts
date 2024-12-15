import { Bot, Code2, Layout, Smartphone } from "lucide-react";

export const servicesContent = {
  badge: {
    text: "Our Services",
    variant: "outline",
  },
  headline: {
    primary: "Tech That Delivers",
    secondary:
      "From landing pages to AI solutions, we build what founders need.",
  },
  services: [
    {
      title: "Web Development",
      description:
        "Full-stack applications built for growth. Whether it's an MVP or a scale-ready platform, we deliver products users love.",
      icon: Code2,
      features: [
        "Next.js & React",
        "Rapid MVP Development",
        "Scale-Ready Architecture",
        "Real-Time Features",
      ],
    },
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages that turn visitors into customers. Perfect for product launches and marketing campaigns.",
      icon: Layout,
      features: [
        "Webflow & WordPress",
        "Conversion Optimized",
        "SEO & Analytics",
        "A/B Testing Ready",
      ],
    },
    {
      title: "Mobile Apps",
      description:
        "Native-quality mobile apps that engage users. One codebase for iOS and Android, without compromising on performance.",
      icon: Smartphone,
      features: [
        "Flutter Development",
        "Cross-Platform Apps",
        "Native Features",
        "Offline Support",
      ],
    },
    {
      title: "AI Integration",
      description:
        "Give your product an AI edge. From smart automation to custom LLMs, we build AI features that deliver real value.",
      icon: Bot,
      features: [
        "Custom AI Models",
        "Process Automation",
        "Smart Analytics",
        "Agent Systems",
      ],
    },
  ],
} as const;
