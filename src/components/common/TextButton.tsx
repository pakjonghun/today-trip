import React from "react";
import { joinStyleClass } from "../../utility/commonUtility";

interface TextButtonProps {
  title?: string;
  id: string;
  isSelected: boolean;
  selectFunc: (id: string) => void;
}

const TextButton: React.FC<TextButtonProps> = ({
  selectFunc,
  isSelected,
  title,
  id,
}) => {
  return (
    <div
      onClick={() => selectFunc(id)}
      className={joinStyleClass(
        "w-fit text-center cursor-pointer select-none scale-effect",
        isSelected ? "opacity-50" : ""
      )}
    >
      <span className=" block mt-2 py-4 px-12 whitespace-nowrap bg-gray-300 rounded-lg font-semibold text-md">
        {title}
      </span>
    </div>
  );
};

export default TextButton;
