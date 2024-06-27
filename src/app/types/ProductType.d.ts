import CategoryEnum from "./CategoryEnum";

type ProductType = {
  name: string;
  price: string;
  category: CategoryEnum | "";
  mainImage: string;
  city: string;
  state: string;
  startDate: Date;
  endDate: Date;
  avaliable: number;
  quantity: number;
  description: string;
  coupon: string;
};