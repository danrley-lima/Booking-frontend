import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

function ModalLogin(){
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-md text-preto bg-white">
            <div className="bg-cinza p-8 rounded-md shadow-md relative h-5/6 w-screen sm:w-1/2 md:1/3">
                <button className="absolute right-3 top-3">
                    <IoClose/>
                </button>
                <p className="text-align font-bold inline-block text-xs px-0 pt-8 sm:text-sm md:text-base md:pt-16 md:px-10">
                    Entre para ver o melhor do Booking da Shopee.
                </p>
                <div className="pt-12">
                    <button className="relative border-2 rounded-3xl w-full h-10 mb-3 border-preto text-xs sm:text-sm md:text-base">

                        <FcGoogle className="absolute left-3 size-6 hidden sm:inline-block"/>
                        
                        Continuar com o Google

                    </button>
                    <button className="relative border-2 rounded-3xl w-full h-10 mb-4 border-preto text-xs sm:text-sm md:text-base">

                        <MdOutlineEmail className="absolute left-3 size-6 hidden sm:inline-block"/>

                        Continuar com o e-mail

                    </button>
                </div>
                <div className="flex flex-col items-center pt-2 font-bold text-xs sm:text-sm md:text-base">
                    <button className="border-2 rounded-md bg-azul text-cinza mb-1 bottom-2 w-11/12">
                        Login
                    </button>
                    <button className="border-2 rounded-md w-11/12 bg-cinza text-azul">
                        Cadastre-se
                    </button>
                </div>
                <div className="text-center w-full text-xs pt-1 sm:text-sm md:pt-4">
                    <p className="mb-2">
                        Ao continuar, você concorda com os Termos de uso e confirma que leu nossa Política de privacidade e cookies.
                    </p>
                    <p>
                        Este site é protegido por reCAPTCHA e sujeito à Política de privacidade e aos Termos de serviço do Google.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin;