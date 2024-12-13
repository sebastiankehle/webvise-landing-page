"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        className={cn(
          "h-5 w-5 rotate-0 scale-100 transition-all",
          theme === "light" && "rotate-90 scale-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 rotate-90 scale-0 transition-all",
          theme === "light" && "rotate-0 scale-100"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
