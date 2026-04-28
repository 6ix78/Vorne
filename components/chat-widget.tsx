"use client"

import { MessageCircle } from "lucide-react"

export function ChatWidget() {
  return (
    <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center shadow-lg shadow-accent/20 transition-colors z-50">
      <MessageCircle className="w-6 h-6" />
      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
    </button>
  )
}
