import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// This would typically come from a cart state or API
const cartItems = [
  {
    id: 1,
    name: "Hydrating Facial Serum",
    price: 48,
    quantity: 1,
    image: "/placeholder.svg?height=200&width=200",
    href: "/products/hydrating-facial-serum",
  },
  {
    id: 3,
    name: "Nourishing Night Cream",
    price: 52,
    quantity: 1,
    image: "/placeholder.svg?height=200&width=200",
    href: "/products/nourishing-night-cream",
  },
]

export const metadata = {
  title: "Shopping Cart | GlamourBloom",
  description: "Review and checkout your selected products.",
}

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + shipping

  return (
    <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-3xl font-serif mb-8">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 py-4">
                  <div className="relative w-24 h-24 rounded-md overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <Link href={item.href} className="font-medium hover:underline">
                        {item.name}
                      </Link>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>

                    <p className="text-gray-500 text-sm mb-4">${item.price}</p>

                    <div className="flex items-center">
                      <div className="flex items-center border rounded-md">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="coupon" className="text-sm font-medium block mb-2">
                    Discount Code
                  </label>
                  <div className="flex gap-2">
                    <Input id="coupon" placeholder="Enter code" className="flex-1" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Button className="w-full">Proceed to Checkout</Button>

                <p className="text-xs text-gray-500 text-center">Shipping and taxes calculated at checkout</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      )}
    </main>
  )
}
