"use client";

import { Badge } from "@/components/ui/badge";
import { servicesContent } from "@/content/services";
import { cn } from "@/lib/utils";
import { InView } from "../animations/in-view";

interface ServicesProps {
  id?: string;
}

export function Services({ id }: ServicesProps) {
  const getAccentColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-[hsl(var(--accent-1))]"; // Purple
      case 1:
        return "text-[hsl(var(--accent-3))]"; // Blue
      case 2:
        return "text-[hsl(var(--accent-4))]"; // Teal
      case 3:
        return "text-[hsl(var(--accent-5))]"; // Emerald
      default:
        return "text-foreground";
    }
  };

  return (
    <section id={id} className="relative px-4 py-24">
      <InView className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-6 text-center">
          <Badge
            variant={servicesContent.badge.variant}
            className="rounded-full px-4 py-1.5"
          >
            {servicesContent.badge.text}
          </Badge>
          <h2 className="text-2xl font-bold sm:text-3xl">
            {servicesContent.headline.primary}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
            {servicesContent.headline.secondary}
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          {servicesContent.services.map((service, index) => (
            <InView key={service.title} delay={0.1 * (index + 1)}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-3xl border bg-card p-8",
                  "transition-all duration-300",
                  "hover:border-foreground/20"
                )}
              >
                <div className="relative space-y-4">
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
                  <p className="text-muted-foreground">{service.description}</p>

                  {/* Features */}
                  <ul className="grid gap-2 pt-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-center justify-center rounded-full border px-3 py-1.5 text-center text-sm",
                          "text-muted-foreground/80 transition-colors duration-300",
                          "group-hover:border-border"
                        )}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </InView>
    </section>
  );
}
