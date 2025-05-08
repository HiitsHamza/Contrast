"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Sliders } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

// Define filter interface
export interface ProductFilters {
  brands: string[];
  priceRange: [number, number];
  discounts: string[];
  colors: string[];
}

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
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // State for available brands (fetch from database)
  const [availableBrands, setAvailableBrands] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  
  // State for active filters
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  // Common colors for filter
  const availableColors = [
    "Black", "White", "Red", "Blue", "Green", 
    "Yellow", "Orange", "Purple", "Pink", "Brown", 
    "Gray", "Navy", "Beige", "Teal", "Olive"
  ]

  // Load existing filter parameters from URL
  useEffect(() => {
    const brands = searchParams.get('brands')?.split(',') || []
    const minPrice = parseInt(searchParams.get('minPrice') || '0')
    const maxPrice = parseInt(searchParams.get('maxPrice') || '5000')
    const discounts = searchParams.get('discounts')?.split(',') || []
    const colors = searchParams.get('colors')?.split(',') || []
    
    setSelectedBrands(brands)
    setPriceRange([minPrice, maxPrice])
    setSelectedDiscounts(discounts)
    setSelectedColors(colors)
  }, [searchParams])

  // Fetch brands from database
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('/api/stores')
        if (response.ok) {
          const data = await response.json()
          // Extract store names and sort alphabetically
          const brands = data.map((store: any) => store.store_name).sort()
          setAvailableBrands(brands)
        } else {
          console.error('Failed to fetch brands')
          // Use placeholder data if fetch fails
          setAvailableBrands(["Nike", "Adidas", "Zara", "H&M", "Uniqlo", "Levi's", "Gap", "Timberland"])
        }
      } catch (error) {
        console.error('Error fetching brands:', error)
        // Use placeholder data on error
        setAvailableBrands(["Nike", "Adidas", "Zara", "H&M", "Uniqlo", "Levi's", "Gap", "Timberland"])
      } finally {
        setLoading(false)
      }
    }
    
    fetchBrands()
  }, [])

  // Toggle brand selection
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    )
  }

  // Toggle discount selection
  const toggleDiscount = (discount: string) => {
    setSelectedDiscounts(prev => 
      prev.includes(discount)
        ? prev.filter(d => d !== discount)
        : [...prev, discount]
    )
  }

  // Toggle color selection
  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color) 
        : [...prev, color]
    )
  }

  // Apply all filters
  const applyFilters = () => {
    // Get current search query
    const query = searchParams.get('query') || ''
    
    // Build the new URL with filters
    const params = new URLSearchParams()
    
    // Keep search query if exists
    if (query) {
      params.set('query', query)
    }
    
    // Add brand filters
    if (selectedBrands.length > 0) {
      params.set('brands', selectedBrands.join(','))
    }
    
    // Add price range
    if (priceRange[0] > 0) {
      params.set('minPrice', priceRange[0].toString())
    }
    if (priceRange[1] < 5000) {
      params.set('maxPrice', priceRange[1].toString())
    }
    
    // Add discount filters
    if (selectedDiscounts.length > 0) {
      params.set('discounts', selectedDiscounts.join(','))
    }
    
    // Add color filters
    if (selectedColors.length > 0) {
      params.set('colors', selectedColors.join(','))
    }
    
    // Navigate with filters
    router.push(`${pathname}?${params.toString()}`)
  }

  // Reset all filters
  const resetFilters = () => {
    setSelectedBrands([])
    setPriceRange([0, 5000])
    setSelectedDiscounts([])
    setSelectedColors([])
    
    // Navigate without filters, but keep search query if exists
    const query = searchParams.get('query')
    const params = new URLSearchParams()
    if (query) {
      params.set('query', query)
    }
    router.push(`${pathname}${query ? `?${params.toString()}` : ''}`)
  }

  // Format price for display
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`
  }

  return (
    <div className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-4 overflow-y-auto flex-shrink-0">
      <motion.div
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex items-center">
          <Sliders className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300" />
          <h2 className="font-semibold text-gray-900 dark:text-white">Filters</h2>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={resetFilters}
          className="text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Reset
        </Button>
      </motion.div>

      <FilterSection title="Brands" defaultOpen={true} delay={0}>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {loading ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">Loading brands...</p>
          ) : (
            availableBrands.map((brand) => (
              <div key={brand} className="flex items-center">
                <Checkbox 
                  id={`brand-${brand}`} 
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => toggleBrand(brand)}
                />
                <label 
                  htmlFor={`brand-${brand}`} 
                  className="ml-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
                >
                  {brand}
                </label>
              </div>
            ))
          )}
        </div>
      </FilterSection>

      <FilterSection title="Price Range" delay={0.1}>
        <div className="px-2">
          <Slider 
            value={[priceRange[0], priceRange[1]]} 
            min={0} 
            max={5000} 
            step={100}
            onValueChange={(value) => setPriceRange([value[0], value[1]])}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Discount" delay={0.2}>
        <div className="space-y-2">
          {["10% or more", "25% or more", "50% or more", "75% or more"].map((discount) => (
            <div key={discount} className="flex items-center">
              <Checkbox 
                id={`discount-${discount}`} 
                checked={selectedDiscounts.includes(discount)}
                onCheckedChange={() => toggleDiscount(discount)}
              />
              <label 
                htmlFor={`discount-${discount}`} 
                className="ml-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
              >
                {discount}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Colors" delay={0.3}>
        <div className="space-y-2">
          {availableColors.map((color) => (
            <div key={color} className="flex items-center">
              <Checkbox 
                id={`color-${color}`} 
                checked={selectedColors.includes(color)}
                onCheckedChange={() => toggleColor(color)}
              />
              <label 
                htmlFor={`color-${color}`} 
                className="ml-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer flex items-center"
              >
                <div 
                  className="w-3 h-3 rounded-full mr-1.5" 
                  style={{ 
                    backgroundColor: color.toLowerCase(),
                    border: color.toLowerCase() === 'white' ? '1px solid #ccc' : 'none'
                  }}
                ></div>
                {color}
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
        <Button 
          onClick={applyFilters}
          className="w-full mt-4 bg-deepblue-600 hover:bg-deepblue-700 text-white"
        >
          Apply Filters
        </Button>
      </motion.div>
    </div>
  )
}
