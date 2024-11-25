import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Contrast
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Easily find popular products and compare prices from your favorite
            stores in Pakistan.
          </p>
        </div>
      </section>
      {/* Product Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ProductGrid />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Shopping Community
          </h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for exclusive deals and shopping tips
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-auto"
              required
            />
            <Button type="submit">
              Subscribe <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
