"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Heart, Share2, ShoppingBag, ExternalLink, AlertCircle } from "lucide-react"
import { fetchProduct, fetchProducts } from "@/lib/api"
import { formatCurrency } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import PriceChart from "@/components/product/price-chart"
import ProductGrid from "@/components/product/product-grid"
import { Skeleton } from "@/components/ui/skeleton"
import { useTheme } from "next-themes"
import { formatDistanceToNow, format } from "date-fns"
import { cn } from "@/lib/utils"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [similarProducts, setSimilarProducts] = useState<any[]>([])
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const [selectedImage, setSelectedImage] = useState<string>("")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    async function loadProduct() {
      if (!params) return;
      
      try {
        setLoading(true)
        const id = await Promise.resolve(params.id)
        const data = await fetchProduct(id)
        setProduct(data)
        setSelectedImage(data.image_urls?.[0])

        // Load similar products (from the same store)
        if (data?.store_id) {
          const similar = await fetchProducts({ storeId: data.store_id.toString() })
          setSimilarProducts(similar.filter(p => p.product_id !== data.product_id).slice(0, 4))
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [params])

  if (error) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-medium mb-2">Error loading product</h2>
        <p className="text-muted-foreground mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <Skeleton className="aspect-square w-full" />
            <div className="grid grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={`skeleton-${i}`} className="aspect-square" />
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-48" />
            </div>
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  // Sort price history by date
  const priceHistory = product.product_prices
    .sort((a: any, b: any) => new Date(a.retrieved_on).getTime() - new Date(b.retrieved_on).getTime())

  // Get current and previous prices
  const currentPrice = priceHistory[priceHistory.length - 1]?.price
  const previousPrice = priceHistory[priceHistory.length - 2]?.price
  const priceChange = previousPrice ? ((currentPrice - previousPrice) / previousPrice) * 100 : 0
  const lastUpdated = priceHistory[priceHistory.length - 1]?.retrieved_on

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6">
      {!product.is_active && (
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            This product is currently unavailable or out of stock. Price information may be outdated.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-md border card-hover">
            <Image
              src={product.image_urls?.[0] || "/placeholder.svg"}
              alt={product.product_name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.image_urls?.map((imageUrl, i) => (
              <div key={`thumbnail-${i}`} className="relative aspect-square overflow-hidden rounded-sm border card-hover">
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt={`${product.product_name} - View ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            )) || [...Array(4)].map((_, i) => (
              <div key={`thumbnail-${i}`} className="relative aspect-square overflow-hidden rounded-sm border card-hover">
                <Image
                  src="/placeholder.svg"
                  alt={`${product.product_name} - View ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link
                href={`/categories?store=${product.stores.store_name}`}
                className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary"
              >
                {product.stores.store_name}
              </Link>
              <Badge variant={product.is_active ? "default" : "secondary"}>
                {product.is_active ? "Active" : "Inactive"}
              </Badge>
            </div>
            <h1 className="text-2xl md:text-3xl font-medium">{product.product_name}</h1>
            <div className="mt-2 text-sm text-muted-foreground">
              Added {format(new Date(product.created_at), 'PPP')}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-medium">{formatCurrency(currentPrice, 'PKR')}</span>
              {priceChange !== 0 && previousPrice && (
                <span className={`text-sm ${priceChange < 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {priceChange < 0 ? '↓' : '↑'} {formatCurrency(Math.abs(priceChange), 'PKR')} from previous price
                </span>
              )}
            </div>
            {lastUpdated && (
              <div className="text-sm text-muted-foreground">
                Last checked {formatDistanceToNow(new Date(lastUpdated), { addSuffix: true })}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              <Button className="flex-1" size="lg" asChild>
                <a href={product.product_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Store
                </a>
              </Button>
              <Button variant="outline" className="flex-1">
                <Heart className="mr-2 h-4 w-4" />
                Add to Wishlist
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Price History</h2>
            <PriceChart priceHistory={priceHistory} currency="PKR" />
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-lg font-medium">Price Statistics</h2>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Lowest Price</div>
                <div className="font-medium">
                  {formatCurrency(
                    Math.min(...product.product_prices.map((p: any) => p.price)),
                    'PKR'
                  )}
                </div>
              </div>
              <div>
                <div className="text-muted-foreground">Highest Price</div>
                <div className="font-medium">
                  {formatCurrency(
                    Math.max(...product.product_prices.map((p: any) => p.price)),
                    'PKR'
                  )}
                </div>
              </div>
              <div>
                <div className="text-muted-foreground">Average Price</div>
                <div className="font-medium">
                  {formatCurrency(
                    product.product_prices.reduce((acc: number, p: any) => acc + p.price, 0) / 
                    product.product_prices.length,
                    'PKR'
                  )}
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-lg font-medium">Store Information</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Store Name</div>
                <div className="font-medium">{product.stores.store_name}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Last Retrieved</div>
                <div className="font-medium">
                  {product.stores.last_retrieved_on
                    ? format(new Date(product.stores.last_retrieved_on), 'PPP')
                    : 'Never'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-medium mb-8">More from {product.stores.store_name}</h2>
          <ProductGrid products={similarProducts} />
        </div>
      )}
    </div>
  )
}
