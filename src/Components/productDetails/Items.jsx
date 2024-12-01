import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "46%",
  borderRadius: "2",
  padding: "15px",
  height: "50%",
  color: "#fff",
  [theme.breakpoints.down("lg")]: {
    width: "44%",
    fontSize: "10px",
    padding: 10,
  },
  [theme.breakpoints.down("sm")]: {
    width: "46%",
    fontSize: "10px",
    padding: 10,
  },
}));

function Items({ product}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;

  const savedCart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    const existProd = savedCart.find((el) => {
      return el.id === id;
    });
    
  const addItemToCart = () => {
    
    if (!existProd) {
      savedCart.push(product);
      localStorage.setItem("cart", JSON.stringify(savedCart));
      dispatch(addToCart(id));
    }
    navigate("/cart");
  };

  const checkOutHandler = (amount) => {

  };

  return (
    <LeftContainer minWidth="40%" padding="40px 0 0 80px">
      <img
        src={product.detailUrl}
        alt="productdetail"
        padding="15px 20px"
        width="95%"
        style={{ border: "1px solid #f0f0f0" }}
      />

      {!existProd ? (
        <StyledButton
          onClick={addItemToCart}
          variant="contained"
          style={{ marginRight: 10, background: "#ff9f00" }}
        >
          <Cart />
          ADD TO CART
        </StyledButton>
      ) : (
        <StyledButton
          onClick={addItemToCart}
          variant="contained"
          style={{ marginRight: 10, background: "#ff9f00" }}
        >
          <Cart />
          GO TO CART
        </StyledButton>
      )}

      <StyledButton
        onClick={()=>checkOutHandler(product.price.cost)}
        style={{ background: "#fb641b" }}
        variant="contained"
      >
        <Flash />
        BUY NOW
      </StyledButton>
    </LeftContainer>
  );
}

export default Items;
