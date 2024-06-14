import React from "react";
import Homepage from "./Component/homePage";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import DemoRouterComp from "./Component/demoRouterComp";
import PrimarySearchAppBar from "./Component/navbar";
import Productdetails from "./Component/productDetails";
import { Provider } from "react-redux";
import store from "./store/reducers/store";
import LoginComp from "./Component/loginPageComp";
import CartComp from "./Component/cartComp";

const AppComponent = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <RouteHandler />
        </BrowserRouter>
      </Provider>
    </>
  );
};

const RouteHandler = () => {
  const location = useLocation();
  const renderNavbar = !location.pathname.includes("/login");

  return (
    <>
      {renderNavbar && <PrimarySearchAppBar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/cart" element={<CartComp />} />
        <Route path="/product/:productID" element={<Productdetails />} />
        {/* put this route at the bottom */}
        <Route path="/*" element={<DemoRouterComp />} />
      </Routes>
    </>
  );
};

export default AppComponent;
