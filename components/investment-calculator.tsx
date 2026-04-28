"use client"

import { useState, useMemo } from "react"
import { Calculator, DollarSign, TrendingUp, Calendar, Percent } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const plans = [
  { name: "Basic", min: 250, max: 4999, dailyReturn: 2, duration: 7 },
  { name: "Classic", min: 5000, max: 19999, dailyReturn: 4, duration: 10 },
  { name: "Bronze", min: 20000, max: 49999, dailyReturn: 6, duration: 15 },
  { name: "Premium", min: 50000, max: Infinity, dailyReturn: 10, duration: 20 },
]

export function InvestmentCalculator() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0])
  const [amount, setAmount] = useState(selectedPlan.min)

  const calculations = useMemo(() => {
    const dailyProfit = (amount * selectedPlan.dailyReturn) / 100
    const totalProfit = dailyProfit * selectedPlan.duration
    const totalReturn = amount + totalProfit
    const percentageGain = ((totalProfit / amount) * 100).toFixed(1)

    return {
      dailyProfit,
      totalProfit,
      totalReturn,
      percentageGain,
    }
  }, [amount, selectedPlan])

  const handleAmountChange = (value: string) => {
    const numValue = parseFloat(value.replace(/,/g, "")) || 0
    setAmount(numValue)

    const appropriatePlan =
      plans.find((p) => numValue >= p.min && numValue <= p.max) || plans[plans.length - 1]

    if (appropriatePlan.name !== selectedPlan.name) {
      setSelectedPlan(appropriatePlan)
    }
  }

  const handlePlanSelect = (plan: (typeof plans)[0]) => {
    setSelectedPlan(plan)
    if (amount < plan.min) {
      setAmount(plan.min)
    } else if (amount > plan.max && plan.max !== Infinity) {
      setAmount(plan.max)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Investment Calculator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Calculate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Returns
              </span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4 text-pretty">
              See exactly how much you can earn with Xchain&apos;s automated trading system. Select
              your plan and investment amount to calculate your potential returns.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Calculator Input Section */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="bg-card border border-border rounded-2xl p-5 md:p-8 h-full">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-6">
                Select Your Investment
              </h3>

              {/* Plan Selection */}
              <div className="mb-6">
                <label className="block text-sm text-muted-foreground mb-3">Choose Plan</label>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {plans.map((plan) => (
                    <button
                      key={plan.name}
                      onClick={() => handlePlanSelect(plan)}
                      className={`p-3 md:p-4 rounded-xl border transition-all duration-300 text-left ${
                        selectedPlan.name === plan.name
                          ? "bg-gradient-to-r from-primary/20 to-accent/20 border-primary/50"
                          : "bg-secondary border-border hover:border-primary/30"
                      }`}
                    >
                      <div className="text-foreground font-medium text-sm md:text-base">
                        {plan.name}
                      </div>
                      <div className="text-xs md:text-sm text-primary">{plan.dailyReturn}% daily</div>
                      <div className="text-[10px] md:text-xs text-muted-foreground mt-1">
                        {plan.max === Infinity
                          ? `$${plan.min.toLocaleString()}+`
                          : `$${plan.min.toLocaleString()} - $${plan.max.toLocaleString()}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Input */}
              <div className="mb-6">
                <label className="block text-sm text-muted-foreground mb-3">
                  Investment Amount (USD)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={amount.toLocaleString()}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    className="w-full bg-secondary border border-border rounded-xl py-3 md:py-4 pl-12 pr-4 text-foreground text-base md:text-lg font-medium focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>Min: {formatCurrency(selectedPlan.min)}</span>
                  <span>
                    Max: {selectedPlan.max === Infinity ? "Unlimited" : formatCurrency(selectedPlan.max)}
                  </span>
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div className="flex flex-wrap gap-2">
                {[1000, 5000, 10000, 25000, 50000, 100000].map((quickAmount) => (
                  <button
                    key={quickAmount}
                    onClick={() => handleAmountChange(quickAmount.toString())}
                    className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                      amount === quickAmount
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    ${quickAmount >= 1000 ? `${quickAmount / 1000}K` : quickAmount}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Results Section */}
          <AnimatedSection animation="fade-left" delay={300}>
            <div className="bg-gradient-to-br from-secondary to-card border border-border rounded-2xl p-5 md:p-8 h-full">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-6">
                Your Projected Returns
              </h3>

              <div className="space-y-3 md:space-y-4">
                {/* Daily Profit */}
                <div className="bg-background rounded-xl p-3 md:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs md:text-sm text-muted-foreground">Daily Profit</div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">
                        {selectedPlan.dailyReturn}% of investment
                      </div>
                    </div>
                  </div>
                  <div className="text-lg md:text-xl font-bold text-green-500">
                    {formatCurrency(calculations.dailyProfit)}
                  </div>
                </div>

                {/* Duration */}
                <div className="bg-background rounded-xl p-3 md:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs md:text-sm text-muted-foreground">Investment Duration</div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">
                        {selectedPlan.name} plan period
                      </div>
                    </div>
                  </div>
                  <div className="text-lg md:text-xl font-bold text-foreground">
                    {selectedPlan.duration} Days
                  </div>
                </div>

                {/* Total Profit */}
                <div className="bg-background rounded-xl p-3 md:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Percent className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-xs md:text-sm text-muted-foreground">Total Profit</div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">
                        +{calculations.percentageGain}% gain
                      </div>
                    </div>
                  </div>
                  <div className="text-lg md:text-xl font-bold text-green-500">
                    {formatCurrency(calculations.totalProfit)}
                  </div>
                </div>

                {/* Total Return */}
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-4 md:p-5 border border-primary/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs md:text-sm text-foreground">Total Return</div>
                        <div className="text-[10px] md:text-xs text-muted-foreground">Capital + Profit</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        {formatCurrency(calculations.totalReturn)}
                      </div>
                      <div className="text-[10px] md:text-xs text-green-500">
                        After {selectedPlan.duration} days
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-6 py-3 md:py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                Start Earning Now
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <p className="text-center text-[10px] md:text-xs text-muted-foreground mt-4">
                *Returns are calculated based on selected plan rates. Past performance does not
                guarantee future results.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
