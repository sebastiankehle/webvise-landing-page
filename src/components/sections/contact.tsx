import { ContactForm } from "@/components/forms/contact-form";
import { Badge } from "@/components/ui/badge";
import { contactContent } from "@/content/contact";
import { InView } from "../animations/in-view";

interface ContactSectionProps {
  id: string;
}

export function ContactSection({ id }: ContactSectionProps) {
  const { headline } = contactContent;

  return (
    <section id={id} className="relative px-4 py-24">
      <InView className="mx-auto max-w-7xl">
        <div className="space-y-6 text-center">
          <Badge variant="outline" className="rounded-full px-4 py-1.5">
            {contactContent.badge.label}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {headline.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
            {headline.description}
          </p>
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-2xl rounded-lg border bg-card/50 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <ContactForm />
          </div>
        </div>
      </InView>
    </section>
  );
}
