'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './auth-context';
import { addToWishlist, removeFromWishlist, getWishlistItems, testFirestoreConnection } from './firebase';
import { Product } from '@/types/product';

interface WishlistItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  addedAt: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  isLoading: boolean;
  addItem: (productId: string | number, productData: any) => Promise<void>;
  removeItem: (productId: string | number) => Promise<void>;
  isItemInWishlist: (productId: string | number) => boolean;
  refreshWishlist: () => Promise<void>;
  testConnection: () => Promise<boolean>;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlistItems: [],
  isLoading: false,
  addItem: async () => {},
  removeItem: async () => {},
  isItemInWishlist: () => false,
  refreshWishlist: async () => {},
  testConnection: async () => false,
});

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Debug log when user changes
  useEffect(() => {
    console.log('User state changed in wishlist-context:', user ? `User ${user.uid} logged in` : 'No user logged in');
  }, [user]);

  // Test Firebase/Firestore connection
  const testConnection = async (): Promise<boolean> => {
    try {
      return await testFirestoreConnection();
    } catch (error) {
      console.error('Test connection failed:', error);
      return false;
    }
  };

  // Function to load wishlist items
  const loadWishlist = async () => {
    if (!user) {
      console.log('loadWishlist: No user, clearing wishlist.');
      setWishlistItems([]);
      return;
    }
    
    try {
      setIsLoading(true);
      console.log('loadWishlist: Loading wishlist for user ID:', user.uid);
      
      const result = await getWishlistItems(user.uid);
      if (result.success) {
        console.log('loadWishlist: Wishlist loaded successfully:', result.items);
        setWishlistItems(result.items as WishlistItem[]);
      } else {
        console.error('loadWishlist: Failed to load wishlist. User ID:', user.uid, 'Result:', result);
        setWishlistItems([]);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('loadWishlist: Error loading wishlist. User ID:', user.uid, 'Error:', errorMessage, error);
      setWishlistItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Public method to refresh wishlist
  const refreshWishlist = async () => {
    await loadWishlist();
  };

  // Load wishlist when user changes
  useEffect(() => {
    if (user) {
      loadWishlist();
    } else {
      setWishlistItems([]);
    }
  }, [user]);

  // Add item to wishlist
  const addItem = async (productId: string | number, productData: any) => {
    if (!user) {
      console.log('addItem: Cannot add to wishlist: User not logged in');
      return;
    }
    
    try {
      const stringProductId = String(productId);
      console.log('addItem: Adding item to wishlist. User ID:', user.uid, 'Product ID:', stringProductId);
      console.log('addItem: Product data:', productData);
      
      const result = await addToWishlist(user.uid, stringProductId, productData);
      
      if (result.success) {
        console.log('addItem: Item added to wishlist successfully. User ID:', user.uid, 'Product ID:', stringProductId);
        await loadWishlist(); // Reload the wishlist to get fresh data
      } else {
        const errorMessage = result.error?.message || result.error || 'Unknown error';
        console.error('addItem: Failed to add item to wishlist. User ID:', user.uid, 'Product ID:', stringProductId, 'Error:', errorMessage, result);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('addItem: Error adding item to wishlist. User ID:', user.uid, 'Product ID:', String(productId), 'Error:', errorMessage, error);
    }
  };

  // Remove item from wishlist
  const removeItem = async (productId: string | number) => {
    if (!user) {
      console.log('Cannot remove from wishlist: User not logged in');
      return;
    }
    
    try {
      const stringProductId = String(productId);
      console.log('Removing item from wishlist:', stringProductId);
      
      const result = await removeFromWishlist(user.uid, stringProductId);
      
      if (result.success) {
        console.log('Item removed from wishlist successfully');
        // Update the local state to reflect the change immediately
        setWishlistItems(prev => prev.filter(item => item.id !== stringProductId));
      } else {
        const errorMessage = result.error?.message || result.error || 'Unknown error';
        console.error('Failed to remove item from wishlist:', errorMessage, result);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Error removing item from wishlist:', errorMessage, error);
    }
  };

  // Check if an item is in the wishlist
  const isItemInWishlist = (productId: string | number) => {
    const stringProductId = String(productId);
    return wishlistItems.some(item => item.id === stringProductId);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlistItems, 
      isLoading, 
      addItem, 
      removeItem, 
      isItemInWishlist,
      refreshWishlist,
      testConnection
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
} 