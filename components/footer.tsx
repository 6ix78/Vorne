"use client"

import { Twitter, Github, Send, Linkedin, Instagram } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection animation="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Spot Trading
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Futures
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Forex
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Staking
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Press
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
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2">
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
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    AML Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="py-8 border-t border-b border-border">
            <h4 className="font-semibold text-foreground mb-4 text-sm">Risk Disclaimer</h4>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
              Trading in financial instruments and/or cryptocurrencies involves high risks including
              the risk of losing some, or all, of your investment amount, and may not be suitable
              for all investors. Prices of cryptocurrencies are extremely volatile and may be
              affected by external factors such as financial, regulatory or political events.
              Trading on margin increases the financial risks.
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
              Before deciding to trade in financial instruments or cryptocurrencies you should be
              fully informed of the risks and costs associated with trading the financial markets,
              carefully consider your investment objectives, level of experience, and risk appetite,
              and seek professional advice where needed.
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
              VornexChain would like to remind you that the data contained in this website is not
              necessarily real-time nor accurate. The data and prices on the website are not
              necessarily provided by any market or exchange. Prices may differ from exchange
              prices and may not be accurate to real-time trading prices.
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              VornexChain does not accept any liability for any loss or damage as a result of
              reliance on the information contained within this website including data, quotes,
              charts and buy/sell signals. Please be fully informed regarding the risks and costs
              associated with trading the financial markets. It is one of the riskiest investment
              forms possible. Past performance does not guarantee future results.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="VornexChain Logo"
                className="h-8 w-auto"
              />
            </div>

            <div className="flex items-center gap-4">
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
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-card"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-card"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-card"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground text-xs md:text-sm">
              © {new Date().getFullYear()} VornexChain. All rights reserved. Licensed and regulated
              financial services provider.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
