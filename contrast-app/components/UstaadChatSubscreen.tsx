"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product/product-card";
import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function UstaadChatSubscreen() {
  const [messages, setMessages] = useState<
    { user: string; bot: string; products?: Product[] }[]
  >([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { user: input, bot: "", products: [] }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL ||
          "https://price-contrast-api.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: input }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "API request failed");
      }
      const data = await response.json();
      if (!data.answer) throw new Error("Invalid response format");

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].bot = data.answer;
        updated[updated.length - 1].products = data.context;
        return updated;
      });
    } catch (error) {
      console.error("Ustaad error:", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].bot = "Sorry, something went wrong!";
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Always render the floating button fixed to the viewport
  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full p-0 bg-blue-600 text-white shadow-lg hover:bg-blue-700 z-[100]"
        onClick={() => setIsOpen(true)}
        style={{ zIndex: 100 }}
      >
        <Image
          src="/weight-scale.png"
          alt="Ustaad"
          width={32}
          height={32}
          className="invert"
        />
        <span className="sr-only">Open Ustaad</span>
      </Button>
    );
  }

  // The chat subscreen is also fixed to the viewport (not draggable)
  return (
    <div className="fixed bottom-24 right-6 w-96 max-w-[95vw] h-[500px] bg-gray-900 text-gray-100 rounded-xl shadow-2xl flex flex-col overflow-hidden z-[100] animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Image
            src="/weight-scale.png"
            alt="Ustaad"
            width={24}
            height={24}
            className="invert"
          />
          <h3 className="text-lg font-semibold text-blue-400">Ustaad</h3>
        </div>
        <div className="flex space-x-2">
          <Link href="/ustaad">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              tabIndex={-1}
            >
              <Maximize2 className="h-4 w-4" />
              <span className="sr-only">Full Screen</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 animate-fade-in">
            <p className="text-sm">Ask Ustaad anything about products!</p>
            <p className="text-xs mt-1">
              Try: "Show me black shirts" or "Most expensive items"
            </p>
          </div>
        )}
        {messages.map((msg, index) => (
          <div key={index} className="space-y-2 animate-slide-up">
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs text-sm shadow-md transform transition-transform duration-300 hover:scale-105">
                <strong>You:</strong> {msg.user}
              </div>
            </div>
            {msg.bot && (
              <div className="flex items-start space-x-2">
                <Image
                  src="/weight-scale.png"
                  alt="Ustaad"
                  width={20}
                  height={20}
                  className="mt-2 invert"
                />
                <div className="space-y-2">
                  <div className="bg-gray-800 text-gray-100 rounded-lg p-3 max-w-xs text-sm shadow-md transform transition-transform duration-300 hover:scale-105">
                    <strong>Ustaad:</strong> {msg.bot}
                  </div>
                  {msg.products && msg.products.length > 0 && (
                    <div className="grid grid-cols-1 gap-2">
                      {msg.products.map((product) => (
                        <ProductCard
                          key={product.product_id}
                          product={product}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 text-gray-400 animate-pulse">
            <Image
              src="/weight-scale.png"
              alt="Ustaad"
              width={20}
              height={20}
              className="invert"
            />
            <span>Ustaad is thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-gray-800 border-t border-gray-700 flex gap-2"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Ustaad..."
          className="flex-1 bg-gray-700 border-gray-600 text-gray-100 rounded-full focus:ring-2 focus:ring-blue-500 text-sm"
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="icon"
          className="rounded-full bg-blue-600 hover:bg-blue-700"
          disabled={isLoading}
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
}