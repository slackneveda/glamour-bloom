"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I've been using GlamourBloom products for 6 months now, and my skin has never looked better! The Hydrating Facial Serum is a game-changer for my dry skin.",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "As someone with sensitive skin, I've always struggled to find products that don't cause irritation. GlamourBloom's gentle formulations have been a lifesaver!",
  },
  {
    id: 3,
    name: "Michelle Lee",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The Brightening Eye Cream has significantly reduced my dark circles. I've received so many compliments on how refreshed I look!",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg italic mb-4">{testimonial.text}</p>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous testimonial</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next testimonial</span>
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-pink-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
