"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart, ExternalLink, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PriceHistoryGraph from "@/components/price-history-graph"
import { products } from "@/data/products"
import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  // If product not found, redirect to home
  useEffect(() => {
    if (!product) {
      router.push("/")
    }
  }, [product, router])

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
          <Button variant="ghost" size="sm" className="text-sm font-medium dark:text-gray-300">
            Sign In
          </Button>
          <Button
            size="sm"
            className="rounded-full bg-deepblue-600 text-white hover:bg-deepblue-700 dark:bg-deepblue-600 dark:text-white dark:hover:bg-deepblue-700"
          >
            Join
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product images */}
          <div className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="relative aspect-square">
              <Image
                src={product.images[currentImageIndex].src || "/placeholder.svg"}
                alt={product.images[currentImageIndex].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Image navigation */}
            {product.images.length > 1 && (
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
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
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
                <Info className="h-4 w-4 text-gray-500" />
              </h2>
              <div className="h-48 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <PriceHistoryGraph priceHistory={product.priceHistory} />
              </div>
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
