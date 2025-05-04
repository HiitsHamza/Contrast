"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Plus, Trash2 } from "lucide-react"
import { lists } from "@/lib/data"
import { formatCurrency } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { List } from "@/lib/types"

export default function ListsPage() {
  const [userLists, setUserLists] = useState<List[]>(lists)
  const [newListName, setNewListName] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const createNewList = () => {
    if (!newListName.trim()) return

    const newList: List = {
      id: `list-${userLists.length + 1}`,
      name: newListName,
      userId: "user-1",
      products: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    setUserLists([...userLists, newList])
    setNewListName("")
    setIsDialogOpen(false)
  }

  const removeList = (id: string) => {
    setUserLists(userLists.filter((list) => list.id !== id))
  }

  const removeProductFromList = (listId: string, productId: string) => {
    setUserLists(
      userLists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            products: list.products.filter((product) => product.id !== productId),
            updatedAt: new Date().toISOString(),
          }
        }
        return list
      }),
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Lists</h1>
          <p className="text-muted-foreground mt-1">Create and manage your product lists</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New List
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New List</DialogTitle>
              <DialogDescription>Give your list a name to help you organize your favorite products.</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Input placeholder="List name" value={newListName} onChange={(e) => setNewListName(e.target.value)} />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={createNewList} disabled={!newListName.trim()}>
                Create List
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {userLists.length > 0 ? (
        <Tabs defaultValue={userLists[0].id} className="mt-8">
          <TabsList className="w-full justify-start overflow-x-auto">
            {userLists.map((list) => (
              <TabsTrigger key={list.id} value={list.id}>
                {list.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {userLists.map((list) => (
            <TabsContent key={list.id} value={list.id} className="mt-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-medium">{list.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {list.products.length} {list.products.length === 1 ? "product" : "products"}
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={() => removeList(list.id)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete List
                </Button>
              </div>

              {list.products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {list.products.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8 rounded-full"
                          onClick={() => removeProductFromList(list.id, product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove from list</span>
                        </Button>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">
                          <Link href={`/product/${product.id}`} className="hover:text-primary transition-colors">
                            {product.name}
                          </Link>
                        </CardTitle>
                        <CardDescription>{product.brand}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">
                            {formatCurrency(product.currentPrice, product.currency)}
                            {product.discount > 0 && (
                              <span className="ml-2 text-sm text-muted-foreground line-through">
                                {formatCurrency(product.originalPrice, product.currency)}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{product.store}</div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex gap-2">
                        <Button className="flex-1" asChild>
                          <Link href={`/product/${product.id}`}>View Details</Link>
                        </Button>
                        <Button variant="outline" className="flex-1" asChild>
                          <Link href={product.storeUrl} target="_blank" rel="noopener noreferrer">
                            Visit Store
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <Heart className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">No products in this list</h3>
                  <p className="mt-2 text-muted-foreground">Browse products and add them to this list.</p>
                  <Button className="mt-6" asChild>
                    <Link href="/categories">Browse Products</Link>
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className="mt-16 text-center">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <Heart className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="mt-6 text-2xl font-medium">No lists yet</h2>
          <p className="mt-2 text-muted-foreground">Create your first list to start saving your favorite products.</p>
          <Button className="mt-8" size="lg" onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create Your First List
          </Button>
        </div>
      )}
    </div>
  )
}
