import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const stores = await prisma.stores.findMany({
      orderBy: {
        store_name: 'asc'
      },
      select: {
        store_id: true,
        store_name: true,
        _count: {
          select: {
            products: {
              where: {
                is_active: true
              }
            }
          }
        }
      }
    });

    // Only return stores that have active products
    const activeStores = stores.filter(store => store._count.products > 0);

    return NextResponse.json(activeStores);
  } catch (error) {
    console.error('Error fetching stores:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stores' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { store_name } = body;

    if (!store_name) {
      return NextResponse.json({ error: 'Store name is required' }, { status: 400 });
    }

    const store = await prisma.stores.create({
      data: {
        store_name,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.error('Error creating store:', error);
    return NextResponse.json({ error: 'Failed to create store' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { store_id, ...updateData } = body;

    const store = await prisma.stores.update({
      where: { store_id },
      data: updateData,
    });

    return NextResponse.json(store);
  } catch (error) {
    console.error('Error updating store:', error);
    return NextResponse.json({ error: 'Failed to update store' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const storeId = searchParams.get('storeId');

    if (!storeId) {
      return NextResponse.json({ error: 'Store ID is required' }, { status: 400 });
    }

    await prisma.stores.delete({
      where: { store_id: parseInt(storeId) },
    });

    return NextResponse.json({ message: 'Store deleted successfully' });
  } catch (error) {
    console.error('Error deleting store:', error);
    return NextResponse.json({ error: 'Failed to delete store' }, { status: 500 });
  }
} 