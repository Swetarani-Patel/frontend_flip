import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { LuLogOut } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
function Profile({ account, setAccount }) {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const logoutUser = () => {
    setAccount("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuitems = [
    {
      name: "My Profile",
      image:
        "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg",
    },
    {
      name: "SuperCoin Zone",
      image:
        "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/supercoin-ce8408.svg",
    },
    {
      name: "Flipkart Plus Zone",
      image:
        "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg",
    },
    {
      name: "Orders",
      image:
        "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg",
    },
    {
      name: "Wishlist",
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
    },
    {
      name: "Coupons",
      image:
        "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/coupons-083172.svg",
    },
    {
      name: "Gift Cards",
      image:
        "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg",
    },
    {
      name: "Notifications",
      image:
        "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg",
    },
  ];

  return (
    <>
      <Box color="black" display="flex" onClick={handleClick}>
        <Typography marginRight="0.5rem">{account}</Typography>
        <IoIosArrowDown
          onClick={handleClick}
          style={{ marginTop: "0.3rem", cursor: "pointer", fontSize: "12px" }}
        />
      </Box>
      <Menu
        sx={{ mt: "5px" }}
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        {menuitems.map((el) => (
          <MenuItem>
            <img src={el.image} />
            <Typography fontSize="14px" marginLeft="13px">
              {el.name}
            </Typography>
          </MenuItem>
        ))}

        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <LuLogOut />
          <Typography fontSize="14px" marginLeft="13px">
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;
