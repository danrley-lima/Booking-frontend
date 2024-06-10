import CategoryEnum from "./CategoryEnum";

type ProductType = {
  name: string;
  price: string;
  category: CategoryEnum | "";
  mainPhoto: string;
  city: string;
  state: string;
  phoneNumber: string;
  startDate: Date;
  endDate: Date;
  avaliable: number;
  email: string;
  quantity: number;
  description: string;
  coupon: string;
};