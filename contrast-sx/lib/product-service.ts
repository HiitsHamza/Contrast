import { Product } from "@/types/product";

// Convert database product to application product format
function mapDatabaseProductToAppProduct(dbProduct: any): Product {
  // Safely handle image URLs
  let processedImages = [];
  
  if (dbProduct.image_urls && Array.isArray(dbProduct.image_urls)) {
    // Filter out empty or invalid URLs
    processedImages = dbProduct.image_urls
      .filter((url: any) => url && typeof url === 'string' && url.trim() !== '')
      .map((url: string, index: number) => ({
        src: url,
        alt: `${dbProduct.product_name} view ${index + 1}`
      }));
  }
  
  // If no valid images, provide a placeholder
  if (processedImages.length === 0) {
    processedImages = [{ 
      src: "/placeholder.svg", 
      alt: "Product image unavailable" 
    }];
  }

  // Process price history data
  let priceHistory: { date: string; price: number }[] = [];
  
  if (dbProduct.product_prices && Array.isArray(dbProduct.product_prices) && dbProduct.product_prices.length > 0) {
    // Convert all prices to PricePoint objects and sort by date (oldest first)
    priceHistory = dbProduct.product_prices
      .map((price: any) => {
        const date = new Date(price.retrieved_on);
        return {
          date: date.toISOString().split('T')[0], // Format as YYYY-MM-DD
          price: parseFloat(price.price)
        };
      })
      .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    // If there's only one price point, duplicate it with a date 1 day before to show some history
    if (priceHistory.length === 1) {
      const singlePoint = priceHistory[0];
      const previousDate = new Date(singlePoint.date);
      previousDate.setDate(previousDate.getDate() - 1);
      
      priceHistory.unshift({
        date: previousDate.toISOString().split('T')[0],
        price: singlePoint.price
      });
    }
  } else {
    // Create default price history with current price
    const currentDate = new Date().toISOString().split('T')[0];
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    
    priceHistory = [
      { 
        date: yesterdayDate.toISOString().split('T')[0], 
        price: dbProduct.product_prices?.length > 0 ? parseFloat(dbProduct.product_prices[0].price) : 0 
      },
      { 
        date: currentDate, 
        price: dbProduct.product_prices?.length > 0 ? parseFloat(dbProduct.product_prices[0].price) : 0 
      }
    ];
  }

  // Calculate original price for discounts (using 0-20% higher than current price as a demo)
  const currentPrice = dbProduct.product_prices?.length > 0 
    ? parseFloat(dbProduct.product_prices[0].price) 
    : 0;
  
  // Randomly add original prices to some products for demo purposes
  // In a real app, this would come from the database
  const hasDiscount = Math.random() > 0.6; // 40% of products have a discount
  const originalPrice = hasDiscount 
    ? currentPrice * (1 + (Math.random() * 0.5)) // Up to 50% discount
    : undefined;

  return {
    id: dbProduct.product_id,
    name: dbProduct.product_name || "Unknown Product",
    brand: dbProduct.stores?.store_name || "Unknown Brand",
    price: currentPrice,
    originalPrice: originalPrice,
    rating: 4.0, // Default rating since it's not in DB
    images: processedImages,
    description: `${dbProduct.product_name || "Unknown Product"} from ${dbProduct.stores?.store_name || "Unknown Store"}`,
    sizes: ["S", "M", "L", "XL"], // Default sizes since it's not in DB
    colors: ["#000000"], // Default color since it's not in DB
    inStock: true, // Default availability since it's not in DB
    tags: dbProduct.categories ? dbProduct.categories.split(",") : [],
    retailerUrl: dbProduct.product_url || "#",
    retailerName: dbProduct.stores?.store_name || "Unknown Store",
    priceHistory: priceHistory
  };
}

// Fetch all products
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/api/products');
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const dbProducts = await response.json();
    return dbProducts.map(mapDatabaseProductToAppProduct);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Search products
export async function searchProducts(query: string): Promise<Product[]> {
  try {
    if (!query.trim()) {
      return await fetchProducts();
    }
    
    const response = await fetch(`/api/products/search?query=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error('Failed to search products');
    }
    
    const dbProducts = await response.json();
    return dbProducts.map(mapDatabaseProductToAppProduct);
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
}

// Get product by ID
export async function getProductById(id: number): Promise<Product | null> {
  try {
    const allProducts = await fetchProducts();
    return allProducts.find(product => product.id === id) || null;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
}

// Fetch filtered products 
export async function fetchFilteredProducts(
  brands?: string[],
  priceRange?: [number, number],
  discounts?: string[],
  colors?: string[],
  page = 1,
  perPage = 30
): Promise<Product[]> {
  try {
    // Build filter parameters
    const params = new URLSearchParams();
    
    // Add pagination
    params.set('page', page.toString());
    params.set('perPage', perPage.toString());
    
    // Add brand filter
    if (brands && brands.length > 0) {
      params.set('brands', brands.join(','));
    }
    
    // Add price range
    if (priceRange) {
      params.set('minPrice', priceRange[0].toString());
      params.set('maxPrice', priceRange[1].toString());
    }
    
    // Add discount filter
    if (discounts && discounts.length > 0) {
      params.set('discounts', discounts.join(','));
    }
    
    // Add color filter
    if (colors && colors.length > 0) {
      params.set('colors', colors.join(','));
    }
    
    // Fetch filtered products
    const response = await fetch(`/api/products/filter?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch filtered products');
    }
    
    const data = await response.json();
    return data.products.map(mapDatabaseProductToAppProduct);
  } catch (error) {
    console.error('Error fetching filtered products:', error);
    return [];
  }
} 