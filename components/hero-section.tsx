"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { FaWhatsapp } from "react-icons/fa"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {t("heroTitle")}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          {t("heroSubtitle")}
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90"
          >
            <a
              href="https://wa.me/9838071502?text=नमस्ते%2C%20मैं%20उत्पादों%20के%20बारे%20में%20पूछताछ%20करना%20चाहता%20हूँ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-8 w-8" />
              {t("orderWhatsApp")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
