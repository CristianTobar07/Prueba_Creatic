import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function BasicGrid() {
  return (
    <Box sx={{ flex: 1 }} id="quienesSomos">
      <Grid
        container
        spacing={0}
        style={{ justifyContent: "center", alignItems: "center" }}
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
                height: "60%",
                width: "80%",
              }}
            >
              <h2 style={{ textAlign: "center" }}>¿Quienes somos?</h2>
              <div
                style={{
                  height: "50%",
                }}
              >
                <p>
                  La empresa dedicada a la producción y comercialización de
                  postres creados a base de frutas típicas o endémicas de la
                  región (borojó, almirajó, piña, chontaduro y cacao) ubicada en
                  Quibdó - Chocó
                </p>
              </div>
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
                height: "100%",
                width: "100%",
              }}
            >
              <img
                src={require("../../../images/Product.png")}
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
}
