"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 pb-12 pt-20 md:pt-28 space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary" className="rounded-lg px-3 py-1">
              New Features
            </Badge>
            <Badge variant="outline" className="rounded-lg px-3 py-1">
              Just Shipped v1.0
            </Badge>
          </div>
        </FadeIn>

        <div className="space-y-3 max-w-2xl">
          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Build beautiful websites with{" "}
              <span className="text-primary">speed</span> and{" "}
              <span className="text-primary">precision</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mx-auto max-w-[600px] text-muted-foreground text-base">
              A professional toolkit for developers and designers. Create
              stunning user interfaces with modern components and design
              patterns.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 min-[400px]:items-center justify-center pt-2">
            <Button size="default" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="default" variant="outline">
              View Documentation
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
