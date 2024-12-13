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
  },
} as const;
