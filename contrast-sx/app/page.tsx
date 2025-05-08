"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import AiChatInterface from "@/components/ai-chat-interface"
import SearchInterface from "@/components/search-interface"
import AnimatedBackground from "@/components/animated-background"
import ThemeToggle from "@/components/theme-toggle"
import IntroAnimation from "@/components/intro-animation"
import SidePanel from "@/components/side-panel"
import MinimizedAiChat from "@/components/minimized-ai-chat"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Compass } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isAiChatOpen, setIsAiChatOpen] = useState(false)
  const [isExpandingChat, setIsExpandingChat] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Set loaded state after a delay to allow intro animation to play
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    
    setSearchQuery(query);
    setIsSearching(true);

    // Navigate to explore page with search query
    router.push(`/explore?query=${encodeURIComponent(query)}`);
  }

  const toggleAiChat = () => {
    setIsAiChatOpen(!isAiChatOpen)
  }

  // Animation variants for staggered content reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Transition animations
  const searchBarVariants = {
    initial: { y: 0, scale: 1 },
    searching: { y: -100, scale: 0.9, opacity: 0.5 },
    inHeader: { y: 0, scale: 1, opacity: 1 },
  }

  const contentVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }

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

  const productsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  }

  // Chat box animation variants
  const chatBoxVariants = {
    initial: { scale: 1, opacity: 1 },
    expanding: {
      scale: 1.05,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f8f9fc] dark:bg-matteblack flex flex-col transition-colors duration-300">
      {/* Intro Animation */}
      <IntroAnimation />

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Minimal Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.2 }}
        className="px-8 py-4 flex items-center justify-between bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 relative z-10 transition-colors duration-300"
      >
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

        {/* Search bar moves to header after search */}
        <AnimatePresence mode="wait">
          {hasSearched && (
            <motion.div
              className="flex-1 max-w-xl mx-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <SearchInterface onSearch={handleSearch} initialValue={searchQuery} compact={true} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="text-sm font-medium dark:text-gray-300">
            Sign In
          </Button>
          <Button
            size="sm"
            className="rounded-full bg-deepblue-600 text-white hover:bg-deepblue-700"
          >
            Join
          </Button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 bg-transparent flex overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Initial landing view */}
          {!hasSearched && !isSearching && (
            <motion.div
              className="flex w-full"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
            >
              {/* Left Content - Search - Expanded */}
              <motion.div
                variants={containerVariants}
                className="w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
              >
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white transition-colors duration-300"
                >
                  Find your perfect style match
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-300"
                >
                  Compare clothing across brands with our intelligent search and AI assistant.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="w-full max-w-xl"
                  animate={isSearching ? "searching" : "initial"}
                  variants={searchBarVariants}
                >
                  <SearchInterface onSearch={handleSearch} />
                </motion.div>
              </motion.div>

              {/* Right Content - Chat Interface - Expanded */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 3.5 }}
                className="w-1/2 p-8 md:p-12 lg:p-16 flex items-center justify-center"
              >
                <motion.div
                  className="w-full max-w-xl h-[450px] flex flex-col"
                  variants={chatBoxVariants}
                  animate={isExpandingChat ? "expanding" : "initial"}
                  onAnimationComplete={() => {
                    if (isExpandingChat) {
                      window.location.href = "/chat"
                    }
                  }}
                >
                  <AiChatInterface isFullPage={false} onExpand={() => setIsExpandingChat(true)} />
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* Search results view with side panel */}
          {hasSearched && (
            <motion.div
              className="flex flex-1 overflow-hidden w-full"
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              {/* Side Panel for Filters */}
              <motion.div variants={sidePanelVariants}>
                <SidePanel />
              </motion.div>

              {/* Main Content Area */}
              <motion.div
                className="flex-1 overflow-auto p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">Results for "{searchQuery}"</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Showing items from multiple brands</p>
                </motion.div>

                {/* Product Grid with staggered animation */}
                <motion.div variants={productsVariants}>
                  <ProductGrid />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Minimized AI Chat Button (only visible after search) */}
        <AnimatePresence>
          {hasSearched && <MinimizedAiChat isOpen={isAiChatOpen} toggleChat={toggleAiChat} />}
        </AnimatePresence>
      </main>
    </div>
  )
}
