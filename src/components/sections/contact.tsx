"use client";

import { ContactForm } from "@/components/forms/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <Badge variant="outline" className="rounded-full px-4 py-1.5">
            {contactContent.badge.label}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {headline.title}
          </h2>
          <p className="text-balance text-muted-foreground">
            {headline.description}
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <Separator className="flex-1" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-8">
              <ContactForm />
            </div>
          </div>

          {/* FAQs */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold">
                  Frequently Asked Questions
                </h3>
                <Separator className="flex-1" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Find quick answers to common questions about our services and
                process.
              </p>
            </div>

            <div className="space-y-6">
              {faqContent.tabs.map((tab) => (
                <div key={tab.value}>
                  <div className="mb-3 flex items-center gap-4">
                    <h4 className="text-sm font-medium text-foreground">
                      {tab.label}
                    </h4>
                    <Separator className="flex-1" />
                  </div>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-2"
                  >
                    {tab.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${tab.value}-${index}`}
                        className="border-none"
                      >
                        <AccordionTrigger className="px-4 py-3 text-left hover:text-foreground/80 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pt-2 text-sm text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
}
