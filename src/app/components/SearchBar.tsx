import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { useRouter } from "next/navigation";

import { FaLocationDot } from "react-icons/fa6";
import { CategoryName } from "../types/CategoryName";
import SearchBarField from "./searchBarComponents/SearchBarField";

const categories: CategoryName[] = [
  "Passagens",
  "Hospedagens",
  "Restaurantes",
  "Viagens",
  "Pacotes",
];

type CategoryFields = {
  [key in CategoryName]: () => JSX.Element;
};

const categoryFields: CategoryFields = {
  Passagens: () => (
    <>
      <SearchBarField
        name="De:"
        className="flex-grow"
        icon={<FaLocationDot size={20} />}
      />
      <SearchBarField
        name="Para:"
        className="flex-grow"
        icon={<FaLocationDot size={20} />}
      />
      <SearchBarField
        name="Data:"
        className="flex-grow"
        type="date"
        icon={<CiCalendar size={24} />}
      />
    </>
  ),
  Hospedagens: () => (
    <>
      <SearchBarField name="Vai pra onde?" className="flex-grow" />
      <SearchBarField name="Data de entrada:" className="flex-grow" />
      <SearchBarField name="Data de saída:" className="flex-grow" />
      <SearchBarField name="Número de hóspedes:" className="flex-grow" />
    </>
  ),
  Restaurantes: () => (
    <>
      <SearchBarField name="Localização:" className="flex-grow" />
      <SearchBarField name="Data da reserva:" className="flex-grow" />
      <SearchBarField name="Número de pessoas:" className="flex-grow" />
    </>
  ),
  Viagens: () => (
    <>
      <SearchBarField name="Destino:" className="flex-grow" />
      <SearchBarField name="Data de partida:" className="flex-grow" />
      <SearchBarField name="Data de retorno:" className="flex-grow" />
    </>
  ),
  Pacotes: () => (
    <>
      <SearchBarField name="Destino:" className="flex-grow" />
      <SearchBarField name="Data de partida:" className="flex-grow" />
      <SearchBarField name="Data de retorno:" className="flex-grow" />
      <SearchBarField name="Número de pessoas:" className="flex-grow" />
    </>
  ),
};

function SearchBar() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryName>("Passagens");

  function handleCategoryClick(category: CategoryName) {
    setSelectedCategory(category);
  }

  function handleSubmit() {
    router.push("/busca");
  }

  return (
    <div className="mx-auto">
      <div className="flex justify-between overflow-hidden">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`w-full border-x border-azul px-4 py-2 text-center font-bold transition-colors hover:bg-slate-200 ${
              selectedCategory === category
                ? "bg-slate-200 text-azul shadow-inner shadow-slate-700"
                : "bg-cinza text-azul"
            } ${index === 0 ? "rounded-tl-full" : ""} ${index === categories.length - 1 ? "rounded-tr-full" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-1 flex flex-row overflow-hidden rounded-bl-full rounded-br-full border-gray-300 bg-cinza pl-4 text-preto drop-shadow-md">
        {selectedCategory && categoryFields[selectedCategory]?.()}
        <button
          onClick={handleSubmit}
          className="w-32 bg-verde py-3 text-white transition-colors hover:bg-verde-hover "
        >
          <p className="relative -left-1">Pesquisar</p>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
