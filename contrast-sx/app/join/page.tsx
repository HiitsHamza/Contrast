'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth, createUserWithEmailAndPassword } from '@/lib/firebase';
import { getAuthErrorMessage } from '@/lib/auth-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  // Password strength indicators
  const passwordLength = password.length >= 6;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const passwordsMatch = password === confirmPassword && password !== '';

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!password) {
      setError('Password is required');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    try {
      setIsLoading(true);
      setError('');
      setSuccessMessage('');
      await createUserWithEmailAndPassword(auth, email, password);
      
      setSuccessMessage('Account created successfully!');
      
      // Redirect to onboarding page to complete profile setup after a short delay
      setTimeout(() => {
        router.push('/onboarding');
      }, 1500);
      
    } catch (error: any) {
      console.error('Error creating account:', error);
      setError(getAuthErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Join Contrast</CardTitle>
          <CardDescription>Create an account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleJoin} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="border-red-600 dark:border-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-2" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {successMessage && (
              <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 text-sm">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={error && !email ? 'border-red-500' : ''}
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={error && !password ? 'border-red-500' : ''}
                autoComplete="new-password"
              />
              
              {/* Password strength indicators */}
              {password.length > 0 && (
                <div className="mt-2 space-y-1 text-xs">
                  <div className="flex items-center">
                    <div className={`h-1 w-1 rounded-full mr-2 ${passwordLength ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span className={passwordLength ? 'text-green-600 dark:text-green-400' : 'text-gray-500'}>
                      At least 6 characters
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className={`h-1 w-1 rounded-full mr-2 ${hasLetter ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span className={hasLetter ? 'text-green-600 dark:text-green-400' : 'text-gray-500'}>
                      Contains letters
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className={`h-1 w-1 rounded-full mr-2 ${hasNumber ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span className={hasNumber ? 'text-green-600 dark:text-green-400' : 'text-gray-500'}>
                      Contains numbers
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className={`h-1 w-1 rounded-full mr-2 ${hasSpecialChar ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span className={hasSpecialChar ? 'text-green-600 dark:text-green-400' : 'text-gray-500'}>
                      Contains special character (recommended)
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                placeholder="Confirm your password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={error && password !== confirmPassword ? 'border-red-500' : ''}
                autoComplete="new-password"
              />
              {confirmPassword && (
                <div className="flex items-center mt-1 text-xs">
                  <div className={`h-1 w-1 rounded-full mr-2 ${passwordsMatch ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={passwordsMatch ? 'text-green-600 dark:text-green-400' : 'text-red-500'}>
                    {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                  </span>
                </div>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#2573F7] hover:bg-blue-600 rounded-full" 
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Join'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link href="/signin" className="text-[#2573F7] hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
} 