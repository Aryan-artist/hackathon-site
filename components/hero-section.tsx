import { Button } from "@/components/ui/button"
import { Play, Map, Archive, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/majestic-himalayan-monastery-with-prayer-flags-aga.jpg"
          alt="Sikkim Monastery"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/60" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Discover Sikkim's
            <span className="text-primary block">Sacred Monasteries</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-bold mb-8 max-w-3xl mx-auto text-pretty">
            Immerse yourself in the spiritual heritage of the Himalayas through 360° virtual tours, interactive maps,
            and rich cultural experiences that bring ancient wisdom to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="flex items-center space-x-2 text-lg px-8 py-3">
              <Play className="w-5 h-5" />
              <span>Start Virtual Tour</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 text-lg px-8 py-3 bg-transparent"
            >
              <Map className="w-5 h-5" />
              <span>Explore Map</span>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">360° Virtual Tours</h3>
              <p className="text-sm text-muted-foreground">
                Explore monasteries remotely with immersive virtual reality experiences
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Archive className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Digital Archive</h3>
              <p className="text-sm text-muted-foreground">Access rare manuscripts, murals, and historical documents</p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Cultural Calendar</h3>
              <p className="text-sm text-muted-foreground">
                Join festivals, rituals, and spiritual events throughout the year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
