"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import { cn } from "@/lib/utils";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  variant?: "default" | "accent1" | "accent2" | "accent3";
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant = "default", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full",
      {
        "bg-primary/20": variant === "default",
        "bg-[hsl(var(--accent-1))]/20": variant === "accent1",
        "bg-[hsl(var(--accent-2))]/20": variant === "accent2",
        "bg-[hsl(var(--accent-3))]/20": variant === "accent3",
      },
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 transition-all duration-500",
        {
          "bg-primary": variant === "default",
          "bg-[hsl(var(--accent-1))]": variant === "accent1",
          "bg-[hsl(var(--accent-2))]": variant === "accent2",
          "bg-[hsl(var(--accent-3))]": variant === "accent3",
        },
        "relative after:absolute after:inset-0 after:animate-[shimmer_2s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent"
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
