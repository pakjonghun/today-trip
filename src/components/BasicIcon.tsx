import React from "react";
import { IconType } from "../types";
import { joinStyleClass } from "../utility";

interface IBasicIconBox {
  content?: JSX.Element;
  title?: string;
  iconType?: IconType;
  id: string;
  isSelected: boolean;
  selectFunc: (id: string) => void;
}

const BasicIconBox: React.FC<IBasicIconBox> = ({
  content,
  title,
  iconType,
  id,
  isSelected,
  selectFunc,
}) => {
  switch (iconType) {
    case "mixed":
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
    case "text":
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

    default:
      throw new Error("icon option error");
  }
};

export default BasicIconBox;
