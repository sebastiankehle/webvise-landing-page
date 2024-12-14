import { Code2, HeartHandshake, Lightbulb, Puzzle, Rocket } from "lucide-react";

export const processContent = {
  badge: {
    text: "Process",
    variant: "outline" as const,
  },
  headline: {
    primary: "From Concept to Launch",
    secondary:
      "Our proven development process ensures successful project delivery",
  },
  steps: [
    {
      title: "Discovery",
      description:
        "We dive deep into your requirements, goals and vision to create the perfect roadmap.",
      icon: Lightbulb,
      color: "var(--accent-1)",
    },
    {
      title: "Design",
      description:
        "Crafting the architecture and user experience that brings your vision to life.",
      icon: Puzzle,
      color: "var(--accent-2)",
    },
    {
      title: "Development",
      description:
        "Building your solution using cutting-edge technologies and best practices.",
      icon: Code2,
      color: "var(--accent-3)",
    },
    {
      title: "Testing",
      description:
        "Rigorous testing and performance optimization for a flawless experience.",
      icon: HeartHandshake,
      color: "var(--accent-4)",
    },
    {
      title: "Launch",
      description:
        "Seamless deployment and monitoring to ensure everything runs perfectly.",
      icon: Rocket,
      color: "var(--accent-5)",
    },
  ],
} as const;
