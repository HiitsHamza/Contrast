import { NextRequest, NextResponse } from 'next/server';
import { firebaseAdmin } from '@/lib/firebase-admin';
import { UserProfile } from '@/types/user';
import { handleApiError, createApiError } from '@/lib/api-error';

// Get user profile
export async function GET(request: NextRequest) {
  try {
    // Get the authorization token from the request
    const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];
    
    if (!idToken) {
      return createApiError('Unauthorized: No token provided', 401);
    }
    
    try {
      // Verify the ID token
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
      const uid = decodedToken.uid;
      
      // Get the Firestore database
      const db = firebaseAdmin.firestore();
      const userDoc = await db.collection('userProfiles').doc(uid).get();
      
      if (!userDoc.exists) {
        return createApiError('Profile not found', 404);
      }
      
      return NextResponse.json({ profile: userDoc.data() });
      
    } catch (error) {
      return handleApiError(error);
    }
  } catch (error) {
    return handleApiError(error);
  }
}

// Create or update user profile
export async function POST(request: NextRequest) {
  try {
    // Get the authorization token from the request
    const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];
    
    if (!idToken) {
      return createApiError('Unauthorized: No token provided', 401);
    }
    
    try {
      // Verify the ID token
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
      const uid = decodedToken.uid;
      
      // Get the profile data from the request
      const profileData = await request.json();
      
      // Validate required fields
      if (!profileData.displayName) {
        return createApiError('Display name is required', 400);
      }
      
      // Get the Firestore database
      const db = firebaseAdmin.firestore();
      
      // Create or update the user profile
      const userProfile: Partial<UserProfile> = {
        uid,
        displayName: profileData.displayName,
        email: decodedToken.email || '',
        phoneNumber: profileData.phoneNumber || '',
        location: profileData.location || '',
        bio: profileData.bio || '',
        preferences: {
          notifications: profileData.preferences?.notifications || false,
          marketingEmails: profileData.preferences?.marketingEmails || false
        },
        updatedAt: Date.now()
      };
      
      // If it's a new profile, add createdAt timestamp
      const userDoc = await db.collection('userProfiles').doc(uid).get();
      if (!userDoc.exists) {
        userProfile.createdAt = Date.now();
      }
      
      // Save the profile
      await db.collection('userProfiles').doc(uid).set(userProfile, { merge: true });
      
      // Also update the Firebase Auth display name
      await firebaseAdmin.auth().updateUser(uid, {
        displayName: profileData.displayName
      });
      
      return NextResponse.json({ 
        message: 'Profile updated successfully',
        profile: userProfile
      });
      
    } catch (error) {
      return handleApiError(error);
    }
  } catch (error) {
    return handleApiError(error);
  }
} 