import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Hydrating Facial Serum",
    price: 48,
    rating: 4.8,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    href: "/products/hydrating-facial-serum",
    category: "skincare",
  },
  {
    id: 2,
    name: "Brightening Eye Cream",
    price: 36,
    rating: 4.7,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    href: "/products/brightening-eye-cream",
    category: "skincare",
  },
  {
    id: 3,
    name: "Nourishing Night Cream",
    price: 52,
    rating: 4.9,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    href: "/products/nourishing-night-cream",
    category: "skincare",
  },
  {
    id: 4,
    name: "Gentle Cleansing Foam",
    price: 28,
    rating: 4.6,
    reviewCount: 87,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    href: "/products/gentle-cleansing-foam",
    category: "skincare",
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button className="w-full" size="sm">
                Add to Cart
              </Button>
            </div>
          </div>
          <Link href={product.href} className="block">
            <h3 className="text-lg font-medium mb-1">{product.name}</h3>
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({product.reviewCount})</span>
            </div>
            <p className="text-lg font-medium">${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
