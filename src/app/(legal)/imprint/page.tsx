import { legalContent } from "@/content/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | webvise",
  description: "Legal information and company details.",
};

export default function ImprintPage() {
  const { title, content } = legalContent.imprint;

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>

      <div className="space-y-12">
        {content.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">
              {section.heading}
            </h2>
            <div className="space-y-2">
              {section.text.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
