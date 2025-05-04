import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/contexts/auth-context';
import {
  likeProduct,
  unlikeProduct,
  getUserLikes,
  createList,
  getUserLists,
  addProductToList,
  removeProductFromList,
  deleteList,
} from '@/lib/firebase/user-data';
import { Product } from '@/lib/types';

export function useUserData() {
  const { user } = useAuth();
  const [likes, setLikes] = useState<any[]>([]);
  const [lists, setLists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserData();
    } else {
      setLikes([]);
      setLists([]);
      setLoading(false);
    }
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const [userLikes, userLists] = await Promise.all([
        getUserLikes(user.uid),
        getUserLists(user.uid),
      ]);
      setLikes(userLikes);
      setLists(userLists);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    setLoading(false);
  };

  const handleLikeProduct = async (product: Product) => {
    if (!user) return;
    try {
      await likeProduct(user.uid, product);
      await fetchUserData();
    } catch (error) {
      console.error('Error liking product:', error);
    }
  };

  const handleUnlikeProduct = async (productId: number) => {
    if (!user) return;
    try {
      await unlikeProduct(user.uid, productId);
      await fetchUserData();
    } catch (error) {
      console.error('Error unliking product:', error);
    }
  };

  const handleCreateList = async (name: string) => {
    if (!user) return;
    try {
      await createList(user.uid, name);
      await fetchUserData();
    } catch (error) {
      console.error('Error creating list:', error);
    }
  };

  const handleAddToList = async (listId: string, product: Product) => {
    if (!user) return;
    try {
      await addProductToList(listId, product);
      await fetchUserData();
    } catch (error) {
      console.error('Error adding product to list:', error);
    }
  };

  const handleRemoveFromList = async (listId: string, productId: number) => {
    if (!user) return;
    try {
      await removeProductFromList(listId, productId);
      await fetchUserData();
    } catch (error) {
      console.error('Error removing product from list:', error);
    }
  };

  const handleDeleteList = async (listId: string) => {
    if (!user) return;
    try {
      await deleteList(listId);
      await fetchUserData();
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  return {
    likes,
    lists,
    loading,
    isLiked: (productId: number) => likes.some((like) => like.productId === productId),
    likeProduct: handleLikeProduct,
    unlikeProduct: handleUnlikeProduct,
    createList: handleCreateList,
    addToList: handleAddToList,
    removeFromList: handleRemoveFromList,
    deleteList: handleDeleteList,
  };
} 