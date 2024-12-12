"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/providers/mobile-menu-provider";
import { Nav } from "./nav";
import { cn } from "@/lib/utils";

export function Header() {
  const { isOpen, onOpenChange } = useMobileMenu();

  const headerContent = (
    <div className="mx-auto max-w-7xl rounded-full border bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between">
        <div className="flex-1">
          <Link href="/" className="text-base font-bold">
            webvise
          </Link>
        </div>

        <Nav
          className="hidden md:flex items-center justify-center gap-8 flex-1"
          linkClassName="text-[13px] font-medium"
        />

        <div className="flex-1 flex items-center justify-end gap-2">
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
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        isOpen && "bottom-0 bg-background"
      )}
    >
      <div className="px-4 py-3">{headerContent}</div>

      {isOpen && (
        <Nav
          className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] gap-12 md:hidden"
          linkClassName="text-xl font-medium"
          onNavClick={() => onOpenChange(false)}
        />
      )}
    </header>
  );
}
