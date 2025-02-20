"use client"
import { useState } from "react"
import Link from "next/link"
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const { user } = useUser()

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
                <DropdownMenuItem className="font-bold">Hi, {user.fullName || user.email}!</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </header>
  )
}