"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { solutionsContent } from "@/content/solutions";
import { cn } from "@/lib/utils";
import { InView } from "../animations/in-view";

interface SolutionsProps {
  id?: string;
}

export function Solutions({ id }: SolutionsProps) {
  const getAccentColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-[hsl(var(--accent-1))]"; // Purple for first card
      case 1:
        return "text-[hsl(var(--accent-2))]"; // Pink for middle (featured) card
      case 2:
        return "text-[hsl(var(--accent-3))]"; // Blue for last card
      default:
        return "text-foreground";
    }
  };

  return (
    <section id={id} className="relative px-4 py-24">
      <InView className="mx-auto max-w-7xl">
        <div className="space-y-6 text-center">
          <Badge variant="outline" className="rounded-full px-4 py-1.5">
            {solutionsContent.badge.text}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {solutionsContent.headline.primary}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
            {solutionsContent.headline.secondary}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutionsContent.solutions.map((solution, index) => (
            <InView
              key={solution.title}
              delay={0.15 * (index + 1)}
              className={cn("group h-full")}
            >
              <Card
                className={cn(
                  "relative h-full p-8 pt-12",
                  index !== 1 && "lg:h-[36rem]",
                  index === 1 && [
                    "lg:scale-105",
                    "lg:-mt-4 lg:mb-4",
                    "lg:h-[39rem]",
                    "border-[hsl(var(--accent-2))]",
                  ]
                )}
              >
                {solution.highlight && (
                  <div className="absolute -top-3 left-8 z-10">
                    <Badge
                      variant="outline"
                      className="rounded-full bg-background px-4 py-1.5"
                    >
                      {solution.highlight}
                    </Badge>
                  </div>
                )}

                {/* Solution Header */}
                <div className="mb-6 space-y-4">
                  <div
                    className={cn(
                      "inline-flex rounded-2xl p-3",
                      "transition-transform duration-300 group-hover:scale-105"
                    )}
                  >
                    <solution.icon
                      className={cn("h-6 w-6", getAccentColor(index))}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {solution.description}
                  </p>
                </div>

                {/* Price & Timeframe */}
                <div className="mb-6 space-y-1">
                  <div className="text-3xl font-semibold tracking-tight">
                    {solution.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {solution.timeframe}
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Features */}
                <div className="space-y-4">
                  {solution.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="grid grid-cols-[auto,1fr] items-start gap-4"
                    >
                      <div className="rounded-lg p-2">
                        <feature.icon
                          className="h-4 w-4 text-foreground"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium leading-none">
                          {feature.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </InView>
          ))}
        </div>
      </InView>
    </section>
  );
}
