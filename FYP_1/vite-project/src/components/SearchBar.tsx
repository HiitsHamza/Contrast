import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (
    searchTerm: string,
    priceFilter: { min: number | null; max: number | null }
  ) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, {
      min: minPrice ? Number(minPrice) : null,
      max: maxPrice ? Number(maxPrice) : null,
    });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row gap-4 mb-8"
    >
      <Input
        type="text"
        placeholder="Search for products or stores..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow"
      />
      <Input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="w-24"
      />
      <Input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="w-24"
      />
      <Button type="submit">
        <Search className="mr-2 h-4 w-4" /> Search
      </Button>
    </form>
  );
};
