export interface Product {
  product_id: number
  store_id: number
  product_name: string
  product_url: string
  image_urls?: string[] | null
  categories: string | null
  latest_price: number | null
  is_active: boolean
  created_at: Date
  updated_at: Date
  stores: Store
  product_prices: ProductPrice[]
}

export interface Store {
  store_id: number
  store_name: string
  store_url: string
  last_retrieved_on: Date | null
  created_at: Date
}

export interface ProductPrice {
  price_id: number
  product_id: number
  price: number
  retrieved_on: Date
}

export interface PricePoint {
  date: string
  price: number
}

export interface User {
  id: string
  name: string
  email: string
  image?: string
}

export interface CartItem {
  id: string
  product_id: number
  product: Product
  quantity: number
}

export interface List {
  list_id: number
  name: string
  user_id: string
  products: Product[]
  created_at: Date
  updated_at: Date
}

export interface FilterOptions {
  store?: string
  category?: string
  priceRange?: [number, number]
  brand?: string[]
}

export interface UserList {
  id: string;
  name: string;
  userId: string;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserLike {
  userId: string;
  productId: number;
  createdAt: Date;
}
