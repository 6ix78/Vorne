import { Header } from "@/components/header"
import { InvestmentPlans } from "@/components/investment-plans"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"

export const metadata = {
  title: "Investment Plans | VornexChain",
  description: "Explore our flexible investment plans and start earning passive income with Xchain AI technology.",
}

export default function InvestmentPlansPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <InvestmentPlans />
      </div>
      <Footer />
      <CookieConsent />
    </main>
  )
}
