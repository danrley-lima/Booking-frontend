import PendingOrderCard from "./PendingOrderCard";

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
            //mostrar produtos associados a um estabelecimento
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