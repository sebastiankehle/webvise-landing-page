import { Code2, Lightbulb, Puzzle, Rocket, Target } from "lucide-react";

export const processContent = {
  badge: {
    text: "How We Work",
    variant: "outline",
  },
  headline: {
    primary: "From Idea to Impact",
    secondary:
      "A proven process that turns your vision into reality, with clear milestones and constant communication.",
  },
  steps: [
    {
      title: "Strategy",
      description:
        "First, we align on your vision and goals. We map out the fastest path to your MVP and plan the features that will validate your idea.",
      icon: Lightbulb,
      color: "var(--accent-1)",
    },
    {
      title: "Blueprint",
      description:
        "We design the user experience and technical architecture. Every screen and feature is optimized for engagement and scalability.",
      icon: Puzzle,
      color: "var(--accent-2)",
    },
    {
      title: "Build",
      description:
        "Rapid development with weekly demos. See your product take shape and give feedback that steers us in the right direction.",
      icon: Code2,
      color: "var(--accent-3)",
    },
    {
      title: "Validate",
      description:
        "Rigorous testing across devices and use cases. We ensure your product is ready for real users and can handle growth.",
      icon: Target,
      color: "var(--accent-4)",
    },
    {
      title: "Launch",
      description:
        "Go live with confidence. We handle deployment, monitoring, and initial optimization based on real user data.",
      icon: Rocket,
      color: "var(--accent-5)",
    },
  ],
} as const;
