import { useEffect, useState } from "react";
import PendingOrderCard from "./PendingOrderCard";
import SearchCard from "./SearchCard";
import axiosInstance from "../axiosConfig";
import { ProductType } from "../types/ProductType";

const mockOrder = {
    id: '1',
    customerName: 'João da Silva',
    product: 'Produto A',
    orderInitialDate: '2024-06-21',
    orderFinalDate: '2024-06-30',
    totalAmount: 100, 
    status: 'Pendente',
};
function ContentEstablishment() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const idUser = localStorage.getItem("@Auth:id");
                const response = await axiosInstance.get(`/api/establishment/products/${idUser}`);
                setProducts(response.data); 
                setLoading(false);
                console.log(response)
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleApprove = (id: string) => {
        console.log(`Pedido aprovado com ID ${id}`);
        // Lógica para aprovar o pedido
      };
    
      const handleReject = (id: string) => {
        console.log(`Pedido rejeitado com ID ${id}`);
        // Lógica para rejeitar o pedido
      };
    
    return(
        <div className="container mx-auto mt-24 py-4">
              {/* Mostra os produtos associados ao estabelecimento */}
            {!loading && (
                <div>
                    {products.map(product => (
                        <SearchCard
                            key={product.id}
                            title={product.title}
                            city={product.city}
                            state={product.state}
                            image={product.mainImage}
                            price={Number(product.price)}
                            customerScore={product.customerScore}
                            numberOfReviews={product.numberOfReviews}
                            discount={product.discount}
                            total={product.total} 
                        />
                    ))}
                    
                </div>
            )}
            <div className="my-9">
                <p className="text-4xl font-bold text-verde">Reservas pendentes de aprovação</p>
                <div className="mt-2 h-1 w-full rounded-full bg-verde"></div>
                <div className="mt-9 flex items-center justify-between">
                    <PendingOrderCard
                        order={mockOrder}
                        onApprove={handleApprove}
                        onReject={handleReject}
                    />  
                    <PendingOrderCard
                        order={mockOrder}
                        onApprove={handleApprove}
                        onReject={handleReject}
                    /> 
                    <PendingOrderCard
                        order={mockOrder}
                        onApprove={handleApprove}
                        onReject={handleReject}
                    /> 
                    <PendingOrderCard
                        order={mockOrder}
                        onApprove={handleApprove}
                        onReject={handleReject}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default ContentEstablishment;