"use client"

import { useEffect, useRef } from "react"

interface StarfieldProps {
  prefersReducedMotion: boolean
}

export default function Starfield({ prefersReducedMotion }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: Array<{
      x: number
      y: number
      baseX: number
      baseY: number
      radius: number
      opacity: number
      offset: number
    }> = []

    for (let i = 0; i < 400; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height

      stars.push({
        x,
        y,
        baseX: x,
        baseY: y,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        offset: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001

      stars.forEach((star) => {
        if (!prefersReducedMotion) {
          // Move only a tiny distance from original position
          star.x = star.baseX + Math.sin(time + star.offset) * 2
          star.y = star.baseY + Math.cos(time + star.offset) * 2
        }

        // Draw star
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        // Soft glow
        ctx.strokeStyle = `rgba(180, 220, 255, ${star.opacity * 0.3})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2)
        ctx.stroke()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{
        background:
          "linear-gradient(135deg, #0a0f23 0%, #1a1f3a 50%, #0f1428 100%)",
      }}
    />
  )
}