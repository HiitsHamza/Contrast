import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Info, ArrowRight, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts'

// Mock data for the price history
const priceHistory = [
  { date: '2023-01', price: 69.99 },
  { date: '2023-02', price: 25.99 },
  { date: '2023-03', price: 87.99 },
  { date: '2023-04', price: 64.99 },
  { date: '2023-05', price: 59.99 },
  { date: '2023-06', price: 79.99 },
]

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <img
            src="https://www.nanajudy.com/cdn/shop/files/NM10428A_ValleyKnittedTee_Black_1000x1000.jpg?v=1721706789"
            alt="Black Knitted T-Shirt"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/placeholder.svg?height=100&width=100&text=Image ${i}`}
                alt={`Product view ${i}`}
                className="w-full h-auto rounded-md cursor-pointer hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Black Knitted T-Shirt</h1>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(128 reviews)</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">$89.99</div>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              On Sale
            </Badge>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Product Description</h2>
            <p>
              Our Eco-Friendly Water Bottle is the perfect companion for your daily hydration needs. Made from sustainable materials, this bottle keeps your drinks cold for up to 24 hours or hot for up to 12 hours. It's durable, leak-proof, and comes with a convenient carry handle.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>500ml capacity</li>
              <li>BPA-free stainless steel</li>
              <li>Double-wall vacuum insulation</li>
              <li>Available in multiple colors</li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Button asChild className="flex-1">
              <Link to="https://www.nanajudy.com/collections/mens-tops/products/the-valley-knitted-t-shirt?_pos=2&_sid=b9512e489&_ss=r&variant=42062983004243" target="_blank" rel="noopener noreferrer">
                View on Partner Site <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to wishlist</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* Price History Chart */}
      <Card className="mt-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">Price History</h2>
          <ChartContainer
            config={{
              price: {
                label: "Price",
                color: "black",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceHistory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="price" stroke="var(--color-price)" name="Price" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Additional Information Tabs */}
      <Tabs defaultValue="details" className="mt-8">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Product Details</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Material: 18/8 food-grade stainless steel</li>
            <li>Capacity: 500ml / 17 oz</li>
            <li>Dimensions: 9.5" H x 2.9" W</li>
            <li>Weight: 0.7 lbs</li>
            <li>Care instructions: Hand wash recommended</li>
          </ul>
        </TabsContent>
        <TabsContent value="reviews" className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
          <p>This section would typically contain user reviews and ratings.</p>
        </TabsContent>
        <TabsContent value="shipping" className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
          <p>Free shipping on orders over $50. Standard shipping takes 3-5 business days. Express shipping options available at checkout.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}