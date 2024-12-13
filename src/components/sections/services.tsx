"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { servicesContent } from "@/content/services";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section className="relative overflow-hidden px-4 py-16">
      <FadeIn className="mx-auto max-w-5xl space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {servicesContent.headline.primary}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
            {servicesContent.headline.secondary}
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          {servicesContent.services.map((service, index) => (
            <FadeIn key={service.title} delay={0.1 * (index + 1)}>
              <div className="group relative overflow-hidden rounded-3xl border bg-card p-8">
                <div className="relative space-y-4">
                  <div
                    className={cn(
                      "inline-flex rounded-2xl bg-background/50 p-3"
                    )}
                  >
                    <service.icon
                      className={cn(
                        "h-7 w-7",
                        index === 0 && "text-[hsl(var(--accent-1))]",
                        index === 1 && "text-[hsl(var(--accent-3))]",
                        index === 2 && "text-[hsl(var(--accent-2))]",
                        index === 3 && "text-zinc-400"
                      )}
                    />
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>

                  <ul className="grid grid-cols-2 gap-2 pt-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-sm",
                          "text-muted-foreground/80"
                        )}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
