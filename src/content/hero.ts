import { Building2, Gem, Rocket } from "lucide-react";

export const heroContent = {
  badges: [
    {
      text: "Landing Pages",
      variant: "outline" as const,
      icon: Rocket,
    },
    {
      text: "MVPs",
      variant: "outline" as const,
      icon: Gem,
    },
    {
      text: "Enterprise",
      variant: "outline" as const,
      icon: Building2,
    },
  ],
  headline: {
    primary: "Transform Your Vision",
    highlight: "Into Digital Reality",
  },
  description: {
    primary:
      "Specialized in crafting high-converting landing pages, building market-ready MVPs,",
    secondary: "and developing enterprise-grade solutions.",
    emphasis: "From concept to launch in weeks, not months.",
  },
  cta: {
    primary: {
      text: "Start Your Project",
      href: "/contact",
    },
    secondary: {
      text: "View Portfolio",
      href: "/work",
    },
  },
} as const;
