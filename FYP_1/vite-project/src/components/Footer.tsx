import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Contrast</h3>
            <p className="text-sm text-muted-foreground">
              Contrast is your go-to platform for discovering the best deals
              across Pakistan's top online stores.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Email: info@contrast.com
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Phone: +92 123 456 7890
            </p>
            <p className="text-sm text-muted-foreground">
              Address: 123 Main St, Karachi, Pakistan
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest deals and news
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Stores Available on Our Site
          </h3>
          <div className="flex justify-center space-x-8">
            {/* Replace these with actual partner logos */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFjX0cEAmW5d1RkllAQ9ek08ptwNhsuRUDQ&s"
              alt="Fitted"
              className="h-12"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimi8twCTodEQs88YpzRQaDx__CIfABhSX7Q&s"
              alt="Outfitters"
              className="h-12"
            />
            <img
              src="https://www.shutterstock.com/image-vector/overlap-overlay-intersection-opacity-transparency-600nw-1340437928.jpg"
              alt="Partner 3"
              className="h-12"
            />
            <img
              src="https://www.shutterstock.com/image-vector/overlap-overlay-intersection-opacity-transparency-600nw-1340437928.jpg"
              alt="Partner 4"
              className="h-12"
            />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Contrast. All rights reserved. Contrast™ is a
            registered trademark.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
