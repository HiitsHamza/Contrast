import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Recycle, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Contrast</h1>
          <p className="text-xl md:text-2xl mb-8">Shop Smart, Save Big</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-8">
              Welcome to Contrast, your trusted platform for comparing prices across various categories. 
              Our mission is to help you shop smart and save big by finding the best deals across trusted platforms.
            </p>
            <Button size="lg">Learn More About Our Service</Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Contrast?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Scale className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Transparent Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We provide real-time data to make your shopping decisions more informed and transparent.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Recycle className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Save Time & Money</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the best deals across trusted platforms and save both time and money effortlessly.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Trusted Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our service is dedicated to providing you with a secure, seamless shopping experience.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded with the goal of making the shopping process easier and more transparent, Contrast provides real-time data 
              and easy-to-use tools that help you make informed purchasing decisions.
            </p>
            <p className="text-lg mb-6">
              From comparing prices to ensuring trusted platforms, we aim to offer a one-stop solution for savvy shoppers.
            </p>
            <p className="text-lg">
              Join us in transforming the way you shop, saving time and money while finding the best deals out there!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Shop Smart?</h2>
          <p className="text-xl mb-8">
            Explore our platform to compare prices and find the best deals. Start saving today!
          </p>
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  )
}
