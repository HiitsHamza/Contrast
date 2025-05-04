import type { Product } from './types';

export async function fetchProducts(params?: {
  storeId?: string;
  isActive?: boolean;
}): Promise<Product[]> {
  const searchParams = new URLSearchParams();
  if (params?.storeId) searchParams.set('storeId', params.storeId);
  if (params?.isActive !== undefined) searchParams.set('isActive', params.isActive.toString());

  const response = await fetch(`/api/products?${searchParams.toString()}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
}

export async function fetchStores(): Promise<{ store_id: number; store_name: string }[]> {
  const response = await fetch('/api/stores');
  if (!response.ok) {
    throw new Error('Failed to fetch stores');
  }
  return response.json();
} 