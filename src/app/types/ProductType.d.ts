export type ProductType = {
  id: string;
  title: string;
  city: string;
  state: string;
  price: number;
  mainImage: string;
  description: string;
  customerScore: number;
  numberOfReviews: number;
  startDate: string;
  endDate: string;
  discount: number;
  coupon: string?;
  totalPrice: number;
  category: string?;
  // to do: Remover ou ajustar no banco
  customer: any?;
};
