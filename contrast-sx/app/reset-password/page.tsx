'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { getAuthErrorMessage } from '@/lib/auth-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    try {
      setIsLoading(true);
      setError('');
      
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
      
    } catch (error: any) {
      console.error('Error sending password reset email:', error);
      setError(getAuthErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Link href="/signin" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Sign In
          </Link>
          <CardTitle className="text-2xl">Reset Your Password</CardTitle>
          <CardDescription>
            Enter your email address and we'll send you a link to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          {success ? (
            <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
              <AlertDescription>
                Password reset email sent! Check your inbox for instructions to reset your password.
                If you don't see it, check your spam folder.
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-4">
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
              <Button 
                type="submit" 
                className="w-full bg-[#2573F7] hover:bg-blue-600" 
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Remember your password?{' '}
            <Link href="/signin" className="text-[#2573F7] hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
} 