"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ForexTradingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex flex-col items-center justify-center pt-32 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/30 to-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">
              Forex <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trading</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Trade major, minor, and exotic currency pairs with real-time market data, advanced charting tools, and professional-grade execution.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.vornexchain.com/register" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Start Trading
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Button variant="outline" size="lg" className="px-8 py-6">
                Learn More
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Choose Our Forex Platform
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Real-Time Charts",
                description: "Advanced charting with technical indicators and drawing tools"
              },
              {
                icon: Zap,
                title: "Fast Execution",
                description: "Sub-millisecond order execution for optimal trading results"
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Advanced stop-loss and take-profit orders built-in"
              },
              {
                icon: TrendingUp,
                title: "24/5 Trading",
                description: "Trade major pairs 24 hours a day, 5 days a week"
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <AnimatedSection key={idx} animation="fade-up" delay={idx * 100}>
                  <div className="p-6 rounded-xl bg-secondary/40 border border-border/50">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Trade Forex?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of traders who are already profiting from the world's largest financial market.
            </p>
            <a href="https://app.vornexchain.com/register" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Open Your Account Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
