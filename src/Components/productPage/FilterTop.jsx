import { Box, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const FilterTop = ({ title, isRotated, onclick }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      padding=".5rem .6rem"
      boxSizing="border-box"
      onClick={onclick}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      <Typography fontSize="13px" fontWeight="600">
        {title}
      </Typography>
      <Typography>
        <KeyboardArrowDownIcon
          style={{ transform: isRotated ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </Typography>
    </Box>
  );
  
};

export default FilterTop;
