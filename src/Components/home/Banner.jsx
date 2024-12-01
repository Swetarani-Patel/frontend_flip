import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../constants/data";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 230,
  objectFit: 'cover', 
  [theme.breakpoints.down('md')]: {
    height: 180, 
  }
}));

function Banner() {
  return (
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
      showDots={true}
    >
      {bannerData.map((image) => (
        <Image
          key={image.id}
          src={image.url}
          alt="banner"
          id={image.id}
        />
      ))}
    </Carousel>
  );
}

export default Banner;
