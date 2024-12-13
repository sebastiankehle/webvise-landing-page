import { Benefits } from "@/components/sections/benefits";
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
  openGraph: {
    title: "webvise | Web Development and AI Solutions",
    description:
      "We build modern web applications with a focus on AI integration, delivering scalable and user-centric solutions for businesses.",
    url: "https://webvise.io",
  },
  twitter: {
    card: "summary_large_image",
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
    </>
  );
}
