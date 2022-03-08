import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { joinStyleClass } from "../utility";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full min-h-screen max-w-screen-2xl mx-auto bg-gray-50">
      <header
        className={joinStyleClass(
          "w-full px-10 py-3 text-gray-800",
          pathname.includes("option") ? "" : "absolute top-0"
        )}
      >
        <Link
          to="/"
          className="block w-fit font-bold text-gray-700 scale-effect"
        >
          Home
        </Link>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
