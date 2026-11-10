import { HeroSection } from "@/components/home/hero-section";
import { AboutAmbamata } from "@/components/home/about-ambamata";
import { TempleSevasSection } from "@/components/home/temple-sevas-section";
import { EventsAndFestivalsSection } from "@/components/home/events-and-festivals-section";
import { GovernmentListingSection } from "@/components/shared/government-listing-section";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <AboutAmbamata />
      <TempleSevasSection />
      <EventsAndFestivalsSection />
      <GovernmentListingSection />
    </main>
  );
}
