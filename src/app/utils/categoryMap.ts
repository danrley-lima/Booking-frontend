export default function categoryMapping(category: string) {
  const categoryMapping: { [key: string]: string } = {
    Passagens: "TICKETS",
    Restaurantes: "RESTAURANT",
    Hospedagens: "ACCOMMODATION",
    Atividades: "ACTIVITIES",
    Pacotes: "PACKAGES",
  };
  const categoryMapped = categoryMapping[category];
  return categoryMapped;
}
