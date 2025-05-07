"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const brands = [
  { name: "Nike", logo: "/nike-swoosh.png" },
  { name: "Adidas", logo: "/adidas-logo.png" },
  { name: "Zara", logo: "/placeholder.svg?key=ujkvi" },
  { name: "H&M", logo: "/letter-h-typography.png" },
  { name: "Uniqlo", logo: "/placeholder.svg?key=i3sbt" },
  { name: "Levi's", logo: "/generic-jeans-patch.png" },
  { name: "Gap", logo: "/placeholder.svg?key=bptvb" },
  { name: "Puma", logo: "/placeholder.svg?key=dbxlv" },
  { name: "Calvin Klein", logo: "/calvin-klein-logo.png" },
  { name: "Tommy Hilfiger", logo: "/tommy-hilfiger-logo.png" },
]

export default function BrandCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(true)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || !isScrolling) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      if (!scrollContainer || !isScrolling) return

      scrollPosition += 0.5
      scrollContainer.scrollLeft = scrollPosition

      // Reset scroll position when reaching the end
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0
      }

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isScrolling])

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsScrolling(false)}
      onMouseLeave={() => setIsScrolling(true)}
    >
      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto scrollbar-hide py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Duplicate the brands array to create a seamless loop */}
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[160px]"
          >
            <div className="relative h-12 w-24 mb-3">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-gray-700">{brand.name}</p>
          </div>
        ))}
      </div>

      {/* Gradient overlays for seamless scrolling effect */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  )
}
