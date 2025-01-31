import React, { useState } from "react";
import { Product } from "@/types/Product";
import { ProductCard } from "@/components/codedComponents/ProductCard";
import { SearchBar } from "@/components/codedComponents/SearchBar";

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  const handleSearch = async (
    searchTerm: string,
    priceFilter: {
      min: number | null;
      max: number | null;
    }
  ) => {
    try {
      const res = await fetch("http://localhost:3000");
      const data = await res.json();
      const allProducts = data.products;

      const filtered = allProducts.filter((product: Product) => {
        const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);

        const matchesSearch = searchWords.every(
          (word) =>
            product.name.toLowerCase().includes(word) ||
            product.store.toLowerCase().includes(word)
        );

        const priceMatch =
          (priceFilter.min === null || product.price >= priceFilter.min) &&
          (priceFilter.max === null || product.price <= priceFilter.max);

        return matchesSearch && priceMatch;
      });

      setProducts(allProducts);
      setFilteredProducts(filtered);
    } catch (err) {
      setError("Failed to fetch products");
      console.error(err);
    }
  };

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      {filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      {filteredProducts.length === 0 && products.length > 0 && (
        <div className="text-center mt-8 text-muted-foreground">
          No products found matching your search.
        </div>
      )}
    </div>
  );
};
export default ProductGrid;

