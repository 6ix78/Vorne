"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

export function TradingSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Description */}
        <AnimatedSection animation="fade-up">
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed text-pretty">
            Direct access to high-liquidity markets. Trade Stocks, Forex, and Crypto Futures with up
            to 100x leverage on our institutional matching engine.
          </p>
        </AnimatedSection>

        {/* CTA Button */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mb-8 md:mb-12">
            <a
              href="https://app.vornexchain.com/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="px-8 py-6 md:py-7 text-base md:text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all rounded-xl font-semibold shadow-lg hover:shadow-xl"
              >
                Start Investing
              </Button>
            </a>
          </div>
        </AnimatedSection>

        {/* Video with Thumbnail and Play Button */}
        <AnimatedSection animation="scale" delay={400}>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/30 border border-border group">
            {/* Video Thumbnail Background */}
            <img
              src="/images/video-thumbnail.jpg"
              alt="VornexChain Trading Demo"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

            {/* Animated Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <div className="relative">
                {/* Outer pulsing circle */}
                <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary/60 animate-pulse" />
                
                {/* Middle circle */}
                <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-primary to-accent/80 opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Play icon */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Video controls (shown only when not playing) */}
            {!isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-background/80 to-transparent">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-xs md:text-sm text-muted-foreground">0:00</span>
                  <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
