'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { fetchWithAuth } from '@/lib/auth-utils';
import { UserProfile } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Pencil, PhoneIcon, HomeIcon, CalendarIcon, MailIcon } from 'lucide-react';

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<Partial<UserProfile> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [loading, user, router]);

  // Fetch user profile data
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        try {
          setIsLoading(true);
          const response = await fetchWithAuth('/api/user/profile');
          
          if (response.ok) {
            const data = await response.json();
            setUserProfile(data.profile);
          } else if (response.status === 404) {
            // Profile not found, redirect to onboarding
            router.push('/onboarding');
          } else {
            const data = await response.json();
            setError(data.error || 'Failed to load profile');
          }
        } catch (error) {
          console.error('Error fetching profile:', error);
          setError('An error occurred while loading your profile');
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (user) {
      fetchUserProfile();
    }
  }, [user, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
      setError('Failed to sign out');
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2573F7]"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="flex flex-col items-center pb-6">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={user?.photoURL || ''} alt={userProfile?.displayName || 'User'} />
            <AvatarFallback className="text-2xl bg-[#2573F7] text-white">
              {userProfile?.displayName?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          
          <CardTitle className="text-2xl">{userProfile?.displayName || 'Your Profile'}</CardTitle>
          <CardDescription>
            {userProfile?.preferences?.notifications ? 'Notifications enabled' : 'Notifications disabled'}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {/* Profile Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
              <MailIcon className="h-4 w-4 text-gray-500" />
              <Label className="font-medium">Email</Label>
              <span className="ml-auto text-gray-600 dark:text-gray-300">{user?.email}</span>
            </div>
            
            {userProfile?.phoneNumber && (
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
                <PhoneIcon className="h-4 w-4 text-gray-500" />
                <Label className="font-medium">Phone</Label>
                <span className="ml-auto text-gray-600 dark:text-gray-300">{userProfile.phoneNumber}</span>
              </div>
            )}
            
            {userProfile?.location && (
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
                <HomeIcon className="h-4 w-4 text-gray-500" />
                <Label className="font-medium">Location</Label>
                <span className="ml-auto text-gray-600 dark:text-gray-300">{userProfile.location}</span>
              </div>
            )}
            
            {userProfile?.createdAt && (
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
                <Label className="font-medium">Joined</Label>
                <span className="ml-auto text-gray-600 dark:text-gray-300">{formatDate(userProfile.createdAt)}</span>
              </div>
            )}
          </div>
          
          {/* Bio Section */}
          {userProfile?.bio && (
            <div className="mt-6">
              <Label className="font-medium mb-2 block">About</Label>
              <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">{userProfile.bio}</p>
            </div>
          )}
          
          {/* Marketing Preferences */}
          <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Email Preferences</h3>
            <p className="text-sm text-gray-500">
              {userProfile?.preferences?.marketingEmails
                ? 'You are subscribed to marketing emails'
                : 'You are not subscribed to marketing emails'}
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="outline" 
            className="w-full sm:w-auto flex items-center gap-2"
            onClick={() => router.push('/onboarding')}
          >
            <Pencil className="h-4 w-4" />
            Edit Profile
          </Button>
          
          <Button 
            variant="default" 
            className="w-full sm:w-auto bg-[#2573F7] hover:bg-blue-600"
            onClick={() => router.push('/')}
          >
            Return to Homepage
          </Button>
          
          <Button 
            variant="destructive" 
            className="w-full sm:w-auto"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 