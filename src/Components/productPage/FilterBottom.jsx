import { Box, Typography } from "@mui/material";
import React from "react";

const FilterBottom = ({ value, onclick, type }) => {
  return (
    <Box paddingBottom=".5rem">
      {value.map((elm) => (
        <Typography
          padding=".3rem 1rem"
          display="flex"
          alignItems="center"
          gap="1rem"
          fontSize='14px'
        >
          <input
            type="checkbox"
            style={{ border: 'none', cursor:"pointer"}}
            onChange={() => onclick(elm)}
          />{" "}
          {elm}
        </Typography>
      ))}
    </Box>
  );
};

export default FilterBottom;
