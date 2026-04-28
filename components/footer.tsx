"use client"

import { Twitter, Linkedin, Instagram, Send, Github } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Main footer content */}
      <div className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Top section - Logo and tagline */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="mb-12 md:mb-16">
              <img
                src="/images/logo.png"
                alt="VornexChain Logo"
                className="h-8 md:h-10 w-auto mb-6"
              />
              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                We combine advanced AI with market intelligence to redefine how investments are managed. Powered by Xchain, our platform executes data-driven trading strategies designed for efficiency, speed, and adaptability in dynamic markets.
              </p>
            </div>
          </AnimatedSection>

          {/* Links grid */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
              <div>
                <h4 className="font-semibold mb-4 text-foreground text-sm uppercase tracking-wider">Products</h4>
                <ul className="space-y-3">
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
                <h4 className="font-semibold mb-4 text-foreground text-sm uppercase tracking-wider">Resources</h4>
                <ul className="space-y-3">
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
                <h4 className="font-semibold mb-4 text-foreground text-sm uppercase tracking-wider">Company</h4>
                <ul className="space-y-3">
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
                <h4 className="font-semibold mb-4 text-foreground text-sm uppercase tracking-wider">Legal</h4>
                <ul className="space-y-3">
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

          {/* Bottom divider and social links */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="pt-8 md:pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground text-xs md:text-sm">
                  © {new Date().getFullYear()} VornexChain. All rights reserved. Licensed and regulated financial services provider.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="p-2.5 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all rounded-lg"
                  aria-label="Twitter"
                  title="Follow on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all rounded-lg"
                  aria-label="LinkedIn"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all rounded-lg"
                  aria-label="Instagram"
                  title="Follow on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all rounded-lg"
                  aria-label="Telegram"
                  title="Join on Telegram"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all rounded-lg"
                  aria-label="GitHub"
                  title="Follow on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </footer>
  )
}
