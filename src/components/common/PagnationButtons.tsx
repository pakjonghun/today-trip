import React from "react";
import PagnationButton from "./PagnationButton";
import { DirectionType } from "../../types/commonTypes";
import { pagnationButtons } from "../../constants/common/optioinConstants";

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
