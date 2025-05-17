'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth, signInWithEmailAndPassword } from '@/lib/firebase';
import { getAuthErrorMessage } from '@/lib/auth-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!password) {
      setError('Password is required');
      return;
    }
    
    try {
      setIsLoading(true);
      setError('');
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error: any) {
      console.error('Error signing in:', error);
      setError(getAuthErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="border-red-600 dark:border-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-2" />
                <AlertDescription>{error}</AlertDescription>
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
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/reset-password" className="text-xs text-[#2573F7] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={error && !password ? 'border-red-500' : ''}
                autoComplete="current-password"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#2573F7] hover:bg-blue-600" 
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/join" className="text-[#2573F7] hover:underline">
              Join now
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
} 