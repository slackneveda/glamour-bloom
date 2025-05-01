import { Suspense } from "react"
import { notFound } from "next/navigation"
import ProductGrid from "@/app/components/product-grid"
import ProductFilters from "@/app/components/product-filters"
import ProductSorting from "@/app/components/product-sorting"
import Loading from "@/app/products/loading"

// Define available categories
const categories = [
  {
    id: "skincare",
    name: "Skincare",
    description: "Premium skincare products for all skin types",
  },
  {
    id: "makeup",
    name: "Makeup",
    description: "High-quality makeup for a flawless look",
  },
  {
    id: "haircare",
    name: "Haircare",
    description: "Nourishing haircare for all hair types",
  },
  {
    id: "body",
    name: "Body",
    description: "Luxurious body care products for soft, smooth skin",
  },
  {
    id: "sets",
    name: "Sets",
    description: "Curated collections of our best-selling products",
  },
]

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = categories.find((cat) => cat.id === params.category)

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category does not exist",
    }
  }

  return {
    title: `${category.name} | GlamourBloom`,
    description: category.description,
  }
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find((cat) => cat.id === params.category)

  if (!category) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-3xl font-serif mb-2">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <ProductFilters />
        </div>

        {/* Product grid */}
        <div className="flex-1">
          <div className="mb-6">
            <ProductSorting />
          </div>

          <Suspense fallback={<Loading />}>
            <ProductGrid category={params.category} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
