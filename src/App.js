import React from "react";
import { styled } from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Detail from "./pages/DetailPage/Detail";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OrderPage from "./pages/OrderPage";
import Banner from "./components/Banner";

function App() {
  return (
    <BrowserRouter>
     <Banner />
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<Detail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
