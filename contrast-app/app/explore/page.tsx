"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { Product } from "@/types/Product"
import { ProductCard } from "@/components/codedComponents/ProductCard"
import { SearchBar } from "@/components/codedComponents/SearchBar"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, RefreshCcw } from "lucide-react"
import PageLayout from "@/components/PageLayout"

const ExplorePage: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const productsPerPage = 12

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      setError(null)
      // For demonstration, we'll use a mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay
      const mockProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
        _id: `product-${i + 1}`,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 10000) + 1000,
        store: ["Store A", "Store B", "Store C"][Math.floor(Math.random() * 3)],
        image: `/placeholder.svg?height=300&width=300&text=Product ${i + 1}`,
        url: "#",
      }))
      const shuffledProducts = shuffleArray(mockProducts)
      setAllProducts(shuffledProducts)
      setFilteredProducts(shuffledProducts)
      setDisplayedProducts(shuffledProducts.slice(0, productsPerPage))
    } catch (err) {
      setError("Failed to fetch products. Please try again later.")
      console.error("Error fetching products:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const shuffleArray = (array: any[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const handleSearch = (searchTerm: string, priceFilter: { min: number | null; max: number | null }) => {
    const filtered = allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.store.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesPrice =
        (priceFilter.min === null || product.price >= priceFilter.min) &&
        (priceFilter.max === null || product.price <= priceFilter.max)
      return matchesSearch && matchesPrice
    })
    setFilteredProducts(filtered)
    setDisplayedProducts(filtered.slice(0, productsPerPage))
    setPage(1)
  }

  const loadMoreProducts = () => {
    const nextPage = page + 1
    const startIndex = (nextPage - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    const newProducts = filteredProducts.slice(startIndex, endIndex)
    setDisplayedProducts([...displayedProducts, ...newProducts])
    setPage(nextPage)
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Explore Products</h1>
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
          </div>
        )}
        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
            <Button variant="outline" size="sm" className="mt-2" onClick={fetchProducts}>
              <RefreshCcw className="mr-2 h-4 w-4" /> Retry
            </Button>
          </Alert>
        )}
        {!isLoading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            {displayedProducts.length < filteredProducts.length && (
              <div className="mt-8 text-center">
                <Button onClick={loadMoreProducts} className="bg-purple-500 hover:bg-purple-600 text-white">
                  Load More
                </Button>
              </div>
            )}
            {displayedProducts.length === 0 && (
              <div className="text-center mt-8 text-purple-200">No products found matching your search.</div>
            )}
          </>
        )}
      </div>
    </PageLayout>
  )
}

export default ExplorePage

