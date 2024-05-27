export interface Order {
  id: string;
  product: string;
  customerName: string;
  orderInitialDate: string;
  orderFinalDate: string;
  totalAmount: number;
  status: OrderStatus;
}
