import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Volume2, Globe, Eye } from "lucide-react"

export function VirtualToursSection() {
  const monasteries = [
    {
      name: "Rumtek Monastery",
      location: "East Sikkim",
      description: "The largest monastery in Sikkim, seat of the Karmapa",
      image: "/rumtek-monastery-golden-roof-tibetan-architecture.jpg",
      features: ["360° Interior Tour", "Audio Guide", "Historical Timeline"],
    },
    {
      name: "Pemayangtse Monastery",
      location: "West Sikkim",
      description: "One of the oldest monasteries, meaning 'Perfect Sublime Lotus'",
      image: "/pemayangtse-monastery-white-walls-mountain-view.jpg",
      features: ["Virtual Reality", "Multilingual Guide", "Artifact Gallery"],
    },
    {
      name: "Tashiding Monastery",
      location: "West Sikkim",
      description: "Sacred site between Rangit and Ratong rivers",
      image: "/tashiding-monastery-hilltop-prayer-flags.jpg",
      features: ["Drone Footage", "Sacred Rituals", "Nature Sounds"],
    },
  ]

  return (
    <section id="tours" className="py-20 bg-muted/30">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Immersive 360° Virtual Tours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Step inside Sikkim's most sacred monasteries from anywhere in the world. Experience the spiritual atmosphere
            with our cutting-edge virtual reality technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {monasteries.map((monastery, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={monastery.image || "/placeholder.svg"}
                  alt={monastery.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="lg" className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Start Tour</span>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{monastery.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {monastery.location} • {monastery.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {monastery.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">High-Resolution 360°</h3>
            <p className="text-sm text-muted-foreground">Crystal clear panoramic views of every corner</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Volume2 className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Audio Guides</h3>
            <p className="text-sm text-muted-foreground">Expert narration in multiple languages</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Multilingual Support</h3>
            <p className="text-sm text-muted-foreground">Available in English, Hindi, Nepali, and Tibetan</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Interactive Hotspots</h3>
            <p className="text-sm text-muted-foreground">Click to learn about artifacts and history</p>
          </div>
        </div>
      </div>
    </section>
  )
}
