import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";

import { FaLocationDot, FaPerson } from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";
import { CategoryName } from "../types/CategoryName";
import SearchBarField from "./searchBarComponents/SearchBarField";
import { MdTravelExplore } from "react-icons/md";

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
        name=""
        className=""
        icon={<FaLocationDot size={20} />}
        placeholder="Saindo de onde?"
      />
      <SearchBarField
        name=""
        className=""
        icon={<GiAirplaneDeparture size={24} />}
        placeholder="Indo pra onde?"
      />
      <SearchBarField
        name=""
        className=""
        type="date"
        icon={<CiCalendar size={24} />}
        placeholder="Quando?"
      />
      <SearchBarField
        name=""
        className=""
        type="number"
        icon={<FaPerson size={20} />}
        placeholder="Passageiros: "
      />
    </>
  ),
  Hospedagens: () => (
    <>
      <SearchBarField
        name=""
        placeholder="Vai pra onde?"
        className="flex-grow"
        icon={<MdTravelExplore />}
      />
      <SearchBarField
        name=""
        className=""
        type="date"
        icon={<CiCalendar size={24} />}
        placeholder="Quando?"
      />
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
      <SearchBarField
        name=""
        placeholder="Vai pra onde?"
        className="flex-grow"
        icon={<MdTravelExplore size={24} />}
      />
    </>
  ),
};

// Limpar os campos ao trocar a categoria quando implementar o hook para backend
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
      <div className="block justify-between overflow-hidden md:flex">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`w-full border-x border-azul px-4 py-2 text-center font-bold transition-colors hover:bg-slate-200 ${
              selectedCategory === category
                ? "bg-slate-200 text-azul shadow-inner shadow-slate-700"
                : "bg-cinza text-azul"
            } ${index === 0 ? "rounded-t-full md:rounded-tl-full md:rounded-tr-none" : ""} ${index === categories.length - 1 ? "rounded-b-full md:rounded-b-none md:rounded-tr-full" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-1 flex flex-row overflow-hidden rounded-bl-full rounded-br-full border-gray-300 bg-cinza pl-4 text-preto drop-shadow-md">
        <div className="flex w-full flex-row">
          {selectedCategory && categoryFields[selectedCategory]?.()}
        </div>
        <button
          onClick={handleSubmit}
          className="w-36 bg-verde py-3 text-white transition-colors hover:bg-verde-hover "
        >
          <p className="relative -left-1">Pesquisar</p>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
