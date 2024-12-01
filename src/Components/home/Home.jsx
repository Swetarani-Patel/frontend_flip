import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import Slide from "./Slide";
import Navbar from "./Navbar";
import Banner from "./Banner";
import MidSlide from "./MidSlide";
import { Box } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state.getProductsReducer);
  const { products } = storedData;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {products && (
        <Box>
          <Navbar />
          <Banner />
          <MidSlide
            products={products}
            title="Deals of the Day"
            timer={true}
            tagline="Deal of the day"
          />
          <Slide
            products={products}
            title="Best of Electronics"
            timer={false}
            category="Electronics"
          />
          <Slide
            products={products}
            title="Beauty, Food, Toys & more"
            timer={false}
            category="Beautyandtoys"
          />
          <Slide
            products={products}
            title="Trending Offers"
            timer={false}
            tagline="Top Selling"
          />
          <Slide
            products={products}
            title="Suggested for You"
            timer={false}
            tagline="Best Seller"
          />
          <Slide
            products={products}
            title="Sports, Healthcare & more"
            timer={false}
            category="Grocery"
          />
          <Slide
            products={products}
            title="Fashion Top Deals"
            timer={false}
            category="Fashion"
          />
          <Slide
            products={products}
            title="Home & Kitchen Essentials"
            timer={false}
            category="Homefurniture"
          />
          <Slide
            products={products}
            title="Top Deals on TVs & Appliances"
            timer={false}
            category="Appliance"
          />
        </Box>
      )}
    </>
  );
}

export default Home;
