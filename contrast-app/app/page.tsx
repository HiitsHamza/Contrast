import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data"
import ProductGrid from "@/components/product/product-grid"
import UstaadChatSubscreen from "@/components/UstaadChatSubscreen"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface Store {
  store_id: number
  store_name: string
  _count: {
    products: number
  }
}

async function getFeaturedProducts() {
  try {
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/featured`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    if (!res.ok) throw new Error('Failed to fetch featured products')
    return res.json()
  } catch (error) {
    console.error('Error fetching featured products:', error)
    return []
  }
}

async function getStores() {
  try {
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/stores`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    if (!res.ok) throw new Error('Failed to fetch stores')
    return res.json()
  } catch (error) {
    console.error('Error fetching stores:', error)
    return []
  }
}

export default async function Home() {
  const [featuredProducts, stores] = await Promise.all([
    getFeaturedProducts(),
    getStores()
  ])

  return (
    <>
      {/* Ustaad Chat Subscreen Floating Button */}
      <UstaadChatSubscreen />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="hero-gradient py-20 md:py-28">
          <div className="container mx-auto px-4 py-10 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Track Prices.
                    <br />
                    <span className="text-primary">Save on Luxury.</span>
                  </h1>
                  <p className="mt-6 text-lg text-muted-foreground">
                    Monitor price drops on your favorite designer pieces and never miss a sale again.
                  </p>
                  <div className="mt-8">
                    <Button size="lg" asChild>
                      <Link href="/products">Browse Products</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/3255323-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 blue-gradient-bg">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-medium">Featured Products</h2>
              <Button variant="ghost" asChild>
                <Link href="/products" className="flex items-center">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {featuredProducts.length > 0 ? (
              <ProductGrid products={featuredProducts} />
            ) : (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  No featured products available at the moment.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </section>

        {/* Brands */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-medium">Featured Brands</h2>
              <Button variant="ghost" asChild>
                <Link href="/products" className="flex items-center">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {stores.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {stores.map((store: Store) => (
                  <Link
                    key={store.store_id}
                    href={`/products?store=${store.store_name}`}
                    className="flex items-center justify-center h-24 bg-white dark:bg-gray-800 rounded-lg border card-hover"
                  >
                    <span className="text-lg">{store.store_name}</span>
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({store._count.products})
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  No stores available at the moment.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10 dark:bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium">Never Miss a Price Drop Again</h2>
              <p className="text-base md:text-lg opacity-90">
                Sign up to track your favorite luxury items and get notified when prices drop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="rounded-md" asChild>
                  <Link href="/auth/signup">Create Account</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-md border-primary/20 hover:bg-primary/10" asChild>
                  <Link href="/categories">Browse Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}