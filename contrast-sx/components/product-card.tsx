"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/types/product"
import { useWishlist } from '@/lib/wishlist-context'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  onWishlistToggle?: () => void
  isInWishlist?: boolean
}

export type ProductImage = {
  src: string
  alt: string
}

export type PricePoint = {
  date: string
  price: number
}

export default function ProductCard({ product, onWishlistToggle, isInWishlist: propIsInWishlist }: ProductCardProps) {
  const { user } = useAuth()
  const { addItem, removeItem, isItemInWishlist } = useWishlist()
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [progress, setProgress] = useState(0)
  const progressInterval = useRef<NodeJS.Timeout | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Use the passed isInWishlist prop if available, otherwise check the wishlist context
  const isInWishlist = propIsInWishlist !== undefined ? propIsInWishlist : isItemInWishlist(product.id)

  // Handle hover state
  const handleMouseEnter = () => {
    setIsHovering(true)
    setProgress(0)

    // Clear any existing intervals
    if (progressInterval.current) {
      clearInterval(progressInterval.current)
    }

    // Start progress animation
    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // When progress reaches 100%, switch to next image
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
          // Reset progress
          return 0
        }
        return prev + 2 // Increment by 2% each time for smooth animation
      })
    }, 50) // Update every 50ms
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setProgress(0)

    // Clear interval when mouse leaves
    if (progressInterval.current) {
      clearInterval(progressInterval.current)
      progressInterval.current = null
    }
  }

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
    }
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click
    
    if (!user) {
      // Redirect to sign in if not authenticated
      console.log('User not authenticated, redirecting to signin');
      router.push('/signin');
      return;
    }

    console.log('Toggling wishlist for product:', product.id, isInWishlist ? 'remove' : 'add');
    
    try {
      if (onWishlistToggle) {
        onWishlistToggle();
      } else {
        if (isInWishlist) {
          console.log('Removing from wishlist:', product.id);
          removeItem(product.id);
        } else {
          console.log('Adding to wishlist:', product.id);
          
          // Create a simplified version of the product for storage
          const productToSave = {
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            // Only include originalPrice if it's defined
            ...(product.originalPrice ? { originalPrice: product.originalPrice } : {}),
            imageUrl: product.imageUrl || (product.images && product.images.length > 0 ? product.images[0].src : '/placeholder.svg')
          };
          
          addItem(product.id, productToSave);
        }
      }
    } catch (error) {
      console.error('Error handling wishlist toggle:', error);
    }
  };

  const handleCardClick = () => {
    router.push(`/product/${product.id}`)
  }

  const discountPercent = product.discount || 
    (product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-800 group cursor-pointer relative"
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Progress bar */}
      {isHovering && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-10">
          <div
            className="h-full bg-deepblue-600 transition-all duration-50 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Image carousel */}
      <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {/* Current image */}
        {product.images && product.images.length > 0 && currentImageIndex < product.images.length ? (
          <Image
            src={product.images[currentImageIndex]?.src || "/placeholder.svg"}
            alt={product.images[currentImageIndex]?.alt || product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">No image available</span>
          </div>
        )}

        {/* Navigation arrows */}
        {product.images && product.images.length > 1 && (
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
        {product.images && product.images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex(index)
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentImageIndex ? "w-4 bg-deepblue-600" : "w-1.5 bg-white/60 dark:bg-gray-600"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={cn(
              "h-5 w-5 transition-colors duration-300", 
              isInWishlist ? "text-red-500 fill-red-500" : "text-gray-600 dark:text-gray-300"
            )} 
          />
        </button>

        {/* Brand badge */}
        <div className="absolute bottom-2 left-2">
          <Badge variant="outline" className="bg-white/90 dark:bg-black/70 border-0 text-gray-800 dark:text-gray-200">
            {product.brand}
          </Badge>
        </div>

        {/* Discount tag */}
        {discountPercent > 0 && (
          <Badge 
            className="absolute bottom-3 left-3 bg-red-500 hover:bg-red-600 text-white font-medium"
          >
            -{discountPercent}%
          </Badge>
        )}
      </div>

      {/* Product info - Simplified */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base line-clamp-1 mb-1">
          {product.name}
        </h3>

        {/* Price section - Simplified */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900 dark:text-white">Rs. {product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">Rs. {product.originalPrice.toFixed(2)}</span>
          )}
          {discountPercent > 0 && <span className="text-xs text-red-500 font-medium">-{discountPercent}%</span>}
        </div>
      </div>
    </motion.div>
  )
}
