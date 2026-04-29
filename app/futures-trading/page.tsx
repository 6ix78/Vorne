"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import TradingDemo from "@/components/trading-demo"
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FuturesTradingPage() {
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
              Futures <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trading</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Trade futures contracts on global commodities, indices, and crypto. Access the most liquid markets with advanced derivatives trading platform.
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

      {/* Trading Demo Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <TradingDemo />
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Professional Futures Trading
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Multiple Markets",
                description: "Trade commodities, indices, forex futures, and crypto"
              },
              {
                icon: Zap,
                title: "High Liquidity",
                description: "Access the world's most liquid futures markets"
              },
              {
                icon: Shield,
                title: "Safe Trading",
                description: "Automated risk management and position monitoring"
              },
              {
                icon: TrendingUp,
                title: "24/7 Markets",
                description: "Trade around the clock with extended hours"
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
              Master the Futures Market
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Trade with professional tools and access global futures markets with VornexChain.
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
