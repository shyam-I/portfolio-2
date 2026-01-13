"use client"

import { useEffect, useState } from "react"
import Starfield from "@/components/starfield"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Navigation from "@/components/navigation"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen bg-space-dark overflow-hidden">
      {/* Background */}
      <Starfield prefersReducedMotion={prefersReducedMotion} />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <Hero scrollY={scrollY} prefersReducedMotion={prefersReducedMotion} />
        <About />
        <Projects />
        <Skills />
        <Certifications />
      </div>
    </main>
  )
}
