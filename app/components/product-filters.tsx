"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 100])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
      </div>

      <Accordion type="multiple" defaultValue={["category", "price", "skinType"]}>
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="skincare" />
                <label htmlFor="skincare" className="text-sm">
                  Skincare
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="makeup" />
                <label htmlFor="makeup" className="text-sm">
                  Makeup
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="haircare" />
                <label htmlFor="haircare" className="text-sm">
                  Haircare
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="body" />
                <label htmlFor="body" className="text-sm">
                  Body
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 100]} max={100} step={1} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skinType">
          <AccordionTrigger>Skin Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="normal" />
                <label htmlFor="normal" className="text-sm">
                  Normal
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="dry" />
                <label htmlFor="dry" className="text-sm">
                  Dry
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="oily" />
                <label htmlFor="oily" className="text-sm">
                  Oily
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="combination" />
                <label htmlFor="combination" className="text-sm">
                  Combination
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sensitive" />
                <label htmlFor="sensitive" className="text-sm">
                  Sensitive
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="concerns">
          <AccordionTrigger>Concerns</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="aging" />
                <label htmlFor="aging" className="text-sm">
                  Anti-Aging
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="acne" />
                <label htmlFor="acne" className="text-sm">
                  Acne
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="dullness" />
                <label htmlFor="dullness" className="text-sm">
                  Dullness
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="dryness" />
                <label htmlFor="dryness" className="text-sm">
                  Dryness
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="uneven-tone" />
                <label htmlFor="uneven-tone" className="text-sm">
                  Uneven Tone
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
