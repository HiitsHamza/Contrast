import { NextRequest, NextResponse } from 'next/server';
import { firebaseAdmin } from '@/lib/firebase-admin';

// This is a protected API route example using Firebase Admin SDK
// You can use this for admin-only operations

export async function GET(request: NextRequest) {
  try {
    // Get the authorization token from the request
    const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];
    
    if (!idToken) {
      return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });
    }
    
    try {
      // Verify the ID token
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
      const uid = decodedToken.uid;
      
      // Example: Check if user has admin role
      // You would typically check this in your database
      const userRecord = await firebaseAdmin.auth().getUser(uid);
      
      // Return user information
      return NextResponse.json({ 
        message: 'Authenticated as admin',
        user: {
          uid: userRecord.uid,
          email: userRecord.email,
          displayName: userRecord.displayName
        }
      });
      
    } catch (error) {
      console.error('Error verifying token:', error);
      return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// You can also add POST, PUT, DELETE methods as needed 