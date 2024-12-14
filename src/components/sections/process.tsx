"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { processContent } from "@/content/process";
import { cn } from "@/lib/utils";
import { InView } from "../animations/in-view";

interface ProcessProps {
  id?: string;
}

export function Process({ id }: ProcessProps) {
  const getAccentColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-[hsl(var(--accent-1))]"; // Purple
      case 1:
        return "text-[hsl(var(--accent-2))]"; // Pink
      case 2:
        return "text-[hsl(var(--accent-3))]"; // Blue
      case 3:
        return "text-[hsl(var(--accent-4))]"; // Teal
      case 4:
        return "text-[hsl(var(--accent-5))]"; // Emerald
      default:
        return "text-foreground";
    }
  };

  return (
    <section id={id} className="relative px-4 py-24">
      <InView className="mx-auto max-w-7xl">
        <div className="space-y-6 text-center">
          <Badge variant="outline" className="rounded-full px-4 py-1.5">
            {processContent.badge.text}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {processContent.headline.primary}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
            {processContent.headline.secondary}
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-12 hidden h-px md:block">
            <div className="mx-auto max-w-[calc(100%-4rem)]">
              <div className="h-px bg-border/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {processContent.steps.slice(0, 5).map((step, index) => (
              <InView
                key={step.title}
                delay={0.15 * (index + 1)}
                className="group"
              >
                <Card
                  className={cn(
                    "relative flex h-full flex-col p-6",
                    "transition-all duration-300",
                    "border-border/50 hover:border-border",
                    index !== 0 && "mt-8 md:mt-0"
                  )}
                >
                  <div
                    className={cn(
                      "inline-flex rounded-2xl p-3",
                      "transition-transform duration-300 group-hover:scale-105"
                    )}
                  >
                    <step.icon
                      className={cn("h-6 w-6", getAccentColor(index))}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </InView>
            ))}
          </div>
        </div>
      </InView>
    </section>
  );
}
