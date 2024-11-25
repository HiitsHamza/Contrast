import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a successful submission
    setSubmitStatus("success");
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
          {submitStatus === "success" && (
            <p className="mt-4 text-green-600">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-600">
              There was an error sending your message. Please try again.
            </p>
          )}
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>rufi paradise c 105</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>03363089358</span>    
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>help@contrast.com</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for map */}
              <div className="w-full h-64 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Map Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
