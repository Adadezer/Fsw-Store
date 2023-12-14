import { CartProduct } from "@/providers/cart";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";

interface CartItemProps {
  product: CartProduct;
}

const formatNumber = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const CartItem = ({ product }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sx">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">{product.totalPrice}</p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-40">
                {formatNumber.format(Number(product.basePrice))}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Button size="icon" variant="outline" className="h-8 w-8">
              <ArrowLeftIcon size={16} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button size="icon" variant="outline" className="h-8 w-8">
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button size="icon" variant="outline" className="h-8 w-8">
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
