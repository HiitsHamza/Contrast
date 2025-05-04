"use client"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Fuse from 'fuse.js'
import type { FilterOptions, Product } from "@/lib/types"
import { fetchProducts } from "@/lib/api"
import { SearchBar } from "@/components/search-bar"
import { ProductCard } from "@/components/product/product-card"
import ProductFilters from "@/components/product/product-filters"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

// Normalize text by removing special characters, extra spaces, and converting to lowercase
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    // Replace special characters and multiple spaces with a single space
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Split text into words for better matching
function getSearchableText(product: Product): string[] {
  const texts = [
    product.product_name,
    product.stores?.store_name || '',
    product.categories || '',
  ];
  
  return texts
    .map(normalizeText)
    .filter(Boolean)
    .flatMap(text => text.split(' '));
}

export default function CategoriesPage() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<FilterOptions>({})

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const data = await fetchProducts({ isActive: true })
        setProducts(data)
        setError(null)
      } catch (err) {
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  // Initialize Fuse.js for fuzzy searching
  const fuse = useMemo(() => new Fuse(products, {
    keys: ['product_name', 'stores.store_name', 'categories'],
    threshold: 0.3, // Lower threshold = more strict matching
    ignoreLocation: true,
    findAllMatches: true,
  }), [products])

  const filteredProducts = useMemo(() => {
    let result = products;
    const searchQuery = searchParams.get("q");

    // Apply search filter if query exists
    if (searchQuery) {
      const normalizedQuery = normalizeText(searchQuery);
      const searchWords = normalizedQuery.split(' ');
      
      // Use Fuse.js for fuzzy search
      const fuseResults = fuse.search(normalizedQuery);
      
      // Combine fuzzy search with exact word matching
      const exactMatches = products.filter(product => {
        const searchableText = getSearchableText(product);
        return searchWords.every(word => 
          searchableText.some(text => text.includes(word))
        );
      });

      // Combine and deduplicate results
      const combinedResults = Array.from(new Set([
        ...fuseResults.map(r => r.item),
        ...exactMatches
      ]));

      result = combinedResults;
    }

    // Apply brand (store) filter
    if (filters.brand?.length > 0) {
      result = result.filter(product => 
        product.stores?.store_name && filters.brand?.includes(product.stores.store_name)
      );
    }

    // Apply price range filter
    if (filters.priceRange && filters.priceRange[0] !== undefined && filters.priceRange[1] !== undefined) {
      result = result.filter(product => {
        const price = product.latest_price || product.product_prices[0]?.price;
        return price !== undefined && price >= filters.priceRange![0] && price <= filters.priceRange![1];
      });
    }

    // Apply category filter if present
    if (filters.category && typeof filters.category === 'string') {
      result = result.filter(product => {
        if (!product.categories) return false;
        const normalizedProductCategories = normalizeText(product.categories);
        const normalizedFilterCategory = normalizeText(filters.category as string);
        return normalizedProductCategories.includes(normalizedFilterCategory);
      });
    }

    return result;
  }, [products, searchParams, filters, fuse]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters)
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Products</h1>
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="space-y-6">
          <ProductFilters
            initialFilters={filters}
            onFilterChange={handleFilterChange}
            products={products}
          />
        </aside>
        <div className="md:col-span-3">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={`skeleton-${i}`} className="h-[360px] rounded-lg bg-muted animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.product_id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No products found</p>
          )}
        </div>
      </div>
    </div>
  )
}
