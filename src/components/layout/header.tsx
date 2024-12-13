"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";
import { useMobileMenu } from "@/providers/mobile-menu-provider";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Nav } from "./nav";

export function Header() {
  const { isOpen, onOpenChange } = useMobileMenu();

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isOpen) {
        onOpenChange(false);
      }
    }
  };

  const headerContent = (
    <div
      className={cn(
        "mx-auto max-w-7xl rounded-full border bg-background/50 px-6 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20",
        "border-border"
      )}
    >
      <div className="flex h-14 items-center justify-between">
        <div className="flex-1">
          <Link href="/" className="text-base font-bold">
            webvise
          </Link>
        </div>

        <Nav
          className="hidden flex-1 items-center justify-center gap-8 md:flex"
          linkClassName="text-[13px] font-medium transition-colors"
        />

        <div className="flex flex-1 items-center justify-end gap-3">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => onOpenChange(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleScroll("#contact")}
            className={cn(
              "hidden rounded-full px-4 md:inline-flex",
              "border-[hsl(var(--accent-1))]",
              "hover:border-[hsl(var(--accent-1))] hover:brightness-125",
              "hover:bg-transparent"
            )}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 px-4 py-3",
        isOpen && "bottom-0 bg-background"
      )}
    >
      {headerContent}

      {isOpen && (
        <Nav
          className="flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-12 md:hidden"
          linkClassName="text-xl font-medium"
          onNavClick={() => onOpenChange(false)}
          showGetStarted={true}
        />
      )}
    </header>
  );
}
