"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface InViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onInView?: () => void;
}

export function InView({
  children,
  className,
  delay = 0,
  onInView,
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onInView?.();
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [onInView]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        !isVisible && "translate-y-10 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
