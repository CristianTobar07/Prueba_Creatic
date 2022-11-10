import React from "react";
import DrawerAppBar from "../appBar/appBarComposite";
import ClientesFieles from "./components/clientes-fieles";
import Contactanos from "./components/contactanos";
import ImagenInicial from "./components/imagen-inicial";
import NuestrosProductos from "./components/nuestros-productos";
import QuienesSomos from "./components/quienes-somos";
import Reconocimientos from "./components/reconocimientos";

const NosotrosComposite = () => {
  return (
    <>
      <div>
        <DrawerAppBar />
      </div>

      <ImagenInicial />

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 0,
        }}
      >
        <QuienesSomos />
        <NuestrosProductos />
        <Reconocimientos />
        <ClientesFieles />
        <Contactanos />
      </div>
    </>
  );
};

export default NosotrosComposite;
