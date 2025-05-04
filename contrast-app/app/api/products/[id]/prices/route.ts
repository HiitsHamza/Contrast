import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');

    const prices = await prisma.product_prices.findMany({
      where: {
        product_id: parseInt(context.params.id),
      },
      orderBy: {
        retrieved_on: 'desc',
      },
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json(prices);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch prices' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { price } = body;

    if (!price) {
      return NextResponse.json({ error: 'Price is required' }, { status: 400 });
    }

    const productPrice = await prisma.product_prices.create({
      data: {
        product_id: parseInt(context.params.id),
        price: parseFloat(price),
      },
    });

    // Update the product's last retrieved timestamp
    await prisma.products.update({
      where: {
        product_id: parseInt(context.params.id),
      },
      data: {
        stores: {
          update: {
            last_retrieved_on: new Date(),
          },
        },
      },
    });

    return NextResponse.json(productPrice);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add price' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
} 