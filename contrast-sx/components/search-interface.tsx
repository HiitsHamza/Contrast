"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

interface SearchInterfaceProps {
  onSearch?: (query: string) => void
  initialValue?: string
  compact?: boolean
}

export default function SearchInterface({ onSearch, initialValue = "", compact = false }: SearchInterfaceProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue)
  
  // Update search query when initialValue changes
  useEffect(() => {
    setSearchQuery(initialValue)
  }, [initialValue])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  return (
    <motion.div
      className="w-full"
      initial={compact ? { scale: 0.95, opacity: 0 } : { scale: 1 }}
      animate={compact ? { scale: 1, opacity: 1 } : { scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSearch} className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Search className="h-5 w-5" />
        </div>
        <Input
          type="text"
          placeholder="Search for items, brands, styles..."
          className={`pl-10 pr-4 ${
            compact ? "py-2 h-10" : "py-6 h-14"
          } rounded-xl border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 dark:text-white shadow-sm focus-visible:ring-deepblue-500 dark:focus-visible:ring-deepblue-500 transition-colors duration-300 w-full`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
          type="submit" 
          className="sr-only"
          aria-label="Search"
        >
          Search
        </button>
      </form>
    </motion.div>
  )
}
