"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProductSuggestion {
  id: number
  name: string
  price: string
  image: string
  url: string
  store: string
}

interface AISuggestionsGridProps {
  suggestions: ProductSuggestion[]
}

export default function AISuggestionsGrid({ suggestions }: AISuggestionsGridProps) {
  if (!suggestions || suggestions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          No product suggestions available
        </p>
      </div>
    )
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Suggested Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {suggestions.map((product, index) => (
          <motion.div
            key={`${product.id}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProductSuggestionCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ProductSuggestionCard({ product }: { product: ProductSuggestion }) {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const formattedPrice = `Rs. ${product.price}`
  return (
    <Link href={product.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-md group border border-gray-200 dark:border-gray-800 cursor-pointer">
        <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
              <div className="w-8 h-8 border-2 border-deepblue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-all duration-300 group-hover:scale-105 ${
              isImageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoadingComplete={() => setIsImageLoading(false)}
          />
          <Badge className="absolute top-2 right-2 bg-white dark:bg-black text-black dark:text-white font-medium">
            {product.store}
          </Badge>
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="font-medium text-gray-900 dark:text-white">{product.name}</h3>
          <p className="text-lg font-semibold text-deepblue-600 dark:text-deepblue-500 mt-1">
            {formattedPrice}
          </p>
          <div className="mt-auto pt-4 flex items-center justify-end">
            <span className="text-sm text-deepblue-600 hover:text-deepblue-800 dark:text-deepblue-500 dark:hover:text-deepblue-400">
              Compare Prices
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
} 