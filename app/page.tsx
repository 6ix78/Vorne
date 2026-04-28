import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TradingSection } from "@/components/trading-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TradingSection />
      <FeaturesSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
