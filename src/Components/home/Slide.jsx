import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Slide({ products, title, timer, category, tagline }) {
  const navigate = useNavigate();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box varient="span" sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };

  const handleArrowClick = () => {
    localStorage.setItem("category", category);
    localStorage.setItem("tagline", tagline);
    navigate("/product");
  };

  return (
    <Box marginTop="15px" paddingBottom="18px" bgcolor="white">
      <Box
        display="flex"
        padding="25px 20px"
        flexDirection={{ xs: "column", sm: "row" }} // Adjust layout on smaller screens
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          fontSize={{ xs: "18px", sm: "22px" }}
          fontWeight="600"
          lineHeight="32px"
          marginBottom={{ xs: "10px", sm: "0" }}
          marginRight="25px"
        >
          {title}
        </Typography>
        {timer && (
          <Box
            display="flex"
            marginLeft="10px"
            alignItems="center"
            color="#7f7f7f"
            sx={{ fontSize: { xs: "12px", sm: "14px" } }}
          >
            <img src={timerURL} alt="timer" width="24px" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Box>
        )}
        <Box
          variant="span"
          ml="auto"
          bgcolor="#1C41D6"
          padding="5px"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="#fff"
          sx={{ cursor: "pointer" }}
        >
          <ArrowForwardIosIcon fontSize="small" onClick={handleArrowClick} />
        </Box>
      </Box>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        dotListClass="custom-dot-list-style"
        infinite={true}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {products
          ?.filter((ele) =>
            tagline ? ele.tagline === tagline : ele.category === category
          )
          .map((product) => {
            return (
              <Link
                key={product.id}
                to={`product/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  textAlign="center"
                  padding="8px 10px"
                  border="1px solid rgb(224, 224, 224)"
                  borderRadius="4px"
                  marginX="14px"
                  height="35vh"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  sx={{
                    "&:hover": {
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
                    },
                  }}
                >
                  <Box height="70%" width="100%">
                    <img
                      src={product.url}
                      alt="Products"
                      width="100%"
                      height="100%"
                      style={{
                        objectFit: "contain",
                        transition: "transform 0.1s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = "scale(1.1)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      fontWeight="400"
                      color="#212121"
                      fontSize="15px"
                      noWrap
                    >
                      {product.title.shortTitle.length > 15
                        ? product.title.shortTitle.substring(0, 14) + "..."
                        : product.title.shortTitle}
                    </Typography>
                    <Typography color="#212121" fontWeight="600">
                      {product.discount}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            );
          })}
      </Carousel>
    </Box>
  );
}

export default Slide;
