import { Code2, Lightbulb, Puzzle, Rocket, Target } from "lucide-react";

export const processContent = {
  badge: {
    text: "Our Process",
    variant: "outline",
  },
  headline: {
    primary: "From Idea to Reality",
    secondary:
      "A proven development process that turns your vision into a successful digital product.",
  },
  steps: [
    {
      title: "Ideation",
      description:
        "We start by understanding your vision, goals, and requirements. Together, we shape the perfect solution for your business needs.",
      icon: Lightbulb,
      color: "var(--accent-1)",
    },
    {
      title: "Design",
      description:
        "Transform ideas into intuitive interfaces. We create user-centric designs that look great and drive engagement.",
      icon: Puzzle,
      color: "var(--accent-2)",
    },
    {
      title: "Development",
      description:
        "Using modern tech stack and best practices, we build your solution with clean, maintainable, and scalable code.",
      icon: Code2,
      color: "var(--accent-3)",
    },
    {
      title: "Testing",
      description:
        "Rigorous testing across devices and scenarios ensures your product works flawlessly for every user.",
      icon: Target,
      color: "var(--accent-4)",
    },
    {
      title: "Launch",
      description:
        "Smooth deployment and handover. We ensure your product goes live successfully and you're ready to grow.",
      icon: Rocket,
      color: "var(--accent-5)",
    },
  ],
} as const;
