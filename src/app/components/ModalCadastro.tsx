import { IoClose } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import Image from "next/image";
import { useEffect } from "react";
import axiosInstance from "../axiosConfig";
import { User } from "../utils/User";
import { showToast } from "../utils/ToastHelper";

interface ModalCadastroProps {
  closeModal: () => void;
}

function ModalCadastro({ closeModal }: ModalCadastroProps) {
  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dto: User = {
      name: "",
      lastName: "",
      password: "",
      email: "",
      telephone: "",
      cpf: "",
      gender: "",
      birthDate: "",
      nationality: "",
    };
    formData.forEach((value, key) => {
      if (key in dto) {
        // Type assertion is needed because FormData entries are strings
        (dto as any)[key] = value;
      }
    });
    try {
      const response = await axiosInstance.post(
        "http://localhost:8080/auth/register",
        {
          email: dto["email"],
          password: dto["password"],
          phoneNumber: "84988112591",
          name: dto["name"],
          role: "CUSTOMER",
        },
      );

      showToast("success", "Usuário cadastrado com sucesso!");
      console.log(response);
    } catch (error) {
      showToast("error", "Erro ao cadastrar usuário!");
    }
  }

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
      <div className="flex h-3/4 w-screen flex-col justify-between rounded-lg bg-cinza p-8 shadow-md sm:w-4/5 md:w-2/3 lg:w-2/4 xl:w-1/3">
        <div className="relative">
          <IoMdArrowBack className="absolute left-3 pt-1" />
          <IoClose className="absolute right-3 pt-1" />
          <Image
            src="/logo.svg"
            alt="Logo"
            width={58}
            height={58}
            className="absolute left-6 h-16 pt-4"
          />
        </div>
        <p className="mt-16 text-center text-xl font-bold sm:text-2xl">
          Crie sua conta no Booking da Shopee.
        </p>
        <form onSubmit={handleRegister} action="#" method="post">
          <div className="flex flex-row">
            <div className="mr-3 w-1/2">
              <label className="text-xs sm:text-sm" htmlFor="name">
                Nome
              </label>
              <input
                className="w-full rounded-md border-2 border-gray-500"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="text-xs sm:text-sm" htmlFor="lastName">
                Sobrenome
              </label>
              <input
                className="w-full rounded-md border-2 border-gray-500"
                type="text"
                id="lastName"
                name="lastName"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-xs sm:text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-md border-2 border-gray-500"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:mr-3 md:w-1/2">
              <label className="text-xs sm:text-sm" htmlFor="password">
                Senha
              </label>
              <input
                className="w-full rounded-md border-2 border-gray-500 pl-1"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-xs sm:text-sm" htmlFor="confirm_password">
                Confirmar senha
              </label>
              <input
                className="w-full rounded-md border-2 border-gray-500"
                type="password"
                id="confirm_password"
                name="confirm_password"
                required
              />
            </div>
          </div>
          <div className="flex flex-row pt-5">
            <input type="checkbox" name="updates" id="updates" />
            <p className="pl-2 text-xs">
              Sim, quero saber das ofertas e dos novos recursos.
            </p>
          </div>
          <div className="mt-3 flex justify-center md:mt-8">
            <input
              className="h-10 w-3/5 rounded-lg bg-azul text-cinza hover:cursor-pointer"
              type="submit"
              value="Criar conta"
            />
          </div>
        </form>
        <div className="mt-3 text-center text-xs">
          <p>
            Ao continuar, você concorda com os Termos de uso e confirma que leu
            nossa Política de privacidade e cookies.
          </p>
          <p>
            Este site é protegido por reCAPTCHA e sujeito à Política de
            privacidade e aos Termos de serviço do Google.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalCadastro;
