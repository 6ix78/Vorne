"use client"

import { Brain, Zap, TrendingUp, Shield, BarChart3, Cpu } from "lucide-react"

export function XchainSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Powered by AI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet{" "}
            <span className="bg-gradient-to-r from-primary via-pink-500 to-accent bg-clip-text text-transparent">
              Xchain⌁
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"Xchain⌁ is VornexChain's proprietary artificial intelligence system, designed to revolutionize how you trade and invest. Our advanced neural networks continuously analyze global markets, identify profitable opportunities, and execute strategies with precision that human traders simply can't match."}
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Neural Processing</h3>
            <p className="text-muted-foreground">
              Advanced machine learning algorithms process millions of data points per second to predict market movements with unprecedented accuracy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Execution</h3>
            <p className="text-muted-foreground">
              Execute trades in microseconds. Xchain⌁ ensures you never miss an opportunity with instant order execution across all markets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Adaptive Strategies</h3>
            <p className="text-muted-foreground">
              {"Xchain⌁ learns from every trade, continuously optimizing strategies to adapt to changing market conditions in real-time."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
            <p className="text-muted-foreground">
              24/7 monitoring of global markets including stocks, forex, crypto, and futures with comprehensive technical and fundamental analysis.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
            <p className="text-muted-foreground">
              Intelligent risk assessment protects your capital with automated stop-losses, position sizing, and portfolio diversification.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Passive Income</h3>
            <p className="text-muted-foreground">
              Let Xchain⌁ work for you. Generate consistent passive income returns while you sleep through automated intelligent trading.
            </p>
          </div>
        </div>

        {/* AI Stats */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/50 to-accent/10 border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">99.7%</div>
              <div className="text-sm text-muted-foreground">Uptime Reliability</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">0.003s</div>
              <div className="text-sm text-muted-foreground">Avg. Execution Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-1">$2.5B+</div>
              <div className="text-sm text-muted-foreground">AI-Managed Assets</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">500K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
