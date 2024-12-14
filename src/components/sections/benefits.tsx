"use client";

import { Badge } from "@/components/ui/badge";
import { benefitsContent } from "@/content/benefits";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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

        <div className="mt-24 grid gap-6 lg:grid-cols-3">
          {benefitsContent.benefits.map((benefit, index) => {
            return (
              <InView
                key={benefit.title}
                delay={0.15 * ((index + 1) % 3) + 0.1}
                className="group"
              >
                <motion.div
                  className="relative h-full rounded-3xl border bg-card p-8 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Gradient Border */}
                  <div
                    className="absolute inset-x-0 -top-px h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${benefit.color}, transparent)`,
                    }}
                  />

                  {/* Large Metric Display */}
                  <div className="mb-8 flex items-baseline justify-between">
                    <div
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-2xl",
                        "bg-background transition-transform duration-500 group-hover:scale-110"
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
                    <div className="text-right">
                      <div className="text-3xl font-bold tracking-tight text-foreground">
                        {benefit.stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {benefit.stat.label}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-8 space-y-2">
                    {benefit.metrics.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div
                          className="h-1 w-1 rounded-full"
                          style={{ background: benefit.color }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </InView>
            );
          })}
        </div>
      </InView>
    </section>
  );
}
