import { Gauge, Lightbulb, Target } from "lucide-react";

export const benefitsContent = {
  badge: {
    text: "The Advantage",
    variant: "outline",
  },
  headline: {
    primary: "Built for Performance",
    secondary:
      "Leverage cutting-edge technology to give your business the competitive edge it deserves.",
  },
  benefits: [
    {
      title: "Speed to Market",
      description:
        "Launch your digital product in weeks, not months. Our streamlined process and battle-tested stack ensures rapid delivery without compromising quality.",
      icon: Gauge,
      metrics: [
        "6-Week Launch Timeline",
        "Weekly Feature Releases",
        "Instant Iterations",
      ],
      color: "hsl(var(--accent-1))",
      stat: {
        value: "4-6",
        label: "Week Delivery",
      },
    },
    {
      title: "Technical Excellence",
      description:
        "Built on Next.js, React, and TypeScript – the same tech stack powering industry leaders. Your product is engineered for reliability and scale.",
      icon: Lightbulb,
      metrics: [
        "Enterprise-Grade Stack",
        "Quality Assurance",
        "Future-Proof Code",
      ],
      color: "hsl(var(--accent-2))",
      stat: {
        value: "100%",
        label: "Type-Safe",
      },
    },
    {
      title: "Growth Driven",
      description:
        "Every feature is optimized for performance and conversion. Get a solution that not only looks great but drives real business results.",
      icon: Target,
      metrics: [
        "Sub-Second Loading",
        "Mobile-First Design",
        "Built-in Analytics",
      ],
      color: "hsl(var(--accent-3))",
      stat: {
        value: "3x",
        label: "Faster Sites",
      },
    },
  ],
} as const;
