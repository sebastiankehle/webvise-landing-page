"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonialsContent } from "@/content/testimonials";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { InView } from "../animations/in-view";

interface TestimonialsProps {
  id?: string;
}

export function Testimonials({ id }: TestimonialsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const allTestimonials = [
    ...testimonialsContent.upperRow,
    ...testimonialsContent.lowerRow,
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id={id} className="relative overflow-x-hidden px-4 py-24">
      <InView className="mx-auto max-w-7xl">
        <div className="space-y-6 text-center">
          <Badge variant="outline" className="rounded-full px-4 py-1.5">
            {testimonialsContent.badge.text}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {testimonialsContent.headline.primary}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
            {testimonialsContent.headline.secondary}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="mt-16 sm:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative w-full"
          >
            <div className="relative">
              <CarouselContent>
                {allTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="flex h-[180px] flex-col justify-between p-5">
                      <p className="line-clamp-3 text-muted-foreground">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            {/* Updated Navigation */}
            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <CarouselPrevious className="position-static h-8 w-8" />
                <CarouselNext className="position-static h-8 w-8" />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-8 items-center gap-1">
                  <div className="animate-swipe-right h-0.5 w-3 bg-muted-foreground/50" />
                  <div className="animate-swipe-right h-0.5 w-3 bg-muted-foreground/50 [animation-delay:150ms]" />
                  <div className="animate-swipe-right h-0.5 w-3 bg-muted-foreground/50 [animation-delay:300ms]" />
                </div>
                <span>Swipe to see more</span>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Desktop Marquee */}
        <div className="relative mt-16 hidden space-y-8 sm:block">
          {/* First row */}
          <div className="relative flex overflow-hidden">
            {/* Gradient masks */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

            {/* First row marquee */}
            <div className="animate-marquee flex gap-8 [--duration:120s]">
              {[
                ...testimonialsContent.upperRow,
                ...testimonialsContent.upperRow,
                ...testimonialsContent.upperRow,
                ...testimonialsContent.upperRow,
                ...testimonialsContent.upperRow,
              ].map((testimonial, index) => (
                <InView key={index} delay={0.1 * (index % 3)}>
                  <Card
                    className={cn(
                      "flex h-[180px] w-[350px] flex-col justify-between p-5",
                      index % 4 === 1 &&
                        "border-[hsl(var(--accent-1))] shadow-sm"
                    )}
                  >
                    <p className="line-clamp-3 text-muted-foreground">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </Card>
                </InView>
              ))}
            </div>
          </div>

          {/* Second row */}
          <div className="relative flex overflow-hidden">
            {/* Gradient masks */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

            {/* Second row marquee */}
            <div className="animate-marquee-reverse flex gap-8 [--duration:140s]">
              {[
                ...testimonialsContent.lowerRow,
                ...testimonialsContent.lowerRow,
                ...testimonialsContent.lowerRow,
                ...testimonialsContent.lowerRow,
                ...testimonialsContent.lowerRow,
              ].map((testimonial, index) => (
                <InView key={index} delay={0.1 * (index % 2)}>
                  <Card
                    className={cn(
                      "flex h-[180px] w-[350px] flex-col justify-between p-5",
                      index % 4 === 2 &&
                        "border-[hsl(var(--accent-3))] shadow-sm"
                    )}
                  >
                    <p className="line-clamp-3 text-muted-foreground">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
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
