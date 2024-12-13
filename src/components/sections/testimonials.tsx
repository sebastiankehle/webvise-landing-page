"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { testimonialsContent } from "@/content/testimonials";
import { InView } from "../animations/in-view";

interface TestimonialsProps {
  id?: string;
}

export function Testimonials({ id }: TestimonialsProps) {
  return (
    <section id={id} className="relative px-4 py-24">
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

        <div className="relative mt-16 space-y-4">
          {/* First row */}
          <div className="relative flex overflow-hidden">
            {/* Gradient masks */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

            {/* Marquee content */}
            <div className="animate-marquee flex gap-8 [--duration:60s]">
              {[
                ...testimonialsContent.testimonials.slice(0, 3),
                ...testimonialsContent.testimonials.slice(0, 3),
                ...testimonialsContent.testimonials.slice(0, 3),
                ...testimonialsContent.testimonials.slice(0, 3),
                ...testimonialsContent.testimonials.slice(0, 3),
              ].map((testimonial, index) => (
                <InView key={index} delay={0.1 * (index % 3)}>
                  <Card className="flex h-[180px] w-[350px] flex-col justify-between p-5">
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

            {/* Marquee content */}
            <div className="animate-marquee-reverse flex gap-8 [--duration:65s]">
              {[
                ...testimonialsContent.testimonials.slice(3),
                ...testimonialsContent.testimonials.slice(3),
                ...testimonialsContent.testimonials.slice(3),
                ...testimonialsContent.testimonials.slice(3),
                ...testimonialsContent.testimonials.slice(3),
              ].map((testimonial, index) => (
                <InView key={index} delay={0.1 * (index % 2)}>
                  <Card className="flex h-[180px] w-[350px] flex-col justify-between p-5">
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
