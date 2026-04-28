import { Twitter, Github, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Spot Trading</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Futures</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Forex</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Staking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <path
                  d="M20 4L4 12V28L20 36L36 28V12L20 4Z"
                  stroke="url(#footer-logo-gradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M20 12L12 16V24L20 28L28 24V16L20 12Z"
                  fill="url(#footer-logo-gradient)"
                />
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="4" y1="4" x2="36" y2="36">
                    <stop stopColor="#06b6d4" />
                    <stop offset="1" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-sm text-muted-foreground">
              © 2026 VornexChain. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
