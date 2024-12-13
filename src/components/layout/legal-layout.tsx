import { InView } from "@/components/animations/in-view";

interface LegalLayoutProps {
  title: string;
  content: ReadonlyArray<{
    readonly heading: string;
    readonly text: ReadonlyArray<string>;
  }>;
}

export function LegalLayout({ title, content }: LegalLayoutProps) {
  return (
    <div className="container pb-24 pt-32">
      <InView className="mx-auto max-w-3xl">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>

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
        </div>
      </InView>
    </div>
  );
}
