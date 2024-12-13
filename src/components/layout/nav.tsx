"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Benefits", href: "#benefits" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Solutions", href: "#solutions" },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden gap-1 md:flex">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={cn(
            "rounded-md px-3 py-2 text-sm transition-colors",
            "hover:text-foreground/80",
            activeSection === item.href.slice(1)
              ? "text-foreground"
              : "text-foreground/60"
          )}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(item.href)?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
