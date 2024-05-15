"use client";
import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

function ModalLogin(){

    const [login, setLogin] = useState(false)

    function handleLoginButton(){
        setLogin(!login)
    }

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-md text-preto bg-white">
            <div className="flex flex-col justify-between bg-cinza p-8 rounded-lg shadow-md h-2/3 w-screen sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="relative">
                    {login ?
                        (
                            <button onClick={handleLoginButton}>
                                <IoMdArrowBack className="absolute left-1 top-1"/>
                            </button>
                        ):
                        (
                            <>
                            </>
                        )
                    }
                    <button>
                        <IoClose className="absolute top-1 right-1"/>
                    </button>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={58}
                        height={58}
                        className="absolute left-6 top-4 h-10"
                    />
                    <p className="text-center font-bold mt-16 text-base md:text-2xl">
                        Entre para ver o melhor do Booking da Shopee.
                    </p>
                </div>
                {!login ?
                    (
                        <div className="pt-12">
                            <button className="relative border-2 rounded-3xl w-full h-10 mb-3 bg-white border-preto text-xs sm:text-sm md:text-base">

                                <FcGoogle className="absolute left-3 size-6 hidden sm:inline-block sm:size-5"/>
                                
                                Continuar com o Google

                            </button>
                            <button onClick={handleLoginButton} className="relative border-2 rounded-3xl w-full h-10 mb-4 bg-white border-preto text-xs sm:text-sm md:text-base">

                                <MdOutlineEmail className="absolute left-3 size-6 hidden sm:inline-block sm:size-5"/>

                                Continuar com o e-mail

                            </button>
                        </div>
                    ) :
                    (
                        <div className="pt-12">
                            <form action="#" method="post">
                                <div>
                                    <label className="text-xs sm:text-sm" htmlFor="email">Email</label>
                                    <input className="w-full border-2 rounded-md border-gray-500" type="email" id="email" name="email" required />
                                </div>
                                <div>
                                    <label className="text-xs sm:text-sm" htmlFor="password">Senha</label>
                                    <input className="w-full pl-1 border-2 rounded-md border-gray-500" type="password" id="password" name="password" required />
                                </div>
                                <div className="flex flex-row justify-between pt-5">
                                    <a className="underline text-blue-600 text-xs" href="#forgotPassword">Esqueceu a senha?</a>
                                    <div className="flex flex-row">
                                        <input type="checkbox" name="stayConnected" id="stayConnected" />
                                        <p className="pl-2 text-xs">
                                            Lembre-se de mim
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-3 md:mt-8">
                                    <input className="w-3/5 h-10 bg-azul text-cinza hover:cursor-pointer rounded-lg" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className="pt-2 text-center">
                                Ainda não tem uma conta? <a className="underline text-blue-600" href="#cadastro">Crie uma conta</a>
                            </p>
                        </div>
                    )
                }
                
                <div className="text-center text-xs pt-1">
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