import CategoryEnum from "./CategoryEnum";

type ProductType = {
  id: string;
  title: string;
  price: string;
  totalPrice: number;
  category: CategoryEnum | "";
  mainPhoto: string;
  city: string;
  state: string;
  phoneNumber: string;
  startDate: Date;
  discount: number;
  endDate: Date;
  customerScore: number;
  numberOfReviews: number;
  email: string;
  quantity: number;
  description: string;
  coupon: string;
};
