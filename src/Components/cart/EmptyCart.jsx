import { Box, Button, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import React from "react";

function EmptyCart() {
    const navigate = useNavigate()
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Box width="100%" bgcolor="#fff" height="60vh" margin="auto">
      <Box textAlign="center" paddingTop="70px">
        <img src={imgurl} style={{ width: "17%" }} />
        <Box display="flex" flexDirection="column">
          <Typography fontSize="18px" marginTop="17px" marginBottom="15px">
            Your cart is empty!
          </Typography>
          <Typography component="span" fontSize="13px">
            Add items to it now.
          </Typography>
          <Button
          onClick={()=>navigate('/')}
            sx={{
              bgcolor: "#2874f0",
              color: "white",
              width: "15%",
              margin: "auto",
              marginTop: "20px",
              "&:hover":{
                bgcolor: "#1e5aae"
              }
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EmptyCart;
