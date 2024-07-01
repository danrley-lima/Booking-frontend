"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";
import SearchCard from "../components/SearchCard";
import { ProductType } from "../types/ProductType";

interface Params {
  date?: string;
  category?: string;
  [key: string]: any; // Permite outras propriedades dinâmicas
}

function SearchPage() {
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  const [results, setResults] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  // Convertendo os parâmetros de pesquisa em uma string JSON para usar como dependência
  const queryString = JSON.stringify(query);

  useEffect(() => {
    console.log("Query: ", query);
    if (query) {
      const params: Params = {};

      if (query.date) {
        params.date = query.date;
      }

      if (query.category) {
        params.category = query.category;
      }

      axiosInstance
        .get("/products/by-date", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: params,
        })
        .then((response) => {
          setResults(response.data);
          setLoading(false); // Carregamento concluído
        })
        .catch((error) => {
          console.error("There was an error!", error);
          setLoading(false);
        });
    }
  }, [queryString]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-8">
      <p className="relative mt-16 text-sm md:-left-6">{"Home > Busca"}</p>
      <p className="mt-5">
        Foram encontrados {results.length} resultados para suas pesquisas
      </p>
      <div className="mb-8 mt-1 grid gap-8 border-t-2 pt-1 sm:grid-cols-1 lg:grid-cols-3">
        {results.map((result) => (
          <SearchCard
            key={result.id}
            title={result.title}
            city={result.city}
            state={result.state}
            image={
              "http://geoparqueserido.com.br/wp-content/uploads/2021/05/DJI_0057-1024x576.jpg"
            }
            price={Number(result.price)}
            customerScore={result.customerScore}
            numberOfReviews={result.numberOfReviews}
            discount={result.discount}
            total={result.totalPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
