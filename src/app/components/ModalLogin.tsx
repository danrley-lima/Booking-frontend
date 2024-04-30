import React from "react";
import { MdEmail } from "react-icons/md";
import { BsGoogle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function ModalLogin(){
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md">
            <div className="bg-white p-8 rounded-md shadow-md h-2/3 w-1/2">
                <button className="right-0 top-0">
                    <IoClose/>
                </button>
                <p className="text-base">
                    Entre para ver o melhor do Booking da Shopee
                </p>
                <button className="relative border-2 rounded-3xl w-full h-15 mb-3">

                    <BsGoogle className="absolute left-2 my-2 inline"/>

                    Continuar com o Google

                </button>
                <button className="relative border-2 rounded-3xl w-full h-15 mb-4">

                    <MdEmail className="absolute left-2 my-2 inline"/>

                    Continuar com o e-mail

                </button>
                <button className="border-2 rounded-md w-1/2 bg-blue-900 text-white mb-1">
                    Login
                </button>
                <button className="border-2 rounded-md w-1/2 bg-white text-blue-900">
                    Cadastre-se
                </button>
                <p className="text-xs mb-2 w-full">
                    Ao continuar, você concorda com os Termos de uso e confirma que leu nossa Política de privacidade e cookies.
                </p>
                <p className="text-xs w-full">
                    Este site é protegido por reCAPTCHA e sujeito à Política de privacidade e aos Termos de serviço do Google.
                </p>
            </div>
        </div>
    )
}

export default ModalLogin;