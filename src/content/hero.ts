import { Code2, Rocket, Sparkles } from "lucide-react";

export const heroContent = {
  badges: [
    {
      text: "Full-Stack Dev",
      variant: "outline",
      icon: Code2,
    },
    {
      text: "AI Solutions",
      variant: "outline",
      icon: Sparkles,
    },
    {
      text: "Startup Ready",
      variant: "outline",
      icon: Rocket,
    },
  ],
  headline: {
    primary: "We Build Your Idea",
    highlight: "From Concept to Scale",
  },
  description: {
    primary: "Turning ambitious ideas into market-ready products",
    secondary: "with modern tech stack and AI capabilities.",
    emphasis: "Launch your MVP in weeks, not months.",
  },
  cta: {
    primary: {
      text: "Let's Build Together",
      href: "#contact",
    },
    secondary: {
      text: "Explore Solutions",
      href: "#solutions",
    },
  },
} as const;
