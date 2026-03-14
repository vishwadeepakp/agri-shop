"use client"

import { Leaf } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Leaf className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">vindhyavasini traders</span>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} vindhyavasini traders Seeds & Fertilizers. {t("allRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
