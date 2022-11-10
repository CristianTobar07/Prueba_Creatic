import React from "react";

const ImagenInicial = () => {
  return (
    <div>
      <img
        src={require("../../../images/Bg.png")}
        style={{ height: "100%", width: "100%" }}
        alt="fondo"
      />
    </div>
  );
};

export default ImagenInicial;
