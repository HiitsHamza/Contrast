"use client"

import { Line, LineChart as RechartsLineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface LineChartProps {
  data: Array<{
    date: string
    price: number
  }>
  xField: string
  yField: string
}

export function LineChart({ data, xField, yField }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data}>
        <XAxis dataKey={xField} stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₨${value}`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Date</span>
                      <span className="font-bold text-muted-foreground">{payload[0].payload.date}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Price</span>
                      <span className="font-bold">₨{payload[0].value}</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Line type="monotone" dataKey={yField} stroke="#8b5cf6" strokeWidth={2} dot={{ fill: "#8b5cf6" }} />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

