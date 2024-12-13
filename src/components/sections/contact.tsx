import { ContactForm } from "@/components/forms/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { contactContent, faqContent } from "@/content/contact";
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

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg border bg-card/50 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <ContactForm />
          </div>

          {/* FAQs */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              Frequently Asked Questions
            </h3>
            {faqContent.tabs.map((tab) => (
              <div key={tab.value} className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">
                  {tab.label}
                </h4>
                <Accordion type="single" collapsible className="w-full">
                  {tab.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${tab.value}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </InView>
    </section>
  );
}
