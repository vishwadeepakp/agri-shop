"use client"

import { useLanguage } from "@/lib/language-context"
import { Award, Users, Calendar } from "lucide-react"
import Galry from "./Galry"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t("aboutUs")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            {t("aboutSubtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-primary">{t("yearsServing")}</span>
            </div>
            
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {t("aboutStory")}
            </p>
            
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {t("aboutMission")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{t("established")}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{t("qualityCertified")}</span>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col items-center rounded-xl bg-card p-8 shadow-sm"> */}
            <Galry />
            {/* <h3 className="mb-6 text-xl font-semibold text-foreground">
              {t("founderSection")}
            </h3>
            
            <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 bg-secondary">
              <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-primary/40">
                <Users className="h-12 w-12" />
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-foreground">
              {t("founderName")}
            </h4>
            <p className="text-sm text-muted-foreground">
              {t("founderTitle")}
            </p>
            
            <blockquote className="mt-6 text-center text-pretty italic text-muted-foreground">
              {t("founderQuote")}
            </blockquote> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
