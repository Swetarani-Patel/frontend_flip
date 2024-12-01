import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../redux/actions/cartAction";

function GroupedButton({ item }) {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementQuantity(item.id));
  };

  const decrement = () => {
    dispatch(decrementQuantity(item.id));
  };
  return (
    <ButtonGroup marginTop="30px">
      <Button
        disabled={item.quantity === 1}
        onClick={decrement}
        sx={{
          borderRadius: "50%",
          border: "1px solid #D8D8D8",
          color: "black",
        }}
      >
        -
      </Button>
      <Button sx={{ border: "1px solid #D8D8D8", color: "black" }}>
        {item.quantity}
      </Button>
      <Button
        onClick={increment}
        sx={{
          borderRadius: "50%",
          border: "1px solid #D8D8D8",
          color: "black",
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
}

export default GroupedButton;
