import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Sort from "../productPage/Sort";
import ProductCard from "../productPage/ProductCard";
import { useParams } from "react-router-dom";
import { categoryMapping } from "./categoryMapping";
import { getProductByCategory } from "../../redux/actions/productAction";
import LeftBar from "./LeftBar";
import LoadingSkeleton from "./LoadingSkeleton";
import ProductNotAva from "../productPage/ProductNotAva";

function ProductPage() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const modifiedCategory = categoryMapping(category);
  const { categoriesedProd, loading } = useSelector(
    (state) => state.getProductByCategoryReducer
  );
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(categoriesedProd);
    localStorage.setItem(
      "categorywise-product",
      JSON.stringify(categoriesedProd)
    );
  }, [categoriesedProd]);

  const onSort = (criteria) => {
    const sortedProducts = sortProducts(criteria);
    setProductsData(sortedProducts);
  };
  const sortProducts = (sortBy) => {
    if (sortBy === "Price -- Low to High") {
      dispatch(getProductByCategory(modifiedCategory, "asc_price"));
    } else if (sortBy === "Price -- High to Low") {
      dispatch(getProductByCategory(modifiedCategory, "desc_price"));
    } else if (sortBy === "Rating") {
      dispatch(getProductByCategory(modifiedCategory, "desc_rating"));
    } else if (sortBy === "MRP") {
      dispatch(getProductByCategory(modifiedCategory, "popularity"));
    } else if (sortBy === "Newest First") {
      dispatch(getProductByCategory(modifiedCategory, "newest_first"));
    } else {
      dispatch(getProductByCategory(modifiedCategory, ""));
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            padding: { xs: "10px", sm: "15px" },
            bgcolor: "#fff",
            height: { xs: "auto", md: "100vh" },
            position: { xs: "relative", sm: "sticky" },
            top: { xs: 0, sm: 80 },
            boxShadow: { xs: "none", sm: "0px 0px 10px rgba(0,0,0,0.1)" },
          }}
        >
          <LeftBar setProductsData={setProductsData} />
        </Box>

        <Box
          sx={{
            width: "100%",
            marginLeft: { xs: 0, md: "15px" },
            bgcolor: "white",
            padding: { xs: "10px", sm: "20px" },
          }}
        >
          <Sort onSort={onSort} showDiscountOption={false} />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "20px",
              borderTop: "2px solid #f0f0f0",
              padding: { xs: "10px", sm: "20px" },
            }}
          >
            {loading ? (
              <LoadingSkeleton totalLength={productsData?.length} />
            ) : productsData?.length > 0 ? (
              productsData?.map((ele) => (
                <ProductCard
                  key={ele.id}
                  ele={ele}
                  productsData={productsData}
                />
              ))
            ) : (
              <ProductNotAva />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductPage;
