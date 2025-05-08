"use client"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Maximize2 } from "lucide-react"
import { useRouter } from "next/navigation"
import AiChatInterface from "@/components/ai-chat-interface"
import { Button } from "@/components/ui/button"

interface MinimizedAiChatProps {
  isOpen: boolean
  toggleChat?: () => void
  onToggle?: () => void
}

export default function MinimizedAiChat({ isOpen, toggleChat, onToggle }: MinimizedAiChatProps) {
  const router = useRouter()
  
  // Support both prop naming patterns
  const handleToggle = toggleChat || onToggle || (() => {})

  const handleExpandChat = () => {
    // Add a small delay to allow for animation
    setTimeout(() => {
      router.push("/chat")
    }, 300)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-deepblue-600 text-white shadow-lg flex items-center justify-center z-30 hover:bg-deepblue-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.6,
        }}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-matteblack rounded-xl shadow-xl overflow-hidden z-30 border border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-deepblue-600 flex items-center justify-center mr-3">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Style Assistant</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Powered by AI</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleExpandChat}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Maximize2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">Expand chat</span>
                </Button>
                <button
                  onClick={handleToggle}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="h-[calc(100%-60px)] p-4">
              <AiChatInterface isMinimized={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
