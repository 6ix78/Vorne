"use client"

import { Check, Star, Zap, Crown, Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

const plans = [
  {
    name: "Basic Plan",
    icon: Star,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/20",
    minInvestment: "$250",
    maxInvestment: "$4,999",
    dailyReturn: "2%",
    duration: "7 days",
    referral: "10%",
    totalReturn: "14%",
    popular: false,
    gradient: "from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    name: "Classic Plan",
    icon: Zap,
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
    minInvestment: "$5,000",
    maxInvestment: "$19,999",
    dailyReturn: "4%",
    duration: "10 days",
    referral: "10%",
    totalReturn: "40%",
    popular: true,
    gradient: "from-primary/20 to-pink-500/10",
    borderColor: "border-primary/30 hover:border-primary/50",
  },
  {
    name: "Bronze Plan",
    icon: Crown,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/20",
    minInvestment: "$20,000",
    maxInvestment: "$49,999",
    dailyReturn: "6%",
    duration: "15 days",
    referral: "10%",
    totalReturn: "90%",
    popular: false,
    gradient: "from-orange-500/10 to-orange-600/5",
    borderColor: "border-orange-500/20 hover:border-orange-500/40",
  },
  {
    name: "Premium Plan",
    icon: Diamond,
    iconColor: "text-accent",
    iconBg: "bg-accent/20",
    minInvestment: "$50,000",
    maxInvestment: "Unlimited",
    dailyReturn: "10%",
    duration: "20 days",
    referral: "10%",
    totalReturn: "200%",
    popular: false,
    gradient: "from-accent/20 to-cyan-500/10",
    borderColor: "border-accent/30 hover:border-accent/50",
  },
]

const features = [
  "24/7 Live Support",
  "Instant Withdrawal",
  "Xchain AI Trading",
  "Real-time Analytics",
]

export function InvestmentPlans() {
  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden" id="plans">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Diamond className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Investment Plans</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-primary via-pink-500 to-accent bg-clip-text text-transparent">
                Investment Plan
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 text-pretty">
              Start earning passive income today with our flexible investment plans powered by Xchain AI technology.
            </p>
          </div>
        </AnimatedSection>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <AnimatedSection key={plan.name} animation="fade-up" delay={index * 100}>
                <div
                  className={`relative p-5 md:p-6 rounded-2xl bg-gradient-to-b ${plan.gradient} border ${plan.borderColor} transition-all duration-300 h-full`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 rounded-full bg-gradient-to-r from-primary to-pink-500 text-[10px] md:text-xs font-semibold whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${plan.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 md:w-7 md:h-7 ${plan.iconColor}`} />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-lg md:text-xl font-bold mb-2">{plan.name}</h3>

                  {/* Investment Range */}
                  <div className="mb-4">
                    <span className="text-xl md:text-2xl font-bold">{plan.minInvestment}</span>
                    <span className="text-muted-foreground text-sm md:text-base"> - {plan.maxInvestment}</span>
                  </div>

                  {/* Daily Return */}
                  <div className="p-3 rounded-lg bg-background/50 mb-4">
                    <div className="text-xs md:text-sm text-muted-foreground">Daily Return</div>
                    <div className="text-xl md:text-2xl font-bold text-green-500">{plan.dailyReturn}</div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{plan.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-muted-foreground">Referral Bonus</span>
                      <span className="font-medium">{plan.referral}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-muted-foreground">Total ROI</span>
                      <span className="font-medium text-primary">{plan.totalReturn}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4 md:mb-6">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs md:text-sm">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Bottom Note */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center p-4 md:p-6 rounded-2xl bg-secondary/30 border border-border max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-muted-foreground mb-2">
              All plans include instant withdrawals and 24/7 live support. Your investment is managed by our Xchain AI for optimal returns.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              <span className="text-primary font-medium">Referral Program:</span> Earn 10% commission on all referral investments across all plans.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
