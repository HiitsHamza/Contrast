"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingBag, Heart, User, Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useDebounce } from "@/lib/hooks"
import { fetchProducts } from "@/lib/api"
import { Product } from "@/lib/types"
import { useAuth } from "@/lib/contexts/auth-context"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()
  const { setTheme, theme } = useTheme()
  const debouncedSearch = useDebounce(searchQuery, 300)
  const { user, logout } = useAuth()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle click outside search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle search
  useEffect(() => {
    const searchProducts = async () => {
      if (debouncedSearch) {
        try {
          const products = await fetchProducts()
          const filtered = products.filter(product => 
            product.product_name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            product.stores?.store_name.toLowerCase().includes(debouncedSearch.toLowerCase())
          )
          setSearchResults(filtered.slice(0, 5)) // Show only first 5 results
          setShowResults(true)
        } catch (error) {
          console.error('Error fetching search results:', error)
          setSearchResults([])
        }
      } else {
        setSearchResults([])
        setShowResults(false)
      }
    }

    searchProducts()
  }, [debouncedSearch])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery) {
      const params = new URLSearchParams()
      params.set("q", searchQuery)
      router.push(`/categories?${params.toString()}`)
      setShowResults(false)
    }
  }

  const handleProductSelect = (productId: string) => {
    router.push(`/product/${productId}`)
    setShowResults(false)
    setSearchQuery("")
  }

  if (!mounted) {
    return (
      <header className="h-16 sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-light tracking-tight">CONTRAST</span>
          </Link>
          <div className="w-9 h-9"></div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-light tracking-tight gradient-text">CONTRAST</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className={`text-sm transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary font-medium" : "text-foreground/80"
              }`}
            >
              Home
            </Link>
            <Link
              href="/categories"
              className={`text-sm transition-colors hover:text-primary ${
                pathname === "/categories" ? "text-primary font-medium" : "text-foreground/80"
              }`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`text-sm transition-colors hover:text-primary ${
                pathname === "/about" ? "text-primary font-medium" : "text-foreground/80"
              }`}
            >
              About
            </Link>
          </nav>

          {/* Search, Cart, Wishlist, Account */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:block relative" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative w-[200px]">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 h-9 w-full bg-white/80 dark:bg-gray-800/80"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </form>
              
              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 py-2 bg-background border rounded-md shadow-lg z-50">
                  {searchResults.map((product) => (
                    <button
                      key={product.product_id}
                      className="w-full px-4 py-3 text-left hover:bg-muted/50 flex items-center gap-4"
                      onClick={() => handleProductSelect(product.product_id.toString())}
                    >
                      <img 
                        src={product.image_url} 
                        alt={product.product_name}
                        className="h-16 w-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="font-medium text-base truncate">{product.product_name}</span>
                        <span className="text-sm text-muted-foreground mt-1">
                          {product.stores?.store_name} • Rs. {product.product_prices[0]?.price.toLocaleString()}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  {theme === "dark" ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/lists">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Heart className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="h-9 w-9 relative">
                <ShoppingBag className="h-[1.2rem] w-[1.2rem]" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium flex items-center justify-center text-white">
                  3
                </span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>

            {/* Account Button */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || 'User'} className="h-8 w-8 rounded-full" />
                    ) : (
                      <User className="h-[1.2rem] w-[1.2rem]" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.displayName}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuItem onClick={() => logout()}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth/login">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <User className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Account</span>
                </Button>
              </Link>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-[1.2rem] w-[1.2rem]" /> : <Menu className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t blue-gradient-bg">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <div className="relative" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 w-full bg-white/80 dark:bg-gray-800/80"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </form>

              {/* Mobile Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 py-2 bg-background border rounded-md shadow-lg z-50">
                  {searchResults.map((product) => (
                    <button
                      key={product.product_id}
                      className="w-full px-4 py-3 text-left hover:bg-muted/50 flex items-center gap-4"
                      onClick={() => handleProductSelect(product.product_id.toString())}
                    >
                      <img 
                        src={product.image_url} 
                        alt={product.product_name}
                        className="h-16 w-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="font-medium text-base truncate">{product.product_name}</span>
                        <span className="text-sm text-muted-foreground mt-1">
                          {product.stores?.store_name} • Rs. {product.product_prices[0]?.price.toLocaleString()}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                className={`text-base transition-colors hover:text-primary ${
                  pathname === "/" ? "text-primary font-medium" : "text-foreground/80"
                }`}
              >
                Home
              </Link>
              <Link
                href="/categories"
                className={`text-base transition-colors hover:text-primary ${
                  pathname === "/categories" ? "text-primary font-medium" : "text-foreground/80"
                }`}
              >
                Products
              </Link>
              <Link
                href="/about"
                className={`text-base transition-colors hover:text-primary ${
                  pathname === "/about" ? "text-primary font-medium" : "text-foreground/80"
                }`}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
