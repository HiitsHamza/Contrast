'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';

export default function AuthButtons() {
  const { user, signOut } = useAuth();

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">{user.email?.split('@')[0]}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link href="/signin">
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
      </Link>
      <Link href="/join">
        <Button className="bg-[#2573F7] hover:bg-blue-600 text-white rounded-full px-6">
          Join
        </Button>
      </Link>
    </div>
  );
} 