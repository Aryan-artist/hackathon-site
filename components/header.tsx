"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Virtual Tours", href: "#tours" },
    { name: "Interactive Map", href: "#map" },
    { name: "Digital Archive", href: "#archive" },
    { name: "Cultural Calendar", href: "#calendar" },
    { name: "Transport", href: "#transport" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Made more compact */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">Sikkim Monasteries</span>
            <span className="font-bold text-lg text-foreground sm:hidden">SM</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-1 text-xs bg-transparent"
              onClick={() => window.open("https://play.google.com/store", "_blank")}
            >
              <Download className="w-3 h-3" />
              <span>Play</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-1 text-xs bg-transparent"
              onClick={() => window.open("https://apps.apple.com", "_blank")}
            >
              <Download className="w-3 h-3" />
              <span>App Store</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        <div
          className={cn(
            "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-border">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs bg-transparent"
                  onClick={() => window.open("https://play.google.com/store", "_blank")}
                >
                  Google Play
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs bg-transparent"
                  onClick={() => window.open("https://apps.apple.com", "_blank")}
                >
                  App Store
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
