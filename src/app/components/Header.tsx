import Link from "next/link";
import siteConfig from "../siteConfig";

import Image from "next/image";

function Header() {
  return (
    <header className="h-64 bg-azul px-12 text-cinza">
      <div className="container flex items-center justify-between pt-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={58}
            height={58}
            className="h-16"
          />
          <h1 className="text-2xl font-medium">{siteConfig.siteName}</h1>
        </div>
        <div className="flex items-center space-x-12 text-xl font-medium">
          <Link href={""}>Voos</Link>
          <Link href={""}>Roteiros</Link>
          <Link href={""}>Anuncie </Link>
          <Link href={""}>Fale conosco</Link>
          <button className="rounded-full border border-cinza p-2">
            Fazer Login
          </button>
        </div>
      </div>
      <p className="py-12 text-center text-3xl font-bold">Onde você quer ir?</p>
    </header>
  );
}

export default Header;
