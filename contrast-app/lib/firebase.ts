"use client"

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDe1GAJU4tDpMBvpMDPS7UZLKdtlPxKmj4",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "contrast-474d9.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "contrast-474d9",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "contrast-474d9.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "488011515431",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:488011515431:web:b18492fdfe3644e0bfb002",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-1F5C5N7C67"
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics only in browser environment
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes && getAnalytics(app));
}

export async function verifyIdToken(token: string) {
  try {
    const response = await fetch(`/api/auth/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error('Invalid token');
    }

    return await response.json();
  } catch (error) {
    console.error('Error verifying token:', error);
    throw new Error('Invalid token');
  }
} 