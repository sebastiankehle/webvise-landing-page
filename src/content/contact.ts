import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  type: z.enum(["quote", "general", "support"]),
  budget: z.enum(["<5k", "5k-10k", "10k-25k", "25k-50k", ">50k"]).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactContent = {
  badge: {
    label: "Get Started",
  },
  headline: {
    title: "Let's Build Something Great",
    description:
      "Tell me about your project, and I'll help you bring it to life with modern technology.",
  },
  form: {
    types: [
      { label: "Get Quote", value: "quote" },
      { label: "Technical Questions", value: "general" },
      { label: "Project Support", value: "support" },
    ],
    budgets: [
      { label: "Basic Website < €5k", value: "<5k" },
      { label: "Custom Website €5k-€10k", value: "5k-10k" },
      { label: "Web Application €10k-€25k", value: "10k-25k" },
      { label: "AI Integration €25k-€50k", value: "25k-50k" },
      { label: "Custom Solution > €50k", value: ">50k" },
    ],
    sending: "Initiating Contact...",
    success: "Connection Established!",
    successDescription:
      "Our team will reach out within 24 hours with a strategic plan.",
    error: "Connection Failed",
    errorDescription:
      "Please try again or reach out directly at contact@webvise.io",
    send: "Start Your Growth Journey",
  },
} as const;

export const faqContent = {
  tabs: [
    {
      label: "General",
      value: "general",
      questions: [
        {
          question: "How long does a project take?",
          answer:
            "Most websites take 4-6 weeks, and web applications 8-12 weeks. Timeline varies based on complexity and features needed.",
        },
        {
          question: "What's your development process?",
          answer:
            "I follow an agile approach with weekly updates and regular deployments. You'll always know the project status and can provide feedback throughout.",
        },
        {
          question: "Do you provide support after launch?",
          answer:
            "Yes, I offer maintenance and support packages to keep your solution running smoothly and help with any updates needed.",
        },
      ],
    },
    {
      label: "Technical",
      value: "technical",
      questions: [
        {
          question: "What's your tech stack?",
          answer:
            "We use enterprise-grade technologies: Next.js 14, TypeScript, Node.js, and various AI frameworks. Our stack is chosen for performance, scalability, and future-proof architecture.",
        },
        {
          question: "How do you handle scaling?",
          answer:
            "Our architecture is built for scale from day one. We use microservices, serverless computing, and advanced caching strategies to handle millions of users efficiently.",
        },
        {
          question: "Can you integrate with existing systems?",
          answer:
            "Absolutely. We specialize in seamless integrations, whether it's legacy systems, third-party APIs, or custom enterprise solutions.",
        },
      ],
    },
    {
      label: "Investment",
      value: "commercial",
      questions: [
        {
          question: "What's your pricing model?",
          answer:
            "We offer strategic investment tiers based on your growth stage. Each tier is designed to maximize ROI with clear deliverables and success metrics.",
        },
        {
          question: "Do you offer fixed-price solutions?",
          answer:
            "Yes, we provide both fixed-price packages and custom engagements. Our pricing is transparent with no hidden costs, tied to clear business outcomes.",
        },
        {
          question: "What's included in the investment?",
          answer:
            "Everything needed for success: strategy, development, testing, deployment, analytics, and initial growth support. Each package is designed for specific scaling milestones.",
        },
      ],
    },
  ],
} as const;
