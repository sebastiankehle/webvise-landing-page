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
    label: "Get in touch",
  },
  headline: {
    title: "Let's Build Something Great Together",
    description:
      "Tell us about your project and we'll get back to you within 24 hours.",
  },
  form: {
    types: [
      { label: "Get a Quote", value: "quote" },
      { label: "General Inquiry", value: "general" },
      { label: "Support", value: "support" },
    ],
    budgets: [
      { label: "< €5,000", value: "<5k" },
      { label: "€5,000 - €10,000", value: "5k-10k" },
      { label: "€10,000 - €25,000", value: "10k-25k" },
      { label: "€25,000 - €50,000", value: "25k-50k" },
      { label: "> €50,000", value: ">50k" },
    ],
    sending: "Sending...",
    success: "Message sent successfully!",
    successDescription: "We'll get back to you within 24 hours.",
    error: "An error occurred while sending the message.",
    errorDescription: "Please try again later or contact us directly.",
    send: "Send Message",
  },
} as const;

export const faqContent = {
  tabs: [
    {
      label: "General",
      value: "general",
      questions: [
        {
          question: "How long does a typical project take?",
          answer:
            "Most projects are completed within 4-12 weeks, depending on scope and complexity. We'll provide a detailed timeline during our initial consultation.",
        },
        {
          question: "What is your development process?",
          answer:
            "We follow an agile methodology with weekly updates. This includes planning, design, development, testing, and deployment phases with regular client feedback.",
        },
        {
          question: "Do you provide ongoing support?",
          answer:
            "Yes, we offer various maintenance and support packages to ensure your solution stays up-to-date and performs optimally.",
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
            "We specialize in modern web technologies including React, Next.js, TypeScript, and Node.js. We also integrate AI solutions using various frameworks.",
        },
        {
          question: "Can you handle both frontend and backend?",
          answer:
            "Yes, we provide full-stack development services, ensuring seamless integration between frontend and backend systems.",
        },
        {
          question: "Do you work with existing systems?",
          answer:
            "Yes, we can integrate with your existing systems or build new solutions from scratch, depending on your needs.",
        },
      ],
    },
    {
      label: "Commercial",
      value: "commercial",
      questions: [
        {
          question: "What are your payment terms?",
          answer:
            "We typically work with a 40% upfront deposit and remaining payments tied to project milestones. All terms are clearly outlined in our proposal.",
        },
        {
          question: "Do you offer fixed-price projects?",
          answer:
            "Yes, we offer both fixed-price and time-and-materials pricing models, depending on project requirements and scope clarity.",
        },
        {
          question: "What's included in the price?",
          answer:
            "Our prices include planning, development, testing, deployment, and initial support. We'll provide a detailed breakdown in our proposal.",
        },
      ],
    },
  ],
} as const;
