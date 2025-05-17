/**
 * Utility for handling Firebase authentication errors
 * Converts Firebase error codes into user-friendly messages
 */

// Map of Firebase error codes to user-friendly messages
const AUTH_ERROR_MESSAGES: Record<string, string> = {
  // Email/Password Authentication Errors
  'auth/email-already-in-use': 'This email is already registered. Please sign in or use a different email.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/user-disabled': 'This account has been disabled. Please contact support.',
  'auth/user-not-found': 'No account found with this email. Please check your email or create a new account.',
  'auth/wrong-password': 'Incorrect password. Please try again or reset your password.',
  'auth/invalid-credential': 'Invalid email or password. Please check your credentials and try again.',
  'auth/invalid-verification-code': 'Invalid verification code. Please try again.',
  'auth/invalid-verification-id': 'Invalid verification ID. Please try again.',
  'auth/weak-password': 'Password is too weak. Use at least 6 characters with a mix of letters and numbers.',
  
  // Account Errors
  'auth/requires-recent-login': 'This action requires you to sign in again for security reasons.',
  'auth/email-already-exists': 'This email is already registered to another account.',
  'auth/operation-not-allowed': 'This sign-in method is not enabled. Please contact support.',
  
  // Network Errors
  'auth/network-request-failed': 'Network error. Please check your internet connection and try again.',
  'auth/too-many-requests': 'Too many unsuccessful attempts. Please try again later or reset your password.',
  'auth/internal-error': 'An internal error occurred. Please try again later.',
  
  // Generic Error
  'default': 'An error occurred during authentication. Please try again.'
};

/**
 * Get a user-friendly error message for Firebase authentication errors
 * @param error The error object from Firebase or error code string
 * @returns A user-friendly error message
 */
export function getAuthErrorMessage(error: any): string {
  if (!error) return AUTH_ERROR_MESSAGES.default;
  
  // Extract the error code
  const errorCode = error.code || (typeof error === 'string' ? error : 'default');
  
  // Return the mapped message or a default message
  return AUTH_ERROR_MESSAGES[errorCode] || 
    (error.message ? error.message : AUTH_ERROR_MESSAGES.default);
}

/**
 * Check if an error is a specific Firebase authentication error
 * @param error The error to check
 * @param code The error code to check for
 * @returns Boolean indicating if the error matches the code
 */
export function isAuthError(error: any, code: string): boolean {
  if (!error) return false;
  return error.code === code || error === code;
} 