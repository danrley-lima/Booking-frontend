export function numberToCurrency(value: number) {
  const real = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return real.format(value);
}
