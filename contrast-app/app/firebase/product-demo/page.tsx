"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/codedComponents/ProductCard"
import { LineChart } from "@/components/ui/chart"
import { Heart, Share2, ExternalLink } from "lucide-react"
import PageLayout from "@/components/PageLayout"

// Mock data - replace with actual data fetching
const product = {
  id: "1",
  name: "Premium Cotton T-Shirt",
  description: "High-quality cotton t-shirt with a comfortable fit and stylish design.",
  mainImage: "/placeholder.svg?height=600&width=600",
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  prices: [
    { store: "FashionHub", price: 2499, url: "#" },
    { store: "StyleZone", price: 2699, url: "#" },
    { store: "TrendMart", price: 2299, url: "#" },
  ],
  details: {
    material: "100% Cotton",
    fit: "Regular Fit",
    care: "Machine wash cold",
    sku: "TSH-001-BLK",
  },
  priceHistory: [
    { date: "2024-01", price: 2599 },
    { date: "2024-02", price: 2499 },
    { date: "2024-03", price: 2299 },
  ],
}

const relatedProducts = [
  {
    _id: "2",
    name: "Classic Denim Jacket",
    price: 5999,
    store: "FashionHub",
    image: "/placeholder.svg?height=400&width=300",
    url: "#",
  },
  {
    _id: "3",
    name: "Slim Fit Chinos",
    price: 3499,
    store: "StyleZone",
    image: "/placeholder.svg?height=400&width=300",
    url: "#",
  },
  {
    _id: "4",
    name: "Casual Sneakers",
    price: 4299,
    store: "TrendMart",
    image: "/placeholder.svg?height=400&width=300",
    url: "#",
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(product.mainImage)
  const lowestPrice = Math.min(...product.prices.map((p) => p.price))
  const highestPrice = Math.max(...product.prices.map((p) => p.price))

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-purple-500/20">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <div
                      className="relative aspect-square cursor-pointer rounded-lg overflow-hidden border border-purple-500/20"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Product view ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
              <p className="text-purple-200/80">{product.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-200/60">Price Range</p>
                  <p className="text-2xl font-bold text-white">
                    Rs. {lowestPrice} - Rs. {highestPrice}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-purple-200/60">Available at</p>
                {product.prices.map((price, index) => (
                  <Card key={index} className="bg-purple-950/20 border-purple-500/20">
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-medium text-white">{price.store}</p>
                        <p className="text-lg font-bold text-purple-200">Rs. {price.price}</p>
                      </div>
                      <Button asChild>
                        <a href={price.url} target="_blank" rel="noopener noreferrer">
                          Visit Store
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="price-history">Price History</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.details).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <p className="text-sm text-purple-200/60 capitalize">{key}</p>
                      <p className="text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="price-history">
                <Card className="bg-purple-950/20 border-purple-500/20">
                  <CardContent className="p-4">
                    <div className="h-[200px]">
                      <LineChart data={product.priceHistory} xField="date" yField="price" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

