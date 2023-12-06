import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: string;
}

const formatNumber = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: formatNumber.format(Number(product.basePrice)),
    };
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  const totalWithDiscount = Number(product.basePrice) - totalDiscount;

  return {
    ...product,
    totalPrice: formatNumber.format(totalWithDiscount),
  };
};
