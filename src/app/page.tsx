import { Navbar } from "@/components";
import { HeroSection } from "./HeroSection";
import { Features } from "./Features";
import { Details } from "./Details";
import { Testimonial } from "./Testimonial";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <Features />
      <Details />
      <Testimonial />
    </main>
  )
}
