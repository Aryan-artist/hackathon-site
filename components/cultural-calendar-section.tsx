'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, Star } from "lucide-react"
import { use } from "react"

export function CulturalCalendarSection() {
  const events2025 = [
    {
      name: "Maghe Sankranti",
      date: "Jan 14, 2025",
      location: "Temi, Namchi, all Sikkim",
      significance: "Beginning of the Nepali month of Magh, family rituals",
      type: "Hindu Festival",
      featured: false,
   
    },
    {
      name: "Bhumchu",
      date: "Jan 25-27, 2025",
      location: "Tashiding Monastery",
      significance: "Holy water vase ritual for fortune, prayers",
      type: "Buddhist Ritual",
      featured: true,
     
    },
    {
      name: "Sonam Lhochhar",
      date: "Feb 2, 2025",
      location: "Tamang communities, West Sikkim",
      significance: "Tamang New Year, Damphu dances, folk songs",
      type: "Cultural Festival",
      featured: false,
    },
    {
      name: "Losar (Tibetan New Year)",
      date: "Feb 28 - Mar 2, 2025",
      location: "All major monasteries",
      significance: "Rituals, dances, food offerings",
      type: "Buddhist Festival",
      featured: true,
    },
    {
      name: "Saga Dawa",
      date: "Jun 4, 2025",
      location: "Gangtok, all major monasteries",
      significance: "Buddha's birth, enlightenment & Nirvana; prayer processions, butter lamps",
      type: "Buddhist Festival",
      featured: true,
    },
    {
      name: "Drukpa Tshechi",
      date: "Jul 28, 2025",
      location: "All Sikkim monasteries",
      significance: "1st sermon of Buddha, prayers, teachings",
      type: "Buddhist Festival",
      featured: false,
    },
    {
      name: "Tendong Lho Rum Faat",
      date: "Aug 8, 2025",
      location: "Gayzing, South Sikkim",
      significance: "Lepcha festival, sacred hill worship, offerings",
      type: "Indigenous Festival",
      featured: false,
    },
    {
      name: "Pang Lhabsol",
      date: "Aug 30, 2025",
      location: "Pemayangtse, Tashiding, Gangtok",
      significance: "Worship of Mt. Kanchenjunga; mask dances, rituals",
      type: "Buddhist Festival",
      featured: true,
    },
    {
      name: "Indra Jatra",
      date: "Sep 6, 2025",
      location: "Sikkim",
      significance: "Nepalese celebration, mask dances, prayers",
      type: "Cultural Festival",
      featured: false,
    },
    {
      name: "Lakshmi Puja (Diwali)",
      date: "Nov 1, 2025",
      location: "All Sikkim",
      significance: "Hindu festival of lights, prayers, sweets",
      type: "Hindu Festival",
      featured: false,
    },
    {
      name: "Lhabab Duchen",
      date: "Nov 11, 2025",
      location: "Sikkim (monasteries and households)",
      significance: "Buddha descends from heaven, prayers, lamps",
      type: "Buddhist Festival",
      featured: false,
    },
    {
      name: "Barahimizong",
      date: "Dec 9, 2025",
      location: "Sikkim (Lepcha community)",
      significance: "Prayers, dances, community feasting",
      type: "Indigenous Festival",
      featured: false,
    },
    {
      name: "Kagyed Dance",
      date: "Dec 18-19, 2025",
      location: "Rumtek, Phodong, Tshuklakhang",
      significance: "Year-end Buddhist purification dance",
      type: "Buddhist Ritual",
      featured: false,
    },
    {
      name: "Losoong/Namsoong",
      date: "Dec 20-25, 2025",
      location: "Rumtek, Phodong, Tshuklakhang",
      significance: "Sikkimese/Bhutia New Year, harvest celebration, Cham dances",
      type: "Cultural Festival",
      featured: true,
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Buddhist Festival":
      case "Buddhist Ritual":
        return "bg-primary/10 text-primary border-primary/20"
      case "Hindu Festival":
        return "bg-secondary/10 text-secondary border-secondary/20"
      case "Cultural Festival":
        return "bg-accent/10 text-accent border-accent/20"
      case "Indigenous Festival":
        return "bg-muted text-muted-foreground border-border"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  return (
    <section id="calendar" className="py-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            🎉 Sikkim Events, Festivals & Rituals Calendar (2025)
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join the spiritual celebrations and cultural festivities throughout the year. Book your participation in
            sacred rituals and traditional festivals.
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Star className="w-6 h-6 text-primary mr-2" />
            Featured Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events2025
              .filter((event) => event.featured)
              .map((event, index) => (
                <Card key={index} className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-card-foreground">{event.name}</CardTitle>
                        <CardDescription className="flex items-center space-x-2 mt-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.date}</span>
                        </CardDescription>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-md text-xs font-medium border ${getEventTypeColor(event.type)}`}
                      >
                        {event.type}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{event.location}</span>
                      </div>
                      <p className="text-sm text-card-foreground">{event.significance}</p>
                      <Button size="sm" 
                      className="w-full"
                      
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Book Participation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Events Timeline */}
        <div className="bg-card rounded-2xl p-8 border border-border/50 max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center">
            <Calendar className="w-6 h-6 text-primary mr-2" />
            Complete 2025 Calendar
          </h3>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {events2025.map((event, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-sm font-medium text-primary">{event.date.split(",")[0]}</div>
                  <div className="text-xs text-muted-foreground">{event.date.split(",")[1]}</div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{event.name}</h4>
                    <div className={`px-2 py-1 rounded-md text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{event.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground">{event.significance}</p>
                </div>

                <Button variant="outline" size="sm">
                  Details
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>View Full Interactive Calendar</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
