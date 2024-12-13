"use client";

import { InView } from "@/components/animations/in-view";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { metricsContent } from "@/content/metrics";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function Metrics() {
  const [activeMetric, setActiveMetric] = useState<"views" | "clicks">("views");
  const [showChart, setShowChart] = useState(false);

  return (
    <section className="px-4 py-24">
      <InView
        className="mx-auto max-w-5xl"
        onInView={() => {
          setTimeout(() => setShowChart(true), 700);
        }}
      >
        <div className="bg-background">
          <div className="space-y-8">
            <InView className="space-y-6 text-center" delay={0.1}>
              <Badge
                variant={metricsContent.badge.variant}
                className="rounded-full px-4 py-1.5"
              >
                {metricsContent.badge.text}
              </Badge>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  {metricsContent.headline.primary}
                </h2>
                <p className="text-muted-foreground">
                  {metricsContent.headline.secondary}
                </p>
              </div>
            </InView>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <InView
                className="grid grid-cols-2 gap-4 sm:auto-rows-fr sm:grid-cols-1"
                delay={0.2}
              >
                <Card
                  className={cn(
                    "cursor-pointer bg-background transition-colors",
                    activeMetric === "views"
                      ? "border-[hsl(var(--accent-1))]"
                      : "border-border"
                  )}
                  onClick={() => setActiveMetric("views")}
                >
                  <CardContent className="p-6">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        {metricsContent.metrics.views.label}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold">
                          {metricsContent.metrics.views.value.toLocaleString()}
                        </p>
                        <span
                          className="text-sm font-medium"
                          style={{ color: metricsContent.metrics.views.color }}
                        >
                          {metricsContent.metrics.views.growth}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {metricsContent.description.views}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className={cn(
                    "cursor-pointer bg-background transition-colors",
                    activeMetric === "clicks"
                      ? "border-[hsl(var(--accent-2))]"
                      : "border-border"
                  )}
                  onClick={() => setActiveMetric("clicks")}
                >
                  <CardContent className="p-6">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        {metricsContent.metrics.clicks.label}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold">
                          {metricsContent.metrics.clicks.value.toLocaleString()}
                        </p>
                        <span
                          className="text-sm font-medium"
                          style={{ color: metricsContent.metrics.clicks.color }}
                        >
                          {metricsContent.metrics.clicks.growth}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {metricsContent.description.clicks}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </InView>

              <InView className="col-span-2" delay={0.3}>
                <Card className="h-full bg-background">
                  <CardContent className="p-6">
                    <div className="h-[240px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={metricsContent.data}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="hsl(var(--muted-foreground))"
                            opacity={0.1}
                            vertical={false}
                          />
                          <XAxis
                            dataKey="date"
                            stroke="hsl(var(--muted-foreground))"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis
                            stroke="hsl(var(--muted-foreground))"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            dx={-10}
                            tickFormatter={(value) =>
                              value === 0 ? "" : value
                            }
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--background))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "8px",
                              padding: "12px",
                              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                            }}
                            formatter={(value: number, name: string) => {
                              const color =
                                name === "views"
                                  ? metricsContent.metrics.views.color
                                  : metricsContent.metrics.clicks.color;
                              const firstValue =
                                name === "views"
                                  ? metricsContent.data[0].views
                                  : metricsContent.data[0].clicks;
                              const percentageIncrease = Math.round(
                                ((value - firstValue) / firstValue) * 100
                              );
                              const growth =
                                percentageIncrease > 0
                                  ? `+${percentageIncrease}%`
                                  : `${percentageIncrease}%`;
                              return [
                                <div
                                  key={`tooltip-${name}`}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "hsl(var(--muted-foreground))",
                                      marginRight: "8px",
                                    }}
                                  >
                                    {name.charAt(0).toUpperCase() +
                                      name.slice(1)}
                                  </span>
                                  <span
                                    style={{ color: "hsl(var(--foreground))" }}
                                  >
                                    {value.toLocaleString()}
                                  </span>
                                  <span
                                    style={{
                                      color,
                                      backgroundColor: `${color}20`,
                                      padding: "2px 8px",
                                      borderRadius: "4px",
                                      fontSize: "13px",
                                    }}
                                  >
                                    {growth}
                                  </span>
                                </div>,
                                "",
                              ];
                            }}
                            separator=""
                            itemStyle={{
                              color: "hsl(var(--muted-foreground))",
                              fontSize: "14px",
                              padding: "4px 0",
                            }}
                          />
                          <Area
                            type="linear"
                            dataKey="views"
                            stroke={metricsContent.metrics.views.color}
                            fill="none"
                            strokeWidth={2}
                            activeDot={{ r: 4 }}
                            dot={false}
                            isAnimationActive={showChart}
                            animationDuration={1500}
                            style={{
                              opacity: activeMetric === "views" ? 1 : 0.2,
                            }}
                          />
                          <Area
                            type="linear"
                            dataKey="clicks"
                            stroke={metricsContent.metrics.clicks.color}
                            fill="none"
                            strokeWidth={2}
                            activeDot={{ r: 4 }}
                            dot={false}
                            isAnimationActive={showChart}
                            animationDuration={1500}
                            style={{
                              opacity: activeMetric === "clicks" ? 1 : 0.2,
                            }}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </InView>
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
}
