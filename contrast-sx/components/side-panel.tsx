"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, Sliders } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface FilterSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  delay?: number
}

function FilterSection({ title, children, defaultOpen = false, delay = 0 }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <motion.div
      className="border-b border-gray-200 dark:border-gray-800 py-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + delay }}
    >
      <button
        className="flex items-center justify-between w-full text-left font-medium text-gray-900 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {isOpen && <div className="mt-3">{children}</div>}
    </motion.div>
  )
}

export default function SidePanel() {
  return (
    <div className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-4 overflow-y-auto flex-shrink-0">
      <motion.div
        className="flex items-center mb-6"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Sliders className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300" />
        <h2 className="font-semibold text-gray-900 dark:text-white">Filters</h2>
      </motion.div>

      <FilterSection title="Brands" defaultOpen={true} delay={0}>
        <div className="space-y-2">
          {["Nike", "Adidas", "Zara", "H&M", "Uniqlo", "Levi's", "Gap", "Timberland"].map((brand) => (
            <div key={brand} className="flex items-center">
              <Checkbox id={`brand-${brand}`} />
              <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price Range" delay={0.1}>
        <div className="px-2">
          <Slider defaultValue={[50]} max={200} step={1} />
          <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span>$0</span>
            <span>$200+</span>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Discount" delay={0.2}>
        <div className="space-y-2">
          {["10% or more", "25% or more", "50% or more", "75% or more"].map((discount) => (
            <div key={discount} className="flex items-center">
              <Checkbox id={`discount-${discount}`} />
              <label htmlFor={`discount-${discount}`} className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {discount}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Material" delay={0.3}>
        <div className="space-y-2">
          {["Cotton", "Polyester", "Wool", "Leather", "Denim", "Linen"].map((material) => (
            <div key={material} className="flex items-center">
              <Checkbox id={`material-${material}`} />
              <label htmlFor={`material-${material}`} className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {material}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <Button className="w-full mt-4 bg-deepblue-600 hover:bg-deepblue-700 text-white">Apply Filters</Button>
      </motion.div>
    </div>
  )
}
