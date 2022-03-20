import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import GenderAgeOption from "./pages/GenderAgeOption";
import TravleWithOption from "./pages/TravleWithOptionPage";
import TravelThemeOption from "./pages/TravelThemeOptionPage";
import ProgressBar from "./components/common/ProgressBar";
import Loading from "./components/common/Loading";

const TravelDetail = React.lazy(
  () => import("./pages/TravelDetail/TravelDetailContainer")
);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<Home />} />
          <Route
            path="detail"
            element={
              <React.Suspense fallback={<Loading size={"S"} />}>
                <TravelDetail />
              </React.Suspense>
            }
          />

          <Route path="option" element={<ProgressBar />}>
            <Route path="personal" element={<GenderAgeOption />} />
            <Route path="travel-with" element={<TravleWithOption />} />
            <Route path="travel-theme" element={<TravelThemeOption />} />
          </Route>
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
