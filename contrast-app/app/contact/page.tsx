"use client"

import { useState } from "react"
import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Contact Us</h1>
        <div className="max-w-md mx-auto bg-purple-900/20 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-purple-200">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-purple-800/50 text-white border-purple-500/50 focus:border-purple-400"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-purple-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-purple-800/50 text-white border-purple-500/50 focus:border-purple-400"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-purple-200">
                Message
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-purple-800/50 text-white border-purple-500/50 focus:border-purple-400"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}

