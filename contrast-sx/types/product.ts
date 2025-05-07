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
