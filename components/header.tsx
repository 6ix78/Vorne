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
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <path
                d="M20 4L4 12V28L20 36L36 28V12L20 4Z"
                stroke="url(#logo-gradient)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M20 12L12 16V24L20 28L28 24V16L20 12Z"
                fill="url(#logo-gradient)"
              />
              <defs>
                <linearGradient id="logo-gradient" x1="4" y1="4" x2="36" y2="36">
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-xl font-bold">
            <span className="text-accent">Vornex</span>
            <span className="text-foreground">Chain</span>
          </span>
        </div>

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
