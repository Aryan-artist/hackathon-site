import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "Virtual Tours", href: "#tours" },
    { name: "Interactive Map", href: "#map" },
    { name: "Digital Archive", href: "#archive" },
    { name: "Cultural Calendar", href: "#calendar" },
    { name: "Transport Guide", href: "#transport" },
  ]

  const monasteries = [
    { name: "Rumtek Monastery", href: "#" },
    { name: "Pemayangtse Monastery", href: "#" },
    { name: "Tashiding Monastery", href: "#" },
    { name: "Enchey Monastery", href: "#" },
    { name: "Phodong Monastery", href: "#" },
  ]

  const resources = [
    { name: "Travel Guidelines", href: "#" },
    { name: "Photography Rules", href: "#" },
    { name: "Cultural Etiquette", href: "#" },
    { name: "Accessibility Info", href: "#" },
    { name: "FAQ", href: "#" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg text-card-foreground">Sikkim Monasteries 360°</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-pretty">
              Preserving and sharing the spiritual heritage of Sikkim's monasteries through immersive technology and
              cultural education.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Tourism Department, Government of Sikkim</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91-3592-202-xxx</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@sikkimmonasteries360.gov.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Monasteries */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Monasteries</h3>
            <ul className="space-y-3">
              {monasteries.map((monastery, index) => (
                <li key={index}>
                  <a
                    href={monastery.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {monastery.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-border mt-12 pt-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">Stay updated:</span>
              <Button variant="outline" size="sm">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground">
            © 2025 Sikkim Monasteries 360°. A Government of Sikkim Initiative. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
