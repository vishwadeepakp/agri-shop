"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Certifications } from "@/components/certifications"
import { AboutSection } from "@/components/about-section"
import { ProductCategories } from "@/components/product-categories"
import { LocationContact } from "@/components/location-contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Certifications />
        {/* <AboutSection /> */}
        <ProductCategories />
        <LocationContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
