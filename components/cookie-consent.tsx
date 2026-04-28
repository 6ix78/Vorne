"use client"

import { useState, useEffect } from "react"
import { Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("vornexchain-cookie-consent")
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("vornexchain-cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("vornexchain-cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="relative p-4 md:p-6 rounded-2xl bg-card border border-border shadow-2xl shadow-primary/10">
          {/* Close button */}
          <button
            onClick={declineCookies}
            className="absolute top-3 right-3 md:top-4 md:right-4 p-1 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            {/* Icon */}
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 md:w-7 md:h-7 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1 pr-6 md:pr-0">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">
                Cookie Policy
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience,
                analyze site traffic, and personalize content. By clicking &quot;Accept All&quot;,
                you consent to our use of cookies. You can manage your preferences or learn more in
                our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row sm:flex-col md:flex-row gap-2 md:gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={declineCookies}
                className="flex-1 md:flex-none border-border text-muted-foreground hover:text-foreground text-xs md:text-sm"
              >
                Decline
              </Button>
              <Button
                size="sm"
                onClick={acceptCookies}
                className="flex-1 md:flex-none bg-gradient-to-r from-primary to-purple-400 hover:from-primary/90 hover:to-purple-400/90 text-primary-foreground text-xs md:text-sm"
              >
                Accept All
              </Button>
            </div>
          </div>

          {/* Cookie categories */}
          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border">
            <div className="flex flex-wrap gap-3 md:gap-4 text-[10px] md:text-xs text-muted-foreground">
              <label className="flex items-center gap-1.5 md:gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-3 h-3 md:w-4 md:h-4 rounded border-border bg-secondary accent-primary"
                />
                <span>Essential (Required)</span>
              </label>
              <label className="flex items-center gap-1.5 md:gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-3 h-3 md:w-4 md:h-4 rounded border-border bg-secondary accent-primary"
                />
                <span>Analytics</span>
              </label>
              <label className="flex items-center gap-1.5 md:gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-3 h-3 md:w-4 md:h-4 rounded border-border bg-secondary accent-primary"
                />
                <span>Marketing</span>
              </label>
              <label className="flex items-center gap-1.5 md:gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-3 h-3 md:w-4 md:h-4 rounded border-border bg-secondary accent-primary"
                />
                <span>Preferences</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
