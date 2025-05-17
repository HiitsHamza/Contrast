"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Compass } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import SidePanel from "@/components/side-panel"
import ProductGrid from "@/components/product-grid"
import MinimizedAiChat from "@/components/minimized-ai-chat"
import SearchInterface from "@/components/search-interface"
import { useRouter, useSearchParams } from "next/navigation"
import { searchProducts } from "@/lib/product-service"
import type { Product } from "@/types/product"

export default function ExplorePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isAiChatOpen, setIsAiChatOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showBackground, setShowBackground] = useState(true)

  // Get the search query from URL parameters and update when it changes
  useEffect(() => {
    const query = searchParams.get("query") || ""
    if (query !== searchQuery) {
      setSearchQuery(query)
    }
  }, [searchParams, searchQuery])

  // Hide the background after a delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setSearchQuery(query)
      // Update URL with the search query without full page reload
      router.push(`/explore?query=${encodeURIComponent(query)}`, { scroll: false })
    }
  }

  // Animation variants
  const sidePanelVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.2,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col relative bg-[#f8f9fc] dark:bg-matteblack transition-colors duration-300">
      {/* Animated background (hidden after initial load) */}
      {showBackground && <AnimatedBackground />}

      {/* Main content */}
      <div className="flex-1 flex">
        {/* Side panel */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sidePanelVariants}
          className="w-full md:w-64 lg:w-80 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 transition-colors duration-300"
        >
          <SidePanel />
        </motion.div>

        {/* Main area with products */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Title and search section */}
            <div className="pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2 mb-6">
                <Compass className="h-7 w-7 text-deepblue-600" />
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Explore Products</h1>
              </div>

              {/* Search box */}
              <SearchInterface
                onSearch={handleSearch}
                initialValue={searchQuery}
              />
            </div>

            {/* Product grid with pagination */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProductGrid searchQuery={searchQuery} />
            </motion.div>
          </div>
        </main>
      </div>

      {/* AI Chat */}
      <MinimizedAiChat
        isOpen={isAiChatOpen}
        onToggle={() => setIsAiChatOpen(!isAiChatOpen)}
      />
    </div>
  )
}
