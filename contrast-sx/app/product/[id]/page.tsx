"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart, ExternalLink, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PriceHistoryGraph from "@/components/price-history-graph"
import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"
import { getProductById } from "@/lib/product-service"
import type { Product } from "@/types/product"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const productId = Number.parseInt(params.id)
  
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const fetchedProduct = await getProductById(productId)
        
        if (fetchedProduct) {
          setProduct(fetchedProduct)
        } else {
          // If product not found, redirect to home
          router.push("/")
        }
      } catch (error) {
        console.error("Failed to fetch product:", error)
        router.push("/")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId, router])

  // If loading or no product found, show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-screen-xl mx-auto py-8 px-4 md:px-6">
          <div className="h-[80vh] bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
        </div>
      </div>
    )
  }

  if (!product) {
    return null
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-[#f8f9fc] dark:bg-matteblack transition-colors duration-300">
      {/* Header - Made consistent with main page */}
      <header className="px-8 py-4 flex items-center justify-between bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 relative z-10 transition-colors duration-300">
        <Link href="/" className="text-2xl font-bold tracking-tight dark:text-white">
          Contrast
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product images */}
          <div className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="relative aspect-square">
              {product.images && product.images.length > 0 && currentImageIndex < product.images.length ? (
                <Image
                  src={product.images[currentImageIndex]?.src || "/placeholder.svg"}
                  alt={product.images[currentImageIndex]?.alt || product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <span className="text-gray-500 dark:text-gray-400">No image available</span>
                </div>
              )}
            </div>

            {/* Image navigation - only show if we have multiple valid images */}
            {product.images && product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 dark:bg-black/60 flex items-center justify-center shadow-md"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 dark:bg-black/60 flex items-center justify-center shadow-md"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </button>

                {/* Thumbnail navigation */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "w-8 bg-deepblue-600" : "w-2 bg-white/60 dark:bg-gray-600"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Product info */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-deepblue-600 hover:bg-deepblue-700 text-white">{product.brand}</Badge>
                {product.inStock ? (
                  <Badge variant="outline" className="text-green-600 border-green-200 dark:border-green-900">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-red-600 border-red-200 dark:border-red-900">
                    Out of Stock
                  </Badge>
                )}
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs. {product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-500 line-through">Rs. {product.originalPrice.toFixed(2)}</span>
                  <Badge className="bg-red-500 hover:bg-red-600 text-white">-{discount}%</Badge>
                </>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h2>
              <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
            </div>

            {/* Price History Graph */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                Price History
                <span className="relative group">
                  <Info className="h-4 w-4 text-gray-500 cursor-help" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-900 text-white rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    Shows how the price has changed over time
                  </span>
                </span>
              </h2>
              {product.priceHistory.length > 0 ? (
                <>
                  <div className="h-48 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <PriceHistoryGraph priceHistory={product.priceHistory} />
                  </div>
                  
                  {product.priceHistory.length >= 2 && (
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <div>
                        <span className="font-medium">First recorded:</span>{' '}
                        Rs. {product.priceHistory[0].price.toFixed(2)} on {new Date(product.priceHistory[0].date).toLocaleDateString()}
                      </div>
                      
                      <div>
                        <span className="font-medium">Current price:</span>{' '}
                        Rs. {product.priceHistory[product.priceHistory.length - 1].price.toFixed(2)}
                      </div>
                      
                      {product.priceHistory.length > 2 && (
                        <div>
                          <span className="font-medium">Price changes:</span>{' '}
                          {product.priceHistory.length - 1} times
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="h-48 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">No price history available</p>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <Button
                className="flex-1 h-12 text-lg bg-deepblue-600 hover:bg-deepblue-700 text-white flex items-center justify-center gap-2"
                disabled={!product.inStock}
                onClick={() => window.open(product.retailerUrl, "_blank")}
              >
                <span>Visit Site</span>
                <ExternalLink className="h-5 w-5" />
              </Button>

              <button
                className={`h-12 w-12 flex items-center justify-center rounded-full transition-transform hover:scale-110 focus:outline-none ${
                  isLiked ? "bg-transparent" : "bg-transparent"
                }`}
                onClick={toggleLike}
                aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart className={`h-7 w-7 ${isLiked ? "text-red-500 fill-red-500" : "text-red-500"}`} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
