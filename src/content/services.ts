import { Bot, Code2, Layout, Smartphone } from "lucide-react";

export const servicesContent = {
  badge: {
    text: "Our Services",
    variant: "outline" as const,
  },
  headline: {
    primary: "Full-Stack Development Services",
    secondary: "End-to-end solutions for your digital presence",
  },
  services: [
    {
      title: "Web Design",
      description:
        "Crafting beautiful, responsive interfaces that captivate users and drive engagement.",
      icon: Layout,
      features: [
        "UI/UX Design",
        "Responsive Layouts",
        "Brand Identity",
        "Design Systems",
      ],
    },
    {
      title: "Web Development",
      description:
        "Building robust, scalable web applications with modern technologies.",
      icon: Code2,
      features: [
        "Frontend Development",
        "Backend Systems",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      title: "App Development",
      description:
        "Creating native and cross-platform mobile experiences that users love.",
      icon: Smartphone,
      features: [
        "iOS & Android",
        "Cross-Platform",
        "Native Apps",
        "Progressive Web Apps",
      ],
    },
    {
      title: "AI Integration",
      description:
        "Leveraging cutting-edge AI technologies to create intelligent solutions.",
      icon: Bot,
      features: [
        "ChatGPT Integration",
        "Custom AI Models",
        "Machine Learning",
        "Automation",
      ],
    },
  ],
} as const;
