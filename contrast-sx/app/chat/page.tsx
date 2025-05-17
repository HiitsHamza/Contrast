"use client"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Minimize2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import AiChatInterface from "@/components/ai-chat-interface"

export default function ChatPage() {
  const router = useRouter()

  const handleMinimize = () => {
    // Navigate back to the landing page
    router.push("/")
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f8f9fc] dark:bg-matteblack flex flex-col transition-colors duration-300">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <main className="flex-1 relative z-10 bg-transparent flex overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="w-full max-w-4xl mx-auto p-6 md:p-8"
        >
          <div className="bg-black/30 backdrop-blur-md rounded-xl shadow-lg border border-gray-800/30 p-6 h-[calc(100vh-180px)] relative">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-deepblue-600 flex items-center justify-center mr-4">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white">Style Assistant</h1>
                <p className="text-sm text-gray-300">Ask me anything about fashion, styles, and clothing comparisons</p>
              </div>

              {/* Minimize button */}
              <Button
                onClick={handleMinimize}
                variant="ghost"
                size="sm"
                className="ml-auto text-xs text-gray-300 hover:text-deepblue-400 flex items-center gap-1 transition-all duration-300 hover:scale-105 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 rounded-lg"
              >
                <span>Minimize</span>
                <Minimize2 className="h-3 w-3" />
                <span className="sr-only">Minimize chat</span>
              </Button>
            </div>

            <div className="h-[calc(100%-70px)]">
              <AiChatInterface isFullPage={true} />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
