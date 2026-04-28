"use client"

import { Brain, Zap, TrendingUp, Shield, BarChart3, Cpu } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const features = [
  {
    icon: Cpu,
    title: "Neural Processing",
    description: "Advanced machine learning algorithms process millions of data points per second to predict market movements with unprecedented accuracy.",
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
  },
  {
    icon: Zap,
    title: "Lightning Execution",
    description: "Execute trades in microseconds. Xchain ensures you never miss an opportunity with instant order execution across all markets.",
    iconColor: "text-accent",
    iconBg: "bg-accent/20",
  },
  {
    icon: TrendingUp,
    title: "Adaptive Strategies",
    description: "Xchain learns from every trade, continuously optimizing strategies to adapt to changing market conditions in real-time.",
    iconColor: "text-green-500",
    iconBg: "bg-green-500/20",
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "24/7 monitoring of global markets including stocks, forex, crypto, and futures with comprehensive technical and fundamental analysis.",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/20",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Intelligent risk assessment protects your capital with automated stop-losses, position sizing, and portfolio diversification.",
    iconColor: "text-red-500",
    iconBg: "bg-red-500/20",
  },
  {
    icon: Brain,
    title: "Passive Income",
    description: "Let Xchain work for you. Generate consistent passive income returns while you sleep through automated intelligent trading.",
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
  },
]

export function XchainSection() {
  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Powered by AI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">
              Meet{" "}
              <span className="bg-gradient-to-r from-primary via-pink-500 to-accent bg-clip-text text-transparent">
                Xchain
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 text-pretty">
              {"Xchain is VornexChain's proprietary artificial intelligence system, designed to revolutionize how you trade and invest. Our advanced neural networks continuously analyze global markets, identify profitable opportunities, and execute strategies with precision that human traders simply can't match."}
            </p>
          </div>
        </AnimatedSection>

        {/* AI Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} animation="fade-up" delay={index * 100}>
              <div className="p-5 md:p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors h-full">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* AI Stats */}
        <AnimatedSection animation="scale" delay={400}>
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/50 to-accent/10 border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">99.7%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Uptime Reliability</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1">0.003s</div>
                <div className="text-xs md:text-sm text-muted-foreground">Avg. Execution Time</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-500 mb-1">$2.5B+</div>
                <div className="text-xs md:text-sm text-muted-foreground">AI-Managed Assets</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-1">500K+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
