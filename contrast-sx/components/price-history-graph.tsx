"use client"

import { useEffect, useRef } from "react"
import type { PricePoint } from "@/components/product-card"

interface PriceHistoryGraphProps {
  priceHistory: PricePoint[]
}

export default function PriceHistoryGraph({ priceHistory }: PriceHistoryGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Extract prices and dates
    const prices = priceHistory.map((point) => point.price)
    const dates = priceHistory.map((point) => new Date(point.date))

    // Calculate min and max values
    const minPrice = Math.min(...prices) * 0.95
    const maxPrice = Math.max(...prices) * 1.05
    const minDate = Math.min(...dates.map((d) => d.getTime()))
    const maxDate = Math.max(...dates.map((d) => d.getTime()))

    // Calculate dimensions
    const padding = { top: 10, right: 10, bottom: 20, left: 30 }
    const graphWidth = rect.width - padding.left - padding.right
    const graphHeight = rect.height - padding.top - padding.bottom

    // Draw axes
    ctx.strokeStyle = "#e5e7eb" // gray-200
    ctx.lineWidth = 1

    // X-axis
    ctx.beginPath()
    ctx.moveTo(padding.left, rect.height - padding.bottom)
    ctx.lineTo(rect.width - padding.right, rect.height - padding.bottom)
    ctx.stroke()

    // Y-axis
    ctx.beginPath()
    ctx.moveTo(padding.left, padding.top)
    ctx.lineTo(padding.left, rect.height - padding.bottom)
    ctx.stroke()

    // Draw price labels
    ctx.fillStyle = document.documentElement.classList.contains("dark") ? "#9ca3af" : "#6b7280" // gray-400/500
    ctx.font = "10px sans-serif"
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"

    // Min price
    ctx.fillText(`$${minPrice.toFixed(2)}`, padding.left - 5, rect.height - padding.bottom)

    // Max price
    ctx.fillText(`$${maxPrice.toFixed(2)}`, padding.left - 5, padding.top)

    // Current price
    const currentPrice = prices[prices.length - 1]
    const currentY = padding.top + graphHeight - ((currentPrice - minPrice) / (maxPrice - minPrice)) * graphHeight
    ctx.fillText(`$${currentPrice.toFixed(2)}`, padding.left - 5, currentY)

    // Draw date labels
    ctx.textAlign = "center"
    ctx.textBaseline = "top"

    // Start date
    const startDate = new Date(minDate)
    ctx.fillText(`${startDate.getMonth() + 1}/${startDate.getDate()}`, padding.left, rect.height - padding.bottom + 5)

    // End date
    const endDate = new Date(maxDate)
    ctx.fillText(
      `${endDate.getMonth() + 1}/${endDate.getDate()}`,
      rect.width - padding.right,
      rect.height - padding.bottom + 5,
    )

    // Draw price line
    ctx.strokeStyle = document.documentElement.classList.contains("dark") ? "#3B82F6" : "#2563EB" // blue-500/600
    ctx.lineWidth = 2
    ctx.beginPath()

    priceHistory.forEach((point, index) => {
      const x = padding.left + ((new Date(point.date).getTime() - minDate) / (maxDate - minDate)) * graphWidth
      const y = padding.top + graphHeight - ((point.price - minPrice) / (maxPrice - minPrice)) * graphHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw data points
    ctx.fillStyle = document.documentElement.classList.contains("dark") ? "#3B82F6" : "#2563EB" // blue-500/600

    priceHistory.forEach((point) => {
      const x = padding.left + ((new Date(point.date).getTime() - minDate) / (maxDate - minDate)) * graphWidth
      const y = padding.top + graphHeight - ((point.price - minPrice) / (maxPrice - minPrice)) * graphHeight

      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fill()
    })
  }, [priceHistory])

  return <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
}
