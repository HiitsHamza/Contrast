import { Product } from "@/lib/types"
import { ProductCard } from "@/components/product/product-card"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const validProducts = products.filter(Boolean)

  if (validProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No products found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or check back later for new products.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {validProducts.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  )
}
