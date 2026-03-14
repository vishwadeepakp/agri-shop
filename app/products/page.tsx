"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowLeft, Sparkles } from "lucide-react"

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center bg-gradient-to-b from-secondary/30 to-background px-4 py-16">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t("comingSoon")}
          </h1>
          
          <div className="mt-6 space-y-4">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {t("comingSoonMessage")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("stayTuned")}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                {t("backToHome")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20inquire%20about%20products"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Leaf className="h-4 w-4" />
                {t("orderWhatsApp")}
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
