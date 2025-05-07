import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Women's Fashion",
    image: "/placeholder.svg?key=yqr64",
    link: "#",
  },
  {
    name: "Men's Style",
    image: "/placeholder.svg?height=400&width=300&query=men's fashion clothing",
    link: "#",
  },
  {
    name: "Activewear",
    image: "/placeholder.svg?height=400&width=300&query=activewear clothing",
    link: "#",
  },
  {
    name: "Accessories",
    image: "/placeholder.svg?height=400&width=300&query=fashion accessories",
    link: "#",
  },
]

export default function FeaturedCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link href={category.link} key={category.name} className="group overflow-hidden rounded-2xl relative">
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              <p className="text-white/80 mt-1 text-sm">Explore Collection</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
