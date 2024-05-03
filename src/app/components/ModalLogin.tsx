import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

function ModalLogin(){
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-md text-preto bg-white">
            <div className="bg-cinza p-8 rounded-md shadow-md h-5/6 w-4/12 relative">
                <button className="absolute right-3 top-3">
                    <IoClose/>
                </button>
                <p className="text-2xl text-align pt-16 px-10 font-bold inline-block">
                    Entre para ver o melhor do Booking da Shopee.
                </p>
                <div className="pt-12">
                    <button className="text-base relative border-2 rounded-3xl w-full h-10 mb-3 border-preto">

                        <FcGoogle className="absolute left-3 size-6"/>
                        
                        Continuar com o Google

                    </button>
                    <button className="text-base relative border-2 rounded-3xl w-full h-10 mb-4 border-preto">

                        <MdOutlineEmail className="absolute left-3 size-6"/>

                        Continuar com o e-mail

                    </button>
                </div>
                <div className="flex flex-col items-center pt-2 text-base font-bold">
                    <button className="border-2 rounded-md bg-azul text-cinza mb-1 bottom-2 w-11/12">
                        Login
                    </button>
                    <button className="border-2 rounded-md w-11/12 bg-cinza text-azul">
                        Cadastre-se
                    </button>
                </div>
                <div className="pt-4 text-center text-xs w-full">
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