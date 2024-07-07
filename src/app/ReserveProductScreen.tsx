import SmallFooter from "./components/SmallFooter";
import SmallHeader from "./components/SmallHeader";
import Image from "next/image"
import { ProductType } from "./types/ProductType";
import CardReserva from "./components/CardReserva";
import { useContext, useState } from "react";
import ModalReserva from "./components/ModalReserva";
import axios from "axios";

interface ReserveProductScreenProps {
    product: ProductType;
}

export default function ReserveProductScreen({ product }: ReserveProductScreenProps){
    const [open, setOpen] = useState(false)
    const closeModal = () => {
        setOpen(!open)
    }
    function reserveProduct(){
        const body = {
            costumerId: "userId",
            productId: product.id,
            startDate: product.startDate,
            endDate: product.endDate,
            totalPrice: product.totalPrice
        }
        const response = axios.post('/bookings', body)
        console.log(response)
    }
    return(
        <>
            <SmallHeader/>
            {
                open ?
                <ModalReserva closeModal={closeModal} reserveProduct={reserveProduct} product={product}/> :
                <></>
            }
            <div className="flex flex-col">
                <div className="overflow-hidden w-screen">
                    <Image 
                        src={product.mainPhoto}
                        alt={product.title}
                        // layout="intrinsic"
                        width={1920} // Replace with the actual width of your image
                        height={1080} // Replace with the actual height of your image
                        style={{ width: '100%', height: '25%' }}
                        // className="object-cover w-full h-full"
                    />
                </div>
                <div className="ml-10 mt-10">
                    <h1 className="">{product.title}</h1> 
                    <p className="text-azul ">
                        Ida: {product.startDate.toLocaleDateString()}&nbsp;&nbsp;&nbsp;&nbsp;Volta: {product.endDate.toLocaleDateString()}
                    </p>
                </div>
            </div>
            <CardReserva openModalReservar={closeModal} product={product}/>
            {/* <div className="w-screen h-1/2">
                <Image
                    src={product.mainPhoto}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
            </div> */}
            <SmallFooter/>
        </>
    )
}