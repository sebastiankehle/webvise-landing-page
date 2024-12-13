"use client";

import { FadeIn } from "@/components/animations/fade-in";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { techContent } from "@/content/tech";
import { cn } from "@/lib/utils";

export function TechSlider() {
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-background/50 py-16">
      <FadeIn className="space-y-8">
        <div className="relative flex w-full justify-center">
          <div className="absolute inset-y-0 left-0 z-10 w-48 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-48 bg-gradient-to-l from-background via-background/80 to-transparent" />
          <div
            className={cn(
              "flex items-center gap-16",
              "animate-[slide_35s_linear_infinite] hover:[animation-play-state:paused]"
            )}
          >
            <TooltipProvider>
              {[
                ...techContent.technologies,
                ...techContent.technologies,
                ...techContent.technologies,
                ...techContent.technologies,
              ].map((tech, i) => (
                <Tooltip key={`${tech.name}-${i}`} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "transition-transform hover:scale-110",
                        "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <tech.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </a>
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
      </FadeIn>
    </section>
  );
}
