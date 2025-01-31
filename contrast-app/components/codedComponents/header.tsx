"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock user type
type User = {
  email: string
  displayName: string
}

// Mock authentication functions
const mockSignIn = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    if (email === "hamza@test.com" && password === "hamza123") {
      const user = { email: "hamza@test.com", displayName: "Hamza" }
      localStorage.setItem("user", JSON.stringify(user))
      resolve(user)
    } else {
      reject(new Error("Invalid credentials"))
    }
  })
}

const mockSignOut = (): Promise<void> => {
  return Promise.resolve()
}

function LoginForm({ onClose, setUser }: { onClose: () => void; setUser: (user: User | null) => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const user = await mockSignIn(email, password)
      setUser(user) // Set the user state
      onClose()
    } catch (error: any) {
      setError("Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          className="w-full"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Log in"}
      </Button>
    </form>
  )
}

function RegisterForm({ onClose }: { onClose: () => void }) {
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("Registration is currently not available.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-muted-foreground">Registration is currently not available.</p>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full" disabled>
        Register
      </Button>
    </form>
  )
}

export default function Header() {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthDialogOpen, setAuthDialogOpen] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = async () => {
    try {
      await mockSignOut()
      setUser(null)
      localStorage.removeItem("user")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold text-primary">
            Contrast
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors"
          >
            Home
          </Link>
          <Link
            href="/product-demo"
            className="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors"
          >
            Product
          </Link>
          <Link
            href="/explore"
            className="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors"
          >
            Explore
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary/10 transition-colors">
                  <span className="sr-only">User account</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="font-bold">Hi, {user.displayName || user.email}!</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Dialog open={isAuthDialogOpen} onOpenChange={setAuthDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost">Log in / Register</Button>
              </DialogTrigger>
              <DialogContent className="fixed z-50 w-full max-w-[425px] rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <DialogHeader>
                  <DialogTitle>Authentication</DialogTitle>
                  <DialogDescription>Log in to your account or create a new one.</DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <LoginForm onClose={() => setAuthDialogOpen(false)} setUser={setUser} />
                  </TabsContent>
                  <TabsContent value="register">
                    <RegisterForm onClose={() => setAuthDialogOpen(false)} />
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  )
}

