import { NextResponse } from 'next/server';

// Firebase admin error codes and messages
const ADMIN_ERROR_MESSAGES: Record<string, { message: string, status: number }> = {
  // Authentication errors
  'auth/id-token-expired': { 
    message: 'Your session has expired. Please sign in again.',
    status: 401
  },
  'auth/id-token-revoked': {
    message: 'Your session has been revoked. Please sign in again.',
    status: 401
  },
  'auth/invalid-id-token': {
    message: 'Invalid authentication token. Please sign in again.',
    status: 401
  },
  'auth/user-disabled': {
    message: 'Your account has been disabled. Please contact support.',
    status: 403
  },
  'auth/user-not-found': {
    message: 'User not found. The account may have been deleted.',
    status: 404
  },
  'auth/tenant-id-mismatch': {
    message: 'Authentication error: tenant ID mismatch.',
    status: 403
  },
  
  // Firestore errors
  'permission-denied': {
    message: 'You do not have permission to access this resource.',
    status: 403
  },
  'not-found': {
    message: 'The requested resource was not found.',
    status: 404
  },
  'resource-exhausted': {
    message: 'Service temporarily unavailable. Please try again later.',
    status: 429
  },
  'failed-precondition': {
    message: 'Operation was rejected because the system is not in a state required for the operation.',
    status: 400
  },
  'already-exists': {
    message: 'The resource you are trying to create already exists.',
    status: 409
  },
  
  // Default error
  'default': {
    message: 'An error occurred. Please try again later.',
    status: 500
  }
};

/**
 * Handle Firebase admin errors in API routes
 * @param error Firebase admin error
 * @returns NextResponse with appropriate status code and error message
 */
export function handleApiError(error: any): NextResponse {
  console.error('API Error:', error);
  
  // Extract error code from Firebase error
  const errorCode = error?.code || 'default';
  
  // Get error details from map or use default
  const errorDetails = ADMIN_ERROR_MESSAGES[errorCode] || ADMIN_ERROR_MESSAGES.default;
  
  // Return formatted error response
  return NextResponse.json(
    { error: errorDetails.message },
    { status: errorDetails.status }
  );
}

/**
 * Create a standardized API error response
 * @param message Error message
 * @param status HTTP status code
 * @returns NextResponse with the specified status and error message
 */
export function createApiError(message: string, status: number): NextResponse {
  return NextResponse.json({ error: message }, { status });
} 