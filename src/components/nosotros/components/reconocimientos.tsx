import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Reconocimientos = () => {
  return (
    <Box sx={{ flex: 1 }} id="reconocimientos">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <h2>Reconocimientos</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: -30,
        }}
      >
        <p style={{ textAlign: "center" }}>
          Cada día crecemos para tener lo mejor para ustedes
        </p>
      </div>
      <Grid
        container
        spacing={0}
        style={{
          justifyContent: "center",
          alignItems: "center",
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
                height: "60%",
                width: "60%",
              }}
            >
              <img
                src={require("../../../images/rec.png")}
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
                width: "60%",
              }}
            >
              <img
                src={require("../../../images/rec2.png")}
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

export default Reconocimientos;
