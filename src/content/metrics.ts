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
    primary: "Rapid Growth for Your Business",
    secondary:
      "Our products consistently outperform generic solutions and industry standards.",
  },
  description: {
    views: "Achieve higher engagement rates and drive more organic traffic.",
    clicks: "Benefit from improved conversion rates and user interactions.",
  },
  metrics: {
    views: {
      label: "Views",
      value: 24863,
      growth: "+1156%",
      color: "hsl(var(--accent-1))",
    },
    clicks: {
      label: "Clicks",
      value: 11842,
      growth: "+1003%",
      color: "hsl(var(--accent-2))",
    },
  },
  data: [
    { date: "", views: 2183, clicks: 1182 },
    { date: "", views: 2476, clicks: 1378 },
    { date: "", views: 2391, clicks: 1287 },
    { date: "", views: 2684, clicks: 1483 },
    { date: "", views: 3176, clicks: 1687 },
    { date: "", views: 2978, clicks: 1584 },
    { date: "", views: 3487, clicks: 1876 },
    { date: "", views: 3983, clicks: 2087 },
    { date: "", views: 4476, clicks: 2283 },
    { date: "", views: 4287, clicks: 2187 },
    { date: "", views: 4976, clicks: 2478 },
    { date: "", views: 5483, clicks: 2687 },
    { date: "", views: 5276, clicks: 2583 },
    { date: "", views: 5987, clicks: 2876 },
    { date: "", views: 6483, clicks: 3087 },
    { date: "", views: 6276, clicks: 2976 },
    { date: "", views: 12487, clicks: 3983 },
    { date: "", views: 11976, clicks: 4687 },
    { date: "", views: 12683, clicks: 5287 },
    { date: "", views: 12276, clicks: 5083 },
    { date: "", views: 12487, clicks: 5976 },
    { date: "", views: 12183, clicks: 5783 },
    { date: "", views: 18476, clicks: 7983 },
    { date: "", views: 17987, clicks: 7776 },
    { date: "", views: 18683, clicks: 8487 },
    { date: "", views: 18276, clicks: 8283 },
    { date: "", views: 24863, clicks: 11842 },
  ] satisfies MetricDataPoint[],
} as const;
