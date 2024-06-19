"use client";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchCard from "./components/SearchCard";
import ModalLogin from "./components/ModalLogin";
import ModalCadastro from "./components/ModalCadastro";
import Content from "./components/Content";
import EstablishmentRegistration from "./components/EstablishmentRegistration";

export default function Home() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openPage, setOpenPage] = useState('');

  function openModalLogin(){
    setOpenLogin(!openLogin)
  }

  function openModalRegister(){
    setOpenRegister(!openRegister)
  }

  return (
    <>
      {
        openLogin ?
        <ModalLogin closeModal={openModalLogin} openRegister={openModalRegister}/> :
        <></>
        }
      {
        openRegister ?
        <ModalCadastro closeModal={openModalRegister}/> :
        <></>
      }
      
      <Header openModalLogin={openModalLogin} setPage={setOpenPage}/>
      {openPage == "anuncio" ? <EstablishmentRegistration /> : <Content />}

      <Footer />
    </>
  );
}
