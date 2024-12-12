"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";

interface NavProps {
  className?: string;
  linkClassName?: string;
  onNavClick?: () => void;
}

const navItems = [
  { href: "/#hero", label: "Home", sectionId: "hero" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Nav({ className, linkClassName, onNavClick }: NavProps) {
  const activeSection = useActiveSection();

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            linkClassName,
            "text-muted-foreground transition-colors hover:text-foreground",
            item.sectionId &&
              activeSection === item.sectionId &&
              "text-foreground font-medium"
          )}
          onClick={onNavClick}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
