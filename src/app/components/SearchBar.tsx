import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { CategoryName } from "../types/CategoryName";
import { PiAirplaneTakeoffLight } from "react-icons/pi";

// interface Category {
//   name: string;
// }

const categories: CategoryName[] = [
  "Passagens",
  "Hospedagens",
  "Restaurantes",
  "Viagens",
  "Pacotes",
];

function Field({ name }: { name: string }) {
  return (
    <>
      (
      <div className="p-2">
        <label className="block text-sm font-medium text-gray-700">
          {name}
        </label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      );
    </>
  );
}

const categoryFields = {
  Passagens: () => (
    <>
      <Field name="De:" />
      <Field name="Para:" />
      <Field name="Data:" />
      <Field name="Pesquisar" />
    </>
  ),
  Hospedagens: () => (
    <>
      <Field name="Vai pra onde?" />
      <Field name="Data de entrada:" />
      <Field name="Data de saída:" />
      <Field name="// hospedes" />
    </>
  ),
  // Adicione mais categorias conforme necessário
};

function SearchBar() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryName>("Passagens");

  function handleCategoryClick(category: CategoryName) {
    setSelectedCategory(category);
    console.log(selectedCategory);
  }
  const teste = ["De:", "Para:", "Data:", "Pesquisar"];

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
      <p className="flex items-center gap-3">
        icons {<CiCalendar />} e {<FaLocationDot />} e
        {<PiAirplaneTakeoffLight />}
      </p>
      <div className="mt-1 flex overflow-hidden rounded-bl-full rounded-br-full border-gray-300 bg-cinza text-preto drop-shadow-md">
        {teste.map((palavra, index) => (
          <div
            key={palavra}
            className={`py-3 text-center ${index === teste.length - 1 ? "bg-verde px-6 text-white" : "flex-grow border border-gray-300 "}`}
          >
            {palavra}
          </div>
        ))}
      </div>
      {/* <div className="mt-1 flex overflow-hidden rounded-bl-full rounded-br-full border-gray-300 bg-cinza">
        {selectedCategory && categoryFields[selectedCategory.name]?.()}
      </div> */}
    </div>
  );
}

export default SearchBar;
