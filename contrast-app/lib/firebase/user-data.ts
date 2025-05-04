import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Product } from '../types';

// Likes functions
export async function likeProduct(userId: string, product: Product) {
  const likeRef = doc(db, 'likes', `${userId}_${product.product_id}`);
  await setDoc(likeRef, {
    userId,
    productId: product.product_id,
    createdAt: new Date(),
    productData: {
      id: product.product_id,
      name: product.product_name,
      image: product.image_urls?.[0],
      url: product.product_url,
    },
  });
}

export async function unlikeProduct(userId: string, productId: number) {
  const likeRef = doc(db, 'likes', `${userId}_${productId}`);
  await deleteDoc(likeRef);
}

export async function getUserLikes(userId: string) {
  const likesRef = collection(db, 'likes');
  const q = query(likesRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
}

// Lists functions
export async function createList(userId: string, name: string) {
  const listsRef = collection(db, 'lists');
  const newList = await addDoc(listsRef, {
    userId,
    name,
    products: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return { id: newList.id, name, products: [] };
}

export async function getUserLists(userId: string) {
  const listsRef = collection(db, 'lists');
  const q = query(listsRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function addProductToList(listId: string, product: Product) {
  const listRef = doc(db, 'lists', listId);
  await updateDoc(listRef, {
    products: arrayUnion({
      id: product.product_id,
      name: product.product_name,
      image: product.image_urls?.[0],
      url: product.product_url,
    }),
    updatedAt: new Date(),
  });
}

export async function removeProductFromList(listId: string, productId: number) {
  const listRef = doc(db, 'lists', listId);
  const list = await getDocs(query(collection(db, 'lists'), where('id', '==', listId)));
  const products = list.docs[0].data().products;
  const productToRemove = products.find((p: any) => p.id === productId);
  
  if (productToRemove) {
    await updateDoc(listRef, {
      products: arrayRemove(productToRemove),
      updatedAt: new Date(),
    });
  }
}

export async function deleteList(listId: string) {
  const listRef = doc(db, 'lists', listId);
  await deleteDoc(listRef);
} 