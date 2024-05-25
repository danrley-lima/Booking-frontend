"use client";
import Link from "next/link";
import siteConfig from "../siteConfig";

import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";

import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="h-64 bg-azul px-4 text-cinza sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto flex items-center justify-between pt-4 sm:flex-row">
        <div className="flex items-center space-x-4">
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
        <button className="focus:outline-none lg:hidden" onClick={toggleMenu}>
          <CiMenuBurger className="h-7 w-7" />
        </button>
        <nav
          className={`absolute bg-azul pb-4 lg:relative lg:flex lg:items-center lg:bg-transparent lg:pb-0 ${menuOpen ? "left-0 top-20 block w-full" : "hidden"}`}
        >
          <ul className="flex flex-col items-center space-y-4 text-xl font-medium lg:flex-row lg:space-x-12 lg:space-y-0">
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
      <p className="py-8 text-center text-xl font-bold lg:py-12  lg:text-3xl">
        Onde você quer ir?
      </p>
    </header>
  );
}

export default Header;
