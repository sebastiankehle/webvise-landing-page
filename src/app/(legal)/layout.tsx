import { InView } from "@/components/animations/in-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | webvise",
    default: "Legal | webvise",
  },
};

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="container px-4 pb-24 pt-32">
      <InView className="mx-auto max-w-3xl">
        <div className="space-y-8">{children}</div>
      </InView>
    </div>
  );
}
