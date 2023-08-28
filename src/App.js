import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Products from "./components/Products/Products";

import { Provider } from "react-redux";
import store from "./store";


console.log(store)

const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="search" element={<Products />} />
        </Routes>
    </Provider>
      </BrowserRouter>
  );
};

export default App;
