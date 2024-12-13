import { LegalLayout } from "@/components/layout/legal-layout";
import { legalContent } from "@/content/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | webvise",
  description: "Terms and conditions for using our services.",
};

export default function TermsPage() {
  return <LegalLayout {...legalContent.terms} />;
}
