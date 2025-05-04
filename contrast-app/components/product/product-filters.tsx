"use client"

import { useState, useEffect } from "react"
import { Check, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import type { FilterOptions, Product, Store } from "@/lib/types"
import { categories } from "@/lib/data"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface ProductFiltersProps {
  initialFilters?: FilterOptions
  onFilterChange: (filters: FilterOptions) => void
  products: Product[]
}

export default function ProductFilters({ initialFilters = {}, onFilterChange, products }: ProductFiltersProps) {
  const [stores, setStores] = useState<Store[]>([])
  const [loadingStores, setLoadingStores] = useState(true)

  // Calculate price range
  const prices = products
    .map(p => p.latest_price || p.product_prices[0]?.price || 0)
    .filter(price => price > 0)
  const minPrice = Math.floor(Math.min(...(prices.length ? prices : [0])) / 100) * 100
  const maxPrice = Math.ceil(Math.max(...(prices.length ? prices : [5000])) / 100) * 100

  const [filters, setFilters] = useState<FilterOptions>(initialFilters)
  const [priceRange, setPriceRange] = useState<[number, number]>(
    filters.priceRange || [minPrice, maxPrice]
  )
  const [selectedBrands, setSelectedBrands] = useState<string[]>(filters.brand || [])
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(filters.category)

  // Calculate product counts per store
  const storeProductCounts = products.reduce((acc, product) => {
    const storeName = product.stores?.store_name;
    if (storeName) {
      acc[storeName] = (acc[storeName] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  // Fetch stores on component mount
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch('/api/stores')
        if (!response.ok) throw new Error('Failed to fetch stores')
        const data = await response.json()
        setStores(data)
      } catch (error) {
        console.error('Error fetching stores:', error)
      } finally {
        setLoadingStores(false)
      }
    }

    fetchStores()
  }, [])

  const handlePriceChange = (value: number[]) => {
    const range: [number, number] = [value[0], value[1]]
    setPriceRange(range)
    updateFilters({ priceRange: range })
  }

  const toggleBrand = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand]

    setSelectedBrands(newBrands)
    updateFilters({ brand: newBrands.length ? newBrands : undefined })
  }

  const selectCategory = (category: string) => {
    const newCategory = selectedCategory === category ? undefined : category
    setSelectedCategory(newCategory)
    updateFilters({ category: newCategory })
  }

  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const clearFilters = () => {
    setFilters({})
    setPriceRange([minPrice, maxPrice])
    setSelectedBrands([])
    setSelectedCategory(undefined)
    onFilterChange({})
  }

  const hasActiveFilters =
    selectedBrands.length > 0 || selectedCategory !== undefined || priceRange[0] > minPrice || priceRange[1] < maxPrice

  // Brand Filter Section
  const renderBrandFilter = () => (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
        <span className="font-medium">Brand</span>
        <ChevronDown className="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4">
        <div className="space-y-4">
          {loadingStores ? (
            // Loading skeleton
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded bg-muted animate-pulse" />
                  <div className="h-4 w-24 rounded bg-muted animate-pulse" />
                </div>
              ))}
            </div>
          ) : (
            // Actual store list
            stores.map((store) => (
              <div key={store.store_id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${store.store_name}`}
                    checked={selectedBrands.includes(store.store_name)}
                    onCheckedChange={() => toggleBrand(store.store_name)}
                  />
                  <Label
                    htmlFor={`brand-${store.store_name}`}
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {store.store_name}
                  </Label>
                </div>
                <span className="text-xs text-muted-foreground">
                  {storeProductCounts[store.store_name] || 0}
                </span>
              </div>
            ))
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Filters</h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs">
            Clear all
            <X className="ml-1 h-3 w-3" />
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {/* Price Range Filter */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <span className="font-medium">Price Range</span>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4 pb-2">
            <div className="px-2">
              <div className="relative pt-8 pb-4">
                <div className="absolute left-0 right-0 -top-2 flex justify-between">
                  <div className="relative -translate-x-1/2 transform">
                    <div className="bg-background border rounded-md px-2 py-1 text-sm font-medium shadow-sm">
                      Rs. {priceRange[0].toLocaleString()}
                    </div>
                  </div>
                  <div className="relative translate-x-1/2 transform">
                    <div className="bg-background border rounded-md px-2 py-1 text-sm font-medium shadow-sm">
                      Rs. {priceRange[1].toLocaleString()}
                    </div>
                  </div>
                </div>
                <Slider
                  defaultValue={priceRange}
                  min={minPrice}
                  max={maxPrice}
                  step={100}
                  value={priceRange}
                  onValueChange={handlePriceChange}
                  className="mt-3"
                />
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Rs. {minPrice.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground">Rs. {maxPrice.toLocaleString()}</span>
                </div>
              </div>
              {(priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handlePriceChange([minPrice, maxPrice])} 
                  className="w-full mt-2 h-8 text-xs border border-input hover:bg-accent"
                >
                  Reset Range
                </Button>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Category Filter */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <span className="font-medium">Category</span>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4 pb-2">
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Button
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className="h-8 text-xs justify-start w-full rounded-md"
                    onClick={() => selectCategory(category)}
                  >
                    {selectedCategory === category && <Check className="mr-2 h-3 w-3" />}
                    {category}
                  </Button>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Brand Filter */}
        {renderBrandFilter()}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="pt-4">
          <h3 className="text-sm font-medium mb-2">Active Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <Badge variant="outline" className="flex items-center gap-1 rounded-md">
                {selectedCategory}
                <X className="h-3 w-3 cursor-pointer" onClick={() => selectCategory(selectedCategory)} />
              </Badge>
            )}
            {selectedBrands.map((brand) => (
              <Badge key={brand} variant="outline" className="flex items-center gap-1 rounded-md">
                {brand}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleBrand(brand)} />
              </Badge>
            ))}
            {(priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
              <Badge variant="outline" className="flex items-center gap-1 rounded-md">
                Rs. {priceRange[0].toLocaleString()} - Rs. {priceRange[1].toLocaleString()}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => handlePriceChange([minPrice, maxPrice])} 
                />
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
