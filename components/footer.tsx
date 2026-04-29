"use client"

import { AnimatedSection } from "./animated-section"

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
                    href="https://app.vornexchain.com/sectors/stocks-etfs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Stocks & ETFs
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/sectors/crypto-assets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Crypto Assets
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/sectors/real-estate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Real Estate
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/sectors/fixed-income"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Fixed Income
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/sectors/commodities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Commodities
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/sectors/businesses-startups"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Business & Startups
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/sectors/art-collectibles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Arts & Collectibles
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/sectors/gaming-esports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Gaming & Esports
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/sectors/cash-savings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Cash & Savings
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
                    href="https://app.vornexchain.com/capital-instruments/stocks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Stocks
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/capital-instruments/bonds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Bonds
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/capital-instruments/etfs"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    href="https://app.vornexchain.com/investment-plans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Investment Plans
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/trading/futures"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Futures Trading
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/trading/margin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Margin Trading
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/trading/forex"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    href="https://app.vornexchain.com/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/license"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    License & Regulation
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.vornexchain.com/risk-disclosure"
                    target="_blank"
                    rel="noopener noreferrer"
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
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-xs md:text-sm text-center">
              © 2026 VornexChain. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
