"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

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
              href="https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              {t("orderWhatsApp")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
