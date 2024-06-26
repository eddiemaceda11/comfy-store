import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartButton() {
  const numItemsInCart = 5;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relativs"
    >
      <Link to="cart">
        <ShoppingCart>
          <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">{numItemsInCart}</span>
        </ShoppingCart>
      </Link>
    </Button>
  );
}
