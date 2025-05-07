"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import AnimatedBackground from "@/components/animated-background"
import SidePanel from "@/components/side-panel"
import ProductGrid from "@/components/product-grid"
import MinimizedAiChat from "@/components/minimized-ai-chat"
import SearchInterface from "@/components/search-interface"
import { useRouter } from "next/navigation"

export default function ExplorePage() {
  const router = useRouter()
  const [isAiChatOpen, setIsAiChatOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleAiChat = () => {
    setIsAiChatOpen(!isAiChatOpen)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // You could redirect to search results or filter the current view
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

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f8f9fc] dark:bg-matteblack flex flex-col transition-colors duration-300">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="px-8 py-4 flex items-center justify-between bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 relative z-10 transition-colors duration-300"
      >
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight dark:text-white mr-8">
            Contrast
          </Link>

          <div className="flex items-center gap-2 text-deepblue-600 dark:text-deepblue-400">
            <Compass className="h-5 w-5" />
            <span className="font-medium">Explore</span>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-4">
          <SearchInterface onSearch={handleSearch} compact={true} />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="text-sm font-medium dark:text-gray-300">
            Sign In
          </Button>
          <Button
            size="sm"
            className="rounded-full bg-deepblue-600 text-white hover:bg-deepblue-700 dark:bg-deepblue-600 dark:text-white dark:hover:bg-deepblue-700"
          >
            Join
          </Button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 bg-transparent flex overflow-hidden">
        {/* Side Panel for Filters */}
        <motion.div initial="hidden" animate="visible" variants={sidePanelVariants}>
          <SidePanel />
        </motion.div>

        {/* Main Content Area */}
        <motion.div className="flex-1 overflow-auto p-6" initial="hidden" animate="visible" variants={contentVariants}>
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2 dark:text-white">Explore All Products</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Browse our collection of clothing from top brands
            </p>
          </div>

          {/* Product Grid */}
          <ProductGrid />
        </motion.div>

        {/* Minimized AI Chat Button */}
        <MinimizedAiChat isOpen={isAiChatOpen} toggleChat={toggleAiChat} />
      </main>
    </div>
  )
}
