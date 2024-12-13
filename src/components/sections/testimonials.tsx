"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialsContent } from "@/content/testimonials";
import { cn } from "@/lib/utils";
import { InView } from "../animations/in-view";

interface TestimonialsProps {
  id?: string;
}

export function Testimonials({ id }: TestimonialsProps) {
  return (
    <section id={id} className="relative px-4 py-24">
      <InView className="mx-auto max-w-7xl">
        <div className="space-y-6 text-center">
          <Badge
            variant={testimonialsContent.badge.variant}
            className="rounded-full px-4 py-1.5"
          >
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
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialsContent.testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div
                    className={cn(
                      "rounded-2xl border p-6",
                      "bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                    )}
                  >
                    <blockquote className="space-y-4">
                      <p className="text-muted-foreground">
                        {testimonial.content}
                      </p>
                      <footer>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="mt-16 hidden grid-cols-3 gap-4 sm:grid">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <InView key={index} delay={0.1 * (index + 1)}>
              <div
                className={cn(
                  "rounded-2xl border p-6",
                  "bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                )}
              >
                <blockquote className="space-y-4">
                  <p className="text-muted-foreground">{testimonial.content}</p>
                  <footer>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </InView>
          ))}
        </div>
      </InView>
    </section>
  );
}
