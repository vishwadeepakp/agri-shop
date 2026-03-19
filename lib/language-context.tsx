"use client"

import { title } from "process"
import { createContext, useContext, useState, ReactNode } from "react"

export type Language = "en" | "hi"

type Translations = {
  [key: string]: {
    en: string
    hi: string
  }
}

export const translations: Translations = {
  // Header
  contact: { en: "Contact", hi: "संपर्क" },
  title: { en: "Vindhywasini traders", hi: "विन्ध्यवासिनी ट्रेडर्स" },
  about: { en: "About", hi: "हमारे बारे में" },
  products: { en: "Products", hi: "उत्पाद" },

  // About Section
  aboutUs: { en: "About Us", hi: "हमारे बारे में" },
  aboutSubtitle: {
    en: "Serving farmers with dedication since 2002",
    hi: "2002 से किसानों की समर्पित सेवा में"
  },
  aboutStory: {
    en: "For over 24 years, Vindhywasini traders has been the trusted partner for farmers across the region. What started as a small family-owned shop has grown into a reliable source of premium agricultural supplies. Our commitment to quality and genuine products has earned us the trust of thousands of farming families.",
    hi: "24 से अधिक वर्षों से, Vindhywasini traders क्षेत्र भर के किसानों के लिए एक विश्वसनीय साथी रहा है। जो एक छोटी पारिवारिक दुकान के रूप में शुरू हुआ था, वह अब प्रीमियम कृषि आपूर्ति का एक विश्वसनीय स्रोत बन गया है। गुणवत्ता और असली उत्पादों के प्रति हमारी प्रतिबद्धता ने हमें हजारों किसान परिवारों का विश्वास दिलाया है।"
  },
  aboutMission: {
    en: "Our mission is simple: to provide farmers with the best seeds, fertilizers, and crop protection products at fair prices. We believe that when farmers succeed, our community thrives.",
    hi: "हमारा मिशन सरल है: किसानों को उचित मूल्य पर सर्वोत्तम बीज, उर्वरक और फसल सुरक्षा उत्पाद प्रदान करना। हमारा मानना है कि जब किसान सफल होते हैं, तो हमारा समुदाय फलता-फूलता है।"
  },
  established: { en: "Established 2002", hi: "स्थापित 2002" },
  yearsServing: { en: "24+ Years Serving Farmers", hi: "24+ वर्षों से किसानों की सेवा" },
  founderSection: { en: "Meet Our Founder", hi: "हमारे संस्थापक से मिलें" },
  founderName: { en: "[Founder Name]", hi: "[संस्थापक का नाम]" },
  founderTitle: { en: "Founder & Managing Director", hi: "संस्थापक और प्रबंध निदेशक" },
  founderQuote: {
    en: "\"Every seed we sell carries our promise of quality. We treat every farmer like family.\"",
    hi: "\"हमारा हर बीज गुणवत्ता का वादा है। हम हर किसान को परिवार की तरह मानते हैं।\""
  },

  // Products Coming Soon
  comingSoon: { en: "Coming Soon", hi: "जल्द आ रहा है" },
  comingSoonMessage: {
    en: "We will soon update our full list of premium seeds and fertilizers here.",
    hi: "हम जल्द ही अपने बेहतरीन बीजों और खाद की पूरी लिस्ट यहाँ अपडेट करेंगे।"
  },
  stayTuned: {
    en: "Stay tuned for our complete product catalog!",
    hi: "हमारी पूरी उत्पाद सूची के लिए बने रहें!"
  },
  backToHome: { en: "Back to Home", hi: "होम पेज पर वापस जाएं" },

  // Hero
  heroTitle: {
    en: "Premium Seeds & Fertilizers for Your Best Harvest",
    hi: "आपकी सर्वश्रेष्ठ फसल के लिए प्रीमियम बीज और उर्वरक"
  },
  heroSubtitle: {
    en: "Trusted by thousands of farmers across the region. Quality products that help your crops thrive season after season.",
    hi: "क्षेत्र भर के हजारों किसानों द्वारा विश्वसनीय। गुणवत्ता वाले उत्पाद जो आपकी फसलों को हर मौसम में फलने-फूलने में मदद करते हैं।"
  },
  orderWhatsApp: { en: "Order on WhatsApp", hi: "व्हाट्सएप पर ऑर्डर करें" },

  // Certifications
  isoLabel: { en: "ISO 9001:2015", hi: "ISO 9001:2015" },
  govApproved: { en: "Government Approved", hi: "सरकार द्वारा अनुमोदित" },
  licenseNo: { en: "Licensed", hi: "लाइसेंस" },
  qualityCertified: { en: "Quality Certified", hi: "गुणवत्ता प्रमाणित" },

  // Product Categories
  ourProducts: { en: "Our Product Range", hi: "हमारे उत्पाद" },
  productsSubtitle: {
    en: "Everything you need for successful farming, all in one place",
    hi: "सफल खेती के लिए आपको जो कुछ भी चाहिए, सब एक ही जगह पर"
  },
  highYieldSeeds: { en: "High-Yield Seeds", hi: "उच्च उपज बीज" },
  seedsDesc: {
    en: "Premium quality seeds carefully selected for maximum yield. Includes wheat, rice, corn, and vegetable seeds with high germination rates.",
    hi: "अधिकतम उपज के लिए सावधानीपूर्वक चुने गए प्रीमियम गुणवत्ता वाले बीज। उच्च अंकुरण दर वाले गेहूं, चावल, मक्का और सब्जी के बीज शामिल हैं।"
  },
  organicFertilizers: { en: "Organic Fertilizers", hi: "जैविक उर्वरक" },
  fertilizersDesc: {
    en: "Natural and organic fertilizers that enrich your soil. Our range includes compost, vermicompost, and bio-fertilizers for sustainable farming.",
    hi: "प्राकृतिक और जैविक उर्वरक जो आपकी मिट्टी को समृद्ध करते हैं। हमारी श्रेणी में टिकाऊ खेती के लिए कम्पोस्ट, वर्मीकम्पोस्ट और जैव-उर्वरक शामिल हैं।"
  },
  cropProtection: { en: "Crop Protection", hi: "फसल सुरक्षा" },
  protectionDesc: {
    en: "Effective solutions to protect your crops from pests and diseases. Safe, approved pesticides and fungicides for healthy harvests.",
    hi: "कीटों और बीमारियों से अपनी फसलों की रक्षा के लिए प्रभावी समाधान। स्वस्थ फसल के लिए सुरक्षित, अनुमोदित कीटनाशक और फफूंदनाशक।"
  },

  // Location & Contact
  visitStore: { en: "Visit Our Store", hi: "हमारी दुकान पर आएं" },
  visitSubtitle: {
    en: "Drop by our shop or reach out to us directly",
    hi: "हमारी दुकान पर आएं या सीधे हमसे संपर्क करें"
  },
  address: { en: "Address", hi: "पता" },
  addressValue: {
    en: "Vindhywasini traders opp suhag mahal Koach road patakpura Orai Jalaun Uttar Pradesh 285001",
    hi: "विन्ध्यवासिनी ट्रेडर्स, सुहाग महल के सामने, कोच रोड, पटकपुरा, उरई, जालौन, उत्तर प्रदेश - 285001"
  },
  openingHours: { en: "Opening Hours", hi: "खुलने का समय" },
  hoursValue: {
    en: "Daily: 8:00 AM - 8:00 PM",
    hi: "प्रतिदिन: सुबह 8:00 - रात 8:00"
  },
  phone: { en: "Phone", hi: "फोन" },
  email: { en: "Email", hi: "ईमेल" },

  // Footer
  allRights: { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" },

  // Language
  language: { en: "English", hi: "हिंदी" },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("hi")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
