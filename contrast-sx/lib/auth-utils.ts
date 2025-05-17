'use client';

import { auth } from './firebase';
import { UserProfile } from '@/types/user';

// Get the current user's ID token for authenticated requests
export async function getAuthToken(): Promise<string | null> {
  const user = auth.currentUser;
  
  if (!user) {
    return null;
  }
  
  try {
    return await user.getIdToken();
  } catch (error) {
    console.error('Error getting auth token:', error);
    return null;
  }
}

// Make an authenticated API request
export async function fetchWithAuth(
  url: string, 
  options: RequestInit = {}
): Promise<Response> {
  const token = await getAuthToken();
  
  if (!token) {
    throw new Error('Not authenticated');
  }
  
  // Add the auth token to the headers
  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`
  };
  
  return fetch(url, {
    ...options,
    headers
  });
}

// Get the current user's profile
export async function getUserProfile(): Promise<UserProfile | null> {
  try {
    const response = await fetchWithAuth('/api/user/profile');
    
    if (!response.ok) {
      if (response.status === 404) {
        return null; // Profile not found
      }
      throw new Error('Failed to fetch user profile');
    }
    
    const data = await response.json();
    return data.profile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

// Update the user's profile
export async function updateUserProfile(profileData: Partial<UserProfile>): Promise<UserProfile | null> {
  try {
    const response = await fetchWithAuth('/api/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update profile');
    }
    
    const data = await response.json();
    return data.profile;
  } catch (error) {
    console.error('Error updating user profile:', error);
    return null;
  }
}

// Example: Check if a user is admin
export async function checkAdminStatus(): Promise<boolean> {
  try {
    const response = await fetchWithAuth('/api/auth/admin');
    
    if (!response.ok) {
      return false;
    }
    
    const data = await response.json();
    return !!data.user;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
} 