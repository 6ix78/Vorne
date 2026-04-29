"use client"

import { Twitter, MessageCircle } from "lucide-react"
import { AnimatedSection } from "./animated-section"

// WhatsApp icon component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.557.821-2.816 2.088-3.56 3.646-1.466 3.013-.465 6.5 1.637 8.514 1.26 1.243 3.052 2.053 5.126 2.053.575 0 1.148-.055 1.68-.159l.589.034c.086.005.17.01.251.01 1.386 0 2.699-.368 3.623-1.005l1.583-.84c1.29-.686 2.331-1.639 3.051-2.744 1.465-2.28 1.763-5.064.667-7.618-.637-1.522-1.779-2.8-3.168-3.675-2.016-1.34-4.716-1.754-7.218-.955z" />
    </svg>
  )
}

// Telegram icon component
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.368.36-.753.36-.49 0-.403-.345-.568-.61l-1.25-4.1c-.108-.32.076-.465.27-.465h3.996c.242 0 .358-.121.389-.359l.877-5.538c.046-.299.204-.376.406-.376.231 0 .36.077.405.376l.877 5.538c.031.238.147.359.389.359h3.996c.194 0 .378.145.27.465l-1.25 4.1c-.165.265-.078.61-.568.61-.385 0-.613-.22-.753-.36l-1.446-1.395-3-2.21c-.547-.31-.939-.15-1.084.509l-1.97 9.279c-.145.658-.537.818-1.084.508l-8.956-6.884c-.24-.184-.37-.449-.37-.747 0-.299.13-.563.37-.747l8.956-6.884c.547-.31.939-.15 1.084.508z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Logo only */}
        <AnimatedSection animation="fade-up">
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="VornexChain Logo"
                className="h-8 w-auto"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Footer columns */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Ecosystem */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground text-base">Ecosystem</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Stocks & ETFs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Crypto Assets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Real Estate
                  </a>
                </li>
              </ul>
            </div>

            {/* Instruments */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground text-base">Instruments</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Stocks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Bonds
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    ETFs
                  </a>
                </li>
              </ul>
            </div>

            {/* Trading */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground text-base">Trading</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/investment-plans"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Investment Plans
                  </a>
                </li>
                <li>
                  <a
                    href="/futures-trading"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Futures Trading
                  </a>
                </li>
                <li>
                  <a
                    href="/margin-trading"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Margin Trading
                  </a>
                </li>
                <li>
                  <a
                    href="/forex-trading"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Forex Trading
                  </a>
                </li>
              </ul>
            </div>

            {/* Governance */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground text-base">Governance</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    License & Regulation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Risk Disclosure
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Social icons and copyright */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-muted-foreground text-xs md:text-sm order-3 md:order-1">
                © 2026 VornexChain. All rights reserved.
              </p>

              <div className="flex items-center gap-4 order-1 md:order-2">
                <a
                  href="#"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-card"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-card"
                  aria-label="Telegram"
                >
                  <TelegramIcon className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-card"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
