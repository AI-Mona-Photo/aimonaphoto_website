import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StyleCatalog } from "@/components/sections/StyleCatalog";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PhotoGuide } from "@/components/sections/PhotoGuide";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-amber-500/30">
      <Navbar />
      <Hero />
      <StyleCatalog />
      <HowItWorks />
      <PhotoGuide />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
