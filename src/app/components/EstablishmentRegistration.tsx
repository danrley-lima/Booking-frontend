function EstablishmentRegistration() {
    return(
        <div className="container mx-auto w-1/2 mt-8 flex items-center justify-center">
             <div className="flex flex-col justify-between bg-cinza p-8 rounded-lg shadow-md h-3/4 w-screen">
                <div className="relative">
                    <p className="text-center font-bold mb-5 text-xl sm:text-2xl">
                        Crie sua conta no Booking da Shopee.
                    </p>
                    <form action="#" method="post">
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <label className="text-xs sm:text-sm" htmlFor="fname">Nome</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="fname" name="fname" required />
                            </div>
                            <div className="w-1/2">
                                <label className="text-xs sm:text-sm" htmlFor="cnpj">CNPJ</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="cnpj" name="cnpj" required />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <label className="text-xs sm:text-sm" htmlFor="email">Email</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="email" name="email" required />
                            </div>
                            <div className="w-1/2">
                                <label className="text-xs sm:text-sm" htmlFor="Telefone">Telefone</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="telefone" name="telefone" required />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <label className="text-xs sm:text-sm" htmlFor="zipCode">CEP</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="zipCode" name="zipCode" required />
                            </div>
                            <div className="w-1/2 mr-3">
                                <label className="text-xs sm:text-sm" htmlFor="streetAddress">Endereço</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="streetAddress" name="streetAddress" required />
                            </div>
                            <div className="w-1/2">
                                <label className="text-xs sm:text-sm" htmlFor="city">Cidade</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="city" name="city" required />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <label className="text-xs sm:text-sm" htmlFor="neighborhood">Bairro</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="neighborhood" name="neighborhood" required />
                            </div>
                            <div className="w-1/2 mr-3">
                                <label className="text-xs sm:text-sm" htmlFor="state">Estado</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="state" name="state" required />
                            </div>
                            <div className="w-1/2 mr-3">
                                <label className="text-xs sm:text-sm" htmlFor="number">Número</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="number" name="number" required />
                            </div>
                            <div className="w-1/2">
                                <label className="text-xs sm:text-sm" htmlFor="complement">Complemento</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="text" id="complement" name="complement" required />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 md:mr-3">
                                <label className="text-xs sm:text-sm" htmlFor="password">Senha</label>
                                <input className="w-full pl-1 border-2 rounded-md border-gray-500" type="password" id="password" name="password" required />    
                            </div>
                            <div className="w-full md:w-1/2">
                                <label className="text-xs sm:text-sm" htmlFor="confirm_password">Confirmar senha</label>
                                <input className="w-full border-2 rounded-md border-gray-500" type="password" id="confirm_password" name="confirm_password" required />
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