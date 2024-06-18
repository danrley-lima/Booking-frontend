"use client"
import { useState } from "react";
import EstablishmentRegistration from "./components/EstablishmentRegistration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";

export default function Home() {

  const [openPage, setOpenPage] = useState('')
  
  return (
    <>
      <Header setPage={setOpenPage} />
      {openPage == "anuncio" && <EstablishmentRegistration/>}

      {!openPage && <Content />}
      <Footer />
    </>
  );
}
