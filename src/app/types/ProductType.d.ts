import CategoryEnum from "./CategoryEnum";

type ProductType = {
  id: string;
  title: string;
  price: string;
  category: CategoryEnum | "";
  mainImage: string;
  city: string;
  state: string;
  startDate: Date;
  discount: number;
  endDate: Date;
  avaliable: number;
  quantity: number;
  description: string;
  coupon: string;
};
