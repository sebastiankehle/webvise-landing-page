import { Code2, Rocket, Sparkles } from "lucide-react";

export const heroContent = {
  badges: [
    {
      text: "Web Development",
      variant: "outline",
      icon: Code2,
    },
    {
      text: "AI Integration",
      variant: "outline",
      icon: Sparkles,
    },
    {
      text: "Growth Solutions",
      variant: "outline",
      icon: Rocket,
    },
  ],
  headline: {
    primary: "Turn Your Vision",
    highlight: "Into Digital Reality",
  },
  description: {
    primary:
      "Transforming ambitious ideas into high-performance digital products",
    secondary: "with modern tech stack and AI capabilities.",
    emphasis: "From concept to launch in weeks, not months.",
  },
  cta: {
    primary: {
      text: "Start Your Project",
      href: "#contact",
    },
    secondary: {
      text: "View Solutions",
      href: "#solutions",
    },
  },
} as const;
