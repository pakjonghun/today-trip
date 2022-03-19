import React from "react";
import { DirectionType } from "../../types/commonTypes";
import { joinStyleClass } from "../../utility/commonUtility";

interface IPagnationButton {
  direction: DirectionType;
  icon: string;
  isActive: boolean;
  setPagePercent: (direction: DirectionType) => void;
}

const PagnationButton: React.FC<IPagnationButton> = ({
  icon,
  direction,
  isActive,
  setPagePercent,
}) => {
  return (
    <button
      onClick={() => {
        setPagePercent(direction);
      }}
      className={joinStyleClass(
        "text-2xl scale-effect",
        isActive ? "" : "pointer-events-none opacity-50"
      )}
    >
      {icon}
    </button>
  );
};

export default PagnationButton;
