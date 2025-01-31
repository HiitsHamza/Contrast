import Link from "next/link"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-purple-900/50 to-black" />

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${Math.random() * 5 + 3}s linear infinite ${Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          maskImage: "radial-gradient(circle at center, white, transparent 80%)",
        }}
      />

      {/* Purple Glow */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-2xl" />
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 lg:py-40">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-300">Discover the Future of Shopping</span>
          </div>

          {/* Main Heading */}
          <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white to-purple-200/80 bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-7xl">
            Your One-Stop Fashion
            <span className="block">Comparison Platform</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100/80">
            Compare prices and styles across Pakistan's leading fashion brands. Find your perfect outfit at the perfect
            price, all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/explore" passHref>
              <button className="rounded-lg bg-purple-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-purple-500/30 hover:bg-purple-400 transition-all duration-300 hover:shadow-purple-500/40">
                Start Exploring
              </button>
            </Link>
            <Link href="/product-demo" passHref>
              <button className="rounded-lg border border-purple-400/30 bg-purple-400/10 px-8 py-3 text-base font-semibold text-purple-200 hover:bg-purple-400/20 transition-all duration-300">
                View Demo Product
              </button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-24">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "50+", label: "Fashion Brands" },
              { number: "24/7", label: "Price Updates" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-white">{stat.number}</div>
                <div className="mt-2 text-base text-purple-200/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

