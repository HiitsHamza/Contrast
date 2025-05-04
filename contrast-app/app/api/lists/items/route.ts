import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyIdToken } from '@/lib/firebase';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await verifyIdToken(token);
    const userId = decodedToken.uid;

    const body = await request.json();
    const { list_id, product_id } = body;

    if (!list_id || !product_id) {
      return NextResponse.json(
        { error: 'List ID and Product ID are required' },
        { status: 400 }
      );
    }

    // Verify list ownership
    const list = await prisma.lists.findUnique({
      where: { list_id },
    });

    if (!list || list.user_id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const listItem = await prisma.list_items.create({
      data: {
        list_id,
        product_id,
      },
      include: {
        product: {
          include: {
            product_prices: {
              orderBy: {
                retrieved_on: 'desc',
              },
              take: 1,
            },
          },
        },
      },
    });

    return NextResponse.json(listItem);
  } catch (error) {
    console.error('Error adding item to list:', error);
    return NextResponse.json(
      { error: 'Failed to add item to list' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await verifyIdToken(token);
    const userId = decodedToken.uid;

    const { searchParams } = new URL(request.url);
    const listId = searchParams.get('listId');
    const productId = searchParams.get('productId');

    if (!listId || !productId) {
      return NextResponse.json(
        { error: 'List ID and Product ID are required' },
        { status: 400 }
      );
    }

    // Verify list ownership
    const list = await prisma.lists.findUnique({
      where: { list_id: parseInt(listId) },
    });

    if (!list || list.user_id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await prisma.list_items.delete({
      where: {
        list_id_product_id: {
          list_id: parseInt(listId),
          product_id: parseInt(productId),
        },
      },
    });

    return NextResponse.json({ message: 'Item removed from list successfully' });
  } catch (error) {
    console.error('Error removing item from list:', error);
    return NextResponse.json(
      { error: 'Failed to remove item from list' },
      { status: 500 }
    );
  }
} 