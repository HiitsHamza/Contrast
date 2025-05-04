import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyIdToken } from '@/lib/firebase';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await verifyIdToken(token);
    const userId = decodedToken.uid;

    const cart = await prisma.lists.findFirst({
      where: {
        user_id: userId,
        name: 'Cart',
      },
      include: {
        items: {
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
        },
      },
    });

    if (!cart) {
      // Create a new cart if it doesn't exist
      const newCart = await prisma.lists.create({
        data: {
          user_id: userId,
          name: 'Cart',
        },
        include: {
          items: {
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
          },
        },
      });
      return NextResponse.json(newCart);
    }

    return NextResponse.json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    return NextResponse.json({ error: 'Failed to fetch cart' }, { status: 500 });
  }
}

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
    const { product_id } = body;

    if (!product_id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    // Get or create cart
    let cart = await prisma.lists.findFirst({
      where: {
        user_id: userId,
        name: 'Cart',
      },
    });

    if (!cart) {
      cart = await prisma.lists.create({
        data: {
          user_id: userId,
          name: 'Cart',
        },
      });
    }

    // Add product to cart
    const cartItem = await prisma.list_items.create({
      data: {
        list_id: cart.list_id,
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

    return NextResponse.json(cartItem);
  } catch (error) {
    console.error('Error adding item to cart:', error);
    return NextResponse.json(
      { error: 'Failed to add item to cart' },
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
    const productId = searchParams.get('productId');

    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    // Get cart
    const cart = await prisma.lists.findFirst({
      where: {
        user_id: userId,
        name: 'Cart',
      },
    });

    if (!cart) {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }

    // Remove product from cart
    await prisma.list_items.delete({
      where: {
        list_id_product_id: {
          list_id: cart.list_id,
          product_id: parseInt(productId),
        },
      },
    });

    return NextResponse.json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    return NextResponse.json(
      { error: 'Failed to remove item from cart' },
      { status: 500 }
    );
  }
} 