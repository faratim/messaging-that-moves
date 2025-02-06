import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Explanatory from "@/components/Explanatory";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan/Plan";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messaging That Moves",
  description: "Clarify Your Message, Grow Your Business",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      <Video />
      <Plan />
      {/* <AboutSectionTwo /> */}
      {/* <Brands /> */}
      <Explanatory />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
