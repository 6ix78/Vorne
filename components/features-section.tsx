import { Shield, Zap, BarChart3, Globe, Lock, Wallet } from "lucide-react"

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
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Choose VornexChain?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for professional traders, designed for everyone. Experience the future of decentralized finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
