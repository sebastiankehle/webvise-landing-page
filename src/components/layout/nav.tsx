"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const navItems = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;

interface NavProps {
  className?: string;
  linkClassName?: string;
  onNavClick?: () => void;
}

export function Nav({ className, linkClassName, onNavClick }: NavProps) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavClick}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === item.href ? "text-foreground" : "text-foreground/60",
            linkClassName
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
