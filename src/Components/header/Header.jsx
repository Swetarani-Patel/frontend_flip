import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

const StyledHeader = styled(AppBar)`
  background: white;
  height: 65px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
  marginTop: 3,
});

const CustomButtonWrapper = styled("span")(({ theme }) => ({
  marginLeft: "1.5rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

function Header() {
  const logoURL =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box style={{ width: 250 }} onClick={handleClose}>
      <List>
        <listItem button>
          <CustomButton Drawer/>
        </listItem>
      </List>
    </Box>
  );
  return (
    <StyledHeader>
      <Toolbar>
        <MenuButton onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Box lineHeight={"0"}>
            <img src={logoURL} alt="logo" style={{ width: 130, height: 22 }} />
            <Box display={"flex"}>
              <Typography
                fontSize={"12px"}
                fontStyle={"italic"}
                color={"#9e9e9e"}
                fontWeight={"600"}
                marginLeft={"65px"}
              >
                Join&nbsp;
                <Box component="span" color="#ffc200">
                  Plus
                </Box>
              </Typography>
              <PlusImage src={subURL} alt="sub-logo" />
            </Box>
          </Box>
        </Link>
        <Search />
        <CustomButtonWrapper>
          <CustomButton/>
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
}

export default Header;
