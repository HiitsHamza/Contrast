'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { fetchWithAuth } from '@/lib/auth-utils';
import { UserProfile } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { MailIcon, HomeIcon, PhoneIcon, UserIcon } from 'lucide-react';
import { getAuthErrorMessage } from '@/lib/auth-error';

export default function OnboardingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Form state
  const [displayName, setDisplayName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  // Redirect to homepage if user is not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [loading, user, router]);

  // Pre-fill form with data if available
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      
      // Try to fetch existing profile
      const fetchProfile = async () => {
        try {
          const response = await fetchWithAuth('/api/user/profile');
          if (response.ok) {
            const { profile } = await response.json();
            if (profile) {
              setDisplayName(profile.displayName || '');
              setPhoneNumber(profile.phoneNumber || '');
              setLocation(profile.location || '');
              setBio(profile.bio || '');
              setNotificationsEnabled(profile.preferences?.notifications || true);
              setMarketingEnabled(profile.preferences?.marketingEmails || false);
            }
          }
        } catch (error) {
          // New user, no profile yet
          console.log('No existing profile found');
        }
      };
      
      fetchProfile();
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!displayName.trim()) {
      setError('Please provide your name');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');
    
    try {
      const profileData = {
        displayName,
        phoneNumber,
        location,
        bio,
        preferences: {
          notifications: notificationsEnabled,
          marketingEmails: marketingEnabled
        }
      };
      
      const response = await fetchWithAuth('/api/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
      
      if (response.ok) {
        setSuccessMessage('Profile updated successfully!');
        // Redirect to profile page after a delay
        setTimeout(() => {
          router.push('/profile');
        }, 1500);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to update profile');
      }
    } catch (error: any) {
      console.error('Error updating profile:', error);
      setError(error.code ? getAuthErrorMessage(error) : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2573F7]"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
          <CardDescription>
            Let's personalize your experience. This information helps us provide better service.
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {successMessage && (
              <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="displayName" className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>Full Name</span>
                <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="displayName" 
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <MailIcon className="h-4 w-4" />
                <span>Email</span>
              </Label>
              <Input 
                id="email" 
                value={user?.email || ''}
                disabled
                className="bg-gray-50 dark:bg-gray-800"
              />
              <p className="text-sm text-gray-500">Your email cannot be changed</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                <span>Phone Number</span>
                <span className="text-sm text-gray-500 ml-1">(Optional)</span>
              </Label>
              <Input 
                id="phoneNumber" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <HomeIcon className="h-4 w-4" />
                <span>Location</span>
                <span className="text-sm text-gray-500 ml-1">(Optional)</span>
              </Label>
              <Input 
                id="location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your city or region"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">About Me (Optional)</Label>
              <Textarea 
                id="bio" 
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us a bit about yourself"
                rows={3}
              />
            </div>
            
            <div className="space-y-4">
              <Label>Preferences</Label>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="notifications" 
                  checked={notificationsEnabled}
                  onCheckedChange={(checked) => setNotificationsEnabled(checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="notifications" className="text-sm font-medium">
                    Enable notifications
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive notifications about new products and features
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="marketing" 
                  checked={marketingEnabled}
                  onCheckedChange={(checked) => setMarketingEnabled(checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="marketing" className="text-sm font-medium">
                    Marketing emails
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive emails about promotions and special offers
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('/profile')}
              className="w-full sm:w-auto"
            >
              Skip for Now
            </Button>
            <Button 
              type="submit" 
              className="w-full sm:w-auto bg-[#2573F7] hover:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save Profile'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
} 