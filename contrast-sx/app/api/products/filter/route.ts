import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Get filter parameters from query string
    const searchParams = request.nextUrl.searchParams;
    const brands = searchParams.get('brands')?.split(',') || [];
    const minPrice = parseFloat(searchParams.get('minPrice') || '0');
    const maxPrice = parseFloat(searchParams.get('maxPrice') || '5000');
    const discountFilter = searchParams.get('discounts')?.split(',') || [];
    const colors = searchParams.get('colors')?.split(',') || [];
    const query = searchParams.get('query') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('perPage') || '30');
    
    // Calculate skip for pagination
    const skip = (page - 1) * perPage;
    
    // Build filters
    const whereConditions: any = { is_active: true };
    
    // Add brand filter if specified
    if (brands.length > 0) {
      whereConditions.stores = {
        store_name: {
          in: brands,
        },
      };
    }
    
    // Combined search query and color filter logic
    if (query || colors.length > 0) {
      const searchConditions = [];
      
      // Add user's search query if present
      if (query) {
        searchConditions.push({
          product_name: {
            contains: query,
            mode: 'insensitive' as const,
          }
        });
      }
      
      // Add color filter conditions
      if (colors.length > 0) {
        const colorConditions = [];
        
        for (const color of colors) {
          // Match color at word boundaries with spaces and start/end of text
          colorConditions.push(
            { product_name: { startsWith: color, mode: 'insensitive' as const } },
            { product_name: { contains: ` ${color} `, mode: 'insensitive' as const } },
            { product_name: { contains: ` ${color}`, mode: 'insensitive' as const } },
            { product_name: { equals: color, mode: 'insensitive' as const } }
          );
        }
        
        // Add the color conditions to search conditions
        if (query) {
          // If there's a search query, require BOTH the query AND a color match
          searchConditions.push({
            OR: colorConditions
          });
        } else {
          // If no search query, just find products matching any color condition
          searchConditions.push(...colorConditions);
        }
      }
      
      // Set the final where conditions based on how we want to combine search and color
      if (query && colors.length > 0) {
        // If both search and colors are specified, require both (AND)
        whereConditions.AND = searchConditions;
      } else {
        // If only one is specified, use OR to match either
        whereConditions.OR = searchConditions;
      }
    }
    
    // Fetch products with filters
    const products = await prisma.products.findMany({
      where: whereConditions,
      include: {
        product_prices: true,
        stores: true,
      },
      skip: skip,
      take: perPage,
    });
    
    // Post-process for price filtering
    // We need to do this manually since price data is in a related table
    let filteredProducts = products;
    
    if (minPrice > 0 || maxPrice < 5000) {
      filteredProducts = products.filter(product => {
        // Get the current price (first price in array, assuming sorted by date)
        const currentPrice = product.product_prices && product.product_prices.length > 0
          ? parseFloat(product.product_prices[0].price.toString())
          : 0;
          
        return currentPrice >= minPrice && currentPrice <= maxPrice;
      });
    }
    
    // Log diagnostic info for debugging
    console.log('Query:', query);
    console.log('Color filters applied:', colors);
    console.log('Products found:', filteredProducts.length);
    
    // Get total count after price filtering
    const totalCount = filteredProducts.length;
    
    // Calculate total pages
    const totalPages = Math.ceil(totalCount / perPage);
    
    return NextResponse.json({
      products: filteredProducts,
      pagination: {
        totalItems: totalCount,
        totalPages,
        currentPage: page,
        perPage,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    console.error('Error filtering products:', error);
    return NextResponse.json({ error: 'Failed to filter products' }, { status: 500 });
  }
} 