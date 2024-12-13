"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { techContent } from "@/content/tech";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { InView } from "../animations/in-view";

export function Tech() {
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-background/50 py-16">
      <InView className="space-y-8">
        <div className="relative flex w-full justify-center">
          <div className="absolute inset-y-0 left-0 z-10 w-48 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-48 bg-gradient-to-l from-background via-background/80 to-transparent" />
          <div className={cn("flex items-center gap-6", "w-max animate-slide")}>
            <TooltipProvider>
              {[
                ...techContent.technologies,
                ...techContent.technologies,
                ...techContent.technologies,
                ...techContent.technologies,
              ].map((tech, i) => (
                <Tooltip key={`${tech.name}-${i}`} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        "group relative flex h-20 items-center justify-center rounded-2xl bg-background/50 p-4",
                        "transition-all duration-300",
                        "opacity-50 hover:opacity-100"
                      )}
                    >
                      <Link
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex h-12 w-12 items-center justify-center",
                          "transition-transform duration-300 hover:scale-110"
                        )}
                      >
                        <tech.icon className="h-6 w-6" />
                      </Link>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="animate-in fade-in-0 zoom-in-95"
                  >
                    {tech.name}
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </InView>
    </section>
  );
}
