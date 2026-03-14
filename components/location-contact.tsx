"use client"

import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { LucideIcon } from "lucide-react"

type ContactDetail = {
  icon: LucideIcon
  labelKey: string
  valueKey?: string
  value?: string
}

const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    labelKey: "address",
    valueKey: "addressValue",
  },
  {
    icon: Clock,
    labelKey: "openingHours",
    valueKey: "hoursValue",
  },
  {
    icon: Phone,
    labelKey: "phone",
    value: "+91 9838071502",
  },
  {
    icon: Mail,
    labelKey: "email",
    value: "vishwadeepak.pandey@gmail.com",
  },
]

export function LocationContact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {t("visitStore")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t("visitSubtitle")}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {contactDetails.map((detail) => (
              <div key={detail.labelKey} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <detail.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t(detail.labelKey)}</p>
                  <p className="text-muted-foreground">
                    {detail.valueKey ? t(detail.valueKey) : detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border bg-muted">
            <div className="relative aspect-[4/3] w-full">
              <button style={{ position: "absolute", zIndex: "9999", background: "#1a73e8", margin: "10px", padding: "10px", color: "var(--primary-foreground)", right: "10px" }}>
                <a
                  href="https://maps.app.goo.gl/DhJYKJn5GJbKzELw8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open
                </a>
              </button>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.3777990921512!2d79.44212897498907!3d25.98843877721021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d7f1efb8be707%3A0x7804b15aca24cb7f!2sVindhywasini%20Traders!5e0!3m2!1sen!2sin!4v1773500786797!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Store Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
