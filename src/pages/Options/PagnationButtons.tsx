import React from "react";
import { DirectionType } from "../../types";
import { pagnationButtons } from "./constants";
import PagnationButton from "./components/PagnationButton";

interface IOutLetProps {
  isNextBtnActive: boolean;
  setPagePercent: (direction: DirectionType) => void;
}
const PagenationButtons: React.FC<IOutLetProps> = ({
  setPagePercent,
  isNextBtnActive,
}) => {
  return (
    <div className="flex justify-between p-4 pt-6">
      {pagnationButtons.map(({ id, direction, icon }) => (
        <PagnationButton
          key={id}
          direction={direction}
          icon={icon}
          isActive={direction === "next" ? isNextBtnActive : true}
          setPagePercent={setPagePercent}
        />
      ))}
    </div>
  );
};

export default PagenationButtons;
