'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Archive, Search, BookOpen, ImageIcon, FileText, Zap } from "lucide-react"


export function DigitalArchiveSection() {
  const router = useRouter()

  const archiveItems = [
    {
      type: "Manuscript",
      title: "Ancient Buddhist Texts",
      description: "Rare palm leaf manuscripts from the 15th century",
      image: "/ancient-tibetan-manuscript-with-gold-text.jpg",
      count: "247 documents",
      url:"http://library.bdrc.io/?type%5B0%5D=Instance&sortBy=firstScanSyncDate_desc&uilang=en",
    },
    {
      type: "Mural",
      title: "Sacred Wall Paintings",
      description: "High-resolution scans of monastery murals",
      image: "/colorful-tibetan-buddhist-mural-painting.jpg",
      count: "156 murals",
      url: "http://artsandculture.google.com/story/buddhist-art-in-sikkim-dastkari-haat-samiti/fgUxKf4J9R7vJA?hl=en",
    },
    {
      type: "Artifact",
      title: "Religious Artifacts",
      description: "3D scanned ritual objects and sculptures",
      image: "/golden-buddhist-ritual-objects-and-statues.jpg",
      count: "89 artifacts",
      url: "https://windhorsetour.com/tibet-culture/tibet-religious-objects",
    },
  ]

  const features = [
    {
      icon: Search,
      title: "AI-Powered Search",
      description: "Find content using natural language queries and image recognition",
    },
    {
      icon: BookOpen,
      title: "Digital Preservation",
      description: "High-resolution scanning protects endangered cultural heritage",
    },
    {
      icon: Zap,
      title: "Smart Discovery",
      description: "Machine learning suggests related content and connections",
    },
  ]

  return (
    <section id="archive" className="py-20 bg-muted/30">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Digital Archive & Preservation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our vast digital collection of manuscripts, murals, and artifacts. Advanced AI search makes
            discovering cultural treasures effortless and intuitive.
          </p>
        </div>

        {/* Archive Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {archiveItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="relative overflow-hidden rounded-t-lg" style={{ top: "-24px" }}>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                  {item.type}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
                  {item.count}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{item.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button
                  variant="outline"
                  className="w-full flex items-center space-x-2 bg-transparent"
                  onClick={() => window.open(item.url, "_blank")}
                  // onClick={() => window.location.href = "http://library.bdrc.io/?type%5B0%5D=Instance&sortBy=firstScanSyncDate_desc&uilang=en"}
                  // onClick={() => router.push("/explore")}
                >
                  <Archive className="w-4 h-4" />
                  <span>Explore Collection</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-card rounded-2xl p-8 border border-border/50 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Advanced Search & Discovery</h3>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-8 flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Try AI Search</span>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1 bg-muted rounded-md px-3 py-2 text-sm text-muted-foreground">
                    "Show me manuscripts about meditation practices"
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <FileText className="w-4 h-4 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium text-sm text-foreground">Meditation Sutra Collection</div>
                      <div className="text-xs text-muted-foreground">15th century • Pemayangtse</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <ImageIcon className="w-4 h-4 text-secondary" />
                    <div className="flex-1">
                      <div className="font-medium text-sm text-foreground">Buddha in Meditation Mural</div>
                      <div className="text-xs text-muted-foreground">18th century • Rumtek</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Archive className="w-4 h-4 text-accent" />
                    <div className="flex-1">
                      <div className="font-medium text-sm text-foreground">Meditation Bell Artifact</div>
                      <div className="text-xs text-muted-foreground">16th century • Tashiding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
