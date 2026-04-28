"use client"

import { Check, Star, Zap, Crown, Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  "Xchain⌁ AI Trading",
  "Real-time Analytics",
]

export function InvestmentPlans() {
  return (
    <section className="relative py-20 px-4 overflow-hidden" id="plans">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <Diamond className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Investment Plans</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary via-pink-500 to-accent bg-clip-text text-transparent">
              Investment Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start earning passive income today with our flexible investment plans powered by Xchain⌁ AI technology.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative p-6 rounded-2xl bg-gradient-to-b ${plan.gradient} border ${plan.borderColor} transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-pink-500 text-xs font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${plan.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${plan.iconColor}`} />
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

                {/* Investment Range */}
                <div className="mb-4">
                  <span className="text-2xl font-bold">{plan.minInvestment}</span>
                  <span className="text-muted-foreground"> - {plan.maxInvestment}</span>
                </div>

                {/* Daily Return */}
                <div className="p-3 rounded-lg bg-background/50 mb-4">
                  <div className="text-sm text-muted-foreground">Daily Return</div>
                  <div className="text-2xl font-bold text-green-500">{plan.dailyReturn}</div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{plan.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Referral Bonus</span>
                    <span className="font-medium">{plan.referral}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total ROI</span>
                    <span className="font-medium text-primary">{plan.totalReturn}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
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
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center p-6 rounded-2xl bg-secondary/30 border border-border max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-2">
            All plans include instant withdrawals and 24/7 live support. Your investment is managed by our Xchain⌁ AI for optimal returns.
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-medium">Referral Program:</span> Earn 10% commission on all referral investments across all plans.
          </p>
        </div>
      </div>
    </section>
  )
}
