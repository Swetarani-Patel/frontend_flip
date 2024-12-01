import React, { useEffect, useState } from "react";
import { Box} from "@mui/material";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Sort from "./Sort";
import LeftSideBar from "./LeftSideBar";
import LoadingSkeleton from "../home/LoadingSkeleton";
import ProductNotAva from "./ProductNotAva";

function Product() {
  const { products, loading } = useSelector(
    (state) => state.getProductsReducer
  );
  const storedcategory = localStorage.getItem("category");
  const storedtagline = localStorage.getItem("tagline");
  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    const filteredProduct = products?.filter(
      (ele) => ele.category === storedcategory || ele.tagline === storedtagline
    );
    setProductsData(filteredProduct);
  }, [products]);

  const onSort = (criteria) => {
    const sortedProducts = sortProducts(criteria);
    setProductsData(sortedProducts);
  };
  const sortProducts = (sortBy) => {
    const filteredProduct = products?.filter(
      (ele) => ele.category === storedcategory || ele.tagline === storedtagline
    );
    if (sortBy === "Price -- Low to High") {
      return filteredProduct.sort((a, b) => a.price.cost - b.price.cost);
    } else if (sortBy === "Price -- High to Low") {
      return filteredProduct.sort((a, b) => b.price.cost - a.price.cost);
    } else if (sortBy === "Discount") {
      return filteredProduct.sort((a, b) => {
        const discountA = parseFloat(a.price.discount.replace("% off", ""));
        const discountB = parseFloat(b.price.discount.replace("% off", ""));
        return discountB - discountA;
      });
    } else if (sortBy === "Rating") {
      return filteredProduct.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "MRP") {
      return filteredProduct.filter((elm) => elm.rating > 4);
    } else if (sortBy === "Newest First") {
      return filteredProduct.filter((elm) => elm.rating <= 2);
    }
    return filteredProduct;
  };

  console.log(productsData.length);
  console.log(productsData);

  return (
    <>
      <Box display="flex">
        <LeftSideBar
          setProductsData={setProductsData}
          productsData={productsData}
        />
        <Box marginLeft="15px" width="100%" bgcolor="white">
          <Sort onSort={onSort} showDiscountOption={true} />

          <Box
            sx={{
              display: "grid",
              borderTop: "2px solid #f0f0f0",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "20px",
            }}
          >
            {loading ? (
              <LoadingSkeleton totalLength={40} />
            ) : productsData.length > 0 ? (
              <>
                {productsData.map((ele) => {
                  return <ProductCard key={ele.id} ele={ele} />;
                })}
              </>
            ) : (
              <ProductNotAva />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Product;
