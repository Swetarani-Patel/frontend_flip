import { Box, Typography, styled, Badge } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import LoginDialog from "../login/LoginDialog";
import { useStateContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "3.7rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "1.2rem",
    marginLeft: "1rem",
  },
}));

function CustomButton({ Drawer }) {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { account, setAccount } = useStateContext();
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const sellUrl =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg";
  const loginUrl =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg";
  const cartUrl =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg";
  return (
    <Wrapper display={"flex"} gap={"3.7rem"}>
      <Box display={"flex"} alignItems={"center"} gap={"0.6rem"}>
        {!Drawer && <img src={loginUrl} alt="loginicon" />}

        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <Typography
            fontSize={"17px"}
            color={"black"}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              openDialog();
            }}
          >
            Sign in
            <IoIosArrowDown
              style={{
                marginTop: "0.3rem",
                cursor: "pointer",
                fontSize: "12px",
                marginLeft: "0.6rem",
              }}
            />
          </Typography>
        )}
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={"0.6rem"}>
        {!Drawer && (
          <Badge badgeContent={cartItems?.length} color="secondary">
            <img src={cartUrl} alt="carticon" />
          </Badge>
        )}

        <Link
          to="/cart"
          style={{
            fontSize: "17px",
            color: "black",
            textDecoration: "none",
          }}
        >
          Cart
        </Link>
      </Box>
      <Box
        color={"black"}
        display={"flex"}
        alignItems={"center"}
        gap={"0.6rem"}
      >
        {!Drawer && <img src={sellUrl} alt="sell" />}

        <Typography fontSize={"17px"}>Become a Seller</Typography>
      </Box>

      <Box>
        {!Drawer ? (
          <AiOutlineMore color="black" fontSize={"25px"} />
        ) : (
          <Typography fontSize={"17px"} color={"black"}>
            More
          </Typography>
        )}
      </Box>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}

export default CustomButton;
