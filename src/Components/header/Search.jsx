import { Box, InputBase, List, ListItem } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

function Search() {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProductsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const getText = (e) => {
    setText(e.target.value);
  };
  return (
    <Box marginLeft={"40px"} width={"38%"} position="relative">
      <Box
        bgcolor={"rgb(240, 245, 255)"}
        borderRadius={"5px"}
        display={"flex"}
        alignItems={"center"}
        paddingX={"10px"}
        width="100%"
        boxSizing="border-box"
      >
        <FiSearch color="rgb(102, 102, 102)" fontSize={"25px"} />

        <InputBase
          type="text"
          placeholder="Search for Products, Brands and More"
          onChange={getText}
          value={text}
          sx={{
            paddingX: "10px",
            paddingY: "4px",
            width: "100%",
            fontSize: "17px",
          }}
        />
      </Box>
      <Box
        color="black"
        position="absolute"
        top="3.5rem"
        backgroundColor="white"
        width="100%"
      >
        {text && (
          <List>
            {products
              .filter((ele) =>
                ele.title.longTitle.toLowerCase().includes(text.toLowerCase())
              )
              .map((ele) => (
                <Link
                  to={`/product/${ele.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => {
                    setText("");
                  }}
                >
                  <ListItem>{ele.title.longTitle}</ListItem>
                </Link>
              ))}
          </List>
        )}
      </Box>
    </Box>
  );
}

export default Search;
