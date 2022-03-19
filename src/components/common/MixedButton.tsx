import React from "react";
import { joinStyleClass } from "../../utility/commonUtility";

interface MixedButtonProps {
  title: string;
  id: string;
  isSelected: boolean;
  content: JSX.Element;
  selectFunc: (id: string) => void;
}

const MixedButton: React.FC<MixedButtonProps> = ({
  title,
  id,
  isSelected,
  content,
  selectFunc,
}) => {
  return (
    <div
      onClick={() => selectFunc(id)}
      className={joinStyleClass(
        "w-fit text-center cursor-pointer select-none scale-effect",
        isSelected ? "opacity-40" : ""
      )}
    >
      <div className="flex-center flex flex-col w-32  py-8 px-14  rounded-lg bg-gray-300">
        {content}
      </div>
      <span className="block mt-2 font-semibold text-lg">{title}</span>
    </div>
  );
};

export default MixedButton;
