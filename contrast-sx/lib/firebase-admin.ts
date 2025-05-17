import * as admin from 'firebase-admin';

// Check if Firebase admin app is already initialized
if (!admin.apps.length) {
  try {
    const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
    if (!serviceAccountString) {
      throw new Error('FIREBASE_SERVICE_ACCOUNT_JSON environment variable is not set.');
    }
    const serviceAccount = JSON.parse(serviceAccountString) as admin.ServiceAccount;

    // Initialize the app
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // databaseURL can often be inferred or not needed if only using Firestore
      // databaseURL: `https://${serviceAccount.project_id}.firebaseio.com` // Consider if this is strictly needed
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
    // Optionally, re-throw the error or handle it to prevent app startup if critical
  }
}

// Export the admin instance
export const firebaseAdmin = admin;