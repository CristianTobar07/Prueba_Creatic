import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Contactanos = () => {
  return (
    <Box sx={{ flex: 1 }} id="contactenos">
      <Grid
        container
        spacing={0}
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3CB371",
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
                height: "100%",
                width: "100%",
              }}
            >
              <img
                src={require("../../../images/Logo1.png")}
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
                height: "60%",
                width: "100%",
              }}
            >
              <h2
                style={{ color: "#FFFFFF", fontSize: 40, textAlign: "center" }}
              >
                ¡Contactanos!
              </h2>
              <h3
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: -20,
                }}
              >
                +573206054112
              </h3>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contactanos;
