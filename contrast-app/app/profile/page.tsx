"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PageLayout from "@/components/PageLayout"

// Mock user type
type User = {
  email: string
  displayName: string
}

// Mock sign out function
const mockSignOut = (): Promise<void> => {
  return Promise.resolve()
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isEditingName, setIsEditingName] = useState(false)
  const [newName, setNewName] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      setNewName(parsedUser.displayName || "")
    } else {
      router.push("/")
    }
  }, [router])

  const handleDeleteAccount = async () => {
    // In a real app, you would delete the account here
    localStorage.removeItem("user")
    router.push("/")
  }

  const handleUpdateName = async () => {
    if (user) {
      const updatedUser = { ...user, displayName: newName }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
      setIsEditingName(false)
    }
  }

  const handleLogout = async () => {
    try {
      await mockSignOut()
      localStorage.removeItem("user")
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto bg-purple-900/20 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">User Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-purple-200">Name</Label>
              {isEditingName ? (
                <div className="flex items-center space-x-2">
                  <Input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="flex-grow bg-purple-800/50 text-white border-purple-500/50 focus:border-purple-400"
                  />
                  <Button onClick={handleUpdateName} className="bg-purple-500 hover:bg-purple-600 text-white">
                    Save
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditingName(false)}>
                    Cancel
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-purple-800/50 p-2 rounded">
                  <span className="text-white">{user.displayName || "No name set"}</span>
                  <Button
                    variant="ghost"
                    onClick={() => setIsEditingName(true)}
                    className="text-purple-200 hover:text-white"
                  >
                    Edit
                  </Button>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-purple-200">Email</Label>
              <p className="bg-purple-800/50 p-2 rounded text-white">{user.email}</p>
            </div>

            <Button onClick={handleLogout} className="w-full bg-purple-500 hover:bg-purple-600 text-white">
              Log Out
            </Button>

            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive" className="w-full">
                  Delete Account
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-purple-900 border-purple-500">
                <DialogHeader>
                  <DialogTitle className="text-white">Delete Account</DialogTitle>
                  <DialogDescription className="text-purple-200">
                    This will permanently delete your account. This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className="text-purple-200 hover:text-white">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button variant="destructive" onClick={handleDeleteAccount}>
                    Confirm Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}

