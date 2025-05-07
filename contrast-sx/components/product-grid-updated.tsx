"use client"

import { motion } from "framer-motion"
import ProductCard, { type Product } from "@/components/product-card"

// Sample product data with multiple images, price history, and retailer URLs
const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "Nike",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    images: [
      { src: "/placeholder.svg?key=bzt8j", alt: "White t-shirt front view" },
      { src: "/white-t-shirt-back-view.png", alt: "White t-shirt back view" },
      { src: "/white-t-shirt-side.png", alt: "White t-shirt side view" },
    ],
    priceHistory: [
      { date: "2023-01-01", price: 39.99 },
      { date: "2023-02-15", price: 34.99 },
      { date: "2023-03-10", price: 34.99 },
      { date: "2023-04-05", price: 32.99 },
      { date: "2023-05-20", price: 29.99 },
    ],
    description: "Premium cotton classic fit t-shirt with crew neck. Breathable fabric ideal for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#FFFFFF", "#000000", "#C0C0C0"],
    inStock: true,
    tags: ["Cotton", "Casual", "Essentials"],
    retailerUrl: "https://www.nike.com/t-shirts",
    retailerName: "Nike Store",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    brand: "Levi's",
    price: 59.99,
    rating: 4.2,
    images: [
      { src: "/blue-jeans-fashion.png", alt: "Slim fit jeans front view" },
      { src: "/blue-jeans-back-view.png", alt: "Slim fit jeans back view" },
      { src: "/placeholder.svg?key=gswvn", alt: "Slim fit jeans detail" },
    ],
    priceHistory: [
      { date: "2023-01-01", price: 69.99 },
      { date: "2023-02-15", price: 69.99 },
      { date: "2023-03-10", price: 64.99 },
      { date: "2023-04-05", price: 59.99 },
      { date: "2023-05-20", price: 59.99 },
    ],
    description: "Classic slim fit jeans with stretch denim for comfort. Five-pocket styling with button closure.",
    sizes: ["30x30", "32x32", "34x34", "36x34"],
    colors: ["#1E40AF", "#000000", "#808080"],
    inStock: true,
    tags: ["Denim", "Slim Fit", "Stretch"],
    retailerUrl: "https://www.levis.com/jeans",
    retailerName: "Levi's",
  },
  {
    id: 3,
    name: "Running Sneakers",
    brand: "Adidas",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    images: [
      { src: "/placeholder.svg?key=6qc0u", alt: "Running sneakers side view" },
      { src: "/placeholder.svg?key=gp7zz", alt: "Running sneakers top view" },
      { src: "/placeholder.svg?key=h2iqc", alt: "Running sneakers sole" },
    ],
    priceHistory: [
      { date: "2023-01-01", price: 119.99 },
      { date: "2023-02-15", price: 119.99 },
      { date: "2023-03-10", price: 99.99 },
      { date: "2023-04-05", price: 99.99 },
      { date: "2023-05-20", price: 89.99 },
    ],
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper for maximum comfort.",
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["#FF0000", "#000000", "#3B82F6"],
    inStock: true,
    tags: ["Running", "Athletic", "Cushioned"],
    retailerUrl: "https://www.adidas.com/sneakers",
    retailerName: "Adidas",
  },
  {
    id: 4,
    name: "Casual Dress",
    brand: "Zara",
    price: 49.99,
    rating: 4.3,
    images: [
      { src: "/casual-dress-fashion.png", alt: "Casual dress front view" },
      { src: "/placeholder.svg?key=tihvc", alt: "Casual dress back view" },
      { src: "/placeholder.svg?key=kt7hr", alt: "Casual dress detail" },
    ],
    priceHistory: [
      { date: "2023-01-01", price: 59.99 },
      { date: "2023-02-15", price: 59.99 },
      { date: "2023-03-10", price: 54.99 },
      { date: "2023-04-05", price: 49.99 },
      { date: "2023-05-20", price: 49.99 },
    ],
    description:
      "Flowy casual dress with adjustable straps and tiered design. Perfect for summer days or casual outings.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["#000000", "#FFFFFF", "#FFD700"],
    inStock: true,
    tags: ["Casual", "Summer", "Flowy"],
    retailerUrl: "https://www.zara.com/dresses",
    retailerName: "Zara",
  },
  {
    id: 5,
    name: "Denim Jacket",
    brand: "H&M",
    price: 69.99,
    originalPrice: 79.99,
    rating: 4.1,
    images: [
      { src: "/placeholder.svg?key=jlsen", alt: "Denim jacket front view" },
      { src: "/placeholder.svg?key=xgkkk", alt: "Denim jacket back view" },
      { src: "/denim-jacket-detail.png", alt: "Denim jacket detail" },
    ],
    priceHistory: [
      { date: "2023-01-01", price: 79.99 },
      { date: "2023-02-15", price: 79.99 },
      { date: "2023-03-10", price: 74.99 },
      { date: "2023-04-05", price: 69.99 },
      { date: "2023-05-20", price: 69.99 },
    ],
    description:
      "Classic denim jacket with button closure and multiple pockets. Versatile layering piece for any season.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#1E40AF", "#000000"],
    inStock: true,
    tags: ["Denim", "Casual", "Layering"],
    retailerUrl: "https://www.hm.com/jackets",
    retailerName: "H&M",
  },
  {
    id: 6,
    name: "Wool Sweater",
    brand: "Uniqlo",
    price: 39.99,
    rating: 4.4,
    images: [
      { src: "/placeholder.svg?key=6290t", alt: "Wool sweater front view" },
      { src: "/placeholder.svg?key=ywq6v", alt: "Wool sweater back view" },
      { src: "/placeholder.svg?key=w08qj", alt: "Wool sweater detail" },
    ],
    priceHistory: [
      { date: "2023-01-01", price: 49.99 },
      { date: "2023-02-15", price: 49.99 },
      { date: "2023-03-10", price: 44.99 },
      { date: "2023-04-05", price: 39.99 },
      { date: "2023-05-20", price: 39.99 },
    ],
    description: "Soft merino wool blend sweater with ribbed trim. Warm and comfortable for cooler weather.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#808080", "#000000", "#C0C0C0", "#8B4513"],
    inStock: false,
    tags: ["Wool", "Winter", "Knitwear"],
    retailerUrl: "https://www.uniqlo.com/sweaters",
    retailerName: "Uniqlo",
  },
  {
    id: 7,
    name: "Leather Boots",
    brand: "Timberland",
    price: 129.99,
    originalPrice: 149.99,
    rating: 4.6,
    images: [
      { src: "/placeholder.svg?key=lmcyj", alt: "Leather boots side view" },
      { src: "/placeholder.svg?key=r47zx", alt: "Leather boots front view" },
      { src: "/placeholder.svg?key=a2w3q", alt: "Leather boots sole" },
    ],
    priceHistory: [
      { date: "2023-01-01", price: 149.99 },
      { date: "2023-02-15", price: 149.99 },
      { date: "2023-03-10", price: 139.99 },
      { date: "2023-04-05", price: 139.99 },
      { date: "2023-05-20", price: 129.99 },
    ],
    description: "Waterproof leather boots with padded collar and rubber lug outsole for traction and durability.",
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["#8B4513", "#000000"],
    inStock: true,
    tags: ["Leather", "Waterproof", "Durable"],
    retailerUrl: "https://www.timberland.com/boots",
    retailerName: "Timberland",
  },
  {
    id: 8,
    name: "Summer Shorts",
    brand: "Gap",
    price: 34.99,
    rating: 4.0,
    images: [
      { src: "/placeholder.svg?key=hwhps", alt: "Summer shorts front view" },
      { src: "/placeholder.svg?height=400&width=300&query=summer shorts back view", alt: "Summer shorts back view" },
      { src: "/placeholder.svg?height=400&width=300&query=summer shorts detail", alt: "Summer shorts detail" },
    ],
    priceHistory: [
      { date: "2023-01-01", price: 39.99 },
      { date: "2023-02-15", price: 39.99 },
      { date: "2023-03-10", price: 39.99 },
      { date: "2023-04-05", price: 34.99 },
      { date: "2023-05-20", price: 34.99 },
    ],
    description:
      "Lightweight cotton shorts with elastic waistband and drawstring. Perfect for warm weather and casual outings.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#C0C0C0", "#000000", "#FFFFFF", "#FFD700"],
    inStock: true,
    tags: ["Cotton", "Summer", "Casual"],
    retailerUrl: "https://www.gap.com/shorts",
    retailerName: "Gap",
  },
]

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function ProductGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  )
}
