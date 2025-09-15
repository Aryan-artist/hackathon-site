import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, Route, Mountain, Play } from "lucide-react"

export function InteractiveMapSection() {
  const mapFeatures = [
    {
      icon: MapPin,
      title: "Geo-Tagged Locations",
      description: "Precise GPS coordinates for all monasteries and attractions",
    },
    {
      icon: Route,
      title: "Travel Routes",
      description: "Optimized paths with distance and time calculations",
    },
    {
      icon: Navigation,
      title: "Real-time Navigation",
      description: "Turn-by-turn directions for seamless exploration",
    },
    {
      icon: Mountain,
      title: "Terrain Information",
      description: "Altitude, weather, and accessibility details",
    },
  ]

  return (
    <section id="map" className="py-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Interactive Map & Navigation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Plan your spiritual journey with our comprehensive interactive map. Discover monasteries, plan routes, and
              navigate with confidence through the sacred landscapes of Sikkim.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {mapFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Explore Interactive Map</span>
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Sikkim Monasteries Map</span>
                </CardTitle>
                <CardDescription>Interactive map showing all major monasteries and attractions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-muted rounded-lg h-80 flex items-center justify-center">
                  <img
                    src="/sikkim-map-with-monastery-locations-marked.jpg"
                    alt="Interactive Map of Sikkim Monasteries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Button variant="secondary" size="lg">
                      <Play className="w-5 h-5 mr-2" />
                      Launch Interactive Map
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Info Cards */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-card-foreground font-medium">12 Monasteries</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2 text-sm">
                <Mountain className="w-4 h-4 text-primary" />
                <span className="text-card-foreground font-medium">Altitude: 1,200-4,000m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
