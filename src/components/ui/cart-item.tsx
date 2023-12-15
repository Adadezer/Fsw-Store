import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import NumberToCurrency from "./number-currency";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductClick = () => {
    removeProductFromCart(product.id);
  };

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <div className="flex h-[110px] w-[110px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xs">{product.name}</p>

          <p className="text-sm font-bold">
            {NumberToCurrency(product.totalPrice)}
          </p>

          {product.discountPercentage > 0 && (
            <p className="text-xs line-through opacity-40">
              De: {NumberToCurrency(Number(product.basePrice))}
            </p>
          )}

          <div className="flex w-[80px] items-center justify-between">
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8"
              onClick={handleDecreaseProductQuantityClick}
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8"
              onClick={handleIncreaseProductQuantityClick}
            >
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8"
        onClick={handleRemoveProductClick}
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
