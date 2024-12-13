"use client";

import { Button } from "@/components/ui/button";
import { navigation } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface NavProps {
  className?: string;
  linkClassName?: string;
  onNavClick?: () => void;
  showGetStarted?: boolean;
}

export function Nav({
  className,
  linkClassName,
  onNavClick,
  showGetStarted,
}: NavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleScroll = (href: string) => {
    if (!isHomePage) {
      // If not on homepage, navigate to homepage with hash
      router.push(`/${href}`);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (onNavClick) {
        onNavClick();
      }
    }
  };

  return (
    <nav className={className}>
      {navigation.map((item) => (
        <button
          key={item.label}
          onClick={() => handleScroll(item.href)}
          className={cn(
            "text-muted-foreground transition-colors hover:text-foreground",
            linkClassName
          )}
        >
          {item.label}
        </button>
      ))}
      {showGetStarted && (
        <Button
          variant="outline"
          onClick={() => handleScroll("#contact")}
          className={cn(
            "rounded-full px-8",
            "border-[hsl(var(--accent-1))]",
            "hover:border-[hsl(var(--accent-1))] hover:brightness-125",
            "hover:bg-transparent"
          )}
        >
          Get Started
        </Button>
      )}
    </nav>
  );
}
