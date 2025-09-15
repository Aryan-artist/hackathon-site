import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Bus, Plane, Train, MapPin, Clock, Route, Navigation } from "lucide-react"

export function TransportSection() {
  const transportOptions = [
    {
      icon: Plane,
      type: "Air Travel",
      title: "Bagdogra Airport (IXB)",
      description: "Nearest airport, 124 km from Gangtok",
      duration: "3-4 hours drive",
      services: ["Airport shuttle", "Taxi booking", "Helicopter service"],
    },
    {
      icon: Train,
      type: "Rail Travel",
      title: "New Jalpaiguri (NJP)",
      description: "Major railway station, 148 km from Gangtok",
      duration: "4-5 hours drive",
      services: ["Shared taxi", "Private cab", "Bus service"],
    },
    {
      icon: Bus,
      type: "Road Transport",
      title: "Interstate Bus Service",
      description: "Regular buses from Siliguri and Darjeeling",
      duration: "4-6 hours",
      services: ["Government buses", "Private operators", "Luxury coaches"],
    },
    {
      icon: Car,
      type: "Private Vehicle",
      title: "Self-Drive & Rentals",
      description: "Car rentals and self-drive options",
      duration: "Flexible timing",
      services: ["Car rental", "Driver service", "Fuel stations"],
    },
  ]

  const popularRoutes = [
    {
      from: "Gangtok",
      to: "Rumtek Monastery",
      distance: "24 km",
      duration: "45 mins",
      difficulty: "Easy",
      highlights: ["Scenic mountain views", "Prayer wheel stops"],
    },
    {
      from: "Pelling",
      to: "Pemayangtse Monastery",
      distance: "2 km",
      duration: "10 mins",
      difficulty: "Easy",
      highlights: ["Kanchenjunga views", "Ancient architecture"],
    },
    {
      from: "Yuksom",
      to: "Tashiding Monastery",
      distance: "40 km",
      duration: "1.5 hours",
      difficulty: "Moderate",
      highlights: ["River confluence", "Sacred hilltop location"],
    },
  ]

  return (
    <section id="transport" className="py-20 bg-muted/30">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Local Transport & Route Planning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Plan your journey to Sikkim's monasteries with our comprehensive transport guide. From arrival to monastery
            visits, we've got your travel covered.
          </p>
        </div>

        {/* Transport Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {transportOptions.map((option, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md inline-block mb-2">
                  {option.type}
                </div>
                <CardTitle className="text-lg text-card-foreground">{option.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{option.duration}</span>
                  </div>

                  <div className="space-y-1">
                    {option.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Routes */}
        <div className="bg-card rounded-2xl p-8 border border-border/50 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-card-foreground flex items-center">
              <Route className="w-6 h-6 text-primary mr-2" />
              Popular Monastery Routes
            </h3>
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <Navigation className="w-4 h-4" />
              <span>Plan Custom Route</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-foreground">{route.from}</span>
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">{route.difficulty}</div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex-1 h-px bg-border"></div>
                  <Navigation className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="font-semibold text-foreground">{route.to}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Distance:</span>
                    <div className="font-medium text-foreground">{route.distance}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <div className="font-medium text-foreground">{route.duration}</div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <span className="text-sm text-muted-foreground">Highlights:</span>
                  {route.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button size="sm" className="w-full">
                  Get Directions
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Services */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Integrated Tourism Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border/50">
              <Car className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-card-foreground mb-2">Local Transport Partners</h4>
              <p className="text-sm text-muted-foreground">Verified taxi services and tour operators</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border/50">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="font-semibold text-card-foreground mb-2">Accommodation Booking</h4>
              <p className="text-sm text-muted-foreground">Hotels and guesthouses near monasteries</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border/50">
              <Navigation className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-semibold text-card-foreground mb-2">Guided Tours</h4>
              <p className="text-sm text-muted-foreground">Expert local guides and cultural experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
