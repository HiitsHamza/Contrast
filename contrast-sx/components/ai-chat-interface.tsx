"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Maximize2, RefreshCw, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import AISuggestionsGrid from "@/components/ai-suggestions-grid"
import { parseAIResponseToSuggestions } from "@/lib/ai-response-parser"
import type { ProductSuggestion } from "@/types/ai-suggestions"
import Link from "next/link"

type Message = {
  id: number
  content: string
  isUser: boolean
  products?: ProductSuggestion[]
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
      products: [],
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showOnlySuggestions, setShowOnlySuggestions] = useState(false)

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
      products: [],
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      console.log("Sending request to AI API...");
      
      // Add timeout to the fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
      
      const response = await fetch(
        "https://price-contrast-api.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            query: input
          }),
          signal: controller.signal
        }
      );
      
      // Clear the timeout
      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text().catch(() => "No response body");
        console.error("API error:", {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        throw new Error(`API call failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      // Add detailed logging to see the exact structure of the response
      console.log("Received API response:", JSON.stringify(data, null, 2));
      
      // Extract the answer text
      const answerText = data.answer || data.response || "Sorry, I couldn't process that."
      
      // Parse product suggestions from the response
      const suggestions = parseAIResponseToSuggestions(data)
      console.log("Extracted suggestions:", suggestions);
      console.log("Number of suggestions:", suggestions.length);

      // Create AI response message with attached products
      const aiMessage: Message = {
        id: messages.length + 2,
        content: answerText,
        isUser: false,
        products: suggestions.length > 0 ? suggestions : [],
      }
      
      // Update messages with the new AI response
      setMessages((prev) => [...prev, aiMessage])
      
    } catch (err) {
      console.error("Chat error:", err);
      
      let errorMessage = "Failed to get a response. Please try again.";
      
      // Provide more specific error messages
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          errorMessage = "Request timed out. The server might be busy or offline.";
        } else {
          errorMessage = `Error: ${err.message}`;
        }
      }
      
      setError(errorMessage);
      
      const aiMessage: Message = {
        id: messages.length + 2,
        content: "Sorry, I couldn't process that. Please try again later.",
        isUser: false,
        products: [],
      }
      setMessages((prev) => [...prev, aiMessage])
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

  // Function to format the response text with enhanced formatting and links
  const formatResponseText = (text: string, products: ProductSuggestion[] = []) => {
    if (!products || products.length === 0) {
      return <p>{text}</p>;
    }

    // Check if it's a product recommendation response
    if (text.toLowerCase().includes('here are some') || 
        text.toLowerCase().includes('suggest') || 
        text.toLowerCase().includes('options') ||
        text.toLowerCase().includes('rs.')) {
      
      // Extract product information from text to create a better structured response
      return (
        <div className="space-y-3">
          <p className="mb-2">{text.split('Here are').shift() || text.split('options').shift() || "Here are some product recommendations:"}</p>
          
          <ul className="space-y-2 mt-3">
            {products.map((product, index) => (
              <li key={index} className="flex flex-col bg-deepblue-700/30 rounded-lg p-2 backdrop-blur-sm">
                <span className="font-medium">{product.name}</span>
                <div className="flex items-center mt-1">
                  <span className="font-bold text-green-300">Rs. {product.price}</span>
                  <span className="mx-2 text-xs text-gray-300">from</span>
                  <span className="text-gray-200">{product.store}</span>
                </div>
                <a 
                  href={product.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-blue-300 hover:text-blue-200 mt-1 transition-colors"
                >
                  View product <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    return <p>{text}</p>;
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Scrollable chat area with fixed height */}
      <div className={`flex-1 ${!isFullPage && !isMinimized ? "h-[350px]" : ""} overflow-hidden`}>
        <ScrollArea ref={scrollAreaRef} className="h-full pr-4">
          {/* Show welcome message if no conversation yet */}
          {messages.length === 0 && (
            <div className="py-6 text-center">
              <h3 className="text-lg font-medium text-gray-200 mb-2">Style Recommendations</h3>
              <p className="text-sm text-gray-400">Ask for clothing suggestions to see product cards here</p>
            </div>
          )}
          
          {/* Always show message history */}
          <div className="space-y-4 py-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isUser ? "bg-gray-600/90 backdrop-blur-sm text-white" : "bg-deepblue-600 text-white"
                  } transition-colors duration-300 break-words`}
                >
                  {message.isUser ? message.content : formatResponseText(message.content, message.products)}
                </div>
              </div>
            ))}
            
            {/* Show loading indicator */}
            {isLoading && (
              <div className="flex justify-center">
                <div className="h-6 w-6 border-2 border-deepblue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Show error message if any */}
            {error && (
              <div className="flex justify-center">
                <div className="px-4 py-2 bg-red-100 text-red-800 rounded-lg">
                  {error}
                </div>
              </div>
            )}
          </div>
          
          {/* Product suggestions grid - we'll display this separately from the messages */}
          {messages.some(m => m.products && m.products.length > 0) && (
            <div className="mt-8 mb-4 bg-black/20 p-4 rounded-xl">
              <h3 className="text-md font-medium text-gray-200 mb-4">Featured Products</h3>
              {messages.map((message, index) => (
                message.products && message.products.length > 0 && (
                  <div key={`products-${message.id}`} className="mt-2">
                    <AISuggestionsGrid suggestions={message.products} />
                  </div>
                )
              ))}
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Input field at bottom */}
      <form onSubmit={handleSendMessage} className="relative mt-4 mb-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={showOnlySuggestions ? "Search for clothing suggestions..." : "Ask about styles, outfits, trends..."}
          className="bg-gray-800/70 backdrop-blur-sm border-gray-700/50 rounded-xl pr-12 text-white focus-visible:ring-deepblue-500 transition-colors duration-300"
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-deepblue-600 text-white hover:bg-deepblue-700 dark:bg-deepblue-600 dark:hover:bg-deepblue-700 transition-colors duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Send className="h-4 w-4" />
          )}
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
