"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Maximize2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import AISuggestionsGrid from "@/components/ai-suggestions-grid"
import { parseAIResponseToSuggestions } from "@/lib/ai-response-parser"
import type { ProductSuggestion } from "@/types/ai-suggestions"

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
  const [productSuggestions, setProductSuggestions] = useState<ProductSuggestion[]>([])
  const [apiHealthCheckFailed, setApiHealthCheckFailed] = useState(false)
  const [showFallbackInfo, setShowFallbackInfo] = useState(false)

  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Check API health on mount
  useEffect(() => {
    const checkApiHealth = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch(
          "https://price-contrast-api.onrender.com/api/health",
          { signal: controller.signal }
        );
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          setApiHealthCheckFailed(true);
        }
      } catch (err) {
        console.error("API health check failed:", err);
        setApiHealthCheckFailed(true);
      }
    };
    
    checkApiHealth();
  }, []);

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
    // Clear previous suggestions
    setProductSuggestions([])

    // If we know the API is down, use fallback mode
    if (apiHealthCheckFailed) {
      setTimeout(() => {
        const fallbackResponse = getFallbackResponse(input);
        const aiMessage: Message = {
          id: messages.length + 2,
          content: fallbackResponse.message,
          isUser: false,
        }
        setMessages((prev) => [...prev, aiMessage]);
        
        if (fallbackResponse.suggestions && fallbackResponse.suggestions.length > 0) {
          setProductSuggestions(fallbackResponse.suggestions);
        }
        
        setIsLoading(false);
        setShowFallbackInfo(true);
      }, 1000);
      return;
    }

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
      console.log("Received API response:", data);
      
      // Extract the answer text
      const answerText = data.answer || data.response || "Sorry, I couldn't process that."
      
      const aiMessage: Message = {
        id: messages.length + 2,
        content: answerText,
        isUser: false,
      }
      setMessages((prev) => [...prev, aiMessage])
      
      // Parse product suggestions from the response
      const suggestions = parseAIResponseToSuggestions(data)
      console.log("Extracted suggestions:", suggestions)
      setProductSuggestions(suggestions)
      
    } catch (err) {
      console.error("Chat error:", err);
      
      let errorMessage = "Failed to get a response. Please try again.";
      
      // Provide more specific error messages
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          errorMessage = "Request timed out. The server might be busy or offline.";
          setApiHealthCheckFailed(true); // Mark API as down after timeout
        } else {
          errorMessage = `Error: ${err.message}`;
        }
      }
      
      setError(errorMessage);
      
      const aiMessage: Message = {
        id: messages.length + 2,
        content: "Sorry, I couldn't process that. Please try again later.",
        isUser: false,
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

  // Function to get fallback responses when API is unavailable
  const getFallbackResponse = (query: string) => {
    const normalizedQuery = query.toLowerCase();
    
    // Default fallback suggestions
    const fallbackSuggestions: ProductSuggestion[] = [
      {
        id: 1,
        name: "White T-shirt",
        price: "1290.00",
        image: "https://outfitters.com.pk/cdn/shop/files/F0109125725_8.jpg",
        url: "https://outfitters.com.pk/collections/men-activewear-sale/products/f0109-125",
        store: "Outfitters"
      },
      {
        id: 2,
        name: "Black Jeans",
        price: "2490.00",
        image: "https://outfitters.com.pk/cdn/shop/files/F0602103801_1.jpg",
        url: "https://outfitters.com.pk/collections/men-shirt-sale/products/f0602-103",
        store: "Outfitters"
      }
    ];
    
    // Simple keyword matching for fallback mode
    if (normalizedQuery.includes("shirt") || normalizedQuery.includes("top")) {
      return {
        message: "I'm currently operating in offline mode due to server issues, but I can suggest some shirts for you! Check these out:",
        suggestions: fallbackSuggestions.filter(item => item.name.toLowerCase().includes("shirt"))
      };
    }
    
    if (normalizedQuery.includes("jeans") || normalizedQuery.includes("pants") || normalizedQuery.includes("bottoms")) {
      return {
        message: "I'm currently operating in offline mode, but I can show you some popular jeans and pants:",
        suggestions: fallbackSuggestions.filter(item => 
          item.name.toLowerCase().includes("jeans") || 
          item.name.toLowerCase().includes("pants"))
      };
    }
    
    // Generic fallback for any other query
    return {
      message: "I'm currently in offline mode due to server connectivity issues. Here are some popular items you might like:",
      suggestions: fallbackSuggestions
    };
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* API Status Indicator */}
      {apiHealthCheckFailed && (
        <div className="bg-amber-100 text-amber-800 px-3 py-1 text-xs rounded-md mb-2 flex items-center">
          <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
          Server connectivity issues. Using offline mode.
        </div>
      )}
      
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
            
            {/* Show fallback mode info */}
            {showFallbackInfo && (
              <div className="flex justify-center my-2">
                <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs">
                  Operating in offline mode with limited functionality
                </div>
              </div>
            )}
          </div>
          
          {/* Product suggestions */}
          {productSuggestions.length > 0 && (
            <div className="mt-8 mb-4">
              <AISuggestionsGrid suggestions={productSuggestions} />
            </div>
          )}
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
