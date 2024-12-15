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
    label: "Start Building",
  },
  headline: {
    title: "Let's Make It Happen",
    description:
      "Share your vision, and we'll help you find the fastest path to market.",
  },
  form: {
    types: [
      { label: "Get Project Quote", value: "quote" },
      { label: "Technical Discussion", value: "general" },
      { label: "Product Support", value: "support" },
    ],
    budgets: [
      { label: "Landing Page < €5k", value: "<5k" },
      { label: "MVP €5k-€10k", value: "5k-10k" },
      { label: "Full Product €10k-€25k", value: "10k-25k" },
      { label: "Scale Up €25k-€50k", value: "25k-50k" },
      { label: "Enterprise > €50k", value: ">50k" },
    ],
    sending: "Starting Your Journey...",
    success: "Ready for Takeoff!",
    successDescription:
      "We'll get back to you within 24 hours with a clear action plan.",
    error: "Connection Issue",
    errorDescription:
      "Please try again or email us directly at mail@webvise.io",
    send: "Start Your Project",
  },
} as const;

export const faqContent = {
  tabs: [
    {
      label: "General",
      value: "general",
      questions: [
        {
          question: "How quickly can we launch?",
          answer:
            "Landing pages in 4-6 weeks, MVPs in 8-12 weeks. We focus on getting your core features to market fast, then iterate based on user feedback.",
        },
        {
          question: "What's your development approach?",
          answer:
            "We work in weekly sprints with regular demos. You'll see progress every week and can adjust direction based on what you learn.",
        },
        {
          question: "Do you provide post-launch support?",
          answer:
            "Yes, we offer flexible support packages to help you scale. From bug fixes to feature additions, we're here to help you grow.",
        },
      ],
    },
    {
      label: "Technical",
      value: "technical",
      questions: [
        {
          question: "What technologies do you use?",
          answer:
            "We use proven tech that scales: Next.js, React, Flutter, and modern AI frameworks. Every choice is made to support rapid development and future growth.",
        },
        {
          question: "How do you handle scaling?",
          answer:
            "Our architecture is cloud-native from day one. We use microservices and serverless to ensure your product can scale from hundreds to millions of users.",
        },
        {
          question: "Can you integrate with our existing stack?",
          answer:
            "Absolutely. We have experience connecting with various APIs, databases, and legacy systems. We'll find the best way to enhance your existing tech.",
        },
      ],
    },
    {
      label: "Investment",
      value: "commercial",
      questions: [
        {
          question: "How do you structure pricing?",
          answer:
            "We offer clear, milestone-based pricing tailored to your goals. Each package is designed to get you to a specific business outcome.",
        },
        {
          question: "What's included in the cost?",
          answer:
            "Everything needed for success: strategy, design, development, testing, deployment, and initial optimization. No hidden fees or surprises.",
        },
        {
          question: "Can we start small and scale up?",
          answer:
            "Yes! Many clients start with an MVP and expand based on market feedback. Our tech choices ensure you can grow without rebuilding.",
        },
      ],
    },
  ],
} as const;
