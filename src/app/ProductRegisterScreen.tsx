"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { ProductType } from "../app/types/ProductType";
import Input from "../app/components/Input";
import { BsPersonVcard } from "react-icons/bs";
import { LuBellRing } from "react-icons/lu";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import axiosInstance from "./axiosConfig";
import { showToast } from "./utils/ToastHelper";
// import CategoryEnum from "../app/types/CategoryEnum"

// Dados iniciais que futuramente serão preenchidos ao fazer uma req no banco
const defaultFormData: ProductType = {
    id: "",
    title: "",
    price: "",
    category: "",
    mainImage: "",
    city: "",
    state: "",
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    avaliable: 0,
    quantity: 0,
    description: "",
    discount: 0,
    coupon: ""
};

function ProductRegister() {
  const [formData, setFormData] = useState<ProductType>(defaultFormData);
  const CategoryEnum = ["RESTAURANT", "ACCOMMODATION", "TICKETS", "ACTIVITIES", "PACKAGES", ""];

  function handleInputChange(id: string, value: string) {
    if (id === 'quantity' && formData.quantity === 0 && Number(value) < 0) {
      // Prevent decreasing the quantity below 0
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  // const updateProduct = async (updatedProduct: ProductType) => {
  //   try {
  //       const response = await axiosInstance.put(`/api/user/${updatedProduct.id}`, updatedProduct);
  //       setFormData(response.data);
  //   } catch (error) {
  //       console.error('Error updating product data:', error);
  //   }
  // };

// async function postProduct(e: FormEvent<HTMLFormElement>){
//   e.preventDefault()
//   const formData = new FormData(e.currentTarget)
//   const dto: ProductType = {
//     name: "",
//     price: "",
//     category: "",
//     mainPhoto: "",
//     city: "",
//     state: "",
//     phoneNumber: "",
//     startDate: new Date(Date.now()),
//     endDate: new Date(Date.now()),
//     avaliable: 0,
//     email: "",
//     quantity: 0,
//     description: "",
//     coupon: ""
//   }
//   formData.forEach((value, key) => {
//     if (key in dto) {
//       // Type assertion is needed because FormData entries are strings
//       (dto as any)[key] = value;
//     }
//   });
//   const response = await axiosInstance.post("/product", dto)
//   console.log(response)
// }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    console.log(Array.from(formData.entries()))
    const dto: ProductType = {
      id: "",
      title: "",
      price: "",
      category: "",
      mainImage: "",
      city: "",
      state: "",
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now()),
      avaliable: 0,
      quantity: 0,
      description: "",
      discount: 0,
      coupon: ""
    }
    formData.forEach((value, key) => {
      if (key in dto) {
        // Type assertion is needed because FormData entries are strings
        (dto as any)[key] = value;
      }
    });
    console.log("objeto a ser enviado", dto)

    const idUser = localStorage.getItem("@Auth:id");

    try {

      const response = await axiosInstance.post(`/products/${idUser}`, dto)
     
      showToast("success", "Produto cadastrado com sucesso!");
    } catch (error) {
      showToast("error", "Erro ao cadastrar produto!");
    }

  }

  return (
    <div className="flex flex-row justify-start space-x-60 ml-14 h-full">
      <div className="relative">
        <div className="h-4/5 absolute pt-12 top-6 left-6 mr-0">
            <div className="border-l-4 border-azulClaro rounded-sm pl-4 mb-3">
                <BsPersonVcard className="inline"/>
                <p className="inline whitespace-nowrap font-bold">Cadastrar produto</p>
            </div>
            <div className="mb-3 pl-4">
                <LuBellRing className="inline mr-2"/>
                <p className="inline">Meus produtos</p> 
            </div>
            <div className="mb-3 pl-4">
                <RiCalendarTodoFill  className="inline mr-2"/>
                <p className="inline">Agendamentos</p>
            </div>
            <div className="mb-3 pl-4">
                <FaRegHeart className="inline mr-2"/>
                <p className="inline">Favoritos</p>
            </div>
            <div className="pl-4">
                <CiDiscount1 className="inline mr-2"/>
                <p className="inline">Cupons</p>
            </div>
        </div>
      </div>
      <div className="h-full w-3/5 mr-0 mt-12 pl-16 border-l-2 border-black">
        <p className="font-semibold">Cadastrar produto</p>
        <p className="mb-5 text-sm">
          Queremos saber um pouco mais sobre o produto. :)
        </p>
        <form onSubmit={onSubmit} className="relative mt-8 ml-2">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-x-10 gap-y-1 md:grid-cols-2">
              <Input
                id="title"
                name="title"
                label="Nome"
                type="text"
                value={formData.title}
                onChange={handleInputChange}
              />
              <Input
                id="price"
                name="price"
                label="Valor"
                type="text"
                value={formData.price}
                onChange={handleInputChange}
              />
                <Input
                  id="startDate"
                  name="startDate"
                  label="Data início"
                  type="date"
                  value={formData.startDate.toString()}
                  onChange={handleInputChange}
                />
                <Input
                  id="endDate"
                  name="endDate"
                  label="Data fim"
                  type="date"
                  value={formData.endDate.toString()}
                  onChange={handleInputChange}
                />
              
              <Input
                id="category"
                name="category"
                label="Categoria"
                type="select"
                value={formData.category}
                options={CategoryEnum}
                onChange={handleInputChange}
              />
              <Input
                id="quantity"
                name="quantity"
                label="Quantidade"
                type="number"
                value={formData.quantity.toString()}
                onChange={handleInputChange}
              />
              <Input
                id="mainImage"
                name="mainImage"
                label="Foto"
                type="text"
                value={formData.mainImage}
                onChange={handleInputChange}
              />
              <Input
                id="coupon"
                name="coupon"
                label="Cupons"
                type="text"
                value={formData.coupon}
                onChange={handleInputChange}
              />
               <Input
                id="city"
                name="city"
                label="Cidade"
                type="text"
                value={formData.city}
                onChange={handleInputChange}
              />
               <Input
                id="state"
                name="state"
                label="Estado"
                type="text"
                value={formData.state}
                onChange={handleInputChange}
              />
               <Input
                id="description"
                name="description"
                label="Descrição"
                type="text-area"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-verde px-8 py-2 font-semibold text-cinza transition-colors hover:bg-verde-hover"
            >
              Salvar alterações
            </button>
          </div>

          <p className="font-semibold">Senha</p>
          <div className="flex items-center gap-4">
            <p className="ml-6 text-sm font-medium">
              Deseja para alterar sua senha?
            </p>
            <button
              className="rounded-lg border border-verde px-7 py-1 font-medium text-verde-hover transition-colors hover:bg-verde-hover hover:text-cinza"
              onClick={() => {
                // openModalSenha();
              }}
            >
              Nova senha
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductRegister;