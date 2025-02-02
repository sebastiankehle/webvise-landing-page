"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight } from "lucide-react";
import { InView } from "../animations/in-view";

interface HeroProps {
  id?: string;
}

export function Hero({ id }: HeroProps) {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={id}
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 pb-12 text-center"
    >
      <div className="flex max-w-5xl flex-col items-center space-y-8">
        <InView delay={0.1}>
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
                      index === 2 && "text-[hsl(var(--accent-3))]"
                    )}
                    strokeWidth={1.5}
                  />
                )}
                {badge.text}
              </Badge>
            ))}
          </div>
        </InView>

        <div className="space-y-4">
          <InView delay={0.15}>
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span>{heroContent.headline.primary}</span>
              <span className="mt-2 block pb-4">
                {heroContent.headline.highlight}
              </span>
            </h1>
          </InView>

          <InView delay={0.15}>
            <p className="mx-auto max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
              {heroContent.description.primary}{" "}
              {heroContent.description.secondary}{" "}
              <span className="font-medium text-foreground">
                {heroContent.description.emphasis}
              </span>
            </p>
          </InView>
        </div>

        <InView delay={0.2}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScroll(heroContent.cta.primary.href)}
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
              onClick={() => handleScroll(heroContent.cta.secondary.href)}
              className={cn(
                "rounded-full px-8 transition-all",
                "border border-[hsl(var(--accent-3))]",
                "hover:border-[hsl(var(--accent-3))] hover:brightness-125",
                "hover:bg-transparent"
              )}
            >
              {heroContent.cta.secondary.text}
            </Button>
          </div>
        </InView>
      </div>

      <InView
        delay={0.2}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce text-muted-foreground" />
      </InView>
    </section>
  );
}
