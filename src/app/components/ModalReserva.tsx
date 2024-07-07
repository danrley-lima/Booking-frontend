"use client";

import { ProductType } from "../types/ProductType";
import { IoMdCalendar } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface ModalReservaProps {
  closeModal: () => void;
  reserveProduct: () => void;
  product: ProductType;
}

function ModalReserva({ closeModal, product, reserveProduct }: ModalReservaProps) {

  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 text-preto backdrop-blur-md"
    >
      <div className="flex h-2/3 w-1/2 flex-col rounded-lg bg-cinza p-8 shadow-md">
      <button onClick={closeModal} className="relative">
        <IoClose className="absolute right-3 top-0"/>
      </button>
        <div className="text-azul">
          <h1 className="text-xl text-center font-bold">{product.title}</h1>
          <h2 className="text-black font-bold my-4">Informações</h2>
          <div className="flex flex-row h-full justify-between">
            <p>
              {product.description}
            </p>
            <div className="flex flex-col justify-between">
              <p>
                <IoPersonSharp className="inline"/> {product.quantity}
              </p>
              <p>
                <IoMdCalendar className="inline"/> {product.startDate.toLocaleDateString()}
              </p>
              <p>
                <IoMdCalendar className="inline"/> {product.endDate.toLocaleDateString()}
              </p>
              <p className="text-laranja">
                Preço: R${product.totalPrice - (product.discount / 100)*product.totalPrice}
              </p>
              <p className="text-verde">
                Por Start Tour
              </p>
              <button onClick={reserveProduct} className="h-7 w-48 rounded-lg bg-azul font-semibold text-cinza transition-colors">Confirmar reserva</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalReserva;
