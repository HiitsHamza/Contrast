import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-6">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" && "text-primary"
        )}
      >
        Home
      </Link>
      <Link
        href="/products"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/products" && "text-primary"
        )}
      >
        Products
      </Link>
    </div>
  );
};

export default SiteHeader; 