import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: 1,
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1556228578-8d89a59f0aa3?q=80&w=800&auto=format&fit=crop",
    href: "/categories/skincare",
  },
  {
    id: 2,
    name: "Makeup",
    image: "https://images.unsplash.com/photo-1631214524020-3adf9eabe9b8?q=80&w=800&auto=format&fit=crop",
    href: "/categories/makeup",
  },
  {
    id: 3,
    name: "Haircare",
    image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=800&auto=format&fit=crop",
    href: "/categories/haircare",
  },
  {
    id: 4,
    name: "Body",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop",
    href: "/categories/body",
  },
  {
    id: 5,
    name: "Sets",
    image: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=800&auto=format&fit=crop",
    href: "/categories/sets",
  },
]

export default function CategoryShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={category.href} className="group relative overflow-hidden rounded-lg">
          <div className="aspect-square relative">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-serif">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
