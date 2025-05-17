import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/lib/auth-context'
import { WishlistProvider } from '@/lib/wishlist-context'
import SiteHeader from '@/components/shared/site-header'
import { Toaster } from '@/components/toaster'

export const metadata: Metadata = {
  title: 'Contrast - Find Your Perfect Style Match',
  description: 'Compare clothing across brands with our intelligent search and AI assistant.',
  generator: 'Contrast',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[#f8f9fc] dark:bg-gray-950 transition-colors">
        <AuthProvider>
          <WishlistProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <SiteHeader />
              <main className="flex-1">
                {children}
              </main>
              <Toaster />
            </ThemeProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
