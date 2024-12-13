export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Benefits", href: "#benefits" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Solutions", href: "#solutions" },
] as const;

export type Navigation = typeof navigation;
