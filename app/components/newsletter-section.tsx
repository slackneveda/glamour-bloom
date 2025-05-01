"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto text-center max-w-2xl">
      <h2 className="text-3xl font-serif mb-4">Join Our Community</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Subscribe to our newsletter for exclusive offers, beauty tips, and new product announcements.
      </p>

      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-100 p-4 rounded-lg">
          <p className="font-medium">Thank you for subscribing!</p>
          <p>You'll be the first to know about our latest products and offers.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      )}
    </div>
  )
}
