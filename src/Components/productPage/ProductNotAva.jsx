import { Container } from "@mui/material";
import React from "react";

function ProductNotAva() {
  return (
    <Container
      sx={{
        width: "50%",
        backgroundColor: "#f5f5f5",
        marginLeft: "300px",
        marginTop: "100px",
      }}
    >
      <img
        src="https://jalongi.com/public/assets/images/product_not_found.jpeg"
        alt=""
        style={{ width: "300px" }}
      />
    </Container>
  );
}

export default ProductNotAva;
