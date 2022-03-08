import React from "react";
import Router from "../../Routes";
import "../../styles/styles.css";

interface IAppProps {
  isLoading: boolean;
}

const AppPresenter: React.FC<IAppProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <h1 className="flex-center text-center w-full h-screen bg-gray-50">
        위치 정보를 받고 있습니다. <br />
        잠시만 기다려주세요.
      </h1>
    );
  }

  return <Router />;
};

export default AppPresenter;
