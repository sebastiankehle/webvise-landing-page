"use client";

import { Badge } from "@/components/ui/badge";
import IconCloud from "@/components/ui/icon-cloud";
import { servicesContent } from "@/content/services";
import { cn } from "@/lib/utils";
import { InView } from "../animations/in-view";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

interface ServicesProps {
  id?: string;
}

export function Services({ id }: ServicesProps) {
  const getAccentColor = (index: number, isRightColumn = false) => {
    const position = isRightColumn ? index + 2 : index;
    switch (position) {
      case 0:
        return "text-[hsl(var(--accent-1))]"; // Purple - First service
      case 1:
        return "text-[hsl(var(--accent-2))]"; // Pink - Second service
      case 2:
        return "text-[hsl(var(--accent-3))]"; // Blue - Third service
      case 3:
        return "text-[hsl(var(--accent-4))]"; // Teal - Fourth service
      default:
        return "text-foreground";
    }
  };

  return (
    <section id={id} className="relative px-4 py-16">
      <InView className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-4 text-center">
          <Badge
            variant={servicesContent.badge.variant}
            className="rounded-full px-4 py-1.5"
          >
            {servicesContent.badge.text}
          </Badge>
          <h2 className="text-2xl font-bold sm:text-3xl">
            {servicesContent.headline.primary}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-balance text-muted-foreground">
            {servicesContent.headline.secondary}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Lines */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {/* Top left to center */}
            <div className="absolute left-[16.67%] right-[50%] top-[25%] h-px bg-border/50" />
            <div className="absolute left-[16.67%] top-[25%] h-2 w-2 -translate-x-1/2 rounded-full bg-border/50" />
            <div className="absolute left-1/2 top-[25%] h-2 w-2 -translate-x-1/2 rounded-full bg-border/50" />
            <div className="absolute left-1/2 top-[25%] h-[60px] w-px bg-border/50" />

            {/* Top right to center */}
            <div className="absolute left-[50%] right-[16.67%] top-[25%] h-px bg-border/50" />
            <div className="absolute right-[16.67%] top-[25%] h-2 w-2 translate-x-1/2 rounded-full bg-border/50" />

            {/* Bottom left to center */}
            <div className="absolute bottom-[25%] left-[16.67%] right-[50%] h-px bg-border/50" />
            <div className="absolute bottom-[25%] left-[16.67%] h-2 w-2 -translate-x-1/2 rounded-full bg-border/50" />
            <div className="absolute bottom-[25%] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-border/50" />
            <div className="absolute bottom-[25%] left-1/2 h-[60px] w-px bg-border/50" />

            {/* Bottom right to center */}
            <div className="absolute bottom-[25%] left-[50%] right-[16.67%] h-px bg-border/50" />
            <div className="absolute bottom-[25%] right-[16.67%] h-2 w-2 translate-x-1/2 rounded-full bg-border/50" />
          </div>

          {/* Layout Grid */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Left Column */}
            <div className="grid gap-4">
              {servicesContent.services.slice(0, 2).map((service, index) => (
                <InView key={service.title} delay={0.1 * (index + 1)}>
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-3xl border bg-card p-5",
                      "transition-all duration-300",
                      "hover:border-foreground/20"
                    )}
                  >
                    <div className="relative space-y-3">
                      {/* Icon */}
                      <div
                        className={cn(
                          "inline-flex rounded-2xl p-3",
                          "transition-transform duration-300 group-hover:scale-105"
                        )}
                      >
                        <service.icon
                          className={cn("h-6 w-6", getAccentColor(index))}
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Number */}
                      <div className="absolute right-0 top-0">
                        <span className="text-3xl font-bold text-foreground/5">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 gap-x-4 gap-y-2 pt-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <div className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </InView>
              ))}
            </div>

            {/* Center Column - Icon Cloud */}
            <div className="flex items-center justify-center py-6 lg:py-0">
              <div className="relative flex size-full max-w-sm items-center justify-center overflow-hidden rounded-lg border bg-background px-10 py-12">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>

            {/* Right Column */}
            <div className="grid gap-4">
              {servicesContent.services.slice(2).map((service, index) => (
                <InView key={service.title} delay={0.1 * (index + 1)}>
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-3xl border bg-card p-5",
                      "transition-all duration-300",
                      "hover:border-foreground/20"
                    )}
                  >
                    <div className="relative space-y-3">
                      {/* Icon */}
                      <div
                        className={cn(
                          "inline-flex rounded-2xl p-3",
                          "transition-transform duration-300 group-hover:scale-105"
                        )}
                      >
                        <service.icon
                          className={cn("h-6 w-6", getAccentColor(index, true))}
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Number */}
                      <div className="absolute right-0 top-0">
                        <span className="text-3xl font-bold text-foreground/5">
                          {(index + 3).toString().padStart(2, "0")}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 gap-x-4 gap-y-2 pt-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <div className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
}
