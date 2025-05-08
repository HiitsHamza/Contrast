import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Common color keywords for better matching
const colorKeywords = [
  'black', 'white', 'red', 'blue', 'green', 'yellow', 'purple', 
  'pink', 'orange', 'brown', 'grey', 'gray', 'navy', 'teal', 
  'burgundy', 'maroon', 'olive', 'emerald', 'turquoise', 'beige',
  'off-white', 'cream', 'silver', 'gold', 'bronze', 'khaki'
];

export async function GET(request: NextRequest) {
  try {
    // Get query parameter and pagination parameters
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('perPage') || '30');
    
    // Calculate skip for pagination
    const skip = (page - 1) * perPage;

    // Check if query is potentially a color
    const isColorSearch = colorKeywords.some(color => 
      query.toLowerCase().includes(color) || color.includes(query.toLowerCase())
    );

    // Build a more flexible search for color terms
    let searchTerms = [query];
    
    // For color searches, add related color terms
    if (isColorSearch) {
      colorKeywords.forEach(color => {
        if (color.includes(query.toLowerCase()) || query.toLowerCase().includes(color)) {
          searchTerms.push(color);
        }
      });
    }
    
    // Remove duplicates
    searchTerms = [...new Set(searchTerms)];
    
    console.log("Searching for terms:", searchTerms);
    
    // Build an OR query for each term across the relevant fields
    const searchConditions = searchTerms.flatMap(term => [
      { product_name: { contains: term, mode: 'insensitive' } },
      { categories: { contains: term, mode: 'insensitive' } }
    ]);

    // Search products with pagination
    const products = await prisma.products.findMany({
      where: {
        AND: [
          { is_active: true },
          { OR: searchConditions }
        ]
      },
      include: {
        product_prices: true,
        stores: true,
      },
      skip: skip,
      take: perPage,
    });
    
    // Get total count for pagination metadata
    const totalCount = await prisma.products.count({
      where: {
        AND: [
          { is_active: true },
          { OR: searchConditions }
        ]
      }
    });
    
    // Calculate total pages
    const totalPages = Math.ceil(totalCount / perPage);

    console.log(`API search for "${query}" found ${products.length} results`);

    return NextResponse.json({
      products,
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
    console.error('Error searching products:', error);
    return NextResponse.json({ error: 'Failed to search products' }, { status: 500 });
  }
} 