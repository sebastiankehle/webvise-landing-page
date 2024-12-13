import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | webvise",
    default: "Legal | webvise",
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
