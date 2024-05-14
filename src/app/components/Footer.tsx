import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="h-45 bg-azul px-4 text-cinza sm:px-8 md:px-12 lg:px-16 flex fixed bottom-0 left-0 w-full">
            <section className="py-4 text-left text-sm sm:px-10 md:px-12 lg:py-12 lg:w-1/3">
                <h2 className="font-bold">Empresa</h2>
                <ul role="list" className="mt-3 space-y-1">
                    <li>
                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Quem somos</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Trabalhe conosco</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Parcerias</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Anuncie aqui</a>
                    </li>
                </ul>
            </section>
            <section className="py-4 text-left text-sm sm:px-10 md:px-12 lg:py-12 lg:w-1/3">
                <h2 className="font-bold">Ajuda</h2>
                <ul role="list" className="mt-3 space-y-1">
                    <li>
                        <a href="#" className="text-sm  hover:text-gray-900">Política de privacidade</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-900">Alterar ou cancelar reserva</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm  hover:text-gray-900">Termos de uso</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-900">Processos e prazos de reembolso</a>
                    </li>
                </ul>
            </section>
            <section className="py-4 text-left text-sm sm:px-10 md:px-12 lg:py-12 lg:w-1/3">
                <div className="flex items-center mb-14">
                    <h2 className="font-bold mr-3">Siga-nos</h2>
                    <FaFacebook className="text-white-900 w-4 h-4 mr-4 hover:text-blue-500" />
                    <FaInstagram className="text-white-900 w-4 h-4 mr-4 hover:text-purple-500" />
                    <FaTiktok className="text-white-900 w-4 h-4 mr-4 hover:text-pink-500" />
                    <FaTwitter className="text-white-900 w-4 h-4 hover:text-blue-400" />
                </div>

                <p>© 2024 Booking da Shopee. Todos os direitos reservados.</p>
            </section>
        </footer>
    )
}
export default Footer;