"use client";

import { servicesContent } from "@/content/services";
import { cn } from "@/lib/utils";
import { InView } from "../animations/in-view";

export function Services() {
  return (
    <section className="relative overflow-hidden px-4 py-16">
      <InView className="mx-auto max-w-5xl space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {servicesContent.headline.primary}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
            {servicesContent.headline.secondary}
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          <div className="absolute inset-0 hidden sm:block">
            <div className="absolute left-[25%] right-[25%] top-[25%] h-px bg-border" />
            <div className="absolute left-[25%] right-[25%] top-[75%] h-px bg-border" />
            <div className="absolute bottom-[25%] left-1/2 top-[25%] w-px bg-border" />
            <div className="absolute left-1/2 top-[25%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-border" />
            <div className="absolute left-1/2 top-[75%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-border" />
          </div>

          {servicesContent.services.map((service, index) => (
            <InView key={service.title} delay={0.1 * (index + 1)}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-3xl border bg-card p-8",
                  "transition-colors duration-300",
                  "hover:border-foreground/20"
                )}
              >
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

                  <div className="absolute right-0 top-0">
                    <span className="text-3xl font-bold text-foreground/5">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
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

                  <div
                    className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br opacity-5 blur-2xl transition-opacity group-hover:opacity-10"
                    style={{
                      background:
                        index === 0
                          ? "hsl(var(--accent-1))"
                          : index === 1
                            ? "hsl(var(--accent-3))"
                            : index === 2
                              ? "hsl(var(--accent-2))"
                              : "hsl(var(--muted))",
                    }}
                  />
                  <div className="absolute -z-10 h-full w-full bg-gradient-to-br from-foreground/[0.01] to-foreground/[0.02] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            </InView>
          ))}
        </div>
      </InView>
    </section>
  );
}
