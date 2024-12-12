"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { heroContent } from "@/content/home";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 pb-12 pt-20 md:pt-28 space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {heroContent.badges.map((badge) => (
              <Badge
                key={badge.text}
                variant={badge.variant}
                className="rounded-lg px-3 py-1"
              >
                {badge.text}
              </Badge>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-3 max-w-2xl">
          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              {heroContent.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mx-auto max-w-[600px] text-muted-foreground text-base">
              {heroContent.description}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 min-[400px]:items-center justify-center pt-2">
            <Button size="default" className="gap-2">
              {heroContent.cta.primary.text}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="default" variant="outline">
              {heroContent.cta.secondary.text}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
