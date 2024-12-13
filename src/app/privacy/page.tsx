import { LegalLayout } from "@/components/layout/legal-layout";
import { legalContent } from "@/content/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | webvise",
  description: "Information about how we handle your data.",
};

export default function PrivacyPage() {
  return <LegalLayout {...legalContent.privacy} />;
}
