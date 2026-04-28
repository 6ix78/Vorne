"use client"

import { TrendingUp, TrendingDown, BarChart3, DollarSign, Globe, Zap, ArrowRight, CandlestickChart } from "lucide-react"
import { Button } from "@/components/ui/button"

const tradingPairs = [
  { pair: "EUR/USD", price: "1.0847", change: "+0.12%", isUp: true },
  { pair: "GBP/USD", price: "1.2634", change: "+0.08%", isUp: true },
  { pair: "BTC/USDT", price: "67,432.50", change: "-0.23%", isUp: false },
  { pair: "ETH/USDT", price: "3,521.80", change: "+1.45%", isUp: true },
  { pair: "Gold", price: "2,341.20", change: "+0.32%", isUp: true },
  { pair: "USD/JPY", price: "154.32", change: "-0.15%", isUp: false },
]

const features = [
  {
    icon: CandlestickChart,
    title: "Advanced Charts",
    description: "Professional-grade charting with 100+ indicators",
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Lightning-fast order execution under 10ms",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description: "Access forex, crypto, and commodity markets 24/7",
  },
  {
    icon: DollarSign,
    title: "Up to 100x Leverage",
    description: "Maximize your trading potential with high leverage",
  },
]

export function VirtualTradingSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Live Trading Terminal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trade Futures &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              Forex
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access global markets with our professional trading terminal. Trade crypto futures, 
            forex pairs, and commodities with institutional-grade tools and execution.
          </p>
        </div>

        {/* Trading Terminal Preview */}
        <div className="rounded-2xl bg-card border border-border overflow-hidden mb-12">
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/30">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm font-medium text-foreground">VornexChain Trading Terminal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live
              </span>
            </div>
          </div>

          {/* Live Prices Grid */}
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {tradingPairs.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{item.pair}</span>
                    {item.isUp ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                  <div className="text-lg font-bold text-foreground">{item.price}</div>
                  <div className={`text-sm ${item.isUp ? "text-green-500" : "text-red-500"}`}>
                    {item.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="relative h-64 rounded-xl bg-secondary/20 border border-border mb-8 overflow-hidden">
              {/* Fake chart lines */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,180 Q50,160 100,140 T200,120 T300,100 T400,80 T500,90 T600,70 T700,50 T800,60 T900,40 T1000,30 L1000,256 L0,256 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0,180 Q50,160 100,140 T200,120 T300,100 T400,80 T500,90 T600,70 T700,50 T800,60 T900,40 T1000,30"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
              </svg>
              
              {/* Chart overlay info */}
              <div className="absolute top-4 left-4 flex items-center gap-4">
                <div className="px-3 py-1 rounded-lg bg-background/80 backdrop-blur-sm">
                  <span className="text-xs text-muted-foreground">BTC/USDT</span>
                  <span className="ml-2 text-sm font-bold text-foreground">67,432.50</span>
                </div>
                <div className="px-3 py-1 rounded-lg bg-green-500/20">
                  <span className="text-xs text-green-500">+2.34%</span>
                </div>
              </div>

              {/* Time indicators */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-muted-foreground">
                <span>1H</span>
                <span>4H</span>
                <span>1D</span>
                <span>1W</span>
                <span>1M</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.vornexchain.com/user/trading/futures"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 text-lg bg-gradient-to-r from-primary to-purple-400 hover:from-primary/90 hover:to-purple-400/90 text-primary-foreground rounded-xl"
                >
                  Start Trading Futures
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://app.vornexchain.com/user/trading/futures"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 text-lg border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-xl"
                >
                  Trade Forex
                  <Globe className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
