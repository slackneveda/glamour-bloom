import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroCarousel from "./components/hero-carousel"
import FeaturedProducts from "./components/featured-products"
import TestimonialsSection from "./components/testimonials-section"
import NewsletterSection from "./components/newsletter-section"
import CategoryShowcase from "./components/category-showcase"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full">
        <HeroCarousel />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4 md:px-8 lg:px-16 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-4">
            Discover Your Natural Beauty
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            Premium skincare products made with natural ingredients for a radiant, healthy glow
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Shop Bestsellers
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Take Skin Quiz
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Shop By Category</h2>
          <CategoryShowcase />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Bestsellers</h2>
            <Link href="/products" className="flex items-center text-sm font-medium hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=500&text=OurStory"
              alt="Our Story"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              GlamourBloom was born from a passion for natural beauty and a commitment to creating premium skincare
              products that enhance your natural radiance. Our formulations combine the best of nature and science to
              deliver exceptional results.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Every product is thoughtfully crafted with sustainable, ethically-sourced ingredients that are kind to
              your skin and the planet.
            </p>
            <Button>Learn More About Us</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">What Our Customers Say</h2>
          <TestimonialsSection />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-pink-50 dark:bg-pink-950">
        <NewsletterSection />
      </section>
    </main>
  )
}
