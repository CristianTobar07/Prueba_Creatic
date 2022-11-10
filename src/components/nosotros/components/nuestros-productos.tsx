import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const NuestrosProductos = () => {
  return (
    <Box sx={{ flex: 1 }} id="nuestrosProductos">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(146,146,146,0.1)",
        }}
      >
        <h2>Nuestros Productos</h2>
      </div>
      <Grid
        container
        spacing={0}
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(146,146,146,0.1)",
        }}
      >
        <Grid item xs={10} md={4}>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "80%",
                width: "80%",
                backgroundColor: "rgba(171,115,139,0.2)",
              }}
            >
              <h2 style={{ textAlign: "center", marginBottom: -15 }}>
                Chotaduro
              </h2>
              <img
                src={require("../../../images/chontaduro.png")}
                width="100%"
                height="100%"
                alt="Logo"
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={10} md={4}>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "80%",
                width: "80%",
                backgroundColor: "rgba(171,115,139,0.2)",
              }}
            >
              <h2 style={{ textAlign: "center", marginBottom: -15 }}>Piña</h2>
              <img
                src={require("../../../images/pina.png")}
                width="100%"
                height="100%"
                alt="Logo"
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={10} md={4}>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "80%",
                width: "80%",
                backgroundColor: "rgba(171,115,139,0.2)",
              }}
            >
              <h2 style={{ textAlign: "center", marginBottom: -15 }}>Cacáo</h2>
              <img
                src={require("../../../images/chocolate.png")}
                width="100%"
                height="100%"
                alt="Logo"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NuestrosProductos;
