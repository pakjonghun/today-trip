import React from "react";
import { useNavigate } from "react-router-dom";
import HelmetForTitle from "../components/Helmet";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="relative-top-20 h-screen bg-gray-50">
      <HelmetForTitle title="Not Found" />
      <h1 className="text-center">
        404 Error <br />
        Not found page
      </h1>
      <button
        onClick={() => navigate("/")}
        className=" basic-btn mt-5 py-2 px-5 bg-gray-700 text-gray-50 rounded-xl"
      >
        &larr; Back
      </button>
    </div>
  );
};

export default NotFound;
