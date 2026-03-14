"use client"

import Link from "next/link"
import { Leaf, Globe, ChevronDown } from "lucide-react"
import { useLanguage, Language } from "@/lib/language-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
]

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  const currentLanguage = languages.find((l) => l.code === language)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">  {t("title")}</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-4 sm:gap-6">
            {/* <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("about")}
            </Link> */}
            <Link
              href="/products"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("products")}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("contact")}
            </Link>
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{currentLanguage?.label}</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? "bg-secondary" : ""}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
