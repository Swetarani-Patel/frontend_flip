import React from "react";
import { navData } from "../../constants/data";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductByCategory } from "../../redux/actions/productAction";
import { categoryMapping } from "./categoryMapping";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleCategory = (category) => {
    const modifiedCategory = categoryMapping(category);
    dispatch(getProductByCategory(modifiedCategory, ""));
    navigate(`/product/category/${category}`);
  };

  return (
    <Box>
      <Box
        paddingX="10px"
        paddingY="8px"
        bgcolor="#fff"
        display="flex"
        justifyContent="space-between"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        overflowX="auto"
        sx={{
          maxWidth: "100%",
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {navData.map((items) => (
          <Box
            padding="12px 8px"
            textAlign="center"
            key={items.text}
            width={isMobile ? "15%" : "auto"}
            minWidth="120px"
            marginBottom={isMobile ? "10px" : "0"}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <img
              src={items.url}
              alt="items"
              width={isMobile ? "48" : "64"}
              style={{ cursor: "pointer" }}
              onClick={() => handleCategory(items.text)}
            />
            <Typography
              fontSize={isMobile ? "12px" : "14px"}
              fontWeight="700"
              fontFamily="inherit"
              marginTop="10px"
              textAlign="center"
            >
              {items.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Navbar;
