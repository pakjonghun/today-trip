import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProgressBar from "./pages/Options/ProgressBar";
import FirstOption from "./pages/Options/FirstOption";
import SecondOption from "./pages/Options/SecondOption";
import ThirdOption from "./pages/Options/ThirdOption";
import TravelDetail from "./pages/TravelDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<Home />} />
          <Route path="detail" element={<TravelDetail />} />
          <Route path="option" element={<ProgressBar />}>
            <Route path="personal" element={<FirstOption />} />
            <Route path="travel-with" element={<SecondOption />} />
            <Route path="travel-theme" element={<ThirdOption />} />
          </Route>
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
