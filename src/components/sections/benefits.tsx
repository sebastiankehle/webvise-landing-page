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
              className="group"
            >
              <div className="relative h-full space-y-6 rounded-3xl border bg-card p-8 transition-all duration-300 hover:border-foreground/20">
                {/* Icon */}
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110",
                    "bg-background"
                  )}
                  style={{
                    boxShadow: `inset 0 0 0 1px ${benefit.color}20`,
                  }}
                >
                  <benefit.icon
                    className="h-7 w-7"
                    style={{ color: benefit.color }}
                    strokeWidth={1.5}
                  />
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
                        "rounded-full px-4 py-1.5 text-sm",
                        "border transition-colors duration-300",
                        "group-hover:border-border"
                      )}
                      style={{
                        borderColor: `${benefit.color}10`,
                        background: `${benefit.color}05`,
                      }}
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
