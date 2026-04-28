"use client"

import { useState } from "react"
import { Menu, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="VornexChain Logo"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Language Selector */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground hover:bg-secondary transition-colors">
            <span className="text-lg">🇺🇸</span>
            <span>English</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Products</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
