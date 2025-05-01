import Image from "next/image"
import { Star, Minus, Plus, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RelatedProducts from "@/app/components/related-products"

const getProductBySlug = (slug: string) => {
  // This would typically come from an API or database
  const products = [
    {
      id: 1,
      name: "Hydrating Facial Serum",
      slug: "hydrating-facial-serum",
      price: 48,
      rating: 4.8,
      reviewCount: 124,
      description:
        "Our bestselling Hydrating Facial Serum is formulated with hyaluronic acid and botanical extracts to deeply hydrate and plump the skin. This lightweight, fast-absorbing serum helps to improve skin texture and restore radiance.",
      benefits: [
        "Deeply hydrates and plumps the skin",
        "Improves skin texture and tone",
        "Reduces the appearance of fine lines",
        "Suitable for all skin types",
      ],
      ingredients:
        "Aqua, Glycerin, Sodium Hyaluronate, Aloe Barbadensis Leaf Juice, Panthenol, Niacinamide, Tocopherol, Rosa Damascena Flower Water, Chamomilla Recutita Flower Extract, Calendula Officinalis Flower Extract, Phenoxyethanol, Ethylhexylglycerin.",
      howToUse:
        "Apply 2-3 drops to clean, damp skin morning and evening. Gently pat into the skin, focusing on areas of dryness. Follow with moisturizer.",
      images: [
        "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70e8c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
    },
    {
      id: 2,
      name: "Brightening Eye Cream",
      slug: "brightening-eye-cream",
      price: 36,
      rating: 4.7,
      reviewCount: 98,
      description:
        "Our Brightening Eye Cream is specially formulated to target dark circles, puffiness, and fine lines around the delicate eye area. Enriched with vitamin C, caffeine, and peptides for a refreshed, brighter appearance.",
      benefits: [
        "Reduces the appearance of dark circles",
        "Minimizes puffiness and fine lines",
        "Brightens and refreshes the eye area",
        "Suitable for all skin types",
      ],
      ingredients:
        "Aqua, Glycerin, Caprylic/Capric Triglyceride, Ascorbic Acid, Caffeine, Acetyl Hexapeptide-8, Niacinamide, Sodium Hyaluronate, Tocopherol, Phenoxyethanol, Ethylhexylglycerin.",
      howToUse:
        "Apply a small amount around the eye area using your ring finger. Gently pat, never rub. Use morning and evening after cleansing and before moisturizer.",
      images: [
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
    },
    {
      id: 3,
      name: "Nourishing Night Cream",
      slug: "nourishing-night-cream",
      price: 52,
      rating: 4.9,
      reviewCount: 156,
      description:
        "Our luxurious Nourishing Night Cream works while you sleep to deeply hydrate and repair the skin. Formulated with peptides, ceramides, and antioxidants to support skin's natural renewal process.",
      benefits: [
        "Deeply hydrates and nourishes overnight",
        "Supports skin's natural renewal process",
        "Reduces fine lines and improves elasticity",
        "Leaves skin soft, supple and rejuvenated",
      ],
      ingredients:
        "Aqua, Glycerin, Squalane, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Lauroyl Lactylate, Hyaluronic Acid, Retinol, Tocopherol, Phenoxyethanol.",
      howToUse:
        "Apply a small amount to clean, dry skin in the evening. Gently massage in upward motions until fully absorbed. For best results, use after serum.",
      images: [
        "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
    },
  ]

  const product = products.find((p) => p.slug === slug) || products[0]
  return product
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  return {
    title: `${product.name} | GlamourBloom`,
    description: product.description.substring(0, 160),
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  return (
    <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-serif mb-2">{product.name}</h1>

          <div className="flex items-center mb-4">
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
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({product.reviewCount} reviews)</span>
          </div>

          <p className="text-2xl font-medium mb-6">${product.price}</p>

          <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Benefits:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded-md dark:border-gray-700">
              <Button variant="ghost" size="icon" className="rounded-none">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">1</span>
              <Button variant="ghost" size="icon" className="rounded-none">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>

            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to Wishlist</span>
            </Button>

            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
          </div>

          <Tabs defaultValue="how-to-use">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="how-to-use" className="py-4">
              <p className="text-gray-700 dark:text-gray-300">{product.howToUse}</p>
            </TabsContent>
            <TabsContent value="ingredients" className="py-4">
              <p className="text-gray-700 dark:text-gray-300">{product.ingredients}</p>
            </TabsContent>
            <TabsContent value="shipping" className="py-4">
              <p className="text-gray-700 dark:text-gray-300">
                Free shipping on all orders over $50. Orders are processed and shipped within 1-2 business days. Once
                shipped, you will receive a tracking number via email.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-serif mb-8">You May Also Like</h2>
        <RelatedProducts />
      </section>
    </main>
  )
}
