import { LegalLayout } from "@/components/layout/legal-layout";
import { legalContent } from "@/content/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | webvise",
  description: "Legal information and company details.",
};

export default function ImprintPage() {
  return <LegalLayout {...legalContent.imprint} />;
}
