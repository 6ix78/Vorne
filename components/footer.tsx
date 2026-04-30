"use client"

import { AnimatedSection } from "./animated-section"

export function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Logo and Description */}
        <AnimatedSection animation="fade-up">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="VornexChain Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm md:text-base text-muted-foreground max-w-4xl leading-relaxed text-pretty">
              Empower your financial future with VornexChain – where cutting-edge technology meets institutional-grade trading. Access global markets with lightning-fast execution, zero commissions, and up to 100x leverage on stocks, forex, and crypto futures. Join 150,000+ traders worldwide and trade smarter, not harder.
            </p>
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

        {/* Copyright */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-xs md:text-sm">
              © 2026 VornexChain. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
