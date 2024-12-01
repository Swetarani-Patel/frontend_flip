import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

function Sort({ onSort, showDiscountOption }) {
  const [activeSort, setActiveSort] = useState("");
  const handleSort = (criteria) => {
    onSort(criteria);
    setActiveSort(criteria);
  };
  return (
    <Box>
      <Box
        display="flex"
        gap="15px"
        marginTop="9px"
        marginBottom="9px"
        marginLeft="10px"
      >
        <Typography fontSize="14px" fontWeight="600">
          Sort By
        </Typography>
        <Typography
          onClick={() => {
            handleSort("MRP");
          }}
          style={{
            fontSize: "14px",
            color: activeSort === "MRP" ? "#2874f0" : "black",
            textDecoration: activeSort === "MRP" ? "underline" : "none",
            fontWeight: activeSort === "MRP" ? "600" : "500",
            cursor: "pointer",
          }}
        >
          Popularity
        </Typography>
        <Typography
          onClick={() => {
            handleSort("Price -- Low to High");
          }}
          style={{
            fontSize: "14px",
            color: activeSort === "Price -- Low to High" ? "#2874f0" : "black",
            textDecoration:
              activeSort === "Price -- Low to High" ? "underline" : "none",
            fontWeight: activeSort === "Price -- Low to High" ? "600" : "500",
            cursor: "pointer",
          }}
        >
          {" "}
          Price -- Low to High
        </Typography>
        <Typography
          onClick={() => {
            handleSort("Price -- High to Low");
          }}
          style={{
            fontSize: "14px",
            color: activeSort === "Price -- High to Low" ? "#2874f0" : "black",
            textDecoration:
              activeSort === "Price -- High to Low" ? "underline" : "none",
            fontWeight: activeSort === "Price -- High to Low" ? "600" : "500",
            cursor: "pointer",
          }}
        >
          {" "}
          Price -- High to Low
        </Typography>
        <Typography
          onClick={() => {
            handleSort("Rating");
          }}
          style={{
            fontSize: "14px",
            color: activeSort === "Rating" ? "#2874f0" : "black",
            textDecoration: activeSort === "Rating" ? "underline" : "none",
            fontWeight: activeSort === "Rating" ? "600" : "500",
            cursor: "pointer",
          }}
        >
          {" "}
          Best Seller
        </Typography>

        <Typography
          onClick={() => {
            handleSort("Newest First");
          }}
          style={{
            fontSize: "14px",
            color: activeSort === "Newest First" ? "#2874f0" : "black",
            textDecoration:
              activeSort === "Newest First" ? "underline" : "none",
            fontWeight: activeSort === "Newest First" ? "600" : "500",
            cursor: "pointer",
          }}
        >
          {" "}
          Newest First
        </Typography>

        {showDiscountOption && (
          <Typography
            onClick={() => {
              handleSort("Discount");
            }}
            style={{
              fontSize: "14px",
              color: activeSort === "Discount" ? "#2874f0" : "black",
              textDecoration: activeSort === "Discount" ? "underline" : "none",
              fontWeight: activeSort === "Discount" ? "600" : "500",
              cursor: "pointer",
            }}
          >
            {" "}
            Discount
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Sort;
