"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ChevronLeft, ChevronRight, Star, Info, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import PriceHistoryGraph from "@/components/price-history-graph"

export type ProductImage = {
  src: string
  alt: string
}

export type PricePoint = {
  date: string
  price: number
}

export type Product = {
  id: number
  name: string
  brand: string
  price: number
  originalPrice?: number
  rating: number
  images: ProductImage[]
  priceHistory: PricePoint[]
  description: string
  sizes: string[]
  colors: string[]
  inStock: boolean
  tags: string[]
  retailerUrl: string
  retailerName?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [showPriceHistory, setShowPriceHistory] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  const togglePriceHistory = () => {
    setShowPriceHistory(!showPriceHistory)
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const retailerName = product.retailerName || product.brand

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-800 group"
    >
      {/* Image carousel */}
      <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {/* Current image */}
        <Image
          src={product.images[currentImageIndex].src || "/placeholder.svg"}
          alt={product.images[currentImageIndex].alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Navigation arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 dark:bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 dark:bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </>
        )}

        {/* Image indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentImageIndex ? "w-4 bg-deepblue-600" : "w-1.5 bg-white/60 dark:bg-gray-600"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Like button */}
        <button
          onClick={toggleLike}
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 dark:bg-black/60 flex items-center justify-center transition-all duration-200 hover:bg-white dark:hover:bg-gray-800"
          aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-5 w-5 ${
              isLiked ? "text-red-500 fill-red-500" : "text-gray-500 dark:text-gray-400"
            } transition-colors duration-200`}
          />
        </button>

        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-red-500 hover:bg-red-600 text-white">-{discount}%</Badge>
          </div>
        )}

        {/* Brand badge */}
        <div className="absolute bottom-2 left-2">
          <Badge variant="outline" className="bg-white/90 dark:bg-black/70 border-0 text-gray-800 dark:text-gray-200">
            {product.brand}
          </Badge>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center">
            <Star className="h-3.5 w-3.5 text-deepblue-500 fill-deepblue-500" />
            <span className="text-xs text-gray-600 dark:text-gray-300 ml-1">{product.rating}</span>
          </div>
        </div>

        {/* Price section */}
        <div className="flex items-end gap-2 mb-2">
          <span className="font-semibold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6 p-0 ml-auto" onClick={togglePriceHistory}>
                  <Info className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">Price history</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View price history</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{product.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price history graph */}
        {showPriceHistory && (
          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Price History</p>
            <div className="h-32">
              <PriceHistoryGraph priceHistory={product.priceHistory} />
            </div>
          </div>
        )}

        {/* Available colors */}
        {product.colors.length > 0 && (
          <div className="flex items-center gap-1 mt-3">
            {product.colors.map((color) => (
              <div
                key={color}
                className="h-4 w-4 rounded-full border border-gray-200 dark:border-gray-700"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        )}

        {/* Call to action - Visit Website button */}
        <Button
          className="w-full mt-3 bg-deepblue-600 hover:bg-deepblue-700 text-white flex items-center justify-center gap-2"
          disabled={!product.inStock}
          onClick={() => window.open(product.retailerUrl, "_blank")}
        >
          {product.inStock ? (
            <>
              <span>Visit {retailerName}</span>
              <ExternalLink className="h-4 w-4" />
            </>
          ) : (
            "Out of Stock"
          )}
        </Button>
      </div>
    </motion.div>
  )
}
