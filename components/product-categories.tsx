"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wheat, Leaf, Bug } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import type { LucideIcon } from "lucide-react"

type CategoryKey = {
  titleKey: string
  descKey: string
  icon: LucideIcon
  image: string
}

const categories: CategoryKey[] = [
  {
    titleKey: "highYieldSeeds",
    descKey: "seedsDesc",
    icon: Wheat,
    image: "/images/seeds.jpg",
  },
  {
    titleKey: "organicFertilizers",
    descKey: "fertilizersDesc",
    icon: Leaf,
    image: "/images/fertilizers.jpg",
  },
  {
    titleKey: "cropProtection",
    descKey: "protectionDesc",
    icon: Bug,
    image: "/images/protection.jpg",
  },
]

export function ProductCategories() {
  const { t } = useLanguage()

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {t("ourProducts")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t("productsSubtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.titleKey} className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src={category.image}
                  alt={t(category.titleKey)}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <category.icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{t(category.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-base leading-relaxed">
                  {t(category.descKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
