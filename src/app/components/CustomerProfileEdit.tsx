import { ChangeEvent, FormEvent, useState } from "react";

import { CustomerEditType } from "../types/CustomerEditType";
import Input from "./Input";
import { showToast } from "../utils/ToastHelper";

// Dados iniciais que futuramente serão preenchidos ao fazer uma req no banco
const defaultFormData: CustomerEditType = {
  name: "",
  lastName: "",
  cpf: "",
  phoneNumber: "",
  email: "",
  gender: "",
  birthDate: "",
  country: "",
  password: "",
};

function CustomerProfileEdit() {
  const [formData, setFormData] = useState<CustomerEditType>(defaultFormData);

  function handleInputChange(id: string, value: string) {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    // Importante para não redirecionar o usuário, que é o comportamento padrão do html nesse caso
    e.preventDefault();
    showToast("success", "Dados salvos com sucesso!");
    console.log(formData);
  }

  return (
    <div>
      <p className="font-semibold">Perfil</p>
      <p className="mb-5 text-sm">
        Queremos saber um pouco mais sobre você. :)
      </p>
      <form onSubmit={onSubmit}>
        <div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-1 md:grid-cols-2">
            <Input
              id="name"
              label="Nome"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              id="lastName"
              label="Sobrenome"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <Input
              id="cpf"
              label="CPF"
              type="masked"
              mask="999.999.999-99"
              value={formData.cpf}
              onChange={handleInputChange}
            />
            <Input
              id="phoneNumber"
              label="Telefone"
              type="masked"
              mask="(99) 99999-9999"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <Input
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              id="birthDate"
              label="Data de nascimento"
              type="date"
              value={formData.birthDate.toString()}
              onChange={handleInputChange}
            />
            <div className="col-span-2">
              <p className="font-semibold">Gênero</p>

              <div className="ml-6 flex items-center">
                <input
                  type="radio"
                  id="generoMasculino"
                  name="gender"
                  value="Masculino"
                  onChange={() => handleInputChange("gender", "Masculino")}
                  className="ml-5 mr-1 h-4 w-4 rounded-md border-gray-300 text-azul outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label htmlFor="generoMasculino" className="font-medium">
                  Masculino
                </label>

                <input
                  type="radio"
                  id="generoFeminino"
                  name="gender"
                  value="Feminino"
                  onChange={() => handleInputChange("gender", "Feminino")}
                  className="ml-5 mr-1 h-4 w-4 rounded-md border-gray-300 text-azul outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label htmlFor="generoFeminino" className="font-medium">
                  Feminino
                </label>

                <input
                  type="radio"
                  id="generoOutros"
                  name="gender"
                  value="Outros"
                  onChange={() => handleInputChange("gender", "Outros")}
                  className="ml-5 mr-1 h-4 w-4 rounded-md border-gray-300 text-azul outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label htmlFor="generoOutros" className="font-medium">
                  Outros
                </label>
              </div>
            </div>
            <Input
              id="country"
              label="Nacionalidade"
              type="select"
              value={formData.country}
              options={["Brasileiro", "Estrangeiro"]}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-verde px-8 py-2 font-semibold text-cinza transition-colors hover:bg-verde-hover"
            onClick={() => {
              // handleSubmit(e);
            }}
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
  );
}

export default CustomerProfileEdit;
