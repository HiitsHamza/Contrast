'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';
import AuthButtons from '@/components/auth/auth-buttons';
import SearchInterface from '@/components/search-interface';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useWishlist } from '@/lib/wishlist-context';

export default function SiteHeader() {
  const router = useRouter();
  const { user } = useAuth();
  const { wishlistItems } = useWishlist();
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  
  // Check for search query in URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('query');
    if (queryParam) {
      setSearchQuery(queryParam);
      setHasSearched(true);
    }
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    
    setSearchQuery(query);
    router.push(`/explore?query=${encodeURIComponent(query)}`);
  };

  return (
    <header className="px-8 py-4 flex items-center justify-between bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 relative z-10 transition-colors duration-300 sticky top-0">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight dark:text-white mr-8">
          Contrast
        </Link>

        <Link href="/explore">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium flex items-center gap-2 dark:text-gray-300 hover:text-deepblue-600 dark:hover:text-deepblue-400"
          >
            <Compass className="h-4 w-4" />
            Explore
          </Button>
        </Link>
      </div>

      {/* Search bar in header when shown */}
      {hasSearched && (
        <div className="flex-1 max-w-xl mx-4">
          <SearchInterface onSearch={handleSearch} initialValue={searchQuery} compact={true} />
        </div>
      )}

      <div className="flex items-center gap-4">
        {user && (
          <Link href="/wishlist">
            <Button
              variant="ghost"
              size="sm"
              className="relative text-sm font-medium flex items-center gap-2 dark:text-gray-300 hover:text-deepblue-600 dark:hover:text-deepblue-400"
            >
              <Heart className="h-4 w-4" />
              Wishlist
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  {wishlistItems.length}
                </span>
              )}
            </Button>
          </Link>
        )}
        <ThemeToggle />
        <AuthButtons />
      </div>
    </header>
  );
} 