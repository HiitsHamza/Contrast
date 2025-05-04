import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.products.findMany({
      where: {
        is_active: true,
      },
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
      take: 4, // Limit to 4 featured products
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch featured products' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 