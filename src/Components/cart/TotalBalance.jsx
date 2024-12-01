import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function TotalBalance({ cartItems }) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp * item.quantity;
      discount += (item.price.mrp - item.price.cost) * item.quantity;
    });
    setPrice(price);
    setDiscount(discount);
  };

  return (
    <Box>
      <Box padding="15px 24px" bgcolor="#fff" borderBottom="1px solid #f0f0f0">
        <Typography color="#878787" fontWeight="600">
          PRICE DETAILS
        </Typography>
      </Box>
      <Box padding="15px 24px" bgcolor="#fff">
        <Typography marginBottom="20px" fontSize="14px">
          Price
          <Typography component="span">({cartItems?.length} item)</Typography>
          <Box component="span" sx={{ float: "right" }}>
            ₹{price}
          </Box>
        </Typography>
        <Typography marginBottom="20px" fontSize="14px">
          Discount
          <Box
            component="span"
            sx={{ float: "right", color: "#388e3c", fontWeight: "600" }}
          >
            -₹{discount}
          </Box>
        </Typography>
        <Typography marginBottom="20px" fontSize="14px">
          Delivery Charges
          <Box
            component="span"
            sx={{ float: "right", color: "#388e3c", fontWeight: "600" }}
          >
            ₹40
          </Box>
        </Typography>
        <Divider />

        <Typography
          marginTop="15px"
          marginBottom="20px"
          fontSize="19px"
          fontWeight="600"
        >
          Total Amount
          <Box component="span" sx={{ float: "right" }}>
            ₹{price - discount + 40}
          </Box>
        </Typography>
        <Divider />
        <Typography
          marginBottom="20px"
          fontSize="15px"
          fontWeight="600"
          color="#388e3c"
          marginTop="15px"
        >
          You will save ₹{discount - 40} on this order
        </Typography>
      </Box>
    </Box>
  );
}

export default TotalBalance;
