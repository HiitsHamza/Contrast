"use client"

import type { PricePoint } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface PriceChartProps {
  priceHistory: {
    retrieved_on: string;
    price: number;
  }[]
  currency: string
}

export default function PriceChart({ priceHistory = [], currency }: PriceChartProps) {
  if (!priceHistory || priceHistory.length === 0) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center text-muted-foreground">
        No price history available
      </div>
    )
  }

  // Format dates for display
  const formattedData = priceHistory.map((point) => ({
    date: new Date(point.retrieved_on).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    price: point.price,
  }))

  // Calculate min and max for y-axis domain
  const prices = priceHistory.map((point) => point.price)
  const minPrice = Math.min(...prices) * 0.9
  const maxPrice = Math.max(...prices) * 1.1

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData} margin={{ top: 20, right: 10, left: 10, bottom: 20 }}>
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis
            domain={[minPrice, maxPrice]}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => formatCurrency(value, currency, false)}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Price
                        </span>
                        <span className="font-medium">
                          {formatCurrency(payload[0].value as number, currency)}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Date
                        </span>
                        <span className="font-medium">
                          {payload[0].payload.date}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="currentColor"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
