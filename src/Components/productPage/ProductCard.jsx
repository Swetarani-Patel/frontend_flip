import { Box, Typography } from "@mui/material";
import React from "react";
import { IoIosStar } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductCard({ ele}) {
  const storedcategory = localStorage.getItem("category");
  const fassured =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";

    
  return (
    <Link
      to={`/product/${ele.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Box
        key={ele.id}
        sx={{
          padding: "20px 10px",

          "&:hover": {
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box textAlign="right">
          <AiFillHeart color="#c8c8c8" />
        </Box>
        <Box
          width="100%"
          height="300px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={ele.url}
            alt="product"
            style={{ maxWidth: "100%", maxHeight: "250px", width: "auto" }}
          />
        </Box>

        <Typography
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "14px",
          }}
        >
          {ele.title.longTitle}
        </Typography>
        <Typography
          marginTop="5px"
          fontSize="14px"
          fontWeight="600"
          display="flex"
          alignItems="center"
         
        >
          <Box
            style={{
              backgroundColor: "#388e3c",
              padding: "0 5px",
              borderRadius: "4px",
              color: "white",
            
              
            }}
          >
            {" "}
            {ele.rating} <IoIosStar fontSize="11px" />
          </Box>

          <span>
            <img src={fassured} alt="" style={{ width: 58, marginLeft: 60 }} />
          </span>
        </Typography>

        <Box marginTop="5px" display="flex" gap="10px" alignItems="center">
          <Box>
            <Typography fontSize="16px" fontWeight="600">
              ₹{ele.price.cost}
            </Typography>
          </Box>
          <Box display="flex">
            <strike style={{ fontSize: "14px", color: "#878787" }}>
              ₹{ele.price.mrp}
            </strike>
            <Typography
              color="#388e3c"
              fontSize="13px"
              fontWeight="600"
              marginLeft="10px"
            >
              {ele.price.discount} off
            </Typography>
          </Box>
        </Box>
        {storedcategory === "Fashion" && ele.size.length > 0 ? (
          <>
            <span style={{ color: "#ACACAC", fontWeight: "600" }}>size</span>
            {ele.size.map((el, index) => (
              <Typography
                key={index}
                style={{
                  display: "inline-block",
                  marginLeft: "5px",
                  fontSize: "14px",
                }}
              >
                {el}
              </Typography>
            ))}
          </>
        ) : null}
      </Box>
    </Link>
  );
}

export default ProductCard;
