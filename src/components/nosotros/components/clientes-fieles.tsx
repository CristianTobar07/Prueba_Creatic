import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../styles/styles.css";
import Link from "@mui/material/Link";

const ClientesFieles = () => {
  return (
    <Box sx={{ flex: 1 }} id="testimonios">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(146,146,146,0.1)",
          paddingTop: 30,
        }}
      >
        <h2>Clientes fieles</h2>
      </div>
      <Grid
        container
        spacing={0}
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(146,146,146,0.1)",
          paddingBottom: 30,
        }}
      >
        <Grid item xs={4} md={3}>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="div-image">
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  width: "90%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="text-client">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  nulla facilisi.
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} md={3}>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="div-image">
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  width: "90%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="text-client">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  nulla facilisi.
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} md={3}>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="div-image">
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  width: "90%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="text-client">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  nulla facilisi.
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientesFieles;
