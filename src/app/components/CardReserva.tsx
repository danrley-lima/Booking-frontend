import { ProductType } from "../types/ProductType";

interface CardReservaProps {
    product: ProductType;
    openModalReservar: () => void
}

function CardReserva({product, openModalReservar}: CardReservaProps){


    // const mapMonths: { [key: number]: string } = {
    //     1: "Janeiro",
    //     2: "Fevereiro",
    //     3: "Março",
    //     4: "Abril",
    //     5: "Maio",
    //     6: "Junho",
    //     7: "Julho",
    //     8: "Agosto",
    //     9: "Setembro",
    //     10: "Outubro",
    //     11: "Novembro",
    //     12: "Dezembro"
    // };

    return(
        <div className="grid grid-rows-4 w-1/3 h-30 gap-4 float-right border border-r-4 p-3">
            <div className="flex flex-row justify-between">
                <p>
                    Viaje entre
                </p>
                {
                        product.discount != 0 ? (
                            <p className="text-slate-400">a partir de <s>{product.totalPrice}</s> <span className="bg-verde border rounded-md ">{product.discount}% OFF</span></p>
                        ) :
                        <></>
                }
            </div>
            <div className="flex flex-row justify-between">
                <p className="font-semibold">
                    abril/2024 e abril/2025
                </p>
                <p className="text-laranja">
                    R$ {product.totalPrice - (product.discount / 100)*product.totalPrice}
                </p>
            </div>
            <button onClick={openModalReservar} className="w-full h-10 bg-azul text-cinza rounded-lg border">Reservar</button>
        </div>
    )

}

export default CardReserva;