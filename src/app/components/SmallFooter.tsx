import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

function SmallFooter() {
  return (
    <div className="fixed bottom-0 left-0 flex h-[9%] w-full flex-col-reverse items-center justify-between bg-azul px-4 py-1 text-cinza md:flex-row md:px-10 lg:px-20">
      <p className="text-center text-sm font-light md:text-xs ">
        © 2024 Booking da Shopee. Todos os direitos reservados.
      </p>
      <div className="flex items-center space-x-6">
        <p className="text-xl font-medium">Siga-nos</p>
        <FaFacebook className="text-white-900 mr-4 h-5 w-5 hover:text-blue-500" />
        <FaInstagram className="text-white-900 mr-4 h-5 w-5 hover:text-purple-500" />
        <FaTiktok className="text-white-900 mr-4 h-5 w-5 hover:text-pink-500" />
        <FaTwitter className="text-white-900 h-5 w-5 hover:text-blue-400" />
      </div>
    </div>
  );
}

export default SmallFooter;
