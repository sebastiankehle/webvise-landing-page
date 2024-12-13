interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "github";
}

interface FooterContent {
  company: {
    name: string;
    description: string;
    address: string[];
  };
  columns: {
    contact: FooterColumn & {
      email: string;
      phone: string;
      hours: {
        days: string;
        time: string;
      };
    };
    pages: FooterColumn;
    legal: FooterColumn;
  };
  social: SocialLink[];
  copyright: string;
}

export const footerContent: FooterContent = {
  company: {
    name: "webvise",
    description:
      "Creating digital solutions that drive business growth and innovation.",
    address: ["Sebastian Kehle", "Eva-Laube-Weg 5", "14473 Potsdam", "Germany"],
  },
  columns: {
    contact: {
      title: "Contact",
      email: "mail@webvise.io",
      phone: "+49 162 727 13 41",
      hours: {
        days: "Monday - Sunday",
        time: "10:00 - 18:00",
      },
      links: [],
    },
    pages: {
      title: "Pages",
      links: [
        { label: "Home", href: "#home" },
        { label: "Benefits", href: "#benefits" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Solutions", href: "#solutions" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Imprint", href: "/imprint" },
      ],
    },
  },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sebastiankehle",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/sebastiankehle",
      icon: "github",
    },
  ],
  copyright: `© ${new Date().getFullYear()} webvise. All rights reserved.`,
};
