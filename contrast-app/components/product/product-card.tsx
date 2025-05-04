"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Product } from "@/lib/types"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageError, setImageError] = useState(false)
  
  console.log("Product Data:", {
    id: product.product_id,
    name: product.product_name,
    pricesArray: product.product_prices,
    firstPrice: product.product_prices?.[0],
    latestPrice: product.latest_price,
    imageUrls: product.image_urls
  })
  
  const currentPrice = product?.product_prices?.[0]?.price ?? product?.latest_price ?? 0
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PKR',
    currencyDisplay: 'narrowSymbol'
  }).format(currentPrice)

  const images = Array.isArray(product.image_urls) ? product.image_urls.filter(url => url && typeof url === 'string') : []
  const hasMultipleImages = images.length > 1

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleImageError = () => {
    console.log("Image failed to load:", images[currentImageIndex])
    setImageError(true)
  }

  if (!product) {
    return null
  }

  return (
    <Card className={cn("group overflow-hidden rounded-lg", className)}>
      <Link href={`/product/${product.product_id}`}>
        <div className="relative aspect-[3/4] overflow-hidden">
          {images.length > 0 && !imageError ? (
            <Image
              src={images[currentImageIndex]}
              alt={`${product.product_name || 'Product'} image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={handleImageError}
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <span className="text-muted-foreground text-sm">No image available</span>
            </div>
          )}
          
          {hasMultipleImages && !imageError && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full bg-white/50 transition-all",
                      currentImageIndex === index && "w-3 bg-white"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-2 group-hover:text-primary">
            {product.product_name || 'Unnamed Product'}
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            {product.stores?.store_name || 'Unknown Store'}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center justify-between w-full">
            <p className="font-medium">{formattedPrice.replace(/PKR/, '').trim()}</p>
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}
