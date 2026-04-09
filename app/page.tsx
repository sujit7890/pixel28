import Hero from "@/components/Hero";
import GamesGrid from "@/components/GamesGrid";
import StudioSection from "@/components/StudioSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <GamesGrid />
      <StudioSection />
      <CareersSection />
      <Footer />
    </main>
  );
}