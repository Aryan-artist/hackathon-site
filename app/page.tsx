import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VirtualToursSection } from "@/components/virtual-tours-section"
import { InteractiveMapSection } from "@/components/interactive-map-section"
import { DigitalArchiveSection } from "@/components/digital-archive-section"
import { CulturalCalendarSection } from "@/components/cultural-calendar-section"
import { TransportSection } from "@/components/transport-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Header />
      <main className="w-full">
        <HeroSection />
        <VirtualToursSection />
        <InteractiveMapSection />
        <DigitalArchiveSection />
        <CulturalCalendarSection />
        <TransportSection />
      </main>
      <Footer />
    </div>
  )
}
