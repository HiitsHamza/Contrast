import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const storeId = searchParams.get('storeId');
    const isActive = searchParams.get('isActive') ?? 'true'; // Default to true if not specified

    console.log('Fetching products with params:', { storeId, isActive });

    const where = {
      is_active: isActive === 'true', // Always include is_active filter
      ...(storeId && { store_id: parseInt(storeId) }),
    };

    // First, let's count total products
    const totalCount = await prisma.products.count({ where });
    console.log('Total products count:', totalCount);

    if (totalCount === 0) {
      return NextResponse.json([]);
    }

    const products = await prisma.products.findMany({
      where,
      include: {
        stores: true,
        product_prices: {
          orderBy: {
            retrieved_on: 'desc',
          },
          take: 1, // Just get the most recent price
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    console.log('Successfully fetched products:', {
      count: products.length,
      sampleProduct: products[0] ? {
        id: products[0].product_id,
        name: products[0].product_name,
        hasStore: !!products[0].stores,
        pricesCount: products[0].product_prices.length
      } : null
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch products',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 