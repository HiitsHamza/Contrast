'use client';

import { useState, useEffect } from 'react';
import { useWishlist } from '@/lib/wishlist-context';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Heart, RefreshCw, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import AnimatedBackground from '@/components/animated-background';
import Image from 'next/image';
import { toast } from '@/components/ui/use-toast';

export default function WishlistPage() {
  const { wishlistItems, isLoading, removeItem, refreshWishlist, testConnection } = useWishlist();
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [showBackground, setShowBackground] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [testing, setTesting] = useState(false);

  // Hide background after loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/signin');
    }
  }, [user, authLoading, router]);

  // Debug the wishlist items
  useEffect(() => {
    if (wishlistItems.length > 0) {
      console.log('Wishlist items:', wishlistItems);
    }
  }, [wishlistItems]);

  // Handle manual refresh
  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await refreshWishlist();
      toast({
        title: "Wishlist refreshed",
        description: `Found ${wishlistItems.length} items in your wishlist`,
        variant: "default",
      });
    } catch (error) {
      console.error('Error refreshing wishlist:', error);
      toast({
        title: "Refresh failed",
        description: "There was an error refreshing your wishlist",
        variant: "destructive",
      });
    } finally {
      setRefreshing(false);
    }
  };

  // Handle test connection
  const handleTestConnection = async () => {
    setTesting(true);
    try {
      const result = await testConnection();
      toast({
        title: result ? "Connection successful" : "Connection failed",
        description: result 
          ? "Your Firestore connection is working properly" 
          : "There was an issue connecting to Firestore",
        variant: result ? "default" : "destructive",
      });
    } catch (error) {
      console.error('Connection test error:', error);
      toast({
        title: "Connection test failed",
        description: "There was an error testing the connection",
        variant: "destructive",
      });
    } finally {
      setTesting(false);
    }
  };

  if (authLoading) {
    return <WishlistSkeleton />;
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col relative bg-[#f8f9fc] dark:bg-matteblack transition-colors duration-300">
      {showBackground && <AnimatedBackground />}

      <div className="w-full max-w-7xl mx-auto p-6 md:p-8 relative z-10">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-red-500 fill-red-500" />
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Wishlist</h1>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2" 
                onClick={handleTestConnection}
                disabled={testing}
              >
                <Wifi className={`h-4 w-4 ${testing ? 'animate-pulse' : ''}`} />
                Test Connection
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2" 
                onClick={handleRefresh}
                disabled={refreshing || isLoading}
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved to your wishlist
          </p>
        </header>

        {isLoading ? (
          <WishlistSkeleton />
        ) : wishlistItems.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Start exploring and save items you love
            </p>
            <Link href="/explore">
              <Button className="bg-[#2573F7] hover:bg-blue-600">
                Explore Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <WishlistCard 
                key={item.id} 
                item={item} 
                onRemove={() => removeItem(item.id)} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function WishlistCard({ item, onRemove }: { item: any, onRemove: () => void }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${item.id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden cursor-pointer group">
      <div className="relative h-64 w-full" onClick={handleClick}>
        <Image 
          src={item.imageUrl || '/placeholder.svg'} 
          alt={item.name} 
          fill 
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 dark:bg-black/60 flex items-center justify-center"
          aria-label="Remove from wishlist"
        >
          <Heart className="h-5 w-5 text-red-500 fill-red-500" />
        </button>
      </div>
      <div className="p-4" onClick={handleClick}>
        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">{item.brand}</div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">{item.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900 dark:text-white">Rs. {item.price.toLocaleString()}</span>
          {item.originalPrice && (
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              Rs. {item.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function WishlistSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 md:p-8">
      <div className="mb-8">
        <Skeleton className="h-8 w-48 mb-2" />
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <Skeleton className="h-60 w-full" />
            <div className="p-4">
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <Skeleton className="h-6 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 