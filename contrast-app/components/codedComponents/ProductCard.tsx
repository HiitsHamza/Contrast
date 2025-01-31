import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleViewDetails = () => {
    // Open the URL in a new tab
    window.open(product.url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card>
      <CardHeader>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2">{product.name}</CardTitle>
        <p className="text-muted-foreground">
          Price: Rs. {product.price.toFixed(2)}
        </p>
        <p className="text-muted-foreground">Store: {product.store}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

