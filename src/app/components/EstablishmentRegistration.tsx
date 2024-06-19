"use client";
import { FormEvent, useState } from "react";
import Input from "./Input";

const defaultFormData: EstablishmentType = {
    fname: "",
    cnpj: "",
    phoneNumber: "",
    email: "",
    address: {
        zipCode: "",
        streetAddress: "",
        city: "",
        neighborhood: "",
        state: "",
        number: 0,
        complement: "",
    },
    password: "",
    confirm_password: ""
};

function EstablishmentRegistration() {
    const [formData, setFormData] = useState<EstablishmentType>(defaultFormData);

  function handleInputChange(id: string, value: string) {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

    return(
        <div className="container mx-auto w-1/2 mt-10  mb-10 flex items-center justify-center">
             <div className="flex flex-col justify-between bg-cinza p-8 rounded-lg shadow-md h-3/4 w-screen">
                <div className="relative">
                    <p className="text-center font-bold mb-5 text-xl sm:text-2xl">
                        Crie sua conta no Booking da Shopee.
                    </p>
                    <form onSubmit={onSubmit} method="post">
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="fname"
                                    label="Nome"
                                    type="text"
                                    value={formData.fname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    id="cnpj"
                                    label="CNPJ"
                                    type="masked"
                                    mask="99.999.999/9999-99"
                                    value={formData.cnpj}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="email"
                                    label="Email"
                                    type="text"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    id="phoneNumber"
                                    label="Telefone"
                                    type="masked"
                                    mask="(99) 9 9999-9999"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="zipCode"
                                    label="CEP"
                                    type="masked"
                                    mask="99999-999"
                                    value={formData.address.zipCode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="streetAddress"
                                    label="Endereço"
                                    type="text"
                                    value={formData.address.streetAddress}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    id="city"
                                    label="Cidade"
                                    type="text"
                                    value={formData.address.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="neighborhood"
                                    label="Bairro"
                                    type="text"
                                    value={formData.address.neighborhood}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="state"
                                    label="Estado"
                                    type="text"
                                    value={formData.address.state}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="number"
                                    label="Número"
                                    type="text"
                                    value={formData.address.number}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    id="complement"
                                    label="Complemento"
                                    type="text"
                                    value={formData.address.complement}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 md:mr-3">
                                <Input
                                    id="password"
                                    label="Senha"
                                    type="text"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <Input
                                    id="confirm_password"
                                    label="Confirme a senha"
                                    type="text"
                                    value={formData.confirm_password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-3 md:mt-8">
                            <input className="w-3/5 h-10 bg-azul text-cinza hover:cursor-pointer rounded-lg" type="submit" value="Criar conta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EstablishmentRegistration;