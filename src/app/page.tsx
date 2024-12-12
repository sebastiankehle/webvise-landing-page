import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";

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
      <Hero />
    </>
  );
}
