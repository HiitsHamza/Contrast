"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Search for items, brands, or styles..."
          className="pr-12 rounded-full border-gray-300 bg-white h-12 pl-4 shadow-sm focus-visible:ring-gray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit" size="icon" className="absolute right-1 rounded-full h-10 w-10">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </form>
  )
}
