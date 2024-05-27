"use client";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function ForgotPasswordModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 text-preto backdrop-blur-md">
      <div className="rounded-lg bg-cinza p-8 shadow-md sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div className="relative">
          <button
            onClick={() => {
              // Voltar para a tela de login
            }}
          >
            <IoMdArrowBack className="absolute left-1 top-1" />
          </button>

          <button
            onClick={() => {
              // Fechar modal
            }}
          >
            <IoClose className="absolute right-1 top-1" />
          </button>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={58}
            height={58}
            className="absolute left-6 top-4 h-10"
          />
          <p className="mt-16 text-center text-base font-bold md:text-2xl">
            Esqueceu sua senha?
          </p>
          <p className="mt-4 text-sm">
            Sem problemas. Forneça seu endereço de e-mail para receber um link
            para redefinir a senha.
          </p>
          <div className="mt-7">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full rounded-md border border-preto p-2"
            />
          </div>

          <div className="mt-4 flex  justify-center">
            <button
              type="button"
              className="hover:bg-azul-hover w-full rounded-md bg-azul px-4 py-2 font-semibold text-white transition-colors"
              onClick={() => {
                // Lógica para recuperar senha
                // Voltar pra login
              }}
            >
              Recuperar Senha
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-xs">
          <p>
            Este site é protegido por reCAPTCHA e sujeito à Política de
            privacidade e aos Termos de serviço do Google.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;
