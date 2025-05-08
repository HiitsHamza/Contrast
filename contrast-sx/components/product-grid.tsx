"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ProductCard from "@/components/product-card"
import Pagination from "@/components/pagination"
import { fetchProducts } from "@/lib/product-service"
import { enhancedSearch } from "@/lib/search-service"
import type { Product } from "@/types/product"
import { Button } from "@/components/ui/button"

interface ProductGridProps {
  searchQuery?: string
}

// Define a type for filters
type Filter = string | {
  type: 'color';
  text: string;
  colors: string[];
};

export default function ProductGrid({ searchQuery }: ProductGridProps) {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const productsPerPage = 30

  // Reset to page 1 when search query or filters change
  useEffect(() => {
    setCurrentPage(1)
    // Load products immediately when search query changes
    loadProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, searchParams]) // Include searchParams to reload when filters change

  // Load products when page changes
  useEffect(() => {
    // Only reload if we're not handling a search query or filter change
    if (searchQuery) {
      return
    }
    loadProducts()
  }, [currentPage])

  // Apply filters to products
  useEffect(() => {
    if (products.length === 0) return

    // Get filter values from URL
    const brands = searchParams.get('brands')?.split(',') || []
    const minPrice = parseInt(searchParams.get('minPrice') || '0')
    const maxPrice = parseInt(searchParams.get('maxPrice') || '5000')
    const discounts = searchParams.get('discounts')?.split(',') || []
    const colors = searchParams.get('colors')?.split(',') || []

    // Apply filters to products
    let filtered = [...products]

    // Filter by brand
    if (brands.length > 0) {
      filtered = filtered.filter(product => brands.includes(product.brand))
    }

    // Filter by price range
    filtered = filtered.filter(product => {
      return product.price >= minPrice && product.price <= maxPrice
    })

    // Filter by discount
    if (discounts.length > 0) {
      filtered = filtered.filter(product => {
        // Only process products with originalPrice
        if (!product.originalPrice) return false

        // Calculate discount percentage
        const discountPercent = ((product.originalPrice - product.price) / product.originalPrice) * 100

        // Check if it meets any of the discount thresholds
        return discounts.some(discountOption => {
          const threshold = parseInt(discountOption.split('%')[0])
          return discountPercent >= threshold
        })
      })
    }

    // Filter by color - using enhanced word boundary matching
    if (colors.length > 0) {
      filtered = filtered.filter(product => {
        const productName = product.name.toLowerCase()
        
        // Check if any color matches with word boundary patterns
        return colors.some(color => {
          const colorLower = color.toLowerCase()
          
          // Different word boundary patterns
          return (
            productName.startsWith(colorLower + ' ') ||    // Starts with color
            productName.includes(' ' + colorLower + ' ') || // Has space before and after
            productName.endsWith(' ' + colorLower) ||      // Ends with color
            productName === colorLower                     // Exact match (for single word product names)
          )
        })
      })
    }

    // Update filtered products and pagination
    setFilteredProducts(filtered)
    setTotalPages(Math.ceil(filtered.length / productsPerPage))
    
    // Log diagnostic info about filters
    if (filtered.length === 0 && products.length > 0) {
      console.log('Filter returned zero products. Applied filters:', {
        brands,
        priceRange: [minPrice, maxPrice],
        discounts,
        colors,
        totalProductsBeforeFiltering: products.length
      })
    }
  }, [products, searchParams])

  const loadProducts = async () => {
    try {
      setLoading(true)
      
      // Use enhanced search with fuzzy matching if there's a search query
      if (searchQuery && searchQuery.trim()) {
        console.log("Searching for:", searchQuery)
        const searchResults = await enhancedSearch(searchQuery)
        console.log(`Found ${searchResults.length} results for "${searchQuery}"`)
        setProducts(searchResults)
        // Filtering will be applied in the useEffect hook
      } else {
        const data = await fetchProducts()
        setProducts(data)
        // Filtering will be applied in the useEffect hook
      }
    } catch (err) {
      console.error("Failed to load products:", err)
      setError("Failed to load products. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of the grid when changing page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Handle clearing color filters specifically
  const clearColorFilters = () => {
    const params = new URLSearchParams(searchParams.toString())
    if (params.has('colors')) params.delete('colors')
    window.location.href = `${window.location.pathname}?${params.toString()}`
  }

  // Handle clearing all filters
  const clearAllFilters = () => {
    const params = new URLSearchParams(searchParams.toString())
    if (params.has('colors')) params.delete('colors')
    if (params.has('brands')) params.delete('brands')
    if (params.has('minPrice')) params.delete('minPrice')
    if (params.has('maxPrice')) params.delete('maxPrice')
    if (params.has('discounts')) params.delete('discounts')
    window.location.href = `${window.location.pathname}?${params.toString()}`
  }

  // Client-side pagination on filtered products
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Get active filters for display
  const activeFilters = () => {
    const brands = searchParams.get('brands')?.split(',') || []
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const discounts = searchParams.get('discounts')?.split(',') || []
    const colors = searchParams.get('colors')?.split(',') || []
    
    const filters: Filter[] = []
    
    if (brands.length > 0) {
      filters.push(`${brands.length} brand${brands.length > 1 ? 's' : ''}`)
    }
    
    if (minPrice || maxPrice) {
      filters.push('Price range')
    }
    
    if (discounts.length > 0) {
      filters.push(`${discounts.length} discount filter${discounts.length > 1 ? 's' : ''}`)
    }
    
    if (colors.length > 0) {
      filters.push({
        type: 'color',
        text: `${colors.length} color${colors.length > 1 ? 's' : ''}`,
        colors: colors
      })
    }
    
    return filters.length > 0 ? filters : null
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl h-80"></div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 dark:text-red-400">{error}</p>
        <button 
          onClick={() => loadProducts()}
          className="mt-4 px-4 py-2 bg-deepblue-600 text-white rounded-md hover:bg-deepblue-700 transition"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          No products found{searchQuery ? ` for "${searchQuery}"` : ""}
        </p>
      </div>
    )
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
          No products match the selected filters
        </p>
        <div className="space-y-4">
          {searchQuery && (
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Your search for "{searchQuery}" {searchParams.has('colors') ? 'with color filters' : ''} did not match any products.
            </p>
          )}
          {searchParams.has('colors') && (
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                Color filters are applied to match only products that specifically mention the color in their name.
              </p>
              <Button 
                onClick={clearColorFilters}
                variant="outline"
                size="sm"
                className="mr-2"
              >
                Clear Color Filters
              </Button>
              <Button 
                onClick={clearAllFilters}
                variant="default"
                size="sm"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }

  const filters = activeFilters()

  return (
    <div>
      {/* Display active filters info */}
      {filters && (
        <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="mr-2">Filters:</span>
          {filters.map((filter, index) => 
            typeof filter === 'string' ? (
              <span key={index} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                {filter}
              </span>
            ) : filter.type === 'color' ? (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full flex items-center">
                <span>{filter.text}</span>
                <div className="flex ml-1 gap-1">
                  {filter.colors.map((color, i) => (
                    <div 
                      key={i}
                      className="w-3 h-3 rounded-full"
                      style={{ 
                        backgroundColor: color.toLowerCase(),
                        border: color.toLowerCase() === 'white' ? '1px solid #ccc' : 'none'
                      }}
                      title={color}
                    />
                  ))}
                </div>
                <button 
                  className="ml-2 text-gray-500 hover:text-red-500"
                  onClick={clearColorFilters}
                  title="Clear color filters"
                >
                  ×
                </button>
              </div>
            ) : (
              <span key={index} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                {filter.text}
              </span>
            )
          )}
          <span className="text-gray-500 ml-2">
            ({filteredProducts.length} of {products.length} products)
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Pagination component */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  )
}
