"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"

type Message = {
  id: number
  content: string
  isUser: boolean
}

interface AiChatInterfaceProps {
  isMinimized?: boolean
  isFullPage?: boolean
  onExpand?: () => void
}

export default function AiChatInterface({ isMinimized = false, isFullPage = false, onExpand }: AiChatInterfaceProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi there! I'm your style assistant. How can I help you find the perfect outfit today?",
      isUser: false,
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      isUser: true,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL || "https://price-contrast-api.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            query: input,
            databaseKey: process.env.DATABASE_URL
          }),
        }
      )

      if (!response.ok) {
        throw new Error("API call failed")
      }

      const data = await response.json()
      const aiMessage: Message = {
        id: messages.length + 2,
        content: data.response || "Sorry, I couldn't process that.",
        isUser: false,
      }
      setMessages((prev) => [...prev, aiMessage])
    } catch (err) {
      setError("Failed to get a response. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleExpandChat = () => {
    if (onExpand) {
      onExpand()
    } else {
      router.push("/chat")
    }
  }

  // Check if we're already on the chat page
  const isOnChatPage = pathname === "/chat"

  return (
    <div className="flex flex-col h-full relative">
      {/* Scrollable chat area with fixed height */}
      <div className={`flex-1 ${!isFullPage && !isMinimized ? "h-[350px]" : ""} overflow-hidden`}>
        <ScrollArea ref={scrollAreaRef} className="h-full pr-4">
          <div className="space-y-4 py-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isUser ? "bg-gray-600/90 backdrop-blur-sm text-white" : "bg-deepblue-600 text-white"
                  } transition-colors duration-300 break-words`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Input field at bottom */}
      <form onSubmit={handleSendMessage} className="relative mt-4 mb-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about styles, outfits, trends..."
          className="bg-gray-800/70 backdrop-blur-sm border-gray-700/50 rounded-xl pr-12 text-white focus-visible:ring-deepblue-500 transition-colors duration-300"
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-deepblue-600 text-white hover:bg-deepblue-700 dark:bg-deepblue-600 dark:hover:bg-deepblue-700 transition-colors duration-300"
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>

      {/* Expand button - only show on landing page (not in minimized chat or full page) */}
      {!isMinimized && !isFullPage && !isOnChatPage && (
        <div className="flex justify-end mt-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleExpandChat}
              variant="ghost"
              size="sm"
              className="text-xs text-gray-400 hover:text-deepblue-400 flex items-center gap-1 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 rounded-lg px-3 py-1"
            >
              <span>Expand</span>
              <Maximize2 className="h-3 w-3" />
              <span className="sr-only">Expand chat</span>
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
