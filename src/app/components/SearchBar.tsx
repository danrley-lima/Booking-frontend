import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";

import { FaLocationDot, FaPerson } from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";
import { CategoryName } from "../types/CategoryName";
import { SearchFormType } from "../types/SearchType";
import SearchBarField from "./searchBarComponents/SearchBarField";
import categoryMapping from "../utils/categoryMap";

const categories: CategoryName[] = [
  "Passagens",
  "Hospedagens",
  "Restaurantes",
  "Atividades",
  "Pacotes",
];

type CategoryFields = {
  [key in CategoryName]: () => JSX.Element;
};

const defaultSearchForm: SearchFormType = {
  saindoDe: "",
  indoPara: "",
  data: "",
  pessoas: 1,
};

// Limpar os campos ao trocar a categoria quando implementar o hook para backend
function SearchBar() {
  const categoryFields: CategoryFields = {
    Passagens: () => (
      <>
        <SearchBarField
          name="saindoDe"
          className=""
          icon={<FaLocationDot size={20} />}
          placeholder="Saindo de onde?"
          onChange={handleChange}
          value={formData.saindoDe}
        />
        <SearchBarField
          name="indoPara"
          className=""
          icon={<GiAirplaneDeparture size={24} />}
          placeholder="Indo pra onde?"
          onChange={handleChange}
          value={formData.indoPara}
        />
        <SearchBarField
          name="data"
          className=""
          type="date"
          icon={<CiCalendar size={24} />}
          placeholder="Quando?"
          onChange={handleChange}
          value={formData.data}
        />
        <SearchBarField
          name="pessoas"
          className=""
          type="number"
          icon={<FaPerson size={20} />}
          placeholder="Passageiros: "
          onChange={handleChange}
          value={formData.pessoas}
        />
      </>
    ),
    Hospedagens: () => (
      <>
        <SearchBarField
          name="indoPara"
          placeholder="Vai pra onde?"
          className="flex-grow"
          icon={<MdTravelExplore size={24} />}
          onChange={handleChange}
          value={formData.indoPara}
        />
        <SearchBarField
          name="data"
          className=""
          type="date"
          icon={<CiCalendar size={24} />}
          placeholder="Quando?"
          onChange={handleChange}
          value={formData.data}
        />
        <SearchBarField
          name="pessoas"
          className=""
          type="number"
          icon={<FaPerson size={20} />}
          placeholder="Pessoas: "
          onChange={handleChange}
          value={formData.pessoas}
        />
      </>
    ),
    Restaurantes: () => (
      <>
        <SearchBarField
          name="indoPara"
          placeholder="Onde?"
          className="flex-grow"
          icon={<MdTravelExplore size={24} />}
          onChange={handleChange}
          value={formData.indoPara}
        />
        <SearchBarField
          name="data"
          className=""
          type="date"
          icon={<CiCalendar size={24} />}
          placeholder="Quando?"
          onChange={handleChange}
          value={formData.data}
        />
        <SearchBarField
          name="pessoas"
          className=""
          type="number"
          icon={<FaPerson size={20} />}
          placeholder="Pessoas: "
          onChange={handleChange}
          value={formData.pessoas}
        />
      </>
    ),
    Atividades: () => (
      <>
        <SearchBarField
          name="indoPara"
          placeholder="Vai pra onde?"
          className="flex-grow"
          icon={<MdTravelExplore size={24} />}
          onChange={handleChange}
          value={formData.indoPara}
        />
        <SearchBarField
          name="data"
          className=""
          type="date"
          icon={<CiCalendar size={24} />}
          placeholder="Quando?"
          onChange={handleChange}
          value={formData.data}
        />
      </>
    ),
    Pacotes: () => (
      <>
        <SearchBarField
          name="indoPara"
          placeholder="Vai pra onde?"
          className="flex-grow"
          icon={<MdTravelExplore size={24} />}
          onChange={handleChange}
          value={formData.indoPara}
        />
        <SearchBarField
          name="data"
          className=""
          type="date"
          icon={<CiCalendar size={24} />}
          placeholder="Quando?"
          onChange={handleChange}
          value={formData.data}
        />
      </>
    ),
  };

  const [formData, setFormData] = useState<SearchFormType>(defaultSearchForm);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryName>("Passagens");

  const router = useRouter();

  useEffect(() => {
    setFormData(defaultSearchForm);
  }, [selectedCategory]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleCategoryClick(category: CategoryName) {
    setSelectedCategory(category);
  }

  async function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    // console.log("<><><>");
    // console.log(formData);

    // router.push(`/busca?query=${formData.indoPara}`);
    let queryParams = new URLSearchParams({
      category: categoryMapping(selectedCategory),
      ...Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [key, value.toString()]),
      ),
    }).toString();

    queryParams = queryParams.replace("data", "date");
    console.log(queryParams);

    router.push(`/busca?${queryParams}`);
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
