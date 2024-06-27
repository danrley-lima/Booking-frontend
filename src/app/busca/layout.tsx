"use client";

import { useState } from "react";
import Header from "../components/Header";
import ModalCadastro from "../components/ModalCadastro";
import ModalLogin from "../components/ModalLogin";
import SmallFooter from "../components/SmallFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openPage, setOpenPage] = useState("");

  function openModalLogin() {
    setOpenLogin(!openLogin);
  }

  function openModalRegister() {
    setOpenRegister(!openRegister);
  }
  return (
    <div className="flex min-h-screen flex-col justify-between">
      {openLogin ? (
        <ModalLogin
          closeModal={openModalLogin}
          openRegister={openModalRegister}
        />
      ) : (
        <></>
      )}
      {openRegister ? <ModalCadastro closeModal={openModalRegister} /> : <></>}
      <Header openModalLogin={openModalLogin} setPage={setOpenPage} />
      <div className="flex-grow bg-cinza">{children}</div>
      <SmallFooter />
    </div>
  );
}
