import { CiCalendar } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { Order } from "../types/Order";
import { PiMapPinFill } from "react-icons/pi";
import { TbBedFilled } from "react-icons/tb";
import { GrStatusInfo } from "react-icons/gr";

interface PendingoOrderCardProps {
  order: Order;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

function PendingOrderCard(props: PendingoOrderCardProps) {
  const { order, onApprove, onReject } = props;

  return (
    <div className="space-y-1 bg-white px-10 py-5">
      <h2 className="font-semibold">{order.customerName}</h2>
      <div className="flex items-center">
        <PiMapPinFill size={20} className="mr-2" />
        {order.product}
      </div>

      <div className="flex items-center gap-6">
        <div className="flex">
          <CiCalendar size={20} className="mr-2 " />
          {order.orderInitialDate}
        </div>
        <div className="flex items-center">
          <CiCalendar size={20} className="mr-2 " />
          {order.orderFinalDate}
        </div>
      </div>

      <div className="flex items-center">
        {<TbBedFilled size={20} className="mr-2 " />}
        blablabla
      </div>

      <div className="flex items-center">
        {<GrStatusInfo size={20} className="mr-2 " />}
        <p className="font-bold">{order.status}</p>
      </div>
      <div className="flex justify-center gap-2 font-extrabold">
        <button
          className="hover:bg-verde-claro rounded-full bg-verde px-12 py-1 text-white transition-colors"
          onClick={() => onApprove(order.id)}
        >
          Aceitar
        </button>
        <button
          className="rounded-full border border-black px-12 py-1 transition-colors hover:bg-red-300"
          onClick={() => onReject(order.id)}
        >
          Rejeitar
        </button>
      </div>
    </div>
  );
}

export default PendingOrderCard;
