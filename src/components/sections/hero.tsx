"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/home";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-12 text-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="fixed left-0 right-0 top-1/4 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-foreground/5 blur-[100px]" />
        </div>
      </div>

      <div className="flex max-w-5xl flex-col items-center space-y-8">
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {heroContent.badges.map((badge) => (
              <Badge
                key={badge.text}
                variant={badge.variant}
                className="group relative rounded-full border px-4 py-1.5 text-sm font-medium transition-colors hover:bg-foreground/[0.03]"
              >
                {badge.icon && (
                  <badge.icon
                    className="mr-2 inline-block h-4 w-4"
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
              className="group rounded-full px-8 transition-all hover:scale-105"
            >
              {heroContent.cta.primary.text}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 transition-all hover:scale-105"
            >
              {heroContent.cta.secondary.text}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
