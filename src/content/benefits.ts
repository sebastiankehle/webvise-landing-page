import { Gauge, Lightbulb, Target } from "lucide-react";

export const benefitsContent = {
  badge: {
    text: "Why Choose Us",
    variant: "outline",
  },
  headline: {
    primary: "Built for Startups",
    secondary:
      "Get the tech foundation you need to validate fast and scale with confidence.",
  },
  benefits: [
    {
      title: "Launch at Startup Speed",
      description:
        "Skip the endless planning. Our proven process gets your MVP in front of users fast, with a clear path to iterate based on real feedback.",
      icon: Gauge,
      metrics: ["MVP in 6 Weeks", "Weekly Deployments", "Rapid Iterations"],
      color: "hsl(var(--accent-1))",
      stat: {
        value: "4-6",
        label: "Week Launch",
      },
    },
    {
      title: "Scale-Ready Stack",
      description:
        "Modern tech stack that grows with your business. From mvp to full-scale applications, build exactly what you need now with room to expand later.",
      icon: Lightbulb,
      metrics: [
        "Battle-Tested Tools",
        "Flexible Architecture",
        "Growth-Ready Platform",
      ],
      color: "hsl(var(--accent-2))",
      stat: {
        value: "100%",
        label: "Future-Proof",
      },
    },
    {
      title: "Built to Convert",
      description:
        "Every feature is optimized for user engagement and conversion. Get the metrics that matter to investors and users from launch day.",
      icon: Target,
      metrics: [
        "Sub-Second Loading",
        "Mobile-First Design",
        "Growth Analytics",
      ],
      color: "hsl(var(--accent-3))",
      stat: {
        value: "3x",
        label: "Faster Sites",
      },
    },
  ],
} as const;
