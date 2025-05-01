import { Suspense } from "react"
import ProductGrid from "../components/product-grid"
import ProductFilters from "../components/product-filters"
import ProductSorting from "../components/product-sorting"
import Loading from "./loading"

export const metadata = {
  title: "All Products | GlamourBloom",
  description: "Browse our collection of premium skincare and cosmetic products.",
}

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-3xl font-serif mb-8">All Products</h1>

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
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
