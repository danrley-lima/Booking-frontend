"use client";

import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import siteConfig from "../siteConfig";
import { CiMenuBurger } from "react-icons/ci";

function SmallHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex h-16 w-full items-center justify-between bg-azul px-4 py-2 text-cinza md:px-10 lg:h-[9%] lg:px-20">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={58}
          height={58}
          className="h-12 lg:h-16"
        />
        <h1 className="text-xl font-medium lg:text-2xl">
          {siteConfig.siteName}
        </h1>
      </div>

      <div>
        <button className="focus:outline-none lg:hidden" onClick={toggleMenu}>
          <CiMenuBurger className="h-7 w-7" />
        </button>
        <nav
          className={`absolute bg-azul pb-4 lg:relative lg:flex lg:items-center lg:bg-transparent lg:pb-0 ${menuOpen ? "left-0 top-16 block w-full" : "hidden"}`}
        >
          <ul className="flex flex-col items-center space-y-4 text-xl font-medium lg:flex-row lg:space-x-10 lg:space-y-0">
            <li>
              <Link href={""} className="">
                Voos
              </Link>
            </li>
            <li>
              <Link href={""} className="">
                Roteiros
              </Link>
            </li>
            <li>
              <Link href={""} className="">
                Anuncie{" "}
              </Link>
            </li>
            <li>
              <Link href={""} className="">
                Fale conosco
              </Link>
            </li>
            <button className="rounded-full border border-cinza px-4 py-2 hover:bg-cinza hover:text-azul lg:inline-block">
              Fazer login
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SmallHeader;
