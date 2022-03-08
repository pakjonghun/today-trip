import React, { useState } from "react";
import { optionTitles } from "../constants";
import { useOutletContext } from "react-router-dom";
import { DirectionType } from "../../../types";
import PagenationButtons from "../PagnationButtons";
import HelmetForTitle from "../../../components/Helmet";

interface IOutLetProps {
  curPageCount: number;
  totalPageCount: number;
  setPagePercent: (direction: DirectionType) => void;
}

const OptionWrapper: React.FC = ({ children }) => {
  const { totalPageCount, curPageCount, setPagePercent }: IOutLetProps =
    useOutletContext();

  const [isNextBtnActive, setIsNextBtnActive] = useState(false);
  const setNextButtonClick = (status: boolean) => {
    setIsNextBtnActive(status);
  };

  return (
    <div className="w-[80%] sm:w-[60] mx-auto mt-14 px-2">
      <HelmetForTitle title="Options" />
      <small>{curPageCount + " / " + totalPageCount}</small>
      <h2 className="mb-5">{optionTitles[+curPageCount]}</h2>
      <div className="flex-center flex-col h-96">
        {React.Children.map(children, (child) => {
          return React.cloneElement(
            child as React.ReactElement,
            { setNextButtonClick },
            null
          );
        })}
      </div>
      <PagenationButtons
        setPagePercent={setPagePercent}
        isNextBtnActive={isNextBtnActive}
      />
    </div>
  );
};

export default OptionWrapper;
