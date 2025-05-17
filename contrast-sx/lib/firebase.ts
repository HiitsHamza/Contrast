import { initializeApp, getApps } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, deleteDoc, Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Ensure Firebase is only initialized once
let app;
let firestore: Firestore;
let auth;
let analytics = null;

// Initialize Firebase if it hasn't been already
if (!getApps().length) {
  console.log('Initializing Firebase...');
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    firestore = getFirestore(app);
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Error initializing Firebase:', error);
  }
} else {
  console.log('Firebase already initialized, reusing existing app');
  app = getApps()[0];
  auth = getAuth(app);
  firestore = getFirestore(app);
}

// Initialize Analytics - only in browser environment
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
    console.log('Firebase Analytics initialized');
  } catch (error) {
    console.error("Analytics initialization error:", error);
  }
}

// Test Firestore connection
async function testFirestoreConnection() {
  try {
    console.log('Testing Firestore connection...');
    
    // Try to access a test collection
    const testRef = collection(firestore, 'test');
    await getDocs(testRef);
    
    console.log('Firestore connection successful');
    return true;
  } catch (error) {
    console.error('Firestore connection test failed:', error);
    return false;
  }
}

// Call the test function if in browser environment
// if (typeof window !== 'undefined') {
//   testFirestoreConnection();
// }

// Wishlist functions
const addToWishlist = async (userId: string, productId: string, productData: any) => {
  try {
    console.log(`Adding product ${productId} to wishlist for user ${userId}`);
    
    if (!firestore) {
      console.error('Firestore not initialized');
      return { success: false, error: 'Firestore not initialized' };
    }
    
    const wishlistRef = doc(firestore, 'wishlists', userId, 'items', productId);
    
    // Clean and prepare the data for storage
    const cleanData: {
      id: string;
      name: string;
      brand: string;
      price: number;
      originalPrice?: number;
      imageUrl: string;
      addedAt: string;
    } = {
      id: productId,
      name: productData.name || 'Unknown Product',
      brand: productData.brand || 'Unknown Brand',
      price: productData.price || 0,
      imageUrl: productData.imageUrl || 
               (productData.images && productData.images.length > 0 ? 
                productData.images[0].src : '/placeholder.svg'),
      addedAt: new Date().toISOString()
    };
    
    // Only add originalPrice if it exists and is not undefined
    if (productData.originalPrice !== undefined) {
      cleanData.originalPrice = productData.originalPrice;
    }
    
    console.log('Data to be saved:', cleanData);
    
    await setDoc(wishlistRef, cleanData);
    console.log(`Successfully added product ${productId} to wishlist`);
    return { success: true };
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    return { success: false, error };
  }
};

const removeFromWishlist = async (userId: string, productId: string) => {
  try {
    console.log(`Removing product ${productId} from wishlist for user ${userId}`);
    
    if (!firestore) {
      console.error('Firestore not initialized');
      return { success: false, error: 'Firestore not initialized' };
    }
    
    const wishlistRef = doc(firestore, 'wishlists', userId, 'items', productId);
    await deleteDoc(wishlistRef);
    console.log(`Successfully removed product ${productId} from wishlist`);
    return { success: true };
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    return { success: false, error };
  }
};

const getWishlistItems = async (userId: string) => {
  try {
    console.log(`Getting wishlist items for user ${userId}`);
    
    if (!firestore) {
      console.error('Firestore not initialized');
      return { success: false, error: 'Firestore not initialized', items: [] };
    }
    
    const wishlistRef = collection(firestore, 'wishlists', userId, 'items');
    console.log('Wishlist collection path:', `wishlists/${userId}/items`);
    
    const snapshot = await getDocs(wishlistRef);
    console.log('Query snapshot received, size:', snapshot.size);
    
    const items = snapshot.docs.map(doc => {
      console.log('Document data:', doc.id, doc.data());
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    
    console.log(`Found ${items.length} items in wishlist`);
    return { success: true, items };
  } catch (error) {
    console.error('Error getting wishlist items:', error);
    return { success: false, error, items: [] };
  }
};

// Export functions
export { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  analytics, 
  firestore,
  addToWishlist,
  removeFromWishlist,
  getWishlistItems,
  testFirestoreConnection
};
export type { User }; 