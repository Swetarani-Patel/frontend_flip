
import { Box, Button, Typography } from "@mui/material";
import React, {useState } from "react";
import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from "./ButtonGroup";
import RemoveModal from "./RemoveModal";

const CartItems = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <Box
      borderTop="1px solid #f0f0f0"
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }} 
      bgcolor="#fff"
    >
      <Box
        margin="20px"
        display="flex"
        flexDirection="column"
        gap="20px"
        alignItems="center"
        width={{ xs: "100%", sm: "auto" }}
      >
        <img
          src={item.url}
          alt="product"
          style={{ height: 110, width: 110, objectFit: "contain" }}
        />
        <GroupedButton item={item} />
      </Box>
      <Box marginTop="20px" width="100%">
        <Box display="flex" justifyContent="space-between">
          <Typography>{addEllipsis(item.title.longTitle)}</Typography>
          <Typography
            sx={{
              fontSize: "14px",
              display: { xs: "none", sm: "block" }, 
            }}
          >
            Delivery by {date.toDateString()} | <span style={{ color: "green" }}>₹40</span>
          </Typography>
        </Box>
        <Typography color="#878787" fontSize="14px" marginTop="10px">
          Seller: RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="logo"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </Typography>

        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" color="#878787">
            <strike>₹{item.price.mrp * item.quantity}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" fontWeight="600" fontSize="18px">
            ₹{item.price.cost * item.quantity}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" color="#388E3C">
            {item.price.discount} off
          </Box>
        </Typography>

        <Button
          sx={{
            fontSize: "16px",
            marginTop: "20px",
            color: "#000",
            fontWeight: "600",
            "&:hover": {
              bgcolor: "white",
              color: "rgb(40, 116, 240)",
            },
          }}
        >
          SAVE FOR LATER
        </Button>

        <Button
          onClick={handleOpenModal}
          sx={{
            fontSize: "16px",
            marginTop: "20px",
            color: "#000",
            fontWeight: "600",
            "&:hover": {
              bgcolor: "white",
              color: "rgb(40, 116, 240)",
            },
          }}
        >
          Remove
        </Button>

        <RemoveModal
          item={item}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </Box>
    </Box>
  );
};

export default CartItems;
