import React from "react";
import { OrderStatus } from "../types/OrderStatus";
import { Order } from "../types/Order";
import PendingOrderCard from "./PendingOrderCard";

interface PendingoOrderGridProps {
  orders: Order[];
}

const handleApprove = (orderId: string) => {
  console.log(`Aprovado pedido com ID: ${orderId}`);
};

const handleReject = (orderId: string) => {
  console.log(`Rejeitado pedido com ID: ${orderId}`);
};

function PendingOrdersGrid(props: PendingoOrderGridProps) {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {props.orders.map((order) => {
          return (
            <PendingOrderCard
              key={order.id}
              order={order}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          );
          // return <h2>{order.customerName}</h2>;
        })}
      </div>
    </div>
  );
}

export default PendingOrdersGrid;
