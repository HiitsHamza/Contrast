import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | CONTRAST",
  description: "Learn more about CONTRAST - Your destination for tracking luxury fashion prices.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">About CONTRAST</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your smart companion for tracking and comparing luxury fashion prices across the web.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            At CONTRAST, we believe that luxury fashion should be accessible and transparent. 
            Our mission is to empower shoppers with real-time price tracking and comparisons 
            across multiple retailers, helping you make informed decisions about your luxury purchases.
          </p>
          <p className="text-muted-foreground">
            We're dedicated to bringing clarity to luxury fashion pricing, ensuring you never 
            miss out on the best deals for your favorite designer pieces.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,rgba(var(--primary-rgb),0.05)_50%,transparent_100%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-light tracking-tight gradient-text p-8 backdrop-blur-sm bg-background/20 rounded-lg">
              CONTRAST
            </div>
          </div>
          <div className="absolute inset-0 border border-primary/10" />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Price Tracking</h3>
          <p className="text-muted-foreground">
            Stay updated with real-time price changes on your favorite luxury items 
            across multiple retailers and platforms.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Smart Notifications</h3>
          <p className="text-muted-foreground">
            Get instant alerts when prices drop on your wishlisted items, ensuring 
            you never miss out on the best deals.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Price History</h3>
          <p className="text-muted-foreground">
            Make informed decisions with comprehensive price history data and trends 
            for all tracked products.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Transparency</h3>
            <p className="text-muted-foreground">
              We believe in complete price transparency in luxury fashion retail.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-muted-foreground">
              Continuously improving our technology to provide the best price tracking experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer First</h3>
            <p className="text-muted-foreground">
              Your shopping success and satisfaction are our top priorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 