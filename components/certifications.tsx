"use client"

import { Shield, Award, CheckCircle, BadgeCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { LucideIcon } from "lucide-react"

type CertificationKey = "isoLabel" | "govApproved" | "licenseNo" | "qualityCertified"

const certifications: { icon: LucideIcon; labelKey: CertificationKey }[] = [
  // {
  //   icon: Shield,
  //   labelKey: "isoLabel",
  // },
  {
    icon: Award,
    labelKey: "govApproved",
  },
  {
    icon: CheckCircle,
    labelKey: "licenseNo",
  },
  {
    icon: BadgeCheck,
    labelKey: "qualityCertified",
  },
]

export function Certifications() {
  const { t } = useLanguage()

  return (
    <section className="border-y bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {certifications.map((cert) => (
            <div
              key={cert.labelKey}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <cert.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{t(cert.labelKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
