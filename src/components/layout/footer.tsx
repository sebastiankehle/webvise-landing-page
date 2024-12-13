import { Separator } from "@/components/ui/separator";
import { footerContent } from "@/content/footer";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const SocialIcon = ({ icon }: { icon: string }) => {
  const iconProps = {
    size: 18,
    strokeWidth: 0,
    fill: "currentColor",
  };

  switch (icon) {
    case "linkedin":
      return <LinkedinIcon {...iconProps} />;
    case "github":
      return <GithubIcon {...iconProps} />;
    default:
      return null;
  }
};

export function Footer() {
  const { company, columns, social, copyright } = footerContent;
  const { contact, pages, legal } = columns;

  return (
    <footer className="border-t bg-card/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <div className="space-y-3">
              <h3 className="text-base font-semibold tracking-tight">
                {company.name}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground/70">
                {company.description}
              </p>
            </div>
            <address className="space-y-2 text-xs not-italic text-muted-foreground/70">
              {company.address.map((line, i) => (
                <div key={i} className="leading-relaxed">
                  {line}
                </div>
              ))}
            </address>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-semibold tracking-tight">
              {contact.title}
            </h3>
            <div className="space-y-2">
              <a
                href={`mailto:${contact.email}`}
                className="block text-xs text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="block text-xs text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {contact.phone}
              </a>
              <div className="space-y-1 pt-1 text-xs text-muted-foreground/70">
                <p>{contact.hours.days}</p>
                <p>{contact.hours.time}</p>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-semibold tracking-tight">
              {pages.title}
            </h3>
            <nav>
              <ul className="space-y-2">
                {pages.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-semibold tracking-tight">
              {legal.title}
            </h3>
            <nav>
              <ul className="space-y-2">
                {legal.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <div className="flex items-center gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/70 transition-colors hover:text-foreground"
                aria-label={item.label}
              >
                <SocialIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-6 opacity-50" />

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground/70">{copyright}</p>
          <p className="text-xs text-muted-foreground/70">
            Made with ❤️ in Potsdam, Germany
          </p>
        </div>
      </div>
    </footer>
  );
}
