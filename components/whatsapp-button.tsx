"use client"

import { MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9838071502?text=नमस्ते%2C%20मैं%20उत्पादों%20के%20बारे%20में%20पूछताछ%20करना%20चाहता%20हूँ"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  )
}
