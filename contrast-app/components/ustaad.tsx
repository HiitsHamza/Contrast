"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product/product-card";
import { Product } from "@/lib/types";
import Image from "next/image";

export default function UstaadChatPage() {
  const [messages, setMessages] = useState<
    { user: string; bot: string; products?: Product[] }[]
  >([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
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

      console.log("API Response Data:", {
        answer: data.answer,
        contextSample: data.context?.[0] ? {
          id: data.context[0].product_id,
          name: data.context[0].product_name,
          imageUrls: data.context[0].image_urls,
          store: data.context[0].stores
        } : null,
        productsCount: data.context?.length
      });

      // Transform the data to ensure image_urls is always an array
      const transformedProducts = data.context?.map((product: any) => {
        console.log("Processing product:", {
          id: product.product_id,
          name: product.product_name,
          rawImageUrls: product.image_urls,
          isArray: Array.isArray(product.image_urls),
          type: typeof product.image_urls
        });

        let processedImageUrls;
        if (Array.isArray(product.image_urls)) {
          processedImageUrls = product.image_urls.filter((url: string) => url && typeof url === 'string');
        } else if (typeof product.image_urls === 'string') {
          processedImageUrls = [product.image_urls];
        } else if (product.image_url && typeof product.image_url === 'string') {
          processedImageUrls = [product.image_url];
        } else {
          processedImageUrls = [];
        }

        console.log("Processed image URLs:", processedImageUrls);

        return {
          ...product,
          image_urls: processedImageUrls
        };
      }) as Product[];

      // Filter out inactive products
      const activeProducts = transformedProducts?.filter(product => product.is_active) || [];

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].bot = data.answer;
        updated[updated.length - 1].products = activeProducts;
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

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8 animate-fade-in">
        <Image
          src="/weight-scale.png"
          alt="Ustaad"
          width={60}
          height={60}
          className="invert animate-pulse"
        />
        <h1 className="text-4xl font-bold text-blue-400">Ustaad</h1>
      </div>

      {/* Chat Container */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-2xl flex flex-col h-[80vh] overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 animate-fade-in">
              <p className="text-lg">Welcome to Ustaad!</p>
              <p className="text-sm mt-2">
                Ask about products, like: "Show me black shirts!" or "What are the most expensive items?"
              </p>
            </div>
          )}
          {messages.map((msg, index) => (
            <div key={`message-${index}-${Date.now()}`} className="space-y-4 animate-slide-up">
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-lg p-4 max-w-md text-sm shadow-md transform transition-transform duration-300 hover:scale-105">
                  <strong>You:</strong> {msg.user}
                </div>
              </div>
              {msg.bot && (
                <div className="flex items-start space-x-3">
                  <Image
                    src="/weight-scale.png"
                    alt="Ustaad"
                    width={30}
                    height={30}
                    className="mt-2 invert"
                  />
                  <div className="space-y-2">
                    <div className="bg-gray-700 text-gray-100 rounded-lg p-4 max-w-md text-sm shadow-md transform transition-transform duration-300 hover:scale-105">
                      <strong>Ustaad:</strong> {msg.bot}
                    </div>
                    {msg.products && msg.products.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {msg.products.map((product) => (
                          <ProductCard key={product.product_id} product={product} />
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
                width={30}
                height={30}
                className="invert"
              />
              <span>Ustaad is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-gray-800 border-t border-gray-700 flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Ustaad..."
            className="flex-1 bg-gray-700 border-gray-600 text-gray-100 rounded-full focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            className="rounded-full bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}