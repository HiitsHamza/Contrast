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

    // If no price history or only one point, show a message
    if (priceHistory.length < 2) {
      ctx.fillStyle = document.documentElement.classList.contains("dark") ? "#9ca3af" : "#6b7280"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Insufficient price history data", rect.width / 2, rect.height / 2)
      return
    }

    // Extract prices and dates
    const prices = priceHistory.map((point) => point.price)
    const dates = priceHistory.map((point) => new Date(point.date))

    // Calculate min and max values
    const minPrice = Math.min(...prices) * 0.95 // Add 5% margin
    const maxPrice = Math.max(...prices) * 1.05 // Add 5% margin
    const minDate = Math.min(...dates.map((d) => d.getTime()))
    const maxDate = Math.max(...dates.map((d) => d.getTime()))

    // Calculate dimensions
    const padding = { top: 15, right: 20, bottom: 25, left: 40 }
    const graphWidth = rect.width - padding.left - padding.right
    const graphHeight = rect.height - padding.top - padding.bottom

    // Draw background
    ctx.fillStyle = document.documentElement.classList.contains("dark") ? "#1f2937" : "#f9fafb"
    ctx.fillRect(padding.left, padding.top, graphWidth, graphHeight)
    
    // Draw grid lines
    ctx.strokeStyle = document.documentElement.classList.contains("dark") ? "#374151" : "#e5e7eb"
    ctx.lineWidth = 0.5
    
    // Horizontal grid lines (5 lines)
    const priceStep = (maxPrice - minPrice) / 4
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (i / 4) * graphHeight
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(padding.left + graphWidth, y)
      ctx.stroke()
      
      // Price labels
      const price = maxPrice - (i * priceStep)
      ctx.fillStyle = document.documentElement.classList.contains("dark") ? "#9ca3af" : "#6b7280"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "right"
      ctx.textBaseline = "middle"
      ctx.fillText(`Rs. ${price.toFixed(2)}`, padding.left - 5, y)
    }
    
    // Vertical grid lines and date labels (one for each price point)
    const dateStep = graphWidth / (dates.length - 1)
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    
    // Draw date labels (only first, last, and middle to avoid overcrowding)
    const drawDateLabel = (index: number) => {
      const date = new Date(dates[index])
      const x = padding.left + index * dateStep
      ctx.fillText(
        `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substr(2,2)}`,
        x,
        rect.height - padding.bottom + 5
      )
    }
    
    if (dates.length <= 5) {
      // If few data points, show all dates
      dates.forEach((_, index) => {
        const x = padding.left + index * dateStep
        ctx.beginPath()
        ctx.moveTo(x, padding.top)
        ctx.lineTo(x, padding.top + graphHeight)
        ctx.stroke()
        drawDateLabel(index)
      })
    } else {
      // If many data points, show first, last, and some evenly spaced ones
      [0, Math.floor(dates.length / 3), Math.floor(dates.length * 2 / 3), dates.length - 1].forEach(index => {
        const x = padding.left + index * dateStep
        ctx.beginPath()
        ctx.moveTo(x, padding.top)
        ctx.lineTo(x, padding.top + graphHeight)
        ctx.stroke()
        drawDateLabel(index)
      })
    }

    // Draw price line with gradient
    const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + graphHeight)
    gradient.addColorStop(0, document.documentElement.classList.contains("dark") ? "#1d4ed8" : "#3b82f6")
    gradient.addColorStop(1, document.documentElement.classList.contains("dark") ? "#1e40af" : "#2563eb")
    
    ctx.strokeStyle = gradient
    ctx.lineWidth = 2
    ctx.beginPath()

    // Scale prices and dates to fit graph
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

    // Fill area under curve
    ctx.lineTo(padding.left + graphWidth, padding.top + graphHeight)
    ctx.lineTo(padding.left, padding.top + graphHeight)
    ctx.closePath()
    
    const fillGradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + graphHeight)
    fillGradient.addColorStop(0, document.documentElement.classList.contains("dark") ? "rgba(29, 78, 216, 0.2)" : "rgba(59, 130, 246, 0.2)")
    fillGradient.addColorStop(1, document.documentElement.classList.contains("dark") ? "rgba(30, 64, 175, 0.05)" : "rgba(37, 99, 235, 0.05)")
    ctx.fillStyle = fillGradient
    ctx.fill()

    // Draw data points
    ctx.fillStyle = document.documentElement.classList.contains("dark") ? "#60a5fa" : "#3b82f6"
    ctx.strokeStyle = document.documentElement.classList.contains("dark") ? "#1f2937" : "#ffffff"
    ctx.lineWidth = 1.5

    priceHistory.forEach((point) => {
      const x = padding.left + ((new Date(point.date).getTime() - minDate) / (maxDate - minDate)) * graphWidth
      const y = padding.top + graphHeight - ((point.price - minPrice) / (maxPrice - minPrice)) * graphHeight

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
    })

    // Add title
    ctx.fillStyle = document.documentElement.classList.contains("dark") ? "#e5e7eb" : "#1f2937"
    ctx.font = "12px sans-serif"
    ctx.textAlign = "left"
    ctx.textBaseline = "top"
    ctx.fillText("Price History", padding.left, 5)
    
    // Add price change info
    const firstPrice = priceHistory[0].price
    const lastPrice = priceHistory[priceHistory.length - 1].price
    const priceChange = lastPrice - firstPrice
    const priceChangePercent = (priceChange / firstPrice) * 100
    
    ctx.textAlign = "right"
    ctx.fillText(
      `${priceChange >= 0 ? "+" : ""}${priceChange.toFixed(2)} (${priceChangePercent.toFixed(1)}%)`,
      rect.width - padding.right,
      5
    )
    
  }, [priceHistory])

  return <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
}
