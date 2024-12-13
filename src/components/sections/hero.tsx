"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 pb-12 text-center"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-slow absolute left-[15%] top-1/4 h-24 w-24 rounded-full bg-[hsl(var(--accent-1))] opacity-[0.15] blur-xl" />
        <div className="animate-float absolute right-[15%] top-1/3 h-32 w-32 rounded-full bg-[hsl(var(--accent-2))] opacity-[0.15] blur-xl" />
      </div>

      <div className="flex max-w-5xl flex-col items-center space-y-8">
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {heroContent.badges.map((badge, index) => (
              <Badge
                className="rounded-full px-4 py-1.5"
                variant="outline"
                key={badge.text}
              >
                {badge.icon && (
                  <badge.icon
                    className={cn(
                      "mr-2 inline-block h-4 w-4",
                      index === 0 && "text-[hsl(var(--accent-1))]",
                      index === 1 && "text-[hsl(var(--accent-2))]",
                      index === 2 && "text-[#E42AED]" // Solana magenta
                    )}
                    strokeWidth={1.5}
                  />
                )}
                {badge.text}
              </Badge>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-4">
          <FadeIn delay={0.1}>
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span>{heroContent.headline.primary}</span>
              <span className="mt-2 block pb-4">
                {heroContent.headline.highlight}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mx-auto max-w-2xl text-balance text-base text-muted-foreground sm:text-[15px]">
              {heroContent.description.primary}{" "}
              {heroContent.description.secondary}{" "}
              <span className="font-medium text-foreground">
                {heroContent.description.emphasis}
              </span>
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
            <Button
              size="lg"
              variant="outline"
              className={cn(
                "group rounded-full px-8 transition-all",
                "border border-[hsl(var(--accent-1))]",
                "hover:border-[hsl(var(--accent-1))] hover:brightness-125",
                "hover:bg-transparent"
              )}
            >
              {heroContent.cta.primary.text}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={cn(
                "rounded-full px-8 transition-all",
                "border border-[hsl(var(--accent-2))]",
                "hover:border-[hsl(var(--accent-2))] hover:brightness-125",
                "hover:bg-transparent"
              )}
            >
              {heroContent.cta.secondary.text}
            </Button>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
}
