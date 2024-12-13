import { Gauge, Lightbulb, Target } from "lucide-react";

export const benefitsContent = {
  badge: {
    text: "Why Choose Us",
    variant: "outline" as const,
  },
  headline: {
    primary: "Solutions That Drive Results",
    secondary:
      "We transform challenges into opportunities, delivering measurable impact for your business.",
  },
  benefits: [
    {
      title: "Faster Time to Market",
      description:
        "Launch your products faster with our streamlined development process and battle-tested tech stack.",
      icon: Gauge,
      metrics: ["40% Faster Delivery", "Agile Sprints", "Weekly Updates"],
      color: "hsl(var(--accent-1))",
    },
    {
      title: "Innovation First",
      description:
        "Stay ahead with cutting-edge solutions that leverage the latest in AI and web technologies.",
      icon: Lightbulb,
      metrics: ["AI Integration", "Modern Stack", "Future-Proof"],
      color: "hsl(var(--accent-2))",
    },
    {
      title: "Result Driven",
      description:
        "Focus on metrics that matter with solutions designed to maximize ROI and user engagement.",
      icon: Target,
      metrics: ["Conversion Focus", "Data-Driven", "Scalable"],
      color: "hsl(var(--accent-3))",
    },
  ],
} as const;
