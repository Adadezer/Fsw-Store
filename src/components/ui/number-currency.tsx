const formatNumber = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const NumberToCurrency = (number: number) => {
  return formatNumber.format(number);
};

export default NumberToCurrency;
