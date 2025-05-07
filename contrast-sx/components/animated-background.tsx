"use client"

import { useEffect, useRef } from "react"

type Dot = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  darkColor: string
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create dots
    const dots: Dot[] = []
    const dotCount = Math.floor((window.innerWidth * window.innerHeight) / 12000)

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6 + 3,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.7,
        color: Math.random() > 0.5 ? "#000000" : "#2563EB", // Light mode colors - black and deep blue
        darkColor: Math.random() > 0.5 ? "#FFFFFF" : "#3B82F6", // Dark mode colors - white and blue
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDarkMode = document.documentElement.classList.contains("dark")

      // Draw and update dots
      dots.forEach((dot) => {
        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = isDarkMode ? dot.darkColor : dot.color
        ctx.globalAlpha = 0.7
        ctx.fill()
        ctx.globalAlpha = 1.0

        // Update position
        dot.x += dot.speedX
        dot.y += dot.speedY

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.speedX *= -1
        if (dot.y < 0 || dot.y > canvas.height) dot.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ WebkitTapHighlightColor: "transparent" }}
    />
  )
}
