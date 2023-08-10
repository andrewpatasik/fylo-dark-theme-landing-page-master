import { Navbar } from "@/components";
import { HeroSection } from "./HeroSection";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
    </main>
  )
}
