"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { processContent } from "@/content/process";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { InView } from "../animations/in-view";
import { AnimatedBeam } from "../ui/animated-beam";

interface ProcessProps {
  id?: string;
}

export function Process({ id }: ProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  const step5Ref = useRef<HTMLDivElement>(null);

  const getAccentColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-[hsl(var(--accent-1))]";
      case 1:
        return "text-[hsl(var(--accent-2))]";
      case 2:
        return "text-[hsl(var(--accent-3))]";
      case 3:
        return "text-[hsl(var(--accent-4))]";
      case 4:
        return "text-[hsl(var(--accent-5))]";
      default:
        return "text-foreground";
    }
  };

  const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref, step5Ref];

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
          <div className="relative" ref={containerRef}>
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              {stepRefs.slice(0, -1).map((fromRef, index) => (
                <AnimatedBeam
                  key={index}
                  containerRef={containerRef}
                  fromRef={fromRef}
                  toRef={stepRefs[index + 1]}
                  className="hidden md:block"
                  gradientStartColor={`hsl(var(--accent-${index + 1}))`}
                  gradientStopColor={`hsl(var(--accent-${index + 2}))`}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {processContent.steps.slice(0, 5).map((step, index) => (
                <InView
                  key={step.title}
                  delay={0.15 * (index + 1)}
                  className="group"
                >
                  <Card
                    ref={stepRefs[index]}
                    className={cn(
                      "relative flex h-full flex-col p-6",
                      "transition-all duration-300",
                      "border-border/50 hover:border-border"
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
                      <h3 className="mb-2 text-lg font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </InView>
              ))}
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
}
