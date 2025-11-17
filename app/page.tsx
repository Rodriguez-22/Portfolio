"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import FAQ from "@/components/faq"
import CV from "@/components/cv"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio")

  const renderSection = () => {
    switch (activeSection) {
      case "inicio":
        return <Hero />
      case "experiencias":
        return <Experience />
      case "preguntas":
        return <FAQ />
      case "cv":
        return <CV />
      case "contacto":
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  )
}
