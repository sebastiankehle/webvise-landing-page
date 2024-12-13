export interface MetricDataPoint {
  date: string;
  views: number;
  clicks: number;
}

export const metricsContent = {
  badge: {
    text: "Performance Metrics",
    variant: "outline" as const,
  },
  headline: {
    primary: "Rapid Growth Through Modern Tech",
    secondary:
      "Our tech stack and development approach consistently delivers exceptional results for our clients.",
  },
  metrics: {
    views: {
      label: "Views",
      value: 24860,
      growth: "+1156%",
      color: "hsl(var(--accent-1))",
    },
    clicks: {
      label: "Clicks",
      value: 11840,
      growth: "+1003%",
      color: "hsl(var(--accent-2))",
    },
  },
  data: [
    { date: "", views: 2180, clicks: 1180 },
    { date: "", views: 2480, clicks: 1380 },
    { date: "", views: 2380, clicks: 1280 },
    { date: "", views: 2680, clicks: 1480 },
    { date: "", views: 3180, clicks: 1680 },
    { date: "", views: 2980, clicks: 1580 },
    { date: "", views: 3480, clicks: 1880 },
    { date: "", views: 3980, clicks: 2080 },
    { date: "", views: 4480, clicks: 2280 },
    { date: "", views: 4280, clicks: 2180 },
    { date: "", views: 4980, clicks: 2480 },
    { date: "", views: 5480, clicks: 2680 },
    { date: "", views: 5280, clicks: 2580 },
    { date: "", views: 5980, clicks: 2880 },
    { date: "", views: 6480, clicks: 3080 },
    { date: "", views: 6280, clicks: 2980 },
    { date: "", views: 12480, clicks: 3980 },
    { date: "", views: 11980, clicks: 4680 },
    { date: "", views: 12680, clicks: 5280 },
    { date: "", views: 12280, clicks: 5080 },
    { date: "", views: 12480, clicks: 5980 },
    { date: "", views: 12180, clicks: 5780 },
    { date: "", views: 18480, clicks: 7980 },
    { date: "", views: 17980, clicks: 7780 },
    { date: "", views: 18680, clicks: 8480 },
    { date: "", views: 18280, clicks: 8280 },
    { date: "", views: 24860, clicks: 11840 },
  ] satisfies MetricDataPoint[],
} as const;
