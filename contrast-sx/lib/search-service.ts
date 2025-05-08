import Fuse from 'fuse.js';
import type { FuseResult } from 'fuse.js';
import { Product } from "@/types/product";
import { fetchProducts, searchProducts as apiSearchProducts } from "@/lib/product-service";

// Common color keywords for better matching
const colorKeywords = [
  'black', 'white', 'red', 'blue', 'green', 'yellow', 'purple', 
  'pink', 'orange', 'brown', 'grey', 'gray', 'navy', 'teal', 
  'burgundy', 'maroon', 'olive', 'emerald', 'turquoise', 'beige',
  'off-white', 'cream', 'silver', 'gold', 'bronze', 'khaki'
];

// Configure Fuse.js options for better fuzzy searching
const fuseOptions = {
  keys: [
    { name: 'name', weight: 3 },       // Increased weight for product name
    { name: 'brand', weight: 1 },
    { name: 'description', weight: 2 }, // Increased for better color matching
    { name: 'tags', weight: 2 },       // Increased for better relevance
    { name: 'colors', weight: 3 }      // Higher weight for explicit color matches
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
  ignoreLocation: true // Don't prioritize matches at the start of strings
};

/**
 * Pre-processes products to enhance searchability for colors
 * @param products Products to enhance
 * @returns Enhanced products with extracted color information
 */
function enhanceProductsWithColorInfo(products: Product[]): Product[] {
  return products.map(product => {
    // Create a copy to avoid mutating the original
    const enhancedProduct = { ...product };
    
    // Extract color names from product information
    const detectedColors: string[] = [];
    
    // Check various product fields for color mentions
    colorKeywords.forEach(color => {
      // Check product name for color
      if (product.name.toLowerCase().includes(color)) {
        detectedColors.push(color);
      }
      
      // Check description for color
      if (product.description.toLowerCase().includes(color)) {
        detectedColors.push(color);
      }
      
      // Check tags for color mentions
      product.tags.forEach(tag => {
        if (tag.toLowerCase().includes(color)) {
          detectedColors.push(color);
        }
      });
    });
    
    // Add detected colors to the product (avoiding duplicates)
    enhancedProduct.colors = Array.from(new Set([...product.colors, ...detectedColors]));
    
    return enhancedProduct;
  });
}

/**
 * Special handling for color searches
 * @param query The search query
 * @returns Whether the query is a color search and the matching color terms
 */
function handleColorSearch(query: string): { isColorSearch: boolean, colorTerms: string[] } {
  const lowerQuery = query.toLowerCase();
  const matchingColors: string[] = [];
  
  // Check if query matches any color keywords
  colorKeywords.forEach(color => {
    if (color.includes(lowerQuery) || lowerQuery.includes(color)) {
      matchingColors.push(color);
    }
  });
  
  return {
    isColorSearch: matchingColors.length > 0,
    colorTerms: matchingColors
  };
}

/**
 * Performs a fuzzy search on the client side for immediate results
 * @param products List of products to search
 * @param query Search query
 * @returns Filtered products matching the search query
 */
export function fuzzySearchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) {
    return products;
  }
  
  // Check if this is a color search
  const { isColorSearch, colorTerms } = handleColorSearch(query);
  console.log(`Query "${query}" is ${isColorSearch ? 'a color search' : 'not a color search'}`);
  
  if (isColorSearch) {
    console.log("Matching colors:", colorTerms);
  }
  
  // Enhance products with explicit color information
  const enhancedProducts = enhanceProductsWithColorInfo(products);
  
  // If it's a color search, do additional handling
  if (isColorSearch) {
    // Modify threshold based on how exact the color match is
    const searchOptions = {
      ...fuseOptions,
      threshold: 0.6  // More lenient threshold for color searches
    };
    
    // Run the fuzzy search with the original query
    const fuse = new Fuse(enhancedProducts, searchOptions);
    const results = fuse.search(query);
    
    // Also search for related color terms and combine results
    let allResults = [...results];
    
    // For each color term, do an additional search and combine results
    colorTerms.forEach(colorTerm => {
      if (colorTerm !== query.toLowerCase()) {
        const colorResults = fuse.search(colorTerm);
        allResults = [...allResults, ...colorResults];
      }
    });
    
    // Remove duplicates by product ID
    const uniqueResults = allResults.reduce((acc, current) => {
      const x = acc.find(item => item.item.id === current.item.id);
      if (!x) {
        return acc.concat([current]);
      } else {
        // Keep the item with better score
        if (current.score && x.score && current.score < x.score) {
          return acc.map(item => item.item.id === current.item.id ? current : item);
        }
        return acc;
      }
    }, [] as FuseResult<Product>[]);
    
    // Sort by score (best matches first)
    uniqueResults.sort((a, b) => (a.score || 1) - (b.score || 1));
    
    // Return the original product objects sorted by relevance
    return uniqueResults.map(result => result.item);
  } else {
    // Regular search for non-color queries
    const fuse = new Fuse(enhancedProducts, fuseOptions);
    const results = fuse.search(query);
    return results.map(result => result.item);
  }
}

/**
 * Performs a search using both API-based search and client-side fuzzy search
 * @param query Search query
 * @returns Combined search results with fuzzy matching
 */
export async function enhancedSearch(query: string): Promise<Product[]> {
  // If query is empty, just return all products
  if (!query.trim()) {
    return await fetchProducts();
  }
  
  console.log(`Performing enhanced search for: "${query}"`);

  try {
    // First get all products for client-side searching
    const allProducts = await fetchProducts();
    console.log(`Fetched ${allProducts.length} total products for client-side search`);
    
    // Then get API search results
    const apiResults = await apiSearchProducts(query);
    console.log(`API search returned ${apiResults.length} results`);
    
    // Perform client-side fuzzy search with enhanced color detection
    const fuzzyResults = fuzzySearchProducts(allProducts, query);
    console.log(`Fuzzy search found ${fuzzyResults.length} results`);
    
    // Combine results, removing duplicates
    const existingIds = new Set(apiResults.map(p => p.id));
    const uniqueFuzzyResults = fuzzyResults.filter(p => !existingIds.has(p.id));
    
    // Return combined results with API results first (they're more relevant),
    // followed by unique fuzzy search results
    const finalResults = [...apiResults, ...uniqueFuzzyResults];
    console.log(`Final combined results: ${finalResults.length} products`);
    
    return finalResults;
  } catch (error) {
    console.error("Error in enhanced search:", error);
    // Fallback to basic API search if something goes wrong
    return apiSearchProducts(query);
  }
}

// Export original API search for compatibility
export const { searchProducts } = { searchProducts: apiSearchProducts }; 