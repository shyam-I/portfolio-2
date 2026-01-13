"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"




interface HeroProps {
  scrollY: number
  prefersReducedMotion: boolean
}

export default function Hero({ scrollY, prefersReducedMotion }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.5

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating planets */}
        <div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/10 blur-3xl"
          style={{
            top: "10%",
            left: "10%",
            transform: prefersReducedMotion ? "none" : `translateY(${parallaxOffset * 0.3}px)`,
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/15 to-blue-500/5 blur-3xl"
          style={{
            bottom: "10%",
            right: "10%",
            transform: prefersReducedMotion ? "none" : `translateY(${-parallaxOffset * 0.2}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Profile Picture Area */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Glowing border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-space-dark flex items-center justify-center overflow-hidden">
                <Image
  src="\shyam.jpeg"
  alt="Shyam"
  fill
  className="object-cover rounded-full"
/>

              </div>
            </div>

            {/* Orbiting elements */}
            {!prefersReducedMotion && (
              <>
                <div
                  className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin"
                  style={{ animationDuration: "20s" }}
                />
                <div
                  className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin"
                  style={{ animationDuration: "30s", animationDirection: "reverse" }}
                />
              </>
            )}
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
          Welcome to My Portfolio
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Turning ideas into powerful and secure digital experiences with modern technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      {!prefersReducedMotion && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  )
}
