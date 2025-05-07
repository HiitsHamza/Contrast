import Image from "next/image"

const brands = [
  { name: "Nike", logo: "/nike-swoosh.png" },
  { name: "Adidas", logo: "/adidas-logo.png" },
  { name: "Zara", logo: "/placeholder.svg?key=ujkvi" },
  { name: "H&M", logo: "/letter-h-typography.png" },
  { name: "Uniqlo", logo: "/placeholder.svg?key=i3sbt" },
]

export default function BrandLogos() {
  return (
    <div className="flex items-center gap-8">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="relative h-6 w-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <Image src={brand.logo || "/placeholder.svg"} alt={`${brand.name} logo`} fill className="object-contain" />
        </div>
      ))}
    </div>
  )
}
