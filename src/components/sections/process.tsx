"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { processContent } from "@/content/process";
import { cn } from "@/lib/utils";
import { InView } from "../animations/in-view";

export function Process() {
  // Helper function to get accent color based on index
  const getAccentColor = (index: number) => {
    switch (index % 3) {
      case 0:
        return "text-[hsl(var(--accent-1))]";
      case 1:
        return "text-[hsl(var(--accent-2))]";
      case 2:
        return "text-[hsl(var(--accent-3))]";
      default:
        return "";
    }
  };

  // Helper function to get accent background based on index
  const getAccentBg = (index: number) => {
    switch (index % 3) {
      case 0:
        return "bg-[hsl(var(--accent-1))]";
      case 1:
        return "bg-[hsl(var(--accent-2))]";
      case 2:
        return "bg-[hsl(var(--accent-3))]";
      default:
        return "";
    }
  };

  return (
    <section className="relative px-4 py-24">
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
          {/* Connecting Line */}
          <div
            className={cn(
              "absolute left-0 top-24 hidden h-[1px] w-full transition-colors duration-300 md:block"
            )}
          >
            <div className="relative h-full w-full">
              <div className="absolute h-full w-full bg-border/50" />
              <div className="absolute h-full w-1/5 animate-[flow_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {processContent.steps.slice(0, 5).map((step, index) => (
              <InView
                key={step.title}
                delay={0.15 * (index + 1)}
                className="group"
              >
                <Card
                  className={cn(
                    "relative overflow-hidden p-6",
                    "transition-all duration-500",
                    "border-border/50 hover:border-border",
                    "before:absolute before:left-1/2 before:top-0 before:h-4 before:w-[1px] before:-translate-x-1/2 before:bg-border/50 before:content-[''] md:before:hidden",
                    index !== 0 && "mt-8 md:mt-0",
                    index % 2 === 0 ? "md:translate-y-8" : "md:-translate-y-8"
                  )}
                >
                  {/* Animated Background */}
                  <div
                    className={cn(
                      "absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                      "bg-gradient-to-br from-transparent via-[hsl(var(--accent-1))]/5 to-transparent",
                      index % 3 === 1 && "via-[hsl(var(--accent-2))]/5",
                      index % 3 === 2 && "via-[hsl(var(--accent-3))]/5"
                    )}
                  />

                  {/* Step Number */}
                  <div
                    className={cn(
                      "absolute -right-4 -top-4 h-16 w-16 rounded-full transition-transform duration-500 group-hover:scale-[2]",
                      getAccentBg(index) + "/10"
                    )}
                  />
                  <span className="absolute right-2 top-2 text-sm font-semibold text-muted-foreground">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className={cn(
                      "mb-4 inline-flex rounded-xl p-2.5 transition-transform duration-500 group-hover:scale-110",
                      getAccentBg(index) + "/10"
                    )}
                  >
                    <step.icon
                      className={cn("h-5 w-5", getAccentColor(index))}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                      "bg-gradient-to-r from-transparent via-[hsl(var(--accent-1))]/50 to-transparent",
                      index % 3 === 1 && "via-[hsl(var(--accent-2))]/50",
                      index % 3 === 2 && "via-[hsl(var(--accent-3))]/50"
                    )}
                  />
                </Card>
              </InView>
            ))}
          </div>
        </div>
      </InView>
    </section>
  );
}
