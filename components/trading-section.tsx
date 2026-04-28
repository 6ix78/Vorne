"use client"

import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TradingSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          Direct access to high-liquidity markets. Trade Stocks, Forex, and
          Crypto Futures with up to 100x leverage on our institutional
          matching engine.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 mb-12">
          <Button
            size="lg"
            className="w-full py-6 text-lg bg-gradient-to-r from-primary to-purple-400 hover:from-primary/90 hover:to-purple-400/90 text-primary-foreground rounded-xl"
          >
            Launch Terminal - Futures
            <Zap className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full py-6 text-lg border-border bg-secondary/50 text-foreground hover:bg-secondary rounded-xl"
          >
            Launch Terminal - Forex
          </Button>
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/30 border border-border">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          {/* Video controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">0:00</span>
              <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
                <div className="w-0 h-full bg-primary rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 text-muted-foreground hover:text-foreground">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 9v6h4l5 5V4L9 9H5zm13.54.12a1 1 0 00-1.41 1.42 3 3 0 010 4.24 1 1 0 001.41 1.41 5 5 0 000-7.07z" />
                  </svg>
                </button>
                <button className="p-1 text-muted-foreground hover:text-foreground">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4v16l13-8L7 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
