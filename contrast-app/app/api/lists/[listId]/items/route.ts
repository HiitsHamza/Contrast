import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyIdToken } from '@/lib/firebase';

export async function POST(
  request: Request,
  { params }: { params: { listId: string } }
) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await verifyIdToken(token);
    const userId = decodedToken.uid;

    const body = await request.json();
    const { productId } = body;

    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    // Verify that the list belongs to the user
    const list = await prisma.list.findFirst({
      where: {
        id: parseInt(params.listId),
        userId,
      },
    });

    if (!list) {
      return NextResponse.json({ error: 'List not found' }, { status: 404 });
    }

    const listItem = await prisma.listItem.create({
      data: {
        listId: parseInt(params.listId),
        productId: parseInt(productId),
      },
      include: {
        product: true,
      },
    });

    return NextResponse.json(listItem);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add item to list' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { listId: string } }
) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await verifyIdToken(token);
    const userId = decodedToken.uid;

    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');

    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    // Verify that the list belongs to the user
    const list = await prisma.list.findFirst({
      where: {
        id: parseInt(params.listId),
        userId,
      },
    });

    if (!list) {
      return NextResponse.json({ error: 'List not found' }, { status: 404 });
    }

    await prisma.listItem.deleteMany({
      where: {
        listId: parseInt(params.listId),
        productId: parseInt(productId),
      },
    });

    return NextResponse.json({ message: 'Item removed from list' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to remove item from list' }, { status: 500 });
  }
} 