"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { cartItems } from "@/lib/data"
import { formatCurrency } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import type { CartItem } from "@/lib/types"

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(cartItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => total + item.product.currentPrice * item.quantity, 0)

  // Calculate shipping (free over $100)
  const shipping = subtotal > 100 ? 0 : 10

  // Calculate tax (10%)
  const tax = subtotal * 0.1

  // Calculate total
  const total = subtotal + shipping + tax

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      {items.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 border rounded-md p-4">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <Link
                          href={`/product/${item.product.id}`}
                          className="font-normal hover:text-primary transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                      </div>
                      <p className="font-normal">
                        {formatCurrency(item.product.currentPrice * item.quantity, item.product.currency)}
                      </p>
                    </div>

                    <div className="mt-2 text-sm text-muted-foreground">
                      {item.size && <p>Size: {item.size}</p>}
                      {item.color && <p>Color: {item.color}</p>}
                    </div>

                    <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-r-none"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                          className="h-8 w-12 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-l-none"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-xs text-muted-foreground"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="mr-1 h-3 w-3" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="border rounded-md p-6 space-y-6 sticky top-24">
              <h2 className="text-lg font-normal">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(subtotal, "USD")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : formatCurrency(shipping, "USD")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>{formatCurrency(tax, "USD")}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatCurrency(total, "USD")}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full rounded-md" size="lg">
                  Checkout
                </Button>
                <Button variant="outline" className="w-full rounded-md" asChild>
                  <Link href="/categories">Continue Shopping</Link>
                </Button>
              </div>

              <div className="pt-4">
                <h3 className="text-sm font-medium mb-2">Accepted Payment Methods</h3>
                <div className="flex gap-2">
                  <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-xs">Visa</div>
                  <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-xs">MC</div>
                  <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-xs">Amex</div>
                  <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-xs">PayPal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-16 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="mt-6 text-2xl font-light">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">Looks like you haven't added any products to your cart yet.</p>
          <Button className="mt-8 rounded-md" size="lg" asChild>
            <Link href="/categories">Start Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
