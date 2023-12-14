import NumberToCurrency from "@/components/ui/number-currency";
import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: string;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: NumberToCurrency(Number(product.basePrice)),
    };
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  const totalWithDiscount = Number(product.basePrice) - totalDiscount;

  return {
    ...product,
    totalPrice: NumberToCurrency(totalWithDiscount),
  };
};
