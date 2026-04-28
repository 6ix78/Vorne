"use client"

import { useEffect, useState } from "react"
import { ArrowRight, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

const words = ["Bond", "Trade", "Invest", "Grow", "Earn"]

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWordIndex])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* BTC/USDT indicator */}
      <AnimatedSection animation="fade-left" delay={200}>
        <div className="absolute top-8 right-4 md:right-12 flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-lg border border-border origin-top-right animate-pulse-scale">
          <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold text-white">B</div>
          <span className="text-xs text-muted-foreground">BTC/USDT</span>
          <span className="text-xs text-red-500 flex items-center gap-0.5">
            <TrendingDown className="w-3 h-3" />
            -0.23%
          </span>
        </div>
      </AnimatedSection>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <AnimatedSection animation="fade-down" delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 rounded-full bg-secondary/50 border border-border">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs md:text-sm text-muted-foreground">The All-in-One Financial Ecosystem</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </AnimatedSection>

        {/* Heading */}
        <AnimatedSection animation="scale" delay={200}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-foreground">One Platform.</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="animate-pulse text-primary">|</span>
          </h1>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection animation="fade-up" delay={400}>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            {"Meet Xchain\u2014 VornexChain's intelligent trading engine designed to analyze markets, execute strategies, and adapt in real time."}
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            <div className="p-3 md:p-4 rounded-lg bg-secondary/30 border border-border">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">150+</div>
              <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Countries</div>
            </div>
            <div className="p-3 md:p-4 rounded-lg bg-secondary/30 border border-border">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">$10B+</div>
              <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Volume</div>
            </div>
            <div className="p-3 md:p-4 rounded-lg bg-secondary/30 border border-border">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">0%</div>
              <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Commission</div>
            </div>
            <div className="p-3 md:p-4 rounded-lg bg-secondary/30 border border-border">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">24/7</div>
              <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Support</div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={800}>
          <Button
            size="lg"
            className="w-full sm:w-auto px-6 md:px-8 py-5 md:py-6 text-base md:text-lg bg-foreground text-background hover:bg-foreground/90 rounded-full"
          >
            Start Earning
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
