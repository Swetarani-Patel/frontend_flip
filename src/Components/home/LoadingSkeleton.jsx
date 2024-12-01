import { Box, Skeleton } from "@mui/material";
import React from "react";

const LoadingSkeleton = ({ totalLength }) => {
  return (
    <>
      {[...Array(totalLength)].map((ele, index) => (
        <Box key={index}>
          <Skeleton
            variant="rect"
            width={200}
            height={200}
            animation="wave"
          />
          <Skeleton variant="text" width={200} height={30} animation="wave" />
          <Skeleton variant="text" width={200} animation="wave" />
        </Box>
      ))}
    </>
  );
};

export default LoadingSkeleton;
