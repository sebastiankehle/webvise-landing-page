import { Benefits } from "@/components/sections/benefits";
import { ContactSection } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Tech } from "@/components/sections/tech";
import { Testimonials } from "@/components/sections/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "webvise | Web Development and AI Solutions",
  description:
    "We build modern web applications with a focus on AI integration, delivering scalable and user-centric solutions for businesses.",
  metadataBase: new URL("https://webvise.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webvise.io",
    siteName: "webvise",
    title: "webvise | Web Development and AI Solutions",
    description:
      "We build modern web applications with a focus on AI integration, delivering scalable and user-centric solutions for businesses.",
  },
  twitter: {
    card: "summary",
    title: "webvise | Web Development and AI Solutions",
    description:
      "We build modern web applications with a focus on AI integration, delivering scalable and user-centric solutions for businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
};

export default function Home() {
  return (
    <>
      <Hero id="home" />
      <Tech id="tech" />
      <Benefits id="benefits" />
      <Metrics id="metrics" />
      <Services id="services" />
      <Process id="process" />
      <Testimonials id="testimonials" />
      <Solutions id="solutions" />
      <ContactSection id="contact" />
    </>
  );
}
