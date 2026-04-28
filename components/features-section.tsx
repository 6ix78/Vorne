"use client"

import { Shield, Zap, BarChart3, Globe, Lock, Wallet } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our advanced matching engine.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your assets are protected with military-grade encryption and cold storage.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time market data and AI-powered insights to inform your decisions.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade from anywhere with support for 150+ countries worldwide.",
  },
  {
    icon: Lock,
    title: "Self-Custody",
    description: "Maintain full control of your assets with non-custodial wallet integration.",
  },
  {
    icon: Wallet,
    title: "Multi-Asset",
    description: "Trade crypto, forex, stocks, and commodities all in one place.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">
              Why Choose VornexChain?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4 text-pretty">
              Built for professional traders, designed for everyone. Experience the future of
              decentralized finance.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
