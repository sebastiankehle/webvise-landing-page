"use client";

import { Badge } from "@/components/ui/badge";
import { benefitsContent } from "@/content/benefits";
import { cn } from "@/lib/utils";
import { InView } from "../animations/in-view";

interface BenefitsProps {
  id?: string;
}

export function Benefits({ id }: BenefitsProps) {
  return (
    <section id={id} className="relative px-4 py-24">
      <InView className="mx-auto max-w-6xl">
        <div className="space-y-6 text-center">
          <Badge
            variant={benefitsContent.badge.variant}
            className="rounded-full px-4 py-1.5"
          >
            {benefitsContent.badge.text}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {benefitsContent.headline.primary}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
            {benefitsContent.headline.secondary}
          </p>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {benefitsContent.benefits.map((benefit, index) => (
            <InView
              key={benefit.title}
              delay={0.15 * ((index + 1) % 3) + 0.1}
              className="group relative"
            >
              {/* Connecting lines */}
              {index < 2 && (
                <div className="absolute left-full top-24 hidden h-px w-8 -translate-x-4 bg-border lg:block" />
              )}

              {/* Card */}
              <div className="relative h-full space-y-6 rounded-3xl p-8">
                {/* Glowing background */}
                <div
                  className={cn(
                    "absolute inset-0 -z-10 rounded-3xl opacity-[0.03] blur-xl transition-opacity duration-500",
                    "group-hover:opacity-10"
                  )}
                  style={{ background: benefit.color }}
                />

                {/* Icon */}
                <div className="relative">
                  <div
                    className={cn(
                      "absolute inset-0 opacity-10 blur-2xl transition-opacity duration-500",
                      "group-hover:opacity-25"
                    )}
                    style={{ background: benefit.color }}
                  />
                  <div
                    className={cn(
                      "relative flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500",
                      "group-hover:scale-110"
                    )}
                    style={{ background: `${benefit.color}08` }}
                  >
                    <benefit.icon
                      className="h-8 w-8"
                      style={{ color: `${benefit.color}CC` }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {benefit.metrics.map((metric) => (
                    <div
                      key={metric}
                      className={cn(
                        "rounded-full px-4 py-1.5 text-sm transition-colors duration-300",
                        "border border-border/50",
                        "group-hover:border-border"
                      )}
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </InView>
    </section>
  );
}
