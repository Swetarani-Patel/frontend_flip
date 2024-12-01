import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import FilterTop from "./FilterTop";
import FilterBottom from "./FilterBottom";
import { useSelector } from "react-redux";
import { Ratings, Sizes, Colors, Discounts } from "../../constants/data";

function LeftSideBar({ setProductsData }) {
  const [isRotatedRating, setIsRotatedRating] = useState(false);
  const [isRotatedSize, setIsRotatedSize] = useState(false);
  const [isRotatedDiscount, setIsRotatedDiscount] = useState(false);
  const [isRotatedColor, setIsRotatedColor] = useState(false);

  const [sorting, setSorting] = useState({
    rating: 1,
    discount: 1,
    size: "",
    color: "",
  });

  const { products } = useSelector((state) => state.getProductsReducer);

  const handleBoxClickRating = () => {
    setIsRotatedRating((prevState) => !prevState);
  };

  const handleBoxClickSize = () => {
    setIsRotatedSize((prevState) => !prevState);
  };
  const handleBoxClickDiscount = () => {
    setIsRotatedDiscount((prevState) => !prevState);
  };

  const handleBoxClickColor = () => {
    setIsRotatedColor((prevState) => !prevState);
  };

  const storedcategory = localStorage.getItem("category");
  const storedtagline = localStorage.getItem("tagline");
  const filteredProduct = products?.filter(
    (ele) => ele.category === storedcategory || ele.tagline === storedtagline
  );

  const handleCheckboxChangeForRating = (elm) => {
    let checkedRating = 5;
    if (elm === "1★ & above") {
      checkedRating = 1;
    } else if (elm === "2★ & above") {
      checkedRating = 2;
    } else if (elm === "3★ & above") {
      checkedRating = 3;
    } else if (elm === "4★ & above") {
      checkedRating = 4;
    }
    setSorting({ ...sorting, rating: checkedRating });
    const oldData = [...filteredProduct];

    const itemDiscount = sorting.discount;
    const itemSize = sorting.size;
    const itemColor = sorting.color;
    const updatedData = oldData
      .filter((el) => {
        const discount = parseFloat(el.price.discount.replace("% off", ""));
        if (itemSize && itemColor) {
          return (
            el.rating >= checkedRating &&
            discount >= itemDiscount &&
            el.color === itemColor &&
            el.size.includes(itemSize)
          );
        } else if (itemSize) {
          return (
            el.rating >= checkedRating &&
            discount >= itemDiscount &&
            el.size.includes(itemSize)
          );
        } else if (itemColor) {
          return (
            el.rating >= checkedRating &&
            discount >= itemDiscount &&
            el.color === itemColor
          );
        } else {
          return el.rating >= checkedRating && discount >= itemDiscount;
        }
      })
      .sort((a, b) => a.rating - b.rating);
    if (updatedData.length > 0) {
      setProductsData(updatedData);
    }
  };

  function handleCheckboxChangeForSize(elm) {
    const itemSize = elm;
    setSorting({ ...sorting, size: itemSize });
    const itemColor = sorting.color;
    const itemRating = sorting.rating;
    const itemDiscount = sorting.discount;
    const oldData = [...filteredProduct];
    const updatedData = oldData.filter((ele) => {
      const discount = parseFloat(ele.price.discount.replace("% off", ""));
      if (itemColor) {
        return (
          ele.size?.includes(itemSize) &&
          ele.rating >= itemRating &&
          discount >= itemDiscount &&
          ele.color === itemColor
        );
      } else {
        return (
          ele.rating >= itemRating &&
          discount >= itemDiscount &&
          ele.size?.includes(itemSize)
        );
      }
    });

    setProductsData(updatedData);
  }

  function handleCheckboxChangeForDiscount(elm) {
    let checkedDiscount = 80;
    if (elm === "30% or more") {
      checkedDiscount = 30;
    } else if (elm === "40% or more") {
      checkedDiscount = 40;
    } else if (elm === "50% or more") {
      checkedDiscount = 50;
    } else if (elm === "60% or more") {
      checkedDiscount = 60;
    } else if (elm === "70% or more") {
      checkedDiscount = 70;
    } else if (elm === "80% or more") {
      checkedDiscount = 80;
    }
    setSorting({ ...sorting, discount: checkedDiscount });

    const itemColor = sorting.color;
    const itemSize = sorting.size;
    const itemRating = sorting.rating;
    const oldData = [...filteredProduct];
    const updatedData = oldData.filter((elm) => {
      const discount = parseFloat(elm.price.discount.replace("% off", ""));
      if (itemSize && itemColor) {
        return (
          discount >= checkedDiscount &&
          elm.rating >= itemRating &&
          elm.size.includes(itemSize) &&
          elm.color === itemColor
        );
      } else if (itemSize) {
        return (
          discount >= checkedDiscount &&
          elm.rating >= itemRating &&
          elm.size.includes(itemSize)
        );
      } else if (itemColor) {
        return (
          discount >= checkedDiscount &&
          elm.rating >= itemRating &&
          elm.color === itemColor
        );
      } else {
        return discount >= checkedDiscount && elm.rating >= itemRating;
      }
    });

    setProductsData(updatedData);
  }

  function handleCheckboxChangeForColor(elm) {
    const itemColor = elm;
    setSorting({ ...sorting, color: itemColor });

    const itemSize = sorting.size;
    const itemRating = sorting.rating;
    const itemDiscount = sorting.discount;
    const oldData = [...filteredProduct];
    const updatedData = oldData.filter((ele) => {
      const discount = parseFloat(ele.price.discount.replace("% off", ""));
      if (itemSize) {
        return (
          ele.size?.includes(itemSize) &&
          ele.rating >= itemRating &&
          discount >= itemDiscount &&
          ele.color === itemColor
        );
      } else {
        return (
          ele.color === itemColor &&
          ele.rating >= sorting.rating &&
          discount >= sorting.discount
        );
      }
    });
    setProductsData(updatedData);
  }

  return (
    <>
      <Box bgcolor="#fff" className="leftslider" height="80%" sx={{
        width: { xs: "100%", sm: "30%" },  // Full width on small screens, 30% on larger screens
        padding: { xs: "10px", sm: "20px" },  // Responsive padding
        overflow: "auto",  // Prevent overflow on smaller screens
      }}>
        <Typography
          component="h2"
          padding="1rem .7rem"
          fontWeight="600"
          fontSize="20px"
        >
          Filters
        </Typography>
        <Box borderTop="1px solid #F0F0F0">
          <FilterTop
            title="CUSTOMER RATINGS"
            isRotated={isRotatedRating}
            onclick={() => handleBoxClickRating()}
          />
          {isRotatedRating && (
            <FilterBottom
              value={Ratings}
              type="rating"
              onclick={(elm) => handleCheckboxChangeForRating(elm)}
            />
          )}
        </Box>
        {(storedcategory === "Fashion" ||
          storedtagline === "Best Seller" ||
          storedtagline === "Top Selling" ||
          storedtagline === "Deal of the day") && (
          <Box borderTop="1px solid #F0F0F0">
            <FilterTop
              title="SIZE"
              isRotated={isRotatedSize}
              onclick={() => handleBoxClickSize()}
            />
            {isRotatedSize && (
              <FilterBottom
                value={Sizes}
                type="Size"
                onclick={(elm) => handleCheckboxChangeForSize(elm)}
              />
            )}
          </Box>
        )}

        <Box borderTop="1px solid #F0F0F0">
          <FilterTop
            title="DISCOUNT"
            isRotated={isRotatedDiscount}
            onclick={() => handleBoxClickDiscount()}
          />
          {isRotatedDiscount && (
            <FilterBottom
              value={Discounts}
              type="Discount"
              onclick={(elm) => handleCheckboxChangeForDiscount(elm)}
            />
          )}
        </Box>

        {(storedcategory === "Fashion" ||
          storedcategory === "Homefurniture" ||
          storedtagline === "Best Seller" ||
          storedtagline === "Top Selling" ||
          storedtagline === "Deal of the day") && (
          <Box borderTop="1px solid #F0F0F0">
            <FilterTop
              title="COLOR"
              isRotated={isRotatedColor}
              onclick={(elm) => handleBoxClickColor(elm)}
            />
            {isRotatedColor && (
              <FilterBottom
                value={Colors}
                type="Color"
                onclick={(elm) => handleCheckboxChangeForColor(elm)}
              />
            )}
          </Box>
        )}
      </Box>
    </>
  );
}

export default LeftSideBar;
