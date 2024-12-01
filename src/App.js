import { Box } from "@mui/material";
import "./App.css";
import Header from "./Components/header/Header";
import { DataProvider } from "./context/DataProvider";
import Home from "./Components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailView from "./Components/productDetails/DetailView";
import Cart from "./Components/cart/Cart";
import Product from "./Components/productPage/Product";
import ProductPage from "./Components/home/ProductPage";
import Paymentsucess from "./Components/cart/Paymentsucess";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box
          marginTop={{ xs: "56px", sm: "76px" }} 
          paddingX={{ xs: "10px", sm: "15px" }} 
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/category/:category" element={<ProductPage />} />
            <Route path="/paymentsuccess" element={<Paymentsucess />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
